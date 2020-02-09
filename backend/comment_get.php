<?php

function exception_error_handler($errno, $errstr, $errfile, $errline) {
	throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
}
set_error_handler('exception_error_handler');

$done = FALSE;
try {
	require 'common.php';

    $tid = $_POST["tid"];
	$index = $_POST["index"];
	
	$mysqli = new mysqli($db_host, $db_username, $db_passwd, $db_dbname);
	if ($mysqli->connect_errno) {
		echo '{"code":500}';
		$done = TRUE;
		throw new Exception('Failed to connect to MySQL: ' . $mysqli->connect_error);
	}

    $req="SELECT `comment`.`cid`,`user`.`uname`,`user`.`avatar`,`comment`.`content`,`comment`.`createtime` from comment join user on `comment`.`uid`=`user`.`uid` where tid='{$tid}' order by createtime limit $index, 10";
	//$req="SELECT `comment`.`cid`,`comment`.`content`,`comment`.`createtime` from comment  where tid='{$tid}' order by createtime asc limit $index, 10";
  	$res = $mysqli->query($req);

	if ($res === FALSE) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result when inserting');
	}else if($row = $res->fetch_row()){
		echo '{"code":200,"comment":[';
		while ($row) {
			$res_reply = $mysqli->query("SELECT COUNT(*) from reply where cid='{$row[0]}'");
			if ($res_reply === FALSE) {
				echo '{"code":403}';
				$done = TRUE;
				throw new Exception('Failed query or no result when inserting');
			}
			list($replyNum) = $res_reply->fetch_row(); 
			$index = $index+1;
			printf('{"cid":%d,"name":"%s","avatar":"%s","content":"%s","createtime":"%s","replyNum":%d}',$row[0],$row[1],$row[2],$row[3],$row[4],$replyNum);
			
			if ($row = $res->fetch_row()) {
	    		echo ',';
			}
		}
		printf('],"index":%d}',$index);
		// echo ']}';
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
