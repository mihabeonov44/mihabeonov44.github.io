


// Урок 3.11. Виды Настроек slick-слайдера. 
// Эта конструкция, которая оборачивает всё, отвечает за то, чтобы мы загружали наш Слайдер только тогда, когда наш документ поностью готов. Когда мы обращаемся в Javascript к документу, мы собственно и обращаемся к html-структуре. Делаем здесь это при помощи библиотеки Jquery (значок $ ). 
// Дальше говорим что Код будет запускаться только когда html-структура будет готова (ready), а после этого внутри записываем то что должно происходить. 

$(document).ready(function(){

    // При помощи библ. Jquery обращаемся к классу '.carousel__inner' и запускаем наш slick-слайдер. 

    $('.carousel__inner').slick({

        // Виды Настроек slick-слайдера смотреть на сайте 
        // https://kenwheeler.github.io/slick/ в разделе Settings. 

        // карусель будет двигаться бесконечно (true по умолчанию) 
        // infinite: true,
        
        // сколько слайдов будем показывать 
        // slidesToShow: 2, 

        // сколько слайдов будем перелистывать за 1 раз нажатия на кнопку 
        // slidesToScroll: 2  

        // dots это кружочки внизу, которые можно подставить, потом застилизовать и они у вас будут в навигации по вашему слайдеру. 
        // dots: true,

        // Скорость переключения слайдера в мс. 
        speed: 1200,

        // Говорим слайдеру что внутри будут картинки разной высоты и ты сам подстраивайся под эту высоту. Слайдер будет подстраиваться под высоту картинки. 
        // adaptiveHeight: true,

        // Автопереключение Слайдера с паузой 2000 мс. 
        // autoplay: true,
        // autoplaySpeed: 2000

        // Эффект fade при переключении слайдера, картинка проявляется с заднего фона. 
        // fade: true,
        // Установка характера поведения анимации fade, т.е. проявление картинки происходит равномерно. 
        // cssEase: 'linear'

        // arrows - отключаем стрелки слева и справа от слайдера. 
        // arrows: false

        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',

        // Заадаптируем слайде под различные разрешения экрана с помощью свойства responsive: [] 
        // Мы можем задать свойство responsive: [] и задать различные правила как себя слайдер будет вести на определенных промежутках. 
        responsive: [
            {
                // на промежутке от 0 до 992px установим правила. 
                breakpoint: 992,
                settings: {

                    // Название класса для точек (dots) слайдера снизу, чтобы потом эти точки стилизовать.
                    dotsClass: 'my-dots-class', 
                    // Включаем точки внизу, которые можно подставить, потом застилизовать и они у вас будут в навигации по вашему слайдеру.
                    dots: true,
                    // arrows - отключаем стрелки слева и справа от слайдера. 
                    arrows: false,

                }
            }

            // {
                // ПОКА ЧТО НЕ РАБОТАЕТ !!!
                // на промежутке от 0 до 768px установим правила. 
                // breakpoint: 768,
                // settings: {
                    // dots: false,
                    // arrows: true
                    // fade: true,
                    // cssEase: 'linear'
                // }
            // }
            
        ]
  
    });


    // К уроку 3.15. Скопируем с сайта https://denis-creative.com/jquery-tabs/ JS-скрипт для табов и донастроим под себя (подставим свои классы). 
    // Сделаем переключение клааса активности для ul с классом "catalog__tabs" 

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


    // **** РАЗЪЯСНЕНИЕ К СКРИПТУ *****
    // $('ul.catalog__tabs') - получаем элемент тег ul с классом catalog__tabs 
    // .on('click', 'li:not(.catalog__tab_active)' - мы будем кликать на 1 (один) из элементов, которые находятся внутри. Причем внутри мы пропишем небольшое условие: то что мы кликаем на li у которого нет определенного класса .catalog__tab_active 

    // Далее, $(this) ссылается на тот элемент на который мы только что кликнули, кликнули на 2-й таб и унас будет в работе 2-й таб. 
    // .addClass('catalog__tab_active') - когда мы нажали на 2-й таб который неактивен, мы добавляем ему класс активности 'catalog__tab_active'.
    // siblings().removeClass('catalog__tab_active') - у всех соседних табов, которые не включают тот таб на который мы нажали, мы удаляем класс активности 'catalog__tab_active'. 

    // .closest('div.container') - находим ближайший элемент div с классом 'container'. 
    // .find('div.catalog__content') - внутри этого div с классом 'container' надо найти блоки с классом 'catalog__content'. 
    // .removeClass('catalog__content_active') - у тех элементов, которые нашли, будем удалять класс активности 'catalog__content_active'. 
    // .eq($(this).index()) - получаем номер элемента (таба) на который мы нажали. 
    // .addClass('catalog__content_active') - теперь определенному номеру элемента (таба) добавляем класс активности 'catalog__content_active'. 

    // **********************************


    // $() - эта функция JQuery позволяет получать все элементы по определенному селектору со страницы. Селектор - это классы, ID, теги, комбинации: тег с классом и т.д. 

    // Напишем скрипт, который будет переключать информацию внутри каждой карточки, при клике на кнопку «подробнее».  
    $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })

    // Напишем скрипт, который будет переключать информацию внутри каждой карточки, при клике на кнопку «назад». 
    $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })





});




