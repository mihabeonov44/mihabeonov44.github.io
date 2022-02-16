

<!-- Простая отправка сообщения на эл. почту -->

<?php
// Сообщение
$message = "Line 1\r\nLine 2\r\nLine 3";

// На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
$message = wordwrap($message, 70, "\r\n");


// Отправляем
if(mail('mybeon4455@gmail.com', 'My Subject', $message)) {
	echo "<h2>Ваше письмо отправлено !!</h2>";
    } else {
        echo '<p>Сожалеем, но письмо не было отправлено.</p>';
    }


?>


