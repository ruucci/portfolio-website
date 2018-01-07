<?php
require 'PHPMailerAutoload.php';

$mail = new PHPMailer;

$recipient="ruchidesai1290@gmail.com";

// Testing 
$cc = "ddudenator@gmail.com";

// Production
// $cc = "daruchi007@gmail.com";


$subject=$_POST["subject"];
$sender=$_POST["name"];
$senderEmail=$_POST["email"];
$senderFindMe=$_POST["findMe"];
$message=$_POST["message"];

$mailBody="Name: $sender <br>Email: $senderEmail <br>How did they find me: $senderFindMe <br><br>Message: $message";


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'highlyencrypted@gmail.com';                 // SMTP username
$mail->Password = 'Function';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('website@ruchidesai.me', "https://ruchidesai.me");
// $mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient
$mail->addAddress($recipient);               // Name is optional
$mail->addReplyTo($senderEmail, $sender);
$mail->addCC($cc);

// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $name.$subject;
$mail->Body    = $mailBody;
$mail->AltBody = $mailBody;

// Incase if you want to trace your errors
// $mail->SMTPDebug = 4;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}