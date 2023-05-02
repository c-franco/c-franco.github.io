<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$content = "Este mensaje fue enviado por " . $name . ",\r\n";
$content .= "Su e-mail es: " . $email . " \r\n";
$content .= "Mensaje: " . $_POST['message'] . " \r\n";
$content .= "Enviado el " . date('d/m/Y', time());

$to = 'franco.christian.miro@gmail.com';
$subject = "Mensaje recibido en el blog";

mail($to, $subject, utf8_decode($content), $header);

//header("Location: index.html");
?>