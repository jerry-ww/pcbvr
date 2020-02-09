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
		echo '{"code":401}';
		$done = TRUE;
		session_write_close();
		throw new Exception('Not logged in');
	}
	$uid = $_SESSION['uid'];
	session_write_close();

	// $mid = intval($_POST["mid"]);
	$model_name=$_POST["model_name"];

	$mysqli = new mysqli($db_host, $db_username, $db_passwd, $db_dbname);
	if ($mysqli->connect_errno) {
		echo '{"code":500}';
		$done = TRUE;
		throw new Exception('Failed to connect to MySQL: ' . $mysqli->connect_error);
	}

	// $db_tblname_tag = $db_tblprefix_tag . $mid;
	$res_mid=$mysqli->query("select mid from model where model_name='{$model_name}'");
    $row_mid=$res_mid->fetch_row();
	$mid=$row_mid[0];

	$req = "INSERT INTO tag (`uid`, `mid`,`${tag_info_column_time}`";
	for ($i = 0; $i < $tag_info_count; $i++) {
		$req = $req . ", `{$tag_info_columns[$i]}`";
	}
	$req = $req . ") VALUES (${uid},${mid}, NOW()";
	for ($i = 0; $i < $tag_info_count; $i++) {
		$req = $req . ", '{$mysqli->escape_string($_POST[$tag_info_entries[$i]])}'";
	}
	$req = $req . ")";

	$res = $mysqli->query($req);
	if ($res === FALSE) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result when inserting');
	}

	echo '{"code":200}';
	$done = TRUE;
} catch (Throwable $e) {
	if (!$done) {
		echo '{"code":500}';
		echo $e;
	}
}

?>
