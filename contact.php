

<!-- Моя контактная форма -->
<!-- Взята с сайта https://code.tutsplus.com/ru/tutorials/create-a-contact-form-in-php--cms-32314 -->

<?php

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);


 
if($_POST) {
    $visitor_name = "";
    $visitor_email = "";
    $email_title = "";
    $concerned_department = "";
    $visitor_message = "";
     
    if(isset($_POST['visitor_name'])) {
      $visitor_name = filter_var($_POST['visitor_name'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['visitor_email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
    }
     
    if(isset($_POST['email_title'])) {
        $email_title = filter_var($_POST['email_title'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['concerned_department'])) {
        $concerned_department = filter_var($_POST['concerned_department'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['visitor_message'])) {
        $visitor_message = htmlspecialchars($_POST['visitor_message']);
    }
     
    if($concerned_department == "billing") {
        $recipient = "billing@domain.com";
    }
    else if($concerned_department == "marketing") {
        $recipient = "marketing@domain.com";
    }
    else if($concerned_department == "technical support") {
        $recipient = "tech.support@domain.com";
    }
    else {
        $recipient = "contact@domain.com";
    }
     
    // Для отправки HTML-письма должен быть установлен заголовок Content-type
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visitor_email . "\r\n"; 

    // Я изменил 15.10.21г 
    // $headers  = 'MIME-Version: 1.0' . "\r\n"
    // .'Content-type: text/html; charset=utf-8' . "\r\n"
    // .'From: Birthday Reminder ' . $visitor_email . "\r\n"; 



// Для отправки HTML-письма должен быть установлен заголовок Content-type
// $headers  = 'MIME-Version: 1.0' . "\r\n";
// $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

// Дополнительные заголовки
// $headers .= 'To: Mary <mary@example.com>, Kelly <kelly@example.com>' . "\r\n";
// $headers .= 'From: Birthday Reminder <birthday@example.com>' . "\r\n";
// $headers .= 'Cc: birthdayarchive@example.com' . "\r\n";
// $headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";



// Добавляю E-mail из формы ввода в начало текста сообщения
$visitor_message = "От пользователя: " . $visitor_name 
    . " E-mail " . $visitor_email . '<br>' . '<br>' . $visitor_message;


// Задал свой E-mail 
// $recipient = "dima-m75@yandex.ru"; 
// $recipient = "ivanovivan999888777@mail.ru"; 
// $recipient = "mik_ds_75@mail.ru"; 
$recipient = "mybeon4455@gmail.com"; 


// Смотреть прот отправку писем в закладке Курс Основы html css 
// https://code.tutsplus.com/ru/tutorials/create-a-contact-form-in-php--cms-32314 
// https://webriz.ru/25-prosteyshaya-forma-otpravki-dannyh-na-pochtu-pri-pomoschi-html-i-php.html 
     

    // if(mail($recipient, $email_title, $visitor_message, $headers)) { 

    if(mail($recipient, $email_title, $visitor_message, "From: mybeon4455@gmail.com \r\n")) {

    // if(mail($recipient, $email_title, $visitor_message, "From: ivanovivan999888777@mail.ru")) {
        
        echo "<p>Thank you for contacting us, $visitor_name. You will get a reply within 24 hours.</p>";

        echo "<h2>$visitor_name, ваше письмо отправлено !!</h2>";
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }
     
} else {
    echo '<p>Something went wrong</p>';
}
 
?>



