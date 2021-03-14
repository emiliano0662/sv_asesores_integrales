import './scss/style.scss';
import { Modal } from 'bootstrap';

import { WOW } from 'wowjs';

/*Se inicializa el plugin para las animaciones*/
var wow = new WOW({
    live: false,
    scrollContainer: null
});

/*Todos los "load" cargan los bloques recurrentes*/
$('header').load("header.html");
$('footer').load("footer.html");

/*Script scroll*/
$(document).on('click', '.navbar .navbar-nav .nav-item .nav-link', function (event) {
    event.preventDefault();

    var href = $(this).attr('href');

    $('body,html').animate({ scrollTop: $(href).offset().top - 30 }, 2000, 'swing');
});

/*Se agregan las animaciones para toda la pagina que no cargan de menera recurrente*/
wow.init();