

var lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop) {
    // console.log("over");

    $("header").addClass("goDown");
    $("header").removeClass("goTop");
    $(".Search-popup").addClass("goDown");
    hoverMenu.classList.remove('openHover')
    if(document.querySelector('main.ProductList-C')){
      document.querySelector('.Right-Fixed').classList.add('goDown')
    }
    
} else if (st < lastScrollTop) {
    // upscroll code
    $("header").addClass("goTop");
    $("header").removeClass("goDown");
    $(".Search-popup").removeClass("goDown");
        // console.log("less");
        if(document.querySelector('main.ProductList-C')){
          document.querySelector('.Right-Fixed').classList.remove('goDown')
  
        }
   
   } 
   lastScrollTop = st <= 0 ? 0 : st;
}, false);

// DESKTOP
function switchScroll() {
    if (flag != true){
      enable_scroll();
    } else {
      disable_scroll();
    }
  }
    function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  }
  function keydown(e) {
    var keys = [32,33,34,35,36,37,38,39,40];
    for (var i = keys.length; i--;) {
      if (e.keyCode === keys[i]) {
        preventDefault(e);
        return;
      }
    }
  }
  function wheel(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
  function disable_scroll() {
    if (document.addEventListener) {
      document.addEventListener('wheel', wheel, false);
      document.addEventListener('mousewheel', wheel, false);
      document.addEventListener('DOMMouseScroll', wheel, false);
    }
    else {
      document.attachEvent('onmousewheel', wheel);
    }
    document.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
    
    x = window.pageXOffset || document.documentElement.scrollLeft,
    y = window.pageYOffset || document.documentElement.scrollTop,
    window.onscroll = function() {
      window.scrollTo(x, y);
    };
    // document.body.style.overflow = 'hidden'; // CSS
    disable_scroll_mobile();
  }
  function enable_scroll() {
    if (document.removeEventListener) {
      document.removeEventListener('wheel', wheel, false);
      document.removeEventListener('mousewheel', wheel, false);
      document.removeEventListener('DOMMouseScroll', wheel, false);
    }
    document.onmousewheel = document.onmousewheel = document.onkeydown = null;
    window.onscroll = function() {};
    // document.body.style.overflow = 'auto'; // CSS
    enable_scroll_mobile();
  }
  
  // MOBILE
  function disable_scroll_mobile(){
    document.addEventListener('touchmove', preventDefault, false);
  }
  function enable_scroll_mobile(){
    document.removeEventListener('touchmove', preventDefault, false);
  }
  const lenis =  new Lenis({
    smoothWheel: true,
    wheelMultiplier:2
  });


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)

  // // search popup
  // let searchP = document.querySelector('.Search-popup')
  // let searchPBTN = document.querySelector('header .searchIconHeader')
  // let closeSBTN = document.querySelector('.Search-popup .Close')
  // searchPBTN.addEventListener('click',()=>{
  //   searchP.classList.add('openSearch')
  //   header.classList.add('activeHeader')
  //   let input = document.querySelector('.Search-popup input#inputHeader')
  //   let innerBtn = document.querySelector('.SearchIcon-1')
  //   innerBtn.addEventListener('click',()=>{
     
  //     console.log('val',input.value);
  //     if(input.value == ''){
  //         return
  //          }
  //        else{
  //            console.log('val',input.value);
  //            setTimeout(()=>{
  //           window.location.href = `/search.bc?q=${input.value}`
  //            },1000)}
        
  //   })
  //   input.addEventListener("keypress", function(event) {
  //     // If the user presses the "Enter" key on the keyboard
  //     if (event.key === "Enter") {
  //       // Cancel the default action, if needed
  //       if(input.value != ''){
  //         event.preventDefault();
  //       console.log('clicked');
  //   console.log('val',input );
  //   console.log('val',input.value);
  //     window.location.href = `/search.bc?q=${input.value}`
  //   setTimeout(() => {
     
  //   }, 1000);
  //       }
    
    
  //     }
  //   })
  // })
  // closeSBTN.addEventListener('click',()=>{
  //   searchP.classList.remove('openSearch')
  // })
