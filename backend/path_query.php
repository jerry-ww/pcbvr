<?php

function exception_error_handler($errno, $errstr, $errfile, $errline) {
	throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
}
set_error_handler('exception_error_handler');

$done = FALSE;
try {
	require 'common.php';
	$model_name=$_POST["model_name"];
    $path_name=$_POST["path_name"];

	$mysqli = new mysqli($db_host, $db_username, $db_passwd, $db_dbname);
	if ($mysqli->connect_errno) {
		echo '{"code":500}';
		$done = TRUE;
		throw new Exception('Failed to connect to MySQL: ' . $mysqli->connect_error);
	}

    $req="select value from path_nodes where pid in (select pid from path where path_name = '{$path_name}' and mid in (select mid from model where model_name='{$model_name}')) order by node_id";

	$res = $mysqli->query($req);
	if ($res === FALSE) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result when inserting');
	}
	echo '{"code":200,"path":[';
	$row = $res->fetch_row();
	while ($row) {
      	$pos=explode(",",$row[0]);
      	
        //printf('{"x":%lf,"y":%lf,"z":%lf', $pos[0],$pos[1],$pos[2]);
		// for ($i = 0; $i < $tag_info_count; $i++) {
		// 	 printf($tag_info_formats[$i], $tag_info_entries[$i], $row[$i]);
		// }
		//echo '}';
      
      	printf('[%lf,%lf,%lf', $pos[0],$pos[1],$pos[2]);
      	echo ']';
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
