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

	$res = $mysqli->query("INSERT INTO `${db_tblname_user_key}` (`email`, `passwd`) VALUES ('${email}', '${passwd}')");
	if ($res === FALSE) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result when inserting');
	}

	$res = $mysqli->query("SELECT `uid` FROM `${db_tblname_user_key}` WHERE `email` = '${email}'");
	if ($res === FALSE || $res->num_rows == 0) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result when selecting new user');
	}
	$row = $res->fetch_row();
	$uid = $row[0];
	$res->close();

	$res = $mysqli->query("INSERT INTO `${db_tblname_user_info}` (`uid`, `perm`, `{$user_info_column_uname}`) VALUES (${uid}, 0, '${email}')");
	if ($res === FALSE) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result when inserting data of new user');
	}

	echo '{"code":200}';
	$done = TRUE;
} catch (Throwable $e) {
	//TODO: rollback if error occurs
	if (!$done) {
		echo '{"code":500}';
	}
}

?>
