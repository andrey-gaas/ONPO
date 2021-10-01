import Swiper from "/scripts/swiper.js";
import {
  initFormSelect, initBtnScrollToTop, initDropMenu, 
  initCoruselDefoult, initCoruselFromFilter, initReviewsCommentShow,
  sendingAnAplication,
} from "/scripts/utils.js"


window.onload = () => {
  


  //btn scroll

  let containerBtnScrollToSection = document.querySelector('.container_btn_scroll_to_section')

  containerBtnScrollToSection.onclick = e => {
    if(e.target.nodeName === 'A'){
      e.preventDefault()
      let top = document.querySelector(e.target.hash).offsetTop - 120
      window.scrollTo(  {top,  behavior: "smooth" })

    }
  }

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
    pagination: {
      el: ".swiper-pagination",
      type:'custom',
      renderCustom: (swiper, current, total) => {
        // let prev = ((current+total-1)%(total)) === 0 ? total : ((current+total-1)%(total)) 
        // let next = (current+1)%(total) === 0 ? total : (current+1)%(total)
        return `<div class="paggination_number">
                  <span class="paggination_number_prev">${((current+total-1)%(total)) === 0 ? total : ((current+total-1)%(total)) }</span>
                  <span class="paggination_number_currnet white">${current}</span>
                  <span class="paggination_number_next">${(current+1)%(total) === 0 ? total : (current+1)%(total)}</span>
                </div>`
      },
    },
  })

  //map

  let localeIconsList = document.querySelector('.lacation_list')
  let placeList = document.querySelector('.place_list')
  let wrap = document.querySelector(".wrapper_map_content")
  let btnHideList = document.querySelector('.button__hide_list')
  let btnHideListDesktop = document.querySelector('.close_window_place_list')
  let mapTitle = document.querySelector('.title_map')
  let paintedItem

  let placeData = {
    '#Central':{
      title:'центральный </br>федеральный округ',
      places:['г. Воронеж', 'г. Тула']
    },
    '#Urals':{
      title:'уральский </br>федеральный округ',
      places:['г. Мегион (ХМАО)', 'г. Новый Уренгой (ЯНАО)','г. Сургут','г. Тюмень','г. Челябинск','п. Незевай (Свердловская область)','пгт. Арти (Свердловская область)','пгт. Березово (ХМАО)','с. Викулово (Тюменская область)','с. Красноселькуп (ЯНАО)','г. Урай (ХМАО)','г. Губкинский (ЯНАО)', 'г. Радужный (ХМАО)', 'г. Югорск (ХМАО)', 'г. Белоярский (ХМАО)','г. Магнитогорск', 'п.г.т. Октябрьское (ХМАО)']
    },
    '#Volga':{
      title:'поволжский </br>федеральный округ',
      places:['г. Заречный (Пензенская область)', 'г. Москва','пгт. Алексеевское (Республика Татарстан)','г. Сенгилей (Ульяновская область)','г. Нижний Новгород','г. Казань']
    },
    '#Southern':{
      title:'северо - кавказский </br>федеральный округ',
      places:['с. Степногутово (Ставропольский край)']
    },
    '#FarEastern':{
      left: true,
      title:'Дальне - восточный </br>федеральный округ',
      places:[ "г. Алдан (Республика Саха (Якутия)) ", "г. Биробиджан (ЕАО)", "г. Владивосток (Приморский край)", "г. Южно-Сахалинск", "п. Чегдомын (Хабаровский край)", "пгт. Палана (Камчатский край)", "с. Кабанск (Республика Бурятия)", "с. Каменское (Камчатский край)", "с. Константиновка (Амурская область)", "с. Поярково (Амурская область)", "с. Чапчылган (Республика Саха (Якутия))", "г. Благовещенск (Амурская область)", "г. Улан-Удэ (Республика Бурятия) ", "г. Хабаровск", "г. Углегорск (Сахалинская область)", "с. Ломы (Забайкальский край)", "г. Якутск", "с. Сосново-Озёрское (Республика Бурятия)", "п. г. т. Новобурейский (Амурская область)", "г. Нерюнгри (Р.Саха (Якутия))", "г. Комсомольск-на-Амуре", "п. г. т. Серышево (Амурская область)"],
    },
    '#Northwestern':{
      title:'северо - западный </br>федеральный округ',
      places:['г. Псков', 'г. Выборг (Ленинградская область)','Калиниград', 'г. Высоцк (Ленинградская область)']
    },
    '#Siberian':{
      left: true,
      title:'сибирский </br>федеральный округ',
      places:["г. Бердск (Новосибирская область) ", "г. Иркутск", "г. Искитим (Новосибирская область)", "г. Красноярск", "г. Кызыл (Респулика Тыва)", "г. Новокузнецк (Кемеровская область)", "г. Новосибирск", "г. Обь (Новосибирская область)", "с. Кызыл-Мажалык (Республика Тыва)", "с. Парабель (Томская область)", "с. Убинское (Новосибирская область)", "с. Усть-Ишим (Омская область)", "с. Хову-Аксы (Республика Тыва) ", "г. Горно-Алтайск (Республика Алтай)", "пгт Кольцово (Новосибирская область)", "с. Аул Тебисс (Новосибирская область)", "с. Щеглово (Новосибирская область)", "г. Томск", "с. Барышево (Новосибирская область)", "с. Баган (Новосибирская область)", "с. Северное (Новосибирская область)", "с. Гражданцево (Новосибирская область)", "д. Чупино (Новосибирская область)", "р.п. Маслянино (Новосибирская область)", "п. Седаново (Иркутская область)", "п. Петровский (Новосибирская область)", "с. Евтино (Кемеровская область)", "с. Пайвино (Новосибирская область)", "р.п. Краснозёрское (Новосибирская область)", "г. Барнаул", "с. Усть-Илга (Иркутская область)", "пгт Крутинка (Омская область)", "с. Екатеринославка (Шебалинский район, Омская область)", "г. Ак-Довурак (Р. Тыва)", "г. Карасук (Новосибирская область)", "с. Элегест (Р. Тыва)", "д. Новороссийка (Омская область)"],
    },
  }

  localeIconsList.onclick = e => {
    if(e.target.classList.contains('location_item')){

      if(paintedItem){
        paintedItem.style.fill = '#eaeaea'
        closeWindoPlaceList()
      }

      placeList.style.minHeight = wrap.offsetHeight - 1 + 'px'
      wrap.classList.add('active')
      if(placeData[e.target.dataset.locale].left){
        wrap.style.justifyContent = 'flex-start'
      }
      btnHideList.classList.add('active')
      paintedItem = document.querySelector(e.target.dataset.locale)
      paintedItem.style.fill = '#3EC1D3'
      mapTitle.innerHTML = placeData[e.target.dataset.locale].title

      let title = document.createElement('h2')
      title.classList.add('title_place_list')
      title.innerHTML = placeData[e.target.dataset.locale].title
      placeList.append( title )

      placeData[e.target.dataset.locale].places.forEach( item => {
        let li = document.createElement('li')
        li.classList.add('place_item')
        li.innerText = item
        placeList.append(li)
      })
      
    }
  }
  
  let closeWindoPlaceList = () => {
    wrap.classList.remove('active')
    wrap.style.justifyContent = ''
    btnHideList.classList.remove('active')
    paintedItem.style.fill = '#eaeaea'
    mapTitle.innerHTML = 'География обучения'
    placeList.innerHTML = ''
  }
  btnHideList.onclick = closeWindoPlaceList
  btnHideListDesktop.onclick = closeWindoPlaceList
  
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

  //init review btn show

  initReviewsCommentShow('.container__review')

  sendingAnAplication('send-application')
};



// touchend

// touchcancel

// touchmove

