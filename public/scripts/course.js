import { sendingAnAplication, initReviewsCommentShow, initFormSelect, initBtnScrollToTop, initDropMenu, initCoruselDefoult } from "/scripts/utils.js"

window.onload = function() {
  initDropMenu('#hide_menu', '#show_menu', '#drop_menu_mobile');

  initBtnScrollToTop('#scrollToTop');

  // TEACHERS CAROUSEL
  initCoruselDefoult('.course_teacher_corusel')
  
  // REVIEWS CAROUSEL
  initCoruselDefoult('.course_review_corusel')

  // SELECT IN FORM

  initFormSelect('.home_form_application')

  // COMMENT SHOW

  initReviewsCommentShow('.container__review')

  // ОСТАВИТЬ ЗАЯВКУ

  //

  sendingAnAplication('#send-application')


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
