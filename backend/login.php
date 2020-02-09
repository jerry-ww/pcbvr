<?php
function exception_error_handler($errno, $errstr, $errfile, $errline) {
	throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
}
set_error_handler('exception_error_handler');

$done = FALSE;
try {
	require 'common.php';
	
	$email = $_POST['email'];
	$passwd = hash('sha256', $passwd_salt . $_POST['password']);

	$mysqli = new mysqli($db_host, $db_username, $db_passwd, $db_dbname);
	if ($mysqli->connect_errno) {
		echo '{"code":500}';
		$done = TRUE;
		throw new Exception('Failed to connect to MySQL: ' . $mysqli->connect_error);
	}

	$email = $mysqli->escape_string($email);

	$res = $mysqli->query("SELECT `uid`, `passwd` FROM `${db_tblname_user_key}` WHERE `email` = '${email}'");
	if ($res === FALSE || $res->num_rows == 0) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result');
	}
	$row = $res->fetch_row();
	if ($row[1] != $passwd) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result');
	}
	$uid = $row[0];
	$res->close();

	$res = $mysqli->query("SELECT `uid`, `perm`, {$user_info_column_uname} FROM `${db_tblname_user_info}` WHERE `uid` = ${uid}");
	if ($res === FALSE || $res->num_rows == 0) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result');
	}
	$row = $res->fetch_row();
	$res->close();

	printf('{"code":200,"user":{"uid":%d,"perm":%d,"%s":"%s"}}', $row[0], $row[1], $user_info_entry_uname, $row[2]);
	$done = TRUE;

	session_start();
	if (!isset($_SESSION['last_access']) || (time() - $_SESSION['last_access']) > 60)
		$_SESSION['last_access'] = time();
	$_SESSION['uid'] = $uid;
	session_write_close();
} catch (Throwable $e) {
	if (!$done) {
		echo '{"code":500}';
	}
}

?>
