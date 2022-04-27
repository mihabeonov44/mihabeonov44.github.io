


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

});






