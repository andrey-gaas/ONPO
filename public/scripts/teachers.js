import { showGlass, initBtnScrollToTop, initDropMenu, initCoruselFromFilter } from "/scripts/utils.js"

window.onload = function() {
  initDropMenu('#hide_menu', '#show_menu', '#drop_menu_mobile');

  initBtnScrollToTop('#scrollToTop');

  initCoruselFromFilter(".home_courses_swiper_container", '.filter_list', '.card_teacher', '.filter_list .filter_item');

  showGlass()
  
};
