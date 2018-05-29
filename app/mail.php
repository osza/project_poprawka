<?php
$name = $_POST['name'];
$country = $_POST['country'];
$message = $_POST['message'];
$formcontent=" from: $name \n message: $message";
$recipient = "poszenda@gmail.com";
$subject = "sent from haven";
$mailheader = "from: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or exit("Error!");
echo "thanks!" . " -" . "<a href='index.html' style='text-decoration:none;color:#ff0099;'> return haven</a>";
?>
