


<!-- Данный файл не работает -->

<!DOCTYPE html> 

PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"

<html xmlns="http://www.w3.org/1999/xhtml">

<head>
meta http-equiv="Content-Type" content="text/html; charset=utf-8" 
title&gt;Simple Mail&lt;/title
</head>

<body>

<?php
$addr = $_POST['addr'];
$theme = $_POST['theme'];
$text = $_POST['text'];
if (isset($addr) && isset($theme) && isset($text)
        && $addr != "" && $theme != "" && $text != "") {
    if (mail($addr, $theme, $text, "From: vova_33@mail.ru")) {
        echo "Сообщение отправлено";
    }
    else {
        echo "При отправке сообщения возникла ошибка";
    }
}
?>


<form action="mailer.php" method="post">

    <label for="addr">eMail:</label>
    input type="text" name="addr" id="addr" size="30"

    <label for="theme">Тема письма:</label>
    input type="text" name="theme" id="theme" size="30" 

    <label for="text">Текст письма:</label>
    textarea rows="10" cols="20" name="text" id="text"/textarea

    input type="submit" value="Отправить" 

</form>



</body>
</html>



