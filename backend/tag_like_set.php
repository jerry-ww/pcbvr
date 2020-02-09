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

	$mid = intval($_POST["mid"]);
	$tid = intval($_POST["tid"]);
	$new_value = $_POST["value"];

	$mysqli = new mysqli($db_host, $db_username, $db_passwd, $db_dbname);
	if ($mysqli->connect_errno) {
		echo '{"code":500}';
		$done = TRUE;
		throw new Exception('Failed to connect to MySQL: ' . $mysqli->connect_error);
	}

	$db_tblname_tag_like = $db_tblprefix_tag_like . $mid;
	if ($new_value === "true")
		$res = $mysqli->query("INSERT INTO `${db_tblname_tag_like}` (`uid`, `tid`) VALUES (${uid}, ${tid})");
	else
		$res = $mysqli->query("DELETE FROM `${db_tblname_tag_like}` WHERE `uid` = ${uid} AND `tid` = ${tid}");
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
	}
}

?>
