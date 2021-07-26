import Swiper from "/swiper.js";

window.onload = () => {
  const swiper = new Swiper(".swiper-container", {
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
  });

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

  let chekIncludeCategorie = (card, dataFilter)=>{
    let dataset = card.dataset.filter
    let res = false
    //console.log(dataset);
    for(let elem of dataFilter){
      if(dataset.includes(elem)){
        res = true
      }
    }
    return res
  }

  let filterBtnList = document.querySelectorAll('.filter_list .filter_item')
  let filterCardList = document.querySelectorAll('.article_home_courses .card')
  let filter = document.querySelector('.filter_list')
  let filterDate = 'all'

  if(filter.style.left === ''){
    filter.style.left = '0px'
  }

  let slideFilter = direction => {
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
        }, 150)
      }, 150)
      return
    }
    filter.style.transition = '.2s left'
    filter.style.left = left + 'px'
    setTimeout( ()=>{filter.style.transition = null}, 200)
  }
  let filterBtnControlBack = document.querySelector('.btn_back.btn_filter_control')
  let filterBtnControlNext = document.querySelector('.btn_next.btn_filter_control')

  filterBtnControlBack.addEventListener('click', () => slideFilter(1))
  filterBtnControlNext.addEventListener('click', () => slideFilter(-1))

  filter.onmousedown = e => {
    //console.log(fitlerBtn, filterCardList);
    let shiftX = e.clientX;
    

    let maxScrol = filter.parentNode.offsetWidth - filter.offsetWidth
    let leftStart = filter.style.left.slice(0, -2)

    let onMouseMove = e => {
      filter.style.left = (+leftStart) + (e.pageX - shiftX )+ 'px';
    }

    document.addEventListener('mouseup', () => {
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
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
    });

    document.addEventListener('mousemove', onMouseMove);

    //btn filter
    if(e.target.nodeName === "BUTTON"){
      e.target.onmouseup = e => {
        if((shiftX - e.clientX)**2 <= 225){
          
          let targetFilter = e.target.dataset.filter
          //let indexElem = filterDate.indexOf(targetFilter)
          
          filterBtnList.forEach( item => {
            item.classList.remove('active')
          })
          e.target.classList.toggle('active')
          
          if(filterDate === targetFilter){
            filterDate = ''
            filterCardList.forEach(item => {
              item.style.display = 'none'
            })
            e.target.classList.toggle('active')
          }else{
            if(targetFilter === 'all'){
              filterCardList.forEach(item => {
                item.style.display = ''
              })
            }else{
              filterCardList.forEach(item => {
                if(item.dataset.filter.includes(targetFilter)){
                  item.style.display = ''
                }else{
                  item.style.display = 'none'
                }
              })
            }
            filterDate = targetFilter
          }
            // if( indexElem === -1){

            //   filterDate.push(targetFilter)
            // }else{
            //   filterDate.splice( indexElem, 1)
            // }

            // filterCardList.forEach( item => {
            //   if(chekIncludeCategorie(item,filterDate )){
            //     item.style.display = ''
            //   }else{
            //     item.style.display = 'none'
            //   }
            // })
        }
      }
    }
  }

};


// function doExec(){
//   var block=document.createElement('div');
//   block.id='workimage';
//   var image=document.createElement('img');
//   image.src='http://javascript.ru/forum/images/ca_serenity/misc/logo.gif';
//   block.appendChild(image);
//   var obj=document.getElementById('img_container');
//   obj.appendChild(block);
// }

  // let btn = document.querySelector('#addimg')
  // let div = document.querySelector('.addimg')
  // let arr = []
  // console.log(btn, div);
  // btn.onclick = ()=>{
  //   console.log('click')
  //   let img = document.createElement('img')
  //   img.src = "https://cdn-images-1.medium.com/max/914/1*Cc17I5suUcQuka6bG3d2rQ.png"
  //   arr.push(img)
  //   //div.appendChild(img)
  // }