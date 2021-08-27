import { initBtnScrollToTop, initDropMenu, initCoruselDefoult } from "/scripts/utils.js"

window.onload = function() {
  initDropMenu('#hide_menu', '#show_menu', '#drop_menu_mobile');

  initBtnScrollToTop('#scrollToTop');

  // TEACHERS CAROUSEL
  initCoruselDefoult('.swiper__corusel')

  // REVIEWS CAROUSEL
  //initCoruselDefoult('.reviews')
  
  
};
