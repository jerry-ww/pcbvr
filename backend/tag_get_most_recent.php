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
		$uid = -1;
	} else {
		$uid = $_SESSION['uid'];
	}
	session_write_close();

	$mid = intval($_POST["mid"]);

	$mysqli = new mysqli($db_host, $db_username, $db_passwd, $db_dbname);
	if ($mysqli->connect_errno) {
		echo '{"code":500}';
		$done = TRUE;
		throw new Exception('Failed to connect to MySQL: ' . $mysqli->connect_error);
	}

	$db_tblname_tag = $db_tblprefix_tag . $mid;
	$db_tblname_tag_like = $db_tblprefix_tag_like . $mid;
	$req = "SELECT ";
	for ($i = 0; $i < $tag_info_count; $i++) {
		$req = $req . "`${db_tblname_tag}`.`{$tag_info_columns[$i]}`, ";
	}
	$req = $req . "`${db_tblname_tag}`.`tid`, `${db_tblname_user_info}`.`${user_info_column_uname}`, `${db_tblname_tag}`.`${tag_info_column_time}`, IFNULL(`${db_tblname_tag_like_tmp}`.`${tag_like_column}`, 0) AS `${tag_like_column}`, IFNULL(`${db_tblname_tag_liked_tmp}`.`${tag_liked_column}`, 0) AS `${tag_liked_column}`";
	$req = $req . " FROM `${db_tblname_tag}` INNER JOIN `${db_tblname_user_info}` ON `${db_tblname_tag}`.`uid` = `${db_tblname_user_info}`.`uid` LEFT JOIN (SELECT `tid`, COUNT(`uid`) AS `${tag_like_column}` FROM `${db_tblname_tag_like}` GROUP BY `tid`) AS `${db_tblname_tag_like_tmp}` ON `${db_tblname_tag}`.`tid` = `${db_tblname_tag_like_tmp}`.`tid` LEFT JOIN (SELECT `tid`, 1 AS `${tag_liked_column}` FROM `${db_tblname_tag_like}` WHERE `${db_tblname_tag_like}`.`uid` = ${uid}) AS `${db_tblname_tag_liked_tmp}` ON `${db_tblname_tag}`.`tid` = `${db_tblname_tag_liked_tmp}`.`tid`";
	$req = $req . " ORDER BY `${db_tblname_tag}`.`${tag_info_column_time}` DESC LIMIT 10";

	$res = $mysqli->query($req);
	if ($res === FALSE) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result when inserting');
	}
	echo '{"code":200,"tags":[';
	$row = $res->fetch_row();
	while ($row) {
		printf('{"tid":%d,"%s":"%s","%s":"%s","%s":%d,"%s":%d', $row[$tag_info_count], $user_info_entry_uname, $row[$tag_info_count + 1], $tag_info_entry_time, $row[$tag_info_count + 2], $tag_like_entry, $row[$tag_info_count + 3], $tag_liked_entry, $row[$tag_info_count + 4]);
		for ($i = 0; $i < $tag_info_count; $i++) {
			printf($tag_info_formats[$i], $tag_info_entries[$i], $row[$i]);
		}
		echo '}';
		if ($row = $res->fetch_row()) {
			echo ',';
		}
	}
	echo ']}';
	$res->close();

	$done = TRUE;
} catch (Throwable $e) {
	if (!$done) {
		echo '{"code":500}';
	}
}

?>
