import Swiper from "/swiper.js";


let chekParentsNode = (parent, cls)=>{
  if(parent && parent.classList){
    if(parent.classList.contains(cls)){
      return true
    }else{
      return chekParentsNode(parent.parentNode, cls)
    }
  }else{
    return false
  }

}
let initFormSelect = (formWithSelect) =>{
  let selectCourse = []

  formWithSelect.onclick = e => {
    
    if(e.target.classList.contains('select_input')){
      e.stopPropagation()
      let selectInput = e.target
      let wrap = e.target.parentNode.querySelector('.wrap_castom_scrollbar')

      wrap.onclick = e => {
        e.stopPropagation()
        if(e.target.nodeName === 'LABEL'){
          if(selectCourse.indexOf(e.target.innerText) !== -1){
            selectCourse.splice( selectCourse.indexOf(e.target.innerText), 1)
            console.log('splice');
          }else{
            selectCourse.push(e.target.innerText)
          }
          if(selectCourse.length === 0){
            selectInput.innerHTML = 'Наименование образовательной прогрммы'
          }else{
            selectInput.innerHTML = selectCourse
          }
        }

      }

      let closeSelectWindow = ()=>{
        console.log('document');
        wrap.onclick = null
        document.removeEventListener('click', closeSelectWindow)
        e.target.parentNode.classList.remove('active')
      }
      document.addEventListener('click', closeSelectWindow)
      e.target.parentNode.classList.toggle('active')
    }
  
  }
}

