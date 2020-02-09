<?php

//Allow cross-domain access
header("Access-Control-Allow-Origin: http://49.234.154.17");
//header("Access-Control-Allow-Origin: http://localhost:8080");
//header("Access-Control-Allow-Origin: http://localhost:1234");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header('Access-Control-Allow-Headers:x-requested-with,content-type');

$passwd_salt = 'seriousSaltVeryLong';

$db_host = 'localhost';
$db_username = 'pcbvr_web';
$db_passwd = 'yWWt6D8FwppEhprj';
$db_dbname = 'pcbvr_web';

$db_tblname_user_key = 'user_key';
$db_tblname_user_info = 'user';
$db_tblprefix_tag = 'tag_';
$db_tblname_panorama_info = 'panorama';
$db_tblprefix_tag_like = 'tag_like_';
$db_tblname_tag_like_tmp = "tbl_tag_like";
$db_tblname_tag_liked_tmp = "tbl_tag_liked";

$user_info_count = 7;
$user_info_columns = array("uname", "sex", "birthday", "location", "qq", "wechat", "udesc");
$user_info_entries = array("name", "sex", "birthday", "location", "qq", "wechat", "description");
$user_info_column_uname = "uname";
$user_info_entry_uname = "name";

$tag_info_count = 5;
$tag_info_columns = array("title", "tdesc", "pos", "camPos", "camTarget");
$tag_info_entries = array("title", "description", "position", "cameraPosition", "cameraTarget");
$tag_infos=array("tid","name","timeCreated","likeNum","title", "description", "position", "cameraPosition", "cameraTarget");
$tag_info_formats = array(',"%s":"%s"', ',"%s":"%s"', ',"%s":%s', ',"%s":%s', ',"%s":%s');
$tag_info_column_time = "ttime";
$tag_info_entry_time = "timeCreated";
$tag_like_column = "likecount";
$tag_like_entry = "likeNum";
$tag_liked_column = "liked";
$tag_liked_entry = "liked";


?>
