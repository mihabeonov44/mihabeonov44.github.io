

// Плавная прокрутка к якорю или на странице лендинга по пунктам меню.
// Взял с сайта https://soyus-s.ru/plavnaya-prokrutka-k-yakoryu-ili-na-stranice-lendinga-po-punktam-menyu/ 
// Также статья на сайте https://impuls-web.ru/plavnaya-prokrutka-stranicy-do-yakorya/ 

// Чтобы скрипт работал нужно в index.html подключить библиотеку Jquery.


// Исходный Скрипт для плавной прокрутки.

// $(document).ready(function() {
//     $("a.scrollto").click(function () {
//       elementClick = $(this).attr("href")
//       destination = $(elementClick).offset().top;
//       $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
//       return false;
//     });
// });



// Я Пробую менять исходный скрипт для плавной прокрутки.

// $(document).ready(function() {
//     $("a.scrollto").click(function () {
//       elementClick = $(this).attr("href")
//       destination = $(elementClick).offset().top - 20;
//       $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);

      // При клике на ссылку "a" с классом scrollto включаютя/выключаются классы hamburger_active и menu_active 
      // hamburger.classList.toggle('hamburger_active'); 
      // menu.classList.toggle('menu_active');

      // return false;
    // });
// });

// Когда при плавной прокрутке к якорю верхняя часть блока перекрывается, к примеру,плавающим фиксированным меню или ещё каким то элементом, и нужно сделать небольшой отступ сверху, то для этого мы можем добавить в этот же скрипт значение отступа сверху в 20px ( в строке destination = $(elementClick).offset().top - 20; )
// Значение 1100 это скорость анимации перехода в мс.


// ********************************************************


// Выполнение js-кода в зависимости от ширины экрана. 
// Если ширина экрана больше 767px, то:
if (document.documentElement.clientWidth > 767) {

  $(document).ready(function() {

    // При клике на ссылку "a" с классом scrollto происходит плавная прокрутка к якорю или на странице лендинга по пунктам меню.
    $("a.scrollto").click(function () {
      elementClick = $(this).attr("href")
      destination = $(elementClick).offset().top - 20;
      $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);

      return false;
    });
  });

}

// Иначе, т.е. если ширина экрана меньше 768px, то:
// else {

if (document.documentElement.clientWidth < 768) {

  $(document).ready(function() {

    // При клике на ссылку "a" с классом scrollto происходит плавная прокрутка к якорю или на странице лендинга по пунктам меню.
    $("a.scrollto").click(function () {
      elementClick = $(this).attr("href")
      destination = $(elementClick).offset().top - 20;
      $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);

      // При клике на ссылку "a" с классом scrollto включаютя/выключаются классы hamburger_active и menu_active. Вставил эти строки из файла script.js
      const menu = document.querySelector('.menu'),
      hamburger = document.querySelector('.hamburger');

      hamburger.classList.toggle('hamburger_active'); 
      menu.classList.toggle('menu_active'); 

      return false;
    });

    // При клике на Меню Гамбургер (3 полоски) включаютя/выключаются классы hamburger_active и menu_active.
    const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
    });
    return false;

  });


};



