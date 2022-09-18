<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];


// Нижеследующие 2 строки ставлю в самое начало файла после <?php , иначе выдаёт ошибку. 
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Для более ранних версий PHPMailer
// require_once('phpmailer/PHPMailerAutoload.php');

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;      // Enable verbose debug output

$mail->isSMTP();  
$mail->SMTPAuth = true;  
$mail->SMTPDebug = 0;
// $mail->SMTPDebug = 2;


// Настройки моей почты
$mail->Host       = 'ssl://smtp.yandex.ru'; // SMTP сервера вашей почты
$mail->Port       = 465;
$mail->Username   = 'dima-m75@yandex.ru'; // Логин на почте
$mail->Password   = 'fteddnmqqyopqtkb'; // Пароль для приложений на почте


// От кого. Адрес самой почты и имя отправителя.
$mail->setFrom('dima-m75@yandex.ru', 'От отправителя dima-m75@yandex.ru'); 

// Кому. Получатель письма
$mail->addAddress('dima-m75@yandex.ru', 'Самому себе'); 

// $mail->addAddress('');                        // Кому письмо. Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name


// Тема письма
$mail->Subject = 'Данные с сайта PULSE';


// Запись как в уроке 3.21.
// $mail->isHTML(true);      // Указываю что письмо придёт в формате HTML. 
// $mail->Body    = '
// 		Пользователь оставил данные <br> 
// 	Имя: ' . $name . ' <br>
// 	Номер телефона: ' . $phone . '<br>
// 	E-mail: ' . $email . '';


// Моя запись как на моём сайте "Калькулятор".
$body = '
	Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';
$mail->msgHTML($body);


if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>


