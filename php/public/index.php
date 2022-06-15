<?php

/**
 * https://www.php.net/manual/en/curl.examples-basic.php
 */

$url = "https://jsonplaceholder.typicode.com/comments?postId=3";
$ch = curl_init();   
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);   
curl_setopt($ch, CURLOPT_URL, $url);
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
echo $res = curl_exec($ch);