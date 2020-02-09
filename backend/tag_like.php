<?php

function exception_error_handler($errno, $errstr, $errfile, $errline ) {
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
	// $mid = $_POST["mid"];
	$tid = $_POST["tid"];
   
	$mysqli = new mysqli($db_host, $db_username, $db_passwd, $db_dbname);
	if ($mysqli->connect_errno) {
		echo '{"code":500}';
		$done = TRUE;
		throw new Exception('Failed to connect to MySQL: ' . $mysqli->connect_error);
	}
    
	$res = $mysqli->query("SELECT status from tag_like where tid='{$tid}'and uid='{$uid}'");
	if($res===FALSE){
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result when inserting');
	}else if ($row=$res->fetch_row()) {
		$status=$row[0];
		if($status==='0'){
			$res_update1=$mysqli->query("update tag_like set status=1 where tid ='{$tid}' and uid = '{$uid}'");
			if ($res_update1 === FALSE) {
			    echo '{"code":403}';
				$done = TRUE;
				throw new Exception('Failed query or no result when inserting');
			}
            $res_update2=$mysqli->query("update tag set likecount=likecount+1 where tid ='{$tid}'");
			if ($res_update2 === FALSE) {
			    echo '{"code":403}';
				$done = TRUE;
				throw new Exception('Failed query or no result when inserting');
			}
		}else{
			$res_update1=$mysqli->query("update tag_like set status=0 where tid ='{$tid}' and uid = '{$uid}'");
			if ($res_update1 === FALSE) {
			    echo '{"code":403}';
				$done = TRUE;
				throw new Exception('Failed query or no result when inserting');
			}
            $res_update2=$mysqli->query("update tag set likecount=likecount-1 where tid ='{$tid}'");
			if ($res_update2 === FALSE) {
			    echo '{"code":403}';
				$done = TRUE;
				throw new Exception('Failed query or no result when inserting');
			}
		}
	}else{
		$res_insert = $mysqli->query("INSERT INTO tag_like (`uid`, `tid`,`status`) VALUES (${uid}, ${tid},1)");
        if ($res_insert === FALSE) {
			echo '{"code":403}';
			$done = TRUE;
			throw new Exception('Failed query or no result when inserting');
		}
		$res_update2=$mysqli->query("update tag set likecount=likecount+1 where tid ='{$tid}'");
		if ($res_update2 === FALSE) {
		    echo '{"code":403}';
			$done = TRUE;
			throw new Exception('Failed query or no result when inserting');
		}
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
