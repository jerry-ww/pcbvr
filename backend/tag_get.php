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
		$uid=-1;
	}else{
		$uid = $_SESSION['uid'];
	}
	session_write_close();
	
    $model_name=$_POST["model_name"];
	// $mid = intval($_POST["mid"]);

	$mysqli = new mysqli($db_host, $db_username, $db_passwd, $db_dbname);
	if ($mysqli->connect_errno) {
		echo '{"code":500}';
		$done = TRUE;
		throw new Exception('Failed to connect to MySQL: ' . $mysqli->connect_error);
	}

	$req = "SELECT `tag`.`tid`, `user`.`uname`, `tag`.`ttime`, `tag`.`likecount`,`tag`.`title`,`tag`.`tdesc`,`tag`.`pos`,`tag`.`camPos`,`tag`.`camTarget`";
	$req = $req . " FROM tag INNER JOIN user ON `tag`.`uid` = `user`.`uid` where `tag`.`mid` in (select mid from model where model_name='{$model_name}')";

    $req_tag = $req . " ORDER BY `tag`.`likecount`,`tag`.`ttime` DESC LIMIT 30";
	$res = $mysqli->query($req_tag);
	if ($res === FALSE) {
		echo '{"code":4031}';
		$done = TRUE;
		throw new Exception('Failed query or no result when inserting');
	}

    $row = $res->fetch_row();
	while($row){
		for ($i = 0,$len = count($tag_infos); $i < $len; $i++) {
		    $info[$tag_infos[$i]] =$row[$i];
	    }
		$infos[]=$info;
		$row = $res->fetch_row();
	}

	if($uid === -1){
		for ($i = 0,$len = count($infos); $i < $len; $i++) {
		    $infos[$i]['liked'] =0;
	    }
	}else{
		$req_mine=$req."and `tag`.`uid`='{$uid}' ORDER BY `tag`.`ttime` desc limit 10";
		$res_mine = $mysqli->query($req_mine);
		if ($res_mine === FALSE) {
		    echo '{"code":4032}';
		    $done = TRUE;
		    throw new Exception('Failed query or no result when inserting');
	    }
		$row = $res_mine->fetch_row();
	    while($row){
			for ($i = 0,$len = count($tag_infos); $i < $len; $i++) {
		        $info[$tag_infos[$i]] =$row[$i];
	        }
			$infos[]=$info;
			$row = $res_mine->fetch_row();
		}
		for ($i = 0,$len = count($infos); $i < $len; $i++) {
			$tid=$infos[$i]['tid'];
			
			$res= $mysqli->query("select count(*) from comment where tid = '{$tid}'");
			list($replyNum)=  $res->fetch_row(); 
			$infos[$i]['replyNum'] = $replyNum;

			$req="select status from tag_like where tid='{$tid}' and uid='{$uid}'";
			$res = $mysqli->query($req);
			if ($res === FALSE) {
		    	echo '{"code":403}';
		    	$done = TRUE;
		    	throw new Exception('Failed query or no result when inserting');
	   		}else if ($row = $res->fetch_row()) {
				$infos[$i]['liked'] =$row[0];	        
	        }else{
				$infos[$i]['liked'] =0; 	
			}   
	    }
	}

	echo '{"code":200,"tags":[';
	 for($i=0, $len = count($infos); $i<$len; $i++){
		printf('{');
		foreach($infos[$i] as $x=>$x_value)
        {
			if($x==='liked'){
				printf('"%s":"%s"',$x,$x_value);
			}else{
				//echo '"'.$x.'"'.":". $x_value.",";
                printf('"%s":"%s",',$x,$x_value);
			}       
        } 
		if($i===$len-1){
			printf('}');
		}else{
			printf('},');
		}
	 }
	
	echo ']}';
	$res->close();

	$done = TRUE;
} catch (Throwable $e) {
	if (!$done) {
		echo '{"code":500}';
	}
	echo $e;
}

?>
