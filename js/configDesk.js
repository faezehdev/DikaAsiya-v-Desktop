//header hover bottom Menu
let bottomMenu
let header = document.querySelector('header')
let menuInners = [...document.querySelectorAll('.menuInner')]
let headerItems = [...document.querySelectorAll('header .hover-item')]
let mainIMG
let catInnerItems
let bg
let toggle = document.querySelector('header .toggle-inner')
let toggleMenu = document.querySelector('.RightFixed-Menu')
let hoverMenu = document.querySelector('.Hoverd-Menu-C')
let otherItem =document.querySelectorAll('.Header .Right > .Items .Item')
let HoverMneu =document.querySelector('.Hoverd-Menu-C')
header.addEventListener('mouseleave',()=>{
    headerItems.map(menu=>{
        return menu.classList.remove('active')
    })
})
otherItem.forEach(u=>{
    u.addEventListener('mouseenter',(e)=>{
        hoverMenu.classList.remove('openHover')
        headerItems.map(menu=>{
            return menu.classList.remove('active')
        })
    })
})
hoverMenu.addEventListener('mouseleave',(e)=>{
    hoverMenu.classList.remove('openHover')
})
headerItems.forEach(item=>{
  
    item.addEventListener('mouseenter',(e)=>{
    hoverMenu.classList.add('openHover')
    let hashID = e.currentTarget.getAttribute('id')
    headerItems.map(menu=>{
        return menu.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
    bottomMenu = document.querySelector(`.Hoverd-Menu-C #${hashID}`)
    menuInners.map(menu=>{
        return menu.classList.remove('show')
    })
    if(bottomMenu){
        mainIMG = bottomMenu.querySelector('.Cat-Img')
        catInnerItems = bottomMenu.querySelectorAll('.ProCats .cat')
        menuInners.map(menu=>{
            return menu.classList.remove('show')
        })
        catInnerItems.forEach(i=>{
            i.addEventListener('mouseenter',(event)=>{
            bg = event.currentTarget.getAttribute('data-bg')
            console.log(bg);
            mainIMG.classList.remove('showIMG')
            mainIMG.querySelector('img').setAttribute('src',bg)
            setTimeout(() => {
                mainIMG.classList.add('showIMG')
            }, 100);
           
            })
        })
    }
    if(bottomMenu != null)   {
        bottomMenu.classList.add('show')
        mainIMG.classList.add('showIMG')

    }
    })
})
toggle.addEventListener('click',()=>{
    toggleMenu.classList.toggle('openMenu')
    toggle.classList.toggle('openMenu')
    header.classList.toggle('activeHeader')
    HoverMneu.classList.toggle('notActive')
    document.querySelector('.toggle-menu').classList.toggle('active')
})



var lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop) {
    // console.log("over");

    $("header").addClass("goDown");
    $("header").removeClass("goTop");
    // if(document.querySelector('main.ProductList-C')){
    //   document.querySelector('.Right-Fixed').classList.remove('goDown')
    // }
    
} else if (st < lastScrollTop) {
    // upscroll code
    $("header").addClass("goTop");
    $("header").removeClass("goDown");
        // console.log("less");
        // if(document.querySelector('main.ProductList-C')){
        //   document.querySelector('.Right-Fixed').classList.add('goDown')
        // }
   
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
  const lenis = new Lenis()


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)