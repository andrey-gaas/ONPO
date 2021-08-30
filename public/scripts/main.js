import Swiper from "/scripts/swiper.js";
import {
  initFormSelect, initBtnScrollToTop, initDropMenu, 
  initCoruselDefoult, initCoruselFromFilter
} from "/scripts/utils.js"


window.onload = () => {
  //init swiper item

  let homeMainCorusel = new Swiper(".home_main_corusel", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar 
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  })

  //accordion

  let accordionList = document.querySelectorAll('.accordion_list')
  let accordionBtnContainer = document.querySelector('.section_home_faq .direction')
  let accordionBtn = document.querySelectorAll('.section_home_faq .direction .button__direction')

  accordionBtnContainer.onclick = e => {
    if(e.target.nodeName === 'BUTTON'){
      accordionList.forEach( elem => {
        elem.style.display = 'none'
        if(elem.dataset.direction === e.target.id){
          elem.style.display = 'block'
        }
      })
      accordionBtn.forEach( elem =>{
        elem.classList.remove('active')
        if(elem.id === e.target.id){
          elem.classList.add('active')
        }
      })
    }
  }

  for(let i = 0; i < accordionList.length; i++){
    accordionList[i].addEventListener('click', (e)=>{
      let targetElem = e.target
      if(targetElem.className == "title" || targetElem.id == "toggle_show"){
        let item = targetElem.parentNode.parentNode
        let panel = targetElem.parentNode.nextElementSibling
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
        item.classList.toggle("active")
  
      }
    })
  }

  //init selec
  
  initFormSelect('.home_form_application')

  //init corusel from filter

  initCoruselFromFilter(".home_courses_swiper_container", '.filter_list', '.card_courses_filter', '.filter_list .filter_item')

  //drop menu
  initDropMenu('#hide_menu', '#show_menu', '#drop_menu_mobile')

  //scrollToTop

  initBtnScrollToTop('#scrollToTop')

  //init corusel

  initCoruselDefoult(".home_deff_corusel") 
};



// touchend

// touchcancel

// touchmove

// sending an application
/* document.getElementById('send-application').onsubmit = function sendApplication(event) {
  event.preventDefault();

  const form = event.target;

  let programList = [...document.querySelectorAll('#send-application .dropdown_list input')];
  programList = programList
    .filter(program => program.checked)
    .map(program => program.name);

  const data = JSON.stringify({
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    location: form.location.value,
    programList: programList,
    educationForm: form.form_of_education.value,
    wishes: form.wishes.value,
  });
  
  // XHR
  console.log(data);
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/api/application');
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(data);

  xhr.onload = function() {
    console.log(xhr.status);
    console.log(xhr.responseText);
  }
}
 */