import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiperProductos = new Swiper('.productsServicios .swiper', {
  navigation: {
    nextEl: '.productsServicios .swiper-button-next',
    prevEl: '.productsServicios .swiper-button-prev'
  },
  pagination: {
    el: '.productsServicios .swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
});


const swiperProductos2 = new Swiper('.productsCimbra .swiper', {
  navigation: {
    nextEl: '.productsCimbra .swiper-button-next',
    prevEl: '.productsCimbra .swiper-button-prev'
  },
  pagination: {
    el: '.productsCimbra .swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
});

const swiperCasos = new Swiper('.casosExito .swiper', {
  navigation: {
    nextEl: '.casosExito .swiper-button-next',
    prevEl: '.casosExito .swiper-button-prev'
  },
  pagination: {
    el: '.casosExito .swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
});
const swiperProyectos = new Swiper('.proyectosBlock .swiper', {
  slidesPerView: 1,
  autoHeight: true,
  navigation: {
    nextEl: '.proyectosBlock .swiper-button-next',
    prevEl: '.proyectosBlock .swiper-button-prev'
  },
  pagination: {
    el: '.proyectosBlock .swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
});