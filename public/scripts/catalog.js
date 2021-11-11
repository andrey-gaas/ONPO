import { showGlass, initBtnScrollToTop, initDropMenu, initCoruselFromFilter, initFormSelect } from "/scripts/utils.js"

window.onload = function() {
  initDropMenu('#hide_menu', '#show_menu', '#drop_menu_mobile');

  initBtnScrollToTop('#scrollToTop');

  initFormSelect('.home_form_application')

  initCoruselFromFilter(".home_courses_swiper_container", '.filter_list', '.card_courses_filter', '.filter_list .filter_item');

  //showGlass
  showGlass()
};
