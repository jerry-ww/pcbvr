<?php

function exception_error_handler($errno, $errstr, $errfile, $errline) {
	throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
}
set_error_handler('exception_error_handler');

$done = FALSE;
try {
	require 'common.php';
    $model_name=$_POST["model_name"];

	$mysqli = new mysqli($db_host, $db_username, $db_passwd, $db_dbname);
	if ($mysqli->connect_errno) {
		echo '{"code":500}';
		$done = TRUE;
		throw new Exception('Failed to connect to MySQL: ' . $mysqli->connect_error);
	}

    $req="select path_name from path where path_name like 'order_%' and mid in (select mid from model where model_name='{$model_name}')";

	$res = $mysqli->query($req);
	if ($res === FALSE) {
		echo '{"code":403}';
		$done = TRUE;
		throw new Exception('Failed query or no result when inserting');
	}
	echo '{"code":200,"order_path":[';
	$row = $res->fetch_row();
	while ($row) {
      	printf('{"path_name":"%s"',$row[0]);
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
        echo($e);
	}
}

?>