window.onload = () => {
  //init selec
  let formApplication = document.querySelector('.home_form_application')
  initFormSelect(formApplication)

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

  let homeCourseCorusel = new Swiper(".home_courses_swiper_container", {
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

    // And if we need scrollbar home_courses_swiper_container
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  })

  //drop menu
  let closeBtn = document.querySelector('#hide_menu')
  let openBtn = document.querySelector('#show_menu')
  let menuMobile = document.querySelector('#drop_menu_mobile')

  openBtn.addEventListener( 'click', () => {
    menuMobile.classList.toggle('activ')
  } )
  closeBtn.addEventListener( 'click', () => {
    menuMobile.classList.remove('activ')
  } )

  //scrollToTop

  let btnScrollToTop = document.querySelector('#scrollToTop')
  btnScrollToTop.addEventListener( 'click', ()=>{ 

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })

  //accordion

  let accordion = document.querySelector('.accordion_list')
  if(accordion){
    accordion.addEventListener('click', (e)=>{
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
  

  //filter

  let filterBtnList = document.querySelectorAll('.filter_list .filter_item')
  let filterCardList = document.querySelectorAll('.card_courses_filter')
  let filter = document.querySelector('.filter_list')
  let filterDate = 'all'

  filterCardList.forEach(item => {
    if(item.parentNode.parentNode.parentNode.className === "swiper-wrapper"){
      item.swiperWrap = '<div class="swiper-slide">'+item.parentNode.parentNode.innerHTML+'</div>'
    }
  })

  if(filter.style.left === ''){
    filter.style.left = '0px'
  }

  let isBtnControlWorks = false

  let slideFilter = direction => {
    if(isBtnControlWorks){ return }
    isBtnControlWorks = true

    let left = +filter.style.left.slice(0, -2)
    let maxScrol = filter.parentNode.offsetWidth - filter.offsetWidth
    
    left+= (direction*250)
    
    if(left > 0){
      filter.style.transition = '.15s left'
      filter.style.left = left + 'px'
      setTimeout( ()=> {
        filter.style.left = '0px'
        setTimeout( ()=> {
          filter.style.transition = null
          isBtnControlWorks = false
        }, 150)
      }, 150)
      return
    }

    if(left < maxScrol){
      filter.style.transition = '.15s left'
      filter.style.left = left + 'px'
      setTimeout( ()=> {
        filter.style.left = maxScrol + 'px'
        setTimeout( ()=> {
          filter.style.transition = null
          isBtnControlWorks = false
        }, 150)
      }, 150)
      return
    }
    filter.style.transition = '.2s left'
    filter.style.left = left + 'px'
    setTimeout( ()=>{
      isBtnControlWorks = false
      filter.style.transition = null
    }, 200)
  }
  let filterBtnControlBack = document.querySelector('.btn_back.btn_filter_control')
  let filterBtnControlNext = document.querySelector('.btn_next.btn_filter_control')

  filterBtnControlBack.addEventListener('click', () => slideFilter(1))
  filterBtnControlNext.addEventListener('click', () => slideFilter(-1))

  let fnFitler = (eve, touchEnd, touchMove) => {

    function getEvent(){
      return (event.type.search('touch') !== -1) ? event.touches[0] : event;
    }
    
    let e = getEvent()
    let shiftX = e.clientX;
    let shiftY = e.clientY;
    

    let maxScrol = filter.parentNode.offsetWidth - filter.offsetWidth
    let leftStart = +filter.style.left.slice(0, -2)

    let onMouseMove = () => {
      let e = getEvent()
      filter.style.left = (+leftStart) + (e.pageX - shiftX )+ 'px';
    }

    let stopMove = () => {
      if(filter.style.left.slice(0, -2) > 0){
        filter.style.transition = '.2s left'
        filter.style.left = '0px'
        setTimeout( ()=>{filter.style.transition = null}, 200)
      }
      if(filter.style.left.slice(0, -2) < maxScrol){
        filter.style.transition = '.2s left'
        filter.style.left = maxScrol + 'px'
        setTimeout( ()=>{filter.style.transition = null}, 200)
      }
      document.body.classList.remove('overflow_hidden')
      document.removeEventListener( touchMove, onMouseMove);
      document.removeEventListener( touchMove, checkUpDownScroll);
      document[( 'on'+touchEnd )] = null;
    }
    document.addEventListener(touchEnd, stopMove);

    let checkUpDownScroll = () =>{
      document.removeEventListener( touchMove, checkUpDownScroll);
      let e = getEvent()
      let X =  e.clientX - shiftX
      let Y =  e.clientY - shiftY

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // код для мобильных устройств
        if( ((X/Y) * (X/Y)) > 1){
          document.body.classList.add('overflow_hidden')
          document.addEventListener(touchMove, onMouseMove);
        }
      }else{
        document.addEventListener(touchMove, onMouseMove);
      }
    }
    document.addEventListener(touchMove, checkUpDownScroll);

    //btn filter
    if(e.target.nodeName === "BUTTON"){
      e.target[( 'on'+touchEnd )] = e => {
        if((shiftX - e.clientX)**2 <= 225){
          
          let targetFilter = e.target.dataset.filter
          
          filterBtnList.forEach( item => {
            item.classList.remove('active')
          })
          e.target.classList.toggle('active')
          
          homeCourseCorusel.removeAllSlides()

          if(filterDate === targetFilter){
            filterDate = ''
            filterCardList.forEach(item => {
              item.parentNode.style.display = 'none'
            })
            e.target.classList.toggle('active')
          }else{
            if(targetFilter === 'all'){
              filterCardList.forEach(item => {
                item.parentNode.style.display = ''
                if(item.swiperWrap){
                  homeCourseCorusel.appendSlide (item.swiperWrap )
                }
              })
            }else{
              filterCardList.forEach(item => {
                if(item.dataset.filter.includes(targetFilter)){
                  item.parentNode.style.display = ''

                  if(item.swiperWrap){
                    homeCourseCorusel.appendSlide (item.swiperWrap )
                  }
                }else{
                  item.parentNode.style.display = 'none'
                }
              })
            }
            filterDate = targetFilter
          }

          //swipert.virtual.update()
          
        }
      }
    }
  }

  filter.onmousedown = e => { fnFitler(e, 'mouseup', 'mousemove') }
  filter.ontouchstart = e => { fnFitler(e, 'touchend', 'touchmove') }
};

// touchend

// touchcancel

// touchmove

// sending an application
document.getElementById('send-application').onsubmit = function sendApplication(event) {
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
