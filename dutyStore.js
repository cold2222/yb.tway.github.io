// 메인 슬라이드
const swiper = new Swiper(".duty-ad", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 신상품 슬라이드
const swiper2 = new Swiper(".duty-new", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination2",
    type: "fraction",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});

const swiper3 = new Swiper(".duty-special", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination3",
    type: "fraction",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev3",
  },
});
