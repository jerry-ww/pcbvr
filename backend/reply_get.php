<?php

function exception_error_handler($errno, $errstr, $errfile, $errline) {
	throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
}
set_error_handler('exception_error_handler');

$done = FALSE;
try {
	require 'common.php';

    $cid = $_POST["cid"];
	$index = $_POST["index"];

	$mysqli = new mysqli($db_host, $db_username, $db_passwd, $db_dbname);
	if ($mysqli->connect_errno) {
		echo '{"code":500}';
		$done = TRUE;
		throw new Exception('Failed to connect to MySQL: ' . $mysqli->connect_error);
	}

    $req="SELECT `user`.`uname`,`reply`.`content`,`reply`.`createtime`,`reply`.`to_uid` from reply join user on `reply`.`uid`=`user`.`uid` where cid ='{$cid}' order by createtime asc limit $index, 3";
  	$res = $mysqli->query($req);
	if ($res === FALSE) {
		echo '{"code":4031}';
		$done = TRUE;
		throw new Exception('Failed query or no result when inserting');
	}else if($row = $res->fetch_row()){
		echo '{"code":200,"reply":[';
		while ($row) {
			$res_name = $mysqli->query("SELECT uname from user where uid ='{$row[3]}'");
			if ($res_name === FALSE) {
				echo '{"code":403}';
				$done = TRUE;
				throw new Exception('Failed query or no result when inserting');
			}
			$row_name = $res_name->fetch_row(); 
	
			$index = $index + 1;
			printf('{"from_name":"%s","content":"%s","createtime":"%s","to_name":"%s"}',$row[0],$row[1],$row[2],$row_name[0]);
			if ($row = $res->fetch_row()) {
	    		echo ',';
			}
		}
		printf('],"index":%d}',$index);
		$res->close();
		$done = TRUE;
	}else{
		echo '{"code":201}';
		$done = TRUE;
	}

} catch (Throwable $e) {
	if (!$done) {
		echo '{"code":500}';
        echo($e);
	}
}

?>
