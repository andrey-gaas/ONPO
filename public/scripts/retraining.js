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
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
      ],
    });

    $('.teachers .swiper-button-prev').on('click', function() {
      $('.teachers-list').slick('slickPrev');
    });

    $('.teachers .swiper-button-next').on('click', function() {
      $('.teachers-list').slick('slickNext');
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
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
      ],
    });

    $('.reviews .swiper-button-prev').on('click', function() {
      $('.reviews-list').slick('slickPrev');
    });

    $('.reviews .swiper-button-next').on('click', function() {
      $('.reviews-list').slick('slickNext');
    });
  });
};