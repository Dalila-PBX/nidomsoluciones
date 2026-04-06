/* Inicialización del Carrusel Modelo de Gestión */
var swiper = new Swiper(".modelo__swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto", /* Permite que CSS controle el ancho y fluya suavemente */
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: false
  },
  speed: 600, /* Hace que el cambio de tarjeta sea más suave y menos brusco */
  keyboard: {
    enabled: true
  },
  /* Quitamos el mousewheel para evitar la alta sensibilidad al hacer scroll en la página */
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

/* Inicialización del Carrusel de Servicios */
var swiperServicios = new Swiper(".servicios__swiper", {
  slidesPerView: 1, /* Por defecto en móviles mostrará 1 */
  spaceBetween: 20, /* Espacio entre tarjetas */
  loop: true, /* Para que sea infinito */
  pagination: {
    el: ".servicios-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".servicios-next",
    prevEl: ".servicios-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2, /* En tablets muestra 2 */
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4, /* En pantallas grandes muestra 4 */
      spaceBetween: 30,
    },
  },
});

/* Inicialización del Carrusel de Experiencia (Reviews) */
var swiperReviews = new Swiper(".reviews__swiper", {
  slidesPerView: 1, /* En móviles y tablets muestra solo 1 tarjeta centrada */
  spaceBetween: 20,
  loop: true,       /* Vuelve al inicio al llegar al final (Infinito) */
  grabCursor: true, /* Icono de "manita" para indicar que se puede arrastrar */
  pagination: {
    el: ".reviews-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 2, /* Al llegar a tamaño de escritorio PC muestra 2 */
      spaceBetween: 30,
    }
  }
});
