<?php
$emailid = $_POST['emailid'];
$password = $_POST['password'];

include 'database_connect.php';

$sql = "SELECT * FROM `users` WHERE username = '$username' AND password = '$password'";
$result = mysqli_query($conn, $sql);
$check = mysqli_fetch_array($result);
if(isset($check))
{
    if(mysqli_query($conn, $sql))
    {
        $message = "You have Loged-In successfully!!";
        echo '<script language = "javascript">';
        echo 'alert("'.$message.'");';
        echo 'window.location = "main_menu.php?curr_username='.$username.'";';
        echo '</script>';
    }
}
else 
{
    $message = "You have entered the wrong credentials !!";
    echo '<script language = "javascript">';
    echo 'alert("'.$message.'");';
    echo 'window.location = "login.php";';
    echo '</script>';
}

?>