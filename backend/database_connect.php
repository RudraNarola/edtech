<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "user_database";

$conn = mysqli_connect($servername, $username, $password, $database);
if(!$conn)
{
    die("Failed to connect with the server !!". mysqli_connect_error());
}
?>