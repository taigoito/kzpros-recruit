/**
 * Init
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

// G Nav behavior
const header = document.getElementById('gNav');
const windowWidth = window.innerWidth;
const breakpoint = 750;

window.addEventListener('scroll', () => {
  if (windowWidth > breakpoint && window.scrollY > 0) {
    header.classList.add('gNav--active');
  } else {
    header.classList.remove('gNav--active');
  }
});


// Swiper
import Swiper from 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.esm.browser.js';

new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  centeredSlides: true, // 中央揃えを有効化
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,   // 回転角度
    stretch: 30, // 間隔（px単位）
    depth: 180   // 奥行き（translateをZ方向にpx単位）
  },
  slidesPerView: 5 // 表示するスライドの枚数
});
