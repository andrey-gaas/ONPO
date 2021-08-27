import { initBtnScrollToTop, initDropMenu } from "/scripts/utils.js"

window.onload = function() {
  initDropMenu('#hide_menu', '#show_menu', '#drop_menu_mobile');

  initBtnScrollToTop('#scrollToTop');

  // TEACHERS CAROUSEL
  $(document).ready(function(){
    $('.teachers-list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      appendDots: $('.teachers .pagination'),
      responsive: [
        {
          breakpoint: 728,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
      ],
    });
  });


  // REVIEWS CAROUSEL
  $(document).ready(function(){
    $('.reviews-list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      appendDots: $('.reviews .pagination'),
      responsive: [
        {
          breakpoint: 728,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
      ],
    });
  });


  // ОСТАВИТЬ ЗАЯВКУ
  document
    .querySelector('#button-application')
    .onclick = function() {
      const form = document.querySelector('.application-form');

      window.scrollTo({
        top: form.getBoundingClientRect().top + window.pageYOffset,
        behavior: "smooth"
      });
    }
};
