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

	$pwd = hash('sha256', $passwd_salt . $_POST['password']);
	$email = $mysqli->escape_string($_POST['email']);

	$mysqli = new mysqli($db_host, $db_username, $db_passwd, $db_dbname);
	if ($mysqli->connect_errno) {
		echo '{"code":500}';
		$done = TRUE;
		throw new Exception('Failed to connect to MySQL: ' . $mysqli->connect_error);
	}

	$res = $mysqli->query("SELECT `passwd` FROM `${db_tblname_user_key}` WHERE `uid` = ${uid}");
	if ($res === FALSE || $res->num_rows == 0) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result');
	}
	$row = $res->fetch_row();
	if ($row[0] != $pwd) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Wrong password');
	}
	$res->close();

	$res = $mysqli->query("UPDATE `${db_tblname_user_key}` SET `email` = '${email}' WHERE `uid` = ${uid}");
	if ($res === FALSE) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result');
	}

	echo '{"code":200}';
	$done = TRUE;

} catch (Throwable $e) {
	if (!$done) {
		echo '{"code":500}';
	}
}

?>
