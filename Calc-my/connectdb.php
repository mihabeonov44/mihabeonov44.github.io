

<?php
header('Content-Type: text/html; charset= utf-8');
$dblocation = "localhost";

$dbname = "calculator";
// $dbname = "root";

$dbuser = "root";
// $dbuser = "rootbaza";

$dbpasswd = "";
// $dbpasswd = "password";


// Соединяемся с базой 
$dbcnx = @mysqli_connect($dblocation,$dbuser,$dbpasswd);
// $dbcnx = @mysqli_connect($dblocation,$dbname,$dbuser,$dbpasswd);

// if (!$dbcnx) {
// echo ( mysqli_error() );
// exit();
// }

if (!$dbcnx) {
    echo 'Не могу соединиться с БД. Код ошибки: ' . mysqli_connect_errno() . ', ошибка: ' . mysqli_connect_error();
    exit;
  }



// mysqli_query("SET NAMES utf8",$dbcnx);
mysqli_query($dbcnx,"SET NAMES utf8");

// if (!@mysqli_select_db($dbname, $dbcnx)) {
if (!@mysqli_select_db($dbcnx,$dbname)) {
echo( mysql_error() );
exit();
}
?>


