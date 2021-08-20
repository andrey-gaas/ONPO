import { initBtnScrollToTop, initDropMenu, initCoruselFromFilter } from "/scripts/utils.js"

window.onload = function() {
  initDropMenu('#hide_menu', '#show_menu', '#drop_menu_mobile');

  initBtnScrollToTop('#scrollToTop');

  initCoruselFromFilter(".home_courses_swiper_container", '.filter_list', '.card_courses_filter', '.filter_list .filter_item');

  
  const buttons = document.querySelectorAll('button[data-filter]');
  const teachersList = document.querySelectorAll('article[data-filter]');
  const container = document.querySelector('.list');

  function filterData(type) {
    return function() {
      container.innerHTML = '';
      const filteredTeachers = [];
  
      for(let i = 0; i < teachersList.length; i++) {
        if (teachersList[i].dataset.filter === type) {
          filteredTeachers.push(teachersList[i]);
        }
      }
  
      container.append(...filteredTeachers);
    }
  }

  buttons[0].onclick = function() {
    container.append(...teachersList);
  }

  buttons[1].onclick = filterData('graduate');

  buttons[2].onclick = filterData('training');

  buttons[3].onclick = filterData('retraining');
};
