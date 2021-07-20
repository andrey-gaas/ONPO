import Swiper from "/swiper.js";

window.onload = () => {
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
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

  let closeBtn = document.querySelector('#hide_menu')
  let openBtn = document.querySelector('#show_menu')
  let menuMobile = document.querySelector('#drop_menu_mobile')

  openBtn.addEventListener( 'click', () => {
    menuMobile.classList.toggle('activ')
  } )
  closeBtn.addEventListener( 'click', () => {
    menuMobile.classList.remove('activ')
  } )

  
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