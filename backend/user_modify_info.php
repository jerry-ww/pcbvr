<?php
function base64_to_jpeg($base64_string, $output_file) {
	$ifp = fopen($output_file, "wb"); 
	fwrite($ifp, base64_decode( $base64_string)); 
	fclose($ifp); 
	return($output_file); 
}

/*
function check_entry_string($obj, $entry) {
	if (!is_string($obj->{$entry})) {
		echo '{"code":500}';
		$done = TRUE;
		throw new Exception('Parsing failed: entry "' . $entry . '" not found');
	}
}
*/

function exception_error_handler($errno, $errstr, $errfile, $errline) {
	throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
}
set_error_handler('exception_error_handler');

$done = FALSE;
try {
	require 'common.php';

	session_start();
	if (!isset($_SESSION['last_access']) || (time() - $_SESSION['last_access']) > 60)
		$_SESSION['last_access'] = time();
	if (!isset($_SESSION['uid'])) {
		echo '{"code":403}';
		$done = TRUE;
		session_write_close();
		throw new Exception('Not logged in');
	}
	$uid = $_SESSION['uid'];
	session_write_close();

	$data = $_POST['data'];
	base64_to_jpeg($data["avatar"], "avatars/" . $uid);

	$mysqli = new mysqli($db_host, $db_username, $db_passwd, $db_dbname);
	if ($mysqli->connect_errno) {
		echo '{"code":500}';
		$done = TRUE;
		throw new Exception('Failed to connect to MySQL: ' . $mysqli->connect_error);
	}

	$req = "UPDATE `${db_tblname_user_info}` SET `{$user_info_columns[0]}` = '{$mysqli->escape_string($data[$user_info_entries[0]])}'";
	for ($i = 1; $i < $user_info_count; $i++) {
		$req = $req . ", `{$user_info_columns[$i]}` = '{$mysqli->escape_string($data[$user_info_entries[$i]])}'";
	}
	$req = $req . " WHERE `uid` = ${uid}";

	$res = $mysqli->query($req);
	if ($res === FALSE) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result');
	}

	echo '{"code":200}';
	$done = TRUE;

} catch (Throwable $e) {
    echo $e;
	if (!$done) {
		echo '{"code":500}';
	}
}

?>
