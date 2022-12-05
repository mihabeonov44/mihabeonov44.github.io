


// Урок 4.12. на 39 мин 50 сек
// Получим элементы со страницы по селектору (классу, идентификатору и др.). 
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close'),
      menuLink = document.querySelectorAll('.menu__link'),
      menuSocial_a = document.querySelectorAll('.social_a');

    //   social_a


// Отслеживаем клик по элементу hamburger и когда пользователь кликает на Гамбургер hamburger, то к элементу menu (с классом .menu) добавляем класс активности .active  
hamburger.addEventListener('click', () => {
        menu.classList.add('active');
});


// Отслеживаем клик по элементу closeMenu и когда пользователь кликает на Крестик (Х) closeElem в выезжающем боковом Меню, то у элемента menu (с классом .menu) убираем класс активности .active  
closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});


// Сам дописал. Когда пользователь кликает на пункты Меню menuLink в выезжающем боковом Меню, то у элемента menu (с классом .menu) убираем класс активности .active  
menuLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        // menu.classList.toggle('active');
    })
});


// Сам дописал. Когда пользователь кликает на иконки соцсетей menuSocial_a в выезжающем боковом Меню, то у элемента menu (с классом .menu) убираем класс активности .active  
menuSocial_a.forEach(item => {
    item.addEventListener('click', () => {
        // menu.classList.remove('active');
        menu.classList.toggle('active');
    })
});



// Урок 4.15. на 4 минн 20 сек.
// Реализуем скрипт пересчета процентов. 

// Получим элементы которые будем использовать. 
// Получим в переменные (массивы) ВСЕ элементы (querySelectorAll) со страницы по селектору (классу, идентификатору и др.). 
const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

// Выведем в консоль массив counters 
console.log(counters);

// В переменной (массиве) counters лежит много эл-в со страницы. Они лежат в массиве, т.е. эл-ты расположены друг за другом. 

// Обращаемся к переменной (массиву) counters. forEach это метод который проходится по хранилищу (массиву) элементов и с каждым зл-том что-то делает. 
// И эту часть где метод forEach что-то делает записывают в круглых скобках. 
// counters.forEach( (item, i) - это каждый эл-т с индексом i из массива counters, который перебирается. 
//  => {} - дальше идет функция. Тело функции записываестя в фигурные скобки {}
// lines[i].style.width = item.innerHTML; - обращаемся к конкретному эл-ту по номеру из массива lines[i]. Меняем стиль style.width у этого элемента устанавливая ему значение item.innerHTML  
// item это каждый отдельный счетчик который перебираем с помощью forEach( (item, i)
// innerHTML вытаскивает содержимое (100%, 85% и др.) этого эл-та item из массива counters 

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});






// ДЗ к уроку 4.18. “Политика конфиденциальности”  

// Отслеживаю клик по ссылке <a href="#" id="link-policy">
$('#link-policy').click(function(){

    // alert('НИ ОДИН ИЗ ВИДОВ РАБОТ НЕ ОТМЕЧЕН ДЛЯ УДАЛЕНИЯ !!'); 

    // Вызываю функцию которая выводит Всплывающее окно. 
    my_popup("НИ ОДИН ИЗ ВИДОВ РАБОТ НЕ ОТМЕЧЕН ДЛЯ УДАЛЕНИЯ !!");

    // Отменить действие браузера (переход по ссылке <a href="#" )
    return false;

})



// **********************************************************
/* Для ВСПЛЫВАЮЩЕГО ОКНА. Необходимы 3 файла из проекта CALC_work/Calc_on_php от 07.09 файл на почту : my-1.php my-1.css my-1.js  */
/* Создаем собственное всплывающее окно на javascript, css и jQuery. Какой способ выбрать? */
/* Взял с сайта https://romanchueshov.ru/sekretyi-javascript/vsplyivayushhee-okno-na-javascript-css-i-jquery.html  */

// Функция function my_popup(var1) выводит Всплывающее Окно. 
// Сделал на основе my_1.js 
// function my_popup() { 
function my_popup(var1) {
    // alert('ВВЁЛ ЗНАЧЕНИЕ ПОЛЯ'); 

    // event.preventDefault(); 

    // Отображаем все элементы '#overlay' плавно изменяя прозрачность. 
    $('#overlay').fadeIn(250, 
            function(){

            // $('#popUp').val(var1);
            console.log('var1='+var1);


            // Как вывести переменную JS в HTML? 
            // Взял с сайта https://ru.stackoverflow.com/questions/780569/Как-вывести-переменную-js-в-html 
            document.getElementById("pu").innerHTML = var1;

            // Вызываю анимированное появление блока <div id="popUp"> Блок становится видимым, прозрачность = 1, переходит в позицию top: '22%', со скоростью 490 сек. 
            $('#popUp') 
                .css('display', 'block') 
                .animate({opacity: 1, top: '22%'}, 490); 
        });

    /*По нажатию на крестик (X - это <span id="close">) или на затемненную область (за пределами всплывающего окна - это <div id="overlay">) закрываю это всплывающее окно */
    $('#close, #overlay').click( function(){ 
        $('#popUp')
            .animate({opacity: 0, top: '59%'}, 490, 
                function(){ 
                    $(this).css('display', 'none'); 
                    // Ставлю для блока <div id="popUp"> css-стиль top: -15%; , чтобы в дальнейшем всплывающее окно появлялось выезжая сверху. 
                    $(this).css('top', '-15%'); 
                    // Скрываем все элементы '#overlay' плавно изменяя прозрачность.
                    $('#overlay').fadeOut(220); 
                }
            );
    });


};

// **********************************************************




