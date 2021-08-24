import { initBtnScrollToTop, initDropMenu, initCoruselFromFilter } from "/scripts/utils.js"

window.onload = function() {
  initDropMenu('#hide_menu', '#show_menu', '#drop_menu_mobile');

  initBtnScrollToTop('#scrollToTop');

  initCoruselFromFilter(".home_courses_swiper_container", '.filter_list', '.card_courses_filter', '.filter_list .filter_item');

  
  const buttons = document.querySelectorAll('button[data-filter]');
  const teachersList = document.querySelectorAll('article[data-filter]');
  const container = document.querySelector('.list');
  const filteKeyList = ['','graduate', 'training', 'retraining']

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

  function chekSlide(event, type, touchEnd){
    function getEvent(){
      return (event.type.search('touch') !== -1) ? event.touches[0] : event;
    }
    let e = getEvent()
    let shiftX = e.clientX;
    
    let fnCheck =  event => {
      if((shiftX - event.clientX)**2 <= 225){
        if(type !== ''){
          filterData(type)();
        }else{
          container.append(...teachersList);
        }
      }
      e.target.removeEventListener(touchEnd, fnCheck)
    }
    e.target.addEventListener( touchEnd , fnCheck)
  }

  for(let i = 0; i<buttons.length; i++){
    buttons[i].onmousedown = e => { chekSlide(e, filteKeyList[i], 'mouseup') }
    buttons[i].ontouchstart = e => { chekSlide(e, filteKeyList[i], 'touchend') }
  }
  // buttons[1].onclick = filterData('graduate');

  // buttons[2].onclick = filterData('training');

  // buttons[3].onclick = filterData('retraining');
};
