import { showGlass, initReviewsCommentShow, initBtnScrollToTop, initDropMenu, initCoruselFromFilter, initFormSelect } from "/scripts/utils.js"

window.onload = function() {
  initDropMenu('#hide_menu', '#show_menu', '#drop_menu_mobile');

  initBtnScrollToTop('#scrollToTop');

  initCoruselFromFilter(".home_courses_swiper_container", '.filter_list', '.card_review', '.filter_list .filter_item');

  // initFormSelect('.form-container');

  initReviewsCommentShow('.reviews-list>.list')

  showGlass()
};
