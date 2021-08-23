import { initBtnScrollToTop, initDropMenu, initCoruselFromFilter, initFormSelect } from "/scripts/utils.js"

window.onload = function() {
  initDropMenu('#hide_menu', '#show_menu', '#drop_menu_mobile');

  initBtnScrollToTop('#scrollToTop');

  initCoruselFromFilter(".home_courses_swiper_container", '.filter_list', '.card_courses_filter', '.filter_list .filter_item');

  initFormSelect('.form-container');

  // FILTER
  const buttons = document.querySelectorAll('button[data-filter]');
  const reviewsList = document.querySelectorAll('article[data-filter]');
  const container = document.querySelector('.list');

  function filterData(type) {
    return function() {
      container.innerHTML = '';
      const reviews = [];
  
      for(let i = 0; i < reviewsList.length; i++) {
        if (reviewsList[i].dataset.filter === type) {
          reviews.push(reviewsList[i]);
        }
      }
  
      container.append(...reviews);
    }
  }

  buttons[0].onclick = function() {
    container.append(...reviewsList);
  }

  buttons[1].onclick = filterData('graduate');

  buttons[2].onclick = filterData('training');

  buttons[3].onclick = filterData('retraining');
  // END FILTER


  // STARS

  let grade = 0;
  const stars = document.querySelectorAll('button.star');

  function setStar(newGrade) {
    return function() {
      grade = newGrade;

      stars.forEach(elem => elem.classList.remove('active'));

      for (let i = 0; i < grade; i++) {
        stars[i].classList.add('active');
      }
    }
  }

  stars[0].onclick = setStar(1);
  stars[1].onclick = setStar(2);
  stars[2].onclick = setStar(3);
  stars[3].onclick = setStar(4);
  stars[4].onclick = setStar(5);
  // END STARS
};
