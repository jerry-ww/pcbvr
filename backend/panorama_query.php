<?php
function exception_error_handler($errno, $errstr, $errfile, $errline) {
	throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
}
set_error_handler('exception_error_handler');

$done = FALSE;
try {
	require 'common.php';
	$panorama = $_POST["pano_uid"];
  $mysqli = new mysqli($db_host, $db_username, $db_passwd, $db_dbname);
	//创建连接失败
	if ($mysqli->connect_errno) {
		echo '{"code":500}';
        echo'创建数据库连接失败';
		$done = TRUE;
		throw new Exception('Failed to connect to MySQL: ' . $mysqli->connect_error);
	}
	//uid为一个场景的编号，用来管理一个场景中的全部全景球
	$res = $mysqli->query("SELECT `name`,`path`,`x`,`y`,`z` FROM `${db_tblname_panorama_info}` WHERE `uid` = ${panorama}");
	if($res === FALSE || $res->num_rows == 0){
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result');
	}
	//没有考虑当前账号的登录情况就将全景球的数据返回
	$row = $res->fetch_all();
  	//var_dump($row);
  	echo json_encode($row);
  	//echo json_encode('{"code":200}');
  	//for ($i = 0; $i < $row.length; $i++){
    //var_dump ($row[$i]);
    //}
	//printf('{"code":200,"name":{"name":%s}}',$row[0]);
  
	$res->close();
  	
	$done = TRUE;
} catch (Throwable $e) {
	if (!$done) {
		echo '{"code":500}';
        echo($e);
	}
}
?>