<?php

function exception_error_handler($errno, $errstr, $errfile, $errline) {
	throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
}
set_error_handler('exception_error_handler');

$done = FALSE;
try {
	require 'common.php';

    $path_name=$_POST["search_text"];
	$model_name=$_POST["model_name"];

	$mysqli = new mysqli($db_host, $db_username, $db_passwd, $db_dbname);
	if ($mysqli->connect_errno) {
		echo '{"code":500}';
		$done = TRUE;
		throw new Exception('Failed to connect to MySQL: ' . $mysqli->connect_error);
	}

    //$req="select `path`.`path_name`,`path_nodes`.`value` from path join path_nodes on `path`.`id`=`path_nodes`.`id`  where `path`.`path_name` like '%{$path_name}%' order by `path_nodes`.`node_id`";
    $req="select pid,path_name from path where path_name like '%{$path_name}%' and mid in (select mid from model where model_name ='{$model_name}')";
  	$res = $mysqli->query($req);
	if ($res === FALSE) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result when inserting');
	}
	echo '{"code":200,"searched_path":[';
	$row = $res->fetch_row();
	while ($row) {
		printf('{"path_name":"%s",',$row[1]);
        $res_nodes = $mysqli->query("select value from path_nodes where pid=".$row[0]);
		$row_nodes = $res_nodes->fetch_row();
		printf('"path_nodes":[');
		while ($row_nodes) {
			$pos=explode(",",$row_nodes[0]);  
      	    printf('[%lf,%lf,%lf', $pos[0],$pos[1],$pos[2]);
         	echo ']';
			if ($row_nodes = $res_nodes->fetch_row()) {
			    echo ',';
		    }
		}
      	echo ']}';
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
        echo($e);
	}
}

?>
