<?php
	$recipient="ruchidesai1290@gmail.com";
    $subject="Mail from my Website";
	echo "start";

	$sender=$_POST['name'];
	$senderEmail=$_POST['email'];
	$senderFindMe=$_POST['findMe'];
	$message=$_POST['message'];
    $headers = 'From: '.'admin@ruchidesai.me'.'<admin@ruchidesai.me>' . "\r\n".
'Reply-To: '.$senderEmail."\r\n" .
'X-Mailer: PHP/' . phpversion();

	$mailBody="Name: $sender\nEmail: $senderEmail\nHow did they find me: $senderFindMe\n\nMessage: $message\n\n\n";
	
    $success = mail($recipient, $subject, $mailBody, $headers);
	echo $success;
?>