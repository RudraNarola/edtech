<?php
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$emailid = $_POST['emailid'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];
if(strlen($firstname) + strlen($lastname) > 50)
{
    $message = "Your name exceeds the character limit !!";
    echo '<script language = "javascript">';
    echo 'alert("'.$message.'");';
    echo 'window.location = "register.php"';
    echo '</script>';
}
else if($password != $confirm_password)
{
    $message = "Incorrect confirmed password!!";
    echo '<script language = "javascript">';
    echo 'alert("'.$message.'");';
    echo 'window.location = "register.php"';
    echo '</script>';
}
else
{
    include 'database_connect.php';
}

$sql = "SELECT * FROM `users` WHERE username = '$username'";
$result = mysqli_query($conn, $sql);
if($result)
{
    if(mysqli_num_rows($result) > 0)
    {
        $message = "Username already exists!!";
        echo '<script language = "javascript">';
        echo 'alert("'.$message.'");';
        echo 'window.location = "register.php"';
        echo '</script>';
    }
    else
    {
        $sql = "INSERT INTO `users` (`firstname`, `lastname`, `emailid`, `password`, `reg_time`)
        VALUES ('$firstname', '$lastname', '$emailid', '$password', current_timestamp());";

        if(mysqli_query($conn, $sql))
        {
            $message = "You have successfully registered!!";
            echo '<script language = "javascript">';
            echo 'alert("'.$message.'");';
            echo 'window.location = "main_menu.php?curr_username='.$username.'";';
            echo '</script>';
        }
    }
}

?>