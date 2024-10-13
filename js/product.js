header.classList.add('activeHeader')
window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st == 0) {
      $("header").addClass("activeHeader"); 
  }
   })

const host = {
    settings: {
   'default.binding.regex': "\\{##([^#]*)##\\}",
}}
// gallery slider
let SwiperBanner= new Swiper ('.swiper-Gallery', {
    slidesPerView: 1,
    spaceBetween: 0,
    effect:'fade' ,
    fadeEffect: {
      crossFade: true,
    },
   speed:2000,
   pagination: {
    el: '.Section-1 .swiper-pagination',
          clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<span class="line"></span>' + '</span>';
      },
  },
  navigation: {
    nextEl: ".Section-1 .swiper-button-next",
    prevEl: ".Section-1 .swiper-button-prev",
  }
    }) 
 
// tab btn
$bc.setSource('db.btn1',true)
$bc.setSource('db.btn2',false)
let tabBtns = document.querySelectorAll('.Tab-Item')
tabBtns[0].classList.add('active')
tabBtns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
    for(let i =0 ; i <tabBtns.length ; i++){
        tabBtns[i].classList.remove('active')
    }
    e.currentTarget.classList.add('active')
    let ID = e.currentTarget.getAttribute('id')
    switch(ID){
        case 'tab-1':{
            console.log('tab 1');
            $bc.setSource('db.btn1',true)
            $bc.setSource('db.btn2',false)
            break
            
        }
        case 'tab-2':{
            console.log('tab 2');
            $bc.setSource('db.btn1',false)
            $bc.setSource('db.btn2',true)
            break
        }
    }
    })
})