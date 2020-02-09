<?php

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

	$mysqli = new mysqli($db_host, $db_username, $db_passwd, $db_dbname);
	if ($mysqli->connect_errno) {
		echo '{"code":500}';
		$done = TRUE;
		throw new Exception('Failed to connect to MySQL: ' . $mysqli->connect_error);
	}

	$res_key = $mysqli->query("SELECT `uid`, `email`, `tel` FROM `${db_tblname_user_key}` WHERE `uid` = ${uid}");
	if ($res_key === FALSE || $res_key->num_rows == 0) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result');
	}
	$row_key = $res_key->fetch_row();
	$res_key->close();

	$req = "SELECT ";
	for ($i = 0; $i < $user_info_count; $i++) {
		$req = $req . "`{$user_info_columns[$i]}`, ";
	}
	$req = $req . "`perm` FROM `${db_tblname_user_info}` WHERE `uid` = ${uid}";
	$res = $mysqli->query($req);
	if ($res === FALSE || $res->num_rows == 0) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result');
	}
	$row = $res->fetch_row();
	$res->close();

	printf('{"code":200,"user":{"uid":%d,"email":"%s","phone":"%s","perm":%d', $row_key[0], $row_key[1], $row_key[2], $row[$user_info_count]);
	for ($i = 0; $i < $user_info_count; $i++) {
		echo ",\"{$user_info_entries[$i]}\":\"{$row[$i]}\"";
	}
	echo "}}";
	$done = TRUE;

} catch (Throwable $e) {
	if (!$done) {
		echo '{"code":500}';
	}
}

?>
