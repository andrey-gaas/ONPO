import { initBtnScrollToTop, initDropMenu } from "/scripts/utils.js"

window.onload = function() {
  initDropMenu('#hide_menu', '#show_menu', '#drop_menu_mobile');

  initBtnScrollToTop('#scrollToTop');

  //nav menu
  let menu = document.querySelector('.links-container') 
  let sectionList = document.querySelectorAll('div.paper')
  let heightList = []
  sectionList.forEach( elem => {
    heightList.push(elem.getBoundingClientRect().top + pageYOffset)
    heightList.push(elem.getBoundingClientRect().bottom + pageYOffset)
  } )

  document.onscroll = function(){
    for(let i = 0; i < heightList.length / 2; i++){
      if( heightList[i*2] < (window.pageYOffset + window.innerHeight/2) && 
          heightList[i*2+1] > (window.pageYOffset + window.innerHeight/2) ){

        if( menu.children[0].children[i].classList.contains('active')){ break }
        for(let elem of menu.children[0].children){
          elem.classList.remove('active')
        }
        menu.children[0].children[i].classList.add('active')
      }
    }
  }

   //scroll menu

  menu.onclick = e =>{
    if(e.target.nodeName === 'A' && e.target.hash && e.target.hash[0] === '#'){

      heightList = []
      sectionList.forEach( elem => {
        heightList.push(elem.getBoundingClientRect().top + pageYOffset)
        heightList.push(elem.getBoundingClientRect().bottom + pageYOffset)
      } )
      e.preventDefault()
      let scrollTo = (document.querySelector(e.target.hash)).getBoundingClientRect().top + pageYOffset - (window.innerHeight*0.3)
      
      window.scrollTo({
        top: scrollTo,
        behavior: "smooth"
    });
    }
  }

  //toggle document list

  let listsDocuments = document.querySelectorAll('.document_list')
  listsDocuments[0].classList.add('active')
  let btnToggleListDocumentContainer = document.querySelector('.buttons_toggle_list')

  btnToggleListDocumentContainer.onclick = e => {
    if(e.target.nodeName === 'BUTTON'){
      listsDocuments.forEach( item => {
        item.classList.remove('active')

        if(item.dataset.key === e.target.dataset.key){
          item.classList.add('active')
        }
      })
      btnToggleListDocumentContainer.childNodes.forEach( item => {
        if(item.nodeName === 'BUTTON'){
          item.classList.remove('color_red')
        }
      })
      e.target.classList.add('color_red')

    }
  }
};
