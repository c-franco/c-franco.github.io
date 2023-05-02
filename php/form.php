<?php

if(!isset($_POST['submit'])) 
{
    echo "error; you need to submit the form!";
}

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if(empty($name) || empty($email)) 
{
    echo "Name and email are mandatory!";
}

$email_from = "franco.christian.miro@gmail.com";
$email_subject = "New Form Submission";
$email_body = "You have received a new message from the user $name.\n".
            "email address: $email\n".
            "Here is the message:\n $message";

$to = "franco.christian.miro@gmail.com";
$headers = "From: $email"; 

mail($to, $email_subject, $email_body, $headers);

header("Location: index.html");

?>