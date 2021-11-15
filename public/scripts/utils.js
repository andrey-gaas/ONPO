import Swiper from "/scripts/swiper.js";

export function initFormSelect (selectorNode){
  let formWithSelect = document.querySelector(selectorNode)
  // let selectCourse = []

  formWithSelect.onclick = e => {

    if(e.target.classList.contains('select_input')){
      e.stopPropagation()
      let selectInput = e.target
      let wrap = e.target.parentNode.querySelector('.wrap_castom_scrollbar')

      wrap.onclick = e => {
        e.stopPropagation()
        if(e.target.nodeName === 'LABEL'){
          selectInput.innerHTML = e.target.innerText
        }
        // if(e.target.nodeName === 'LABEL'){
        //   if(selectCourse.indexOf(e.target.innerText) !== -1){
        //     selectCourse.splice( selectCourse.indexOf(e.target.innerText), 1)
        //   }else{
        //     selectCourse.push(e.target.innerText)
        //   }
        //   if(selectCourse.length === 0){
        //     selectInput.innerHTML = 'Наименование образовательной прогрммы'
        //   }else{
        //     selectInput.innerHTML = selectCourse
        //   }
        // }

      }

      let closeSelectWindow = ()=>{
        wrap.onclick = null
        document.removeEventListener('click', closeSelectWindow)
        e.target.parentNode.classList.remove('active')
      }
      document.addEventListener('click', closeSelectWindow)
      e.target.parentNode.classList.toggle('active')
    }
  }

  //автоматически отображем выбранный ранее вариант.
  let listInputsWithSelect = formWithSelect.course
  if(!formWithSelect.course.length){
    listInputsWithSelect = [formWithSelect.course]
  }

  for(let input of listInputsWithSelect){
    if(input.checked){
      let text = input.parentNode.querySelector('label').innerText
      input.parentNode.parentNode.parentNode.parentNode.querySelector('.select_input').innerText = text
    }
  }

}

export function initBtnScrollToTop (selectorNode){
  let btnScrollToTop = document.querySelector(selectorNode)
  btnScrollToTop.addEventListener( 'click', ()=>{ 

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })
}

export function initDropMenu (selectCloseBtn, selectOpenBtn, selectMenuMobile){
  let closeBtn = document.querySelector(selectCloseBtn)
  let openBtn = document.querySelector(selectOpenBtn)
  let menuMobile = document.querySelector(selectMenuMobile)

  openBtn.addEventListener( 'click', () => {
    menuMobile.classList.toggle('activ')
  } )
  closeBtn.addEventListener( 'click', () => {
    menuMobile.classList.remove('activ')
  } )
}

export function initCoruselDefoult(selectCorusel){

  window.Swiper = window.Swiper ? window.Swiper : {}

  window.Swiper.setting = {
    mobile:{slidesPerView: 1},
    tablet:{slidesPerView: 2},
    laptop:{slidesPerView: 3},
  }

  window.Swiper.homeDeffCorusel = new Swiper(selectCorusel, {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: window.Swiper.setting.mobile.slidesPerView,
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type:'custom',
      renderCustom: (swiper, current, total) => {
        // let prev = ((current+total-1)%(total)) === 0 ? total : ((current+total-1)%(total)) 
        // let next = (current+1)%(total) === 0 ? total : (current+1)%(total)
        return `<div class="paggination_number">
                  <span class="paggination_number_prev">${((current+total-1)%(total)) === 0 ? total : ((current+total-1)%(total)) }</span>
                  <span class="paggination_number_currnet">${current}</span>
                  <span class="paggination_number_next">${(current+1)%(total) === 0 ? total : (current+1)%(total)}</span>
                </div>`
      },
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
  let homeDeffCorusel = window.Swiper.homeDeffCorusel


  //media

  const mediaQueryTablet = window.matchMedia('(min-width: 728px)')
  const mediaQueryTabletMax = window.matchMedia('(max-width: 1199px)')
  const mediaQueryLaptop = window.matchMedia('(min-width: 1200px)')
  const mediaQueryMobileMax = window.matchMedia('(max-width: 727px)')

  function mediaMobile(e){
    if (e.matches) {
      if(Array.isArray(homeDeffCorusel)){
        for(let i = 0; i < homeDeffCorusel.length; i++){
          homeDeffCorusel[i].destroy(true, true)
        }
      }else{
        homeDeffCorusel.destroy(true, true)
      }

      window.Swiper = window.Swiper ? window.Swiper : {}
      window.Swiper.homeDeffCorusel = new Swiper(selectCorusel, {
        // Optional parameters
        direction: "horizontal",
        slidesPerView: window.Swiper.setting.mobile.slidesPerView,
        loop: true,
    
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          type:'custom',
          renderCustom: (swiper, current, total) => {
  
            // let prev = ((current+total-1)%(total)) === 0 ? total : ((current+total-1)%(total)) 
            // let next = (current+1)%(total) === 0 ? total : (current+1)%(total)
            return `<div class="paggination_number">
                      <span class="paggination_number_prev">${((current+total-1)%(total)) === 0 ? total : ((current+total-1)%(total)) }</span>
                      <span class="paggination_number_currnet">${current}</span>
                      <span class="paggination_number_next">${(current+1)%(total) === 0 ? total : (current+1)%(total)}</span>
                    </div>`
          },
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
      homeDeffCorusel = window.Swiper.homeDeffCorusel
    }
  }

  function mediaTablet(e){
    if (e.matches) {
      if(Array.isArray(homeDeffCorusel)){
        for(let i = 0; i < homeDeffCorusel.length; i++){
          homeDeffCorusel[i].destroy(true, true)
        }
      }else{
        homeDeffCorusel.destroy(true, true)
      }

      window.Swiper = window.Swiper ? window.Swiper : {}
      window.Swiper.homeDeffCorusel = new Swiper(selectCorusel, {
        // Optional parameters
        direction: "horizontal",
        slidesPerView: window.Swiper.setting.tablet.slidesPerView,
        loop: true,
    
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          type:'custom',
          renderCustom: (swiper, current, total) => {
  
            // let prev = ((current+total-1)%(total)) === 0 ? total : ((current+total-1)%(total)) 
            // let next = (current+1)%(total) === 0 ? total : (current+1)%(total)
            return `<div class="paggination_number">
                      <span class="paggination_number_prev">${((current+total-1)%(total)) === 0 ? total : ((current+total-1)%(total)) }</span>
                      <span class="paggination_number_currnet">${current}</span>
                      <span class="paggination_number_next">${(current+1)%(total) === 0 ? total : (current+1)%(total)}</span>
                    </div>`
          },
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
      homeDeffCorusel = window.Swiper.homeDeffCorusel
    }
  }

  function mediaLaptop(e){
    if (e.matches) {
      if(Array.isArray(homeDeffCorusel)){
        for(let i = 0; i < homeDeffCorusel.length; i++){
          homeDeffCorusel[i].destroy(true, true)
        }
      }else{
        homeDeffCorusel.destroy(true, true)
      }

      window.Swiper = window.Swiper ? window.Swiper : {}
      window.Swiper.homeDeffCorusel = new Swiper(selectCorusel, {
        // Optional parameters
        direction: "horizontal",
        slidesPerView: window.Swiper.setting.laptop.slidesPerView,
        loop: true,
    
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          type:'custom',
          renderCustom: (swiper, current, total) => {
  
            // let prev = ((current+total-1)%(total)) === 0 ? total : ((current+total-1)%(total)) 
            // let next = (current+1)%(total) === 0 ? total : (current+1)%(total)
            return `<div class="paggination_number">
                      <span class="paggination_number_prev">${((current+total-1)%(total)) === 0 ? total : ((current+total-1)%(total)) }</span>
                      <span class="paggination_number_currnet">${current}</span>
                      <span class="paggination_number_next">${(current+1)%(total) === 0 ? total : (current+1)%(total)}</span>
                    </div>`
          },
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
      homeDeffCorusel = window.Swiper.homeDeffCorusel

    }
  }

  

  mediaQueryTablet.addListener(mediaTablet)
  mediaTablet(mediaQueryTablet)
  mediaQueryTabletMax.addListener(mediaTablet)
  mediaTablet(mediaQueryTabletMax)
  
  mediaQueryLaptop.addListener(mediaLaptop)
  mediaLaptop(mediaQueryLaptop)

  mediaQueryMobileMax.addListener(mediaMobile)
  mediaMobile(mediaQueryMobileMax)
}

export function initCoruselFromFilter(selectSlide, selectFilter, selectFilterCards, selectFilterBtnList){
  let homeCourseCorusel = document.querySelector(selectSlide)
  if(homeCourseCorusel){

    //window.Swiper = window.Swiper ? window.Swiper : {}
    //window.Swiper.
    homeCourseCorusel = new Swiper(selectSlide, {
      // Optional parameters
      direction: "horizontal",
      slidesPerView: 1,
      loop: true,
  
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        type:'custom',
        renderCustom: (swiper, current, total) => {

          // let prev = ((current+total-1)%(total)) === 0 ? total : ((current+total-1)%(total)) 
          // let next = (current+1)%(total) === 0 ? total : (current+1)%(total)
          return `<div class="paggination_number">
                    <span class="paggination_number_prev">${((current+total-1)%(total)) === 0 ? total : ((current+total-1)%(total)) }</span>
                    <span class="paggination_number_currnet">${current}</span>
                    <span class="paggination_number_next">${(current+1)%(total) === 0 ? total : (current+1)%(total)}</span>
                  </div>`
        },
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
    //homeCourseCorusel = window.Swiper.homeCourseCorusel
  }

  //filter

  let filterBtnList = document.querySelectorAll(selectFilterBtnList)
  let filterCardList = document.querySelectorAll(selectFilterCards)
  let filter = document.querySelector(selectFilter)
  let filterDate = 'all'
  let isFilterWidthBig = (filter.clientWidth > filter.parentNode.clientWidth)

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
    if(isBtnControlWorks || !isFilterWidthBig){ return }
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
      document.removeEventListener( touchEnd, stopMove);
      document.removeEventListener( touchMove, checkUpDownScroll);
      document[( 'on'+touchEnd )] = null;
    }

    if(isFilterWidthBig){
      document.addEventListener(touchEnd, stopMove);
    }

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

    if(isFilterWidthBig){
      document.addEventListener(touchMove, checkUpDownScroll);
    }

    //btn filter
    if(e.target.nodeName === "BUTTON"){
      e.target[( 'on'+touchEnd )] = e => {
        if((shiftX - e.clientX)**2 <= 225){
          
          let targetFilter = e.target.dataset.filter
          
          filterBtnList.forEach( item => {
            item.classList.remove('active')
          })
          e.target.classList.toggle('active')
          if(homeCourseCorusel){
            homeCourseCorusel.removeAllSlides()
          }

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
                if( (item.dataset.filter.indexOf(targetFilter) !== -1) &&
                    (item.dataset.filter.indexOf(targetFilter) === 0 || 
                    item.dataset.filter.indexOf(' ' + targetFilter) !== -1)
                ){
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
        }
      }
    }
  }


  
  filter.onmousedown = e => { fnFitler(e, 'mouseup', 'mousemove') }
  filter.ontouchstart = e => { fnFitler(e, 'touchend', 'touchmove') }
  

  const mediaQueryTablet = window.matchMedia('(min-width: 728px)')
  const mediaQueryTabletMax = window.matchMedia('(max-width: 1199px)')
  const mediaQueryLaptop = window.matchMedia('(min-width: 1200px)')
  const mediaQueryMobileMax = window.matchMedia('(max-width: 727px)')

  function mediaMobile(e){
    if (e.matches) {
      isFilterWidthBig = (filter.clientWidth > filter.parentNode.clientWidth)
      filter.style.transition = '.2s left'
      filter.style.left = '0px'
      setTimeout( ()=>{filter.style.transition = null}, 200)
    }
  }

  function mediaTablet(e){
    if (e.matches) {
      isFilterWidthBig = (filter.clientWidth > filter.parentNode.clientWidth)
      filter.style.transition = '.2s left'
      filter.style.left = '0px'
      setTimeout( ()=>{filter.style.transition = null}, 200)
    }
  }

  function mediaLaptop(e){
    if (e.matches) {
      isFilterWidthBig = (filter.clientWidth > filter.parentNode.clientWidth)
      filter.style.transition = '.2s left'
      filter.style.left = '0px'
      setTimeout( ()=>{filter.style.transition = null}, 200)
    }
  }

  mediaQueryTablet.addListener(mediaTablet)
  mediaTablet(mediaQueryTablet)
  mediaQueryTabletMax.addListener(mediaTablet)
  mediaTablet(mediaQueryTabletMax)
  
  mediaQueryLaptop.addListener(mediaLaptop)
  mediaLaptop(mediaQueryLaptop)

  mediaQueryMobileMax.addListener(mediaMobile)
  mediaMobile(mediaQueryMobileMax)
}


export function initReviewsCommentShow(nodeReviewList){
  let list = document.querySelector(nodeReviewList)
  list.onclick = e => {
    if(e.target.nodeName === 'BUTTUN' && e.target.className === 'toogle_show_review'){
      let wrap = e.target.parentNode.parentNode.querySelector('.wpra_text')
      if (wrap.style.maxHeight){
        e.target.textContent = 'Развернуть'
        wrap.style.maxHeight = null;
      } else {
        e.target.textContent = 'Свернуть'
        wrap.style.maxHeight = wrap.scrollHeight + 10 + "px";
      }
    }
  }

}

export function postData(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch(error => {
      console.log(error.message);
      return new Error(error.message);
    });
}

export function showPopup (showText){

  let nodeApplicationPopup = document.createElement('div')
  nodeApplicationPopup.classList.add('application-popup')
  nodeApplicationPopup.innerHTML =
    `
      <div class="popup-container">
        <button><img src="/image/icons/close.svg" alt="" /></button>
        <span class="text"></span>
      </div>
    `
  
  document.body.append(nodeApplicationPopup);
  

  nodeApplicationPopup.querySelector('span').innerText = showText
  nodeApplicationPopup.classList.add('visible');

  const buttonClosePopup =  nodeApplicationPopup.querySelector('button')

  buttonClosePopup.onclick = function() {
    nodeApplicationPopup.classList.remove('visible')

    buttonClosePopup.onclick = null
    nodeApplicationPopup.remove()
  }
}

export function sendingAnAplication(nodeId){

  document.querySelector(nodeId).onsubmit = function sendApplication(event) {
    event.preventDefault();
    const form = event.target;
    let data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      location: form.location.value,
      course: form.course.value,
      wishes: form.wishes.value,
    }

    // POST APPLICATION
    postData('/api/application', data)
      .then(result => {
        if (result.success) {
          showPopup('Заявка на обучение принята!')
        } else {
          showPopup('Возникла ошибка при создании заявки, попробуйте еще раз')
        }
      })
      .catch(error => {
        console.log(error.message);
        showPopup('Возникла ошибка при создании заявки, попробуйте еще раз')
      });

    // result.then(res => console.log(res))
  }
}

export function showGlass(selectCorusel){

  
  let btnWrap = document.querySelector('.button-icon.glass')
  let btnColorBW = document.querySelector('.glass_btn#color_bw')
  let btnColorWB = document.querySelector('.glass_btn#color_wb')
  let btnColorDeff = document.querySelector('.glass_btn#color_deff')
  let btnText150 = document.querySelector('.glass_btn.text_150')
  let btnText125 = document.querySelector('.glass_btn.text_125')
  let btnTextNorm = document.querySelector('.glass_btn.text_norm')
  let btnNoImg = document.querySelector('#no_img_chekbox')
  let btnSpaceDeff = document.querySelector('#letter_space_deff')
  let btnSpaceX2 = document.querySelector('#letter_space_x_2')
  let btnSpaceX3 = document.querySelector('#letter_space_x_3')
  let btnDeffSetting = document.querySelector('#deff_btn')
  
  let isX150 = false

  if(localStorage.getItem('style_color') === 'WB'){
    document.body.classList.add('white_black')
  }
  if(localStorage.getItem('style_color') === 'BW'){
    document.body.classList.add('black_white')
  }
  if(localStorage.getItem('style_text') === 'x_150'){
    document.body.classList.add('x_150')
    isX150 = true
    reRenderDeffCorusel(selectCorusel, {deff:2,tab:2,mob:1})
  }
  if(localStorage.getItem('style_text') === 'x_125'){
    document.body.classList.add('x_125')
    isX150 = true
    reRenderDeffCorusel(selectCorusel, {deff:2,tab:2,mob:1})
  }
  if(localStorage.getItem('style_letter_space') === 'X2'){
    document.body.classList.add('letter_space_x2')
  }
  if(localStorage.getItem('style_letter_space') === 'X3'){
    document.body.classList.add('letter_space_x3')
  }

  btnWrap.onclick= _=>{
    document.querySelector('.glass__wrap').classList.toggle('active')
  }

  btnColorBW.onclick= _=>{
    document.body.classList.remove('white_black')
    document.body.classList.toggle('black_white')

    if(localStorage.getItem('style_color') === 'BW'){
      localStorage.removeItem('style_color')
    }else{
      localStorage.setItem('style_color', 'BW')
    }
  }

  btnSpaceDeff.onclick= _=>{
    document.body.classList.remove('letter_space_x2')
    document.body.classList.remove('letter_space_x3')
    
    localStorage.removeItem('style_letter_space')
    
  }
  btnSpaceX2.onclick= _=>{
    document.body.classList.remove('letter_space_x3')
    document.body.classList.toggle('letter_space_x2')

    if(localStorage.getItem('style_letter_space') === 'X2'){
      localStorage.removeItem('style_letter_space')
    }else{
      localStorage.setItem('style_letter_space', 'X2')
    }
  }
  btnSpaceX3.onclick= _=>{
    document.body.classList.remove('letter_space_x2')
    document.body.classList.toggle('letter_space_x3')

    if(localStorage.getItem('style_letter_space') === 'X3'){
      localStorage.removeItem('style_letter_space')
    }else{
      localStorage.setItem('style_letter_space', 'X3')
    }
  }

  btnColorWB.onclick= _=>{
    document.body.classList.remove('black_white')
    document.body.classList.toggle('white_black')

    if(localStorage.getItem('style_color') === 'WB'){
      localStorage.removeItem('style_color')
    }else{
      localStorage.setItem('style_color', 'WB')
    }
  }

  btnColorDeff.onclick= _=>{
    document.body.classList.remove('white_black')
    document.body.classList.remove('black_white')
    localStorage.removeItem('style_color')
  }

  btnDeffSetting.onclick= _=>{
    document.body.classList.remove('white_black')
    document.body.classList.remove('black_white')
    localStorage.removeItem('style_color')

    document.body.classList.remove('letter_space_x2')
    document.body.classList.remove('letter_space_x3')
    localStorage.removeItem('style_letter_space')

    isX150 = false
    document.body.classList.remove('x_150')
    document.body.classList.remove('x_125')
    textFunction(true)
    localStorage.removeItem('style_text')

    localStorage.removeItem('style_img')
    btnNoImg.classList.remove('active')
    document.body.classList.remove('no_img')
  }
  let textFunction = isX =>{
    if(isX){
      if(window.Swiper){
        window.Swiper.setting.laptop.slidesPerView = 3
      }
      if(selectCorusel){
        reRenderDeffCorusel(selectCorusel, {deff:3,tab:2,mob:1})
      }
    }else{
      if(window.Swiper){
        window.Swiper.setting.laptop.slidesPerView = 2
      }
      if(selectCorusel){
        reRenderDeffCorusel(selectCorusel, {deff:2,tab:2,mob:1} )
      }
    }
  }

  btnText150.onclick =_=>{
    document.body.classList.remove('x_125')
    document.body.classList.toggle('x_150')
    if(localStorage.getItem('style_text') === 'x_150'){
      localStorage.removeItem('style_text')
      textFunction(true)
      isX150 = false
    }else{
      localStorage.setItem('style_text', 'x_150')
      if(isX150 === false){
        textFunction(false)
        isX150 = true
      }
    }
  } 

  btnText125.onclick = _=>{
    document.body.classList.remove('x_150')
    document.body.classList.toggle('x_125')
    
    if(localStorage.getItem('style_text') === 'x_125'){
      localStorage.removeItem('style_text')
      textFunction(true)
      isX150 = false
    }else{
      localStorage.setItem('style_text', 'x_125')
      if(isX150 === false){
        textFunction(false)
        isX150 = true
      }
    }
  }

  btnTextNorm.onclick= _=>{
    isX150 = false
    document.body.classList.remove('x_150')
    document.body.classList.remove('x_125')
    textFunction(true)

    localStorage.removeItem('style_text')
  }
  function reRenderDeffCorusel(selectCorusel, setting){
    if(window.Swiper){
      if(Array.isArray( window.Swiper.homeDeffCorusel )){
        for(let i = 0; i <  window.Swiper.homeDeffCorusel.length; i++){
          window.Swiper.homeDeffCorusel[i].destroy(true, true)
        }
      }else{
        window.Swiper.homeDeffCorusel.destroy(true, true)
      }
    
      let slidesPerView = setting.deff
      if( document.body.offsetWidth < 728 ){ slidesPerView = setting.mob }
      if( document.body.offsetWidth < 1200 ){ slidesPerView = setting.tab }
      window.Swiper.homeDeffCorusel = new Swiper(selectCorusel, {
        // Optional parameters
        direction: "horizontal",
        slidesPerView,
        loop: true,
    
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          type:'custom',
          renderCustom: (swiper, current, total) => {
    
            // let prev = ((current+total-1)%(total)) === 0 ? total : ((current+total-1)%(total)) 
            // let next = (current+1)%(total) === 0 ? total : (current+1)%(total)
            return `<div class="paggination_number">
                      <span class="paggination_number_prev">${((current+total-1)%(total)) === 0 ? total : ((current+total-1)%(total)) }</span>
                      <span class="paggination_number_currnet">${current}</span>
                      <span class="paggination_number_next">${(current+1)%(total) === 0 ? total : (current+1)%(total)}</span>
                    </div>`
          },
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
    }
  }

  btnNoImg.onclick = _=>{
    btnNoImg.classList.toggle('active')
    document.body.classList.toggle('no_img')

    if(localStorage.getItem('style_img') === 'no_image'){
      localStorage.removeItem('style_img')
    }else{
      localStorage.setItem('style_img', 'no_image')
    }
  }
}

