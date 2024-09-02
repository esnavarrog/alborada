// import Swiper bundle with all modules installed
import { Swiper } from "swiper/bundle";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {

  console.log("Swiper");
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
  });
  const swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
});