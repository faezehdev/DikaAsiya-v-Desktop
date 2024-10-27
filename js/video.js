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
header.classList.add('activeHeader')
document.addEventListener('mouseleave',()=>{
  toggleMenu.classList.remove('openMenu')
  toggle.classList.remove('openMenu')
  toggle.classList.remove('openMenu')
  document.querySelector('.toggle-menu').classList.remove('active')
  lenis.start()
      hoverMenu.classList.remove('openHover')
        headerItems.map(menu=>{
            return menu.classList.remove('active')
   })
  })
header.addEventListener('mouseleave',()=>{
  
    headerItems.map(menu=>{
        return menu.classList.remove('active')
    })
})
header.addEventListener('mouseenter',(e)=>{
  header.classList.add('activeHeader')
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
    // header.classList.remove('activeHeader')
})
for(let h=0;h<headerItems.length; h++){
  headerItems[h].setAttribute('id',`m-item-${h+1}`)
}
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
            // setTimeout(() => {
                mainIMG.classList.add('showIMG')
            // }, 100);
           
            })
        })
    }
    if(bottomMenu != null)   {
        bottomMenu.classList.add('show')
        mainIMG.classList.add('showIMG')

    }
    })
})
let isopen = false
toggle.addEventListener('click',()=>{
  if(!isopen){
    toggleMenu.classList.add('openMenu')
    toggle.classList.add('openMenu')
    header.classList.add('activeHeader')
    HoverMneu.classList.add('notActive')
    document.querySelector('.toggle-menu').classList.add('active')
    isopen = true
    lenis.stop()
  }
else{
  toggleMenu.classList.remove('openMenu')
  toggle.classList.remove('openMenu')
  header.classList.add('activeHeader')
  HoverMneu.classList.add('notActive')
  document.querySelector('.toggle-menu').classList.remove('active')
  isopen = false
  lenis.start()
}
  
})


header.classList.add('activeHeader')
window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st == 0) {
      $("header").addClass("activeHeader"); 
  }
   })
// VIDEO PLAY
let secs = document.querySelectorAll('.VideoBox')
let videos = document.querySelectorAll(' .Video')
console.log(videos);
videos.forEach(s=>{
s.setAttribute('data-IS',false)
})
videos.forEach(v=>{
v.addEventListener('click',function (event) {
  let Is = event.currentTarget.getAttribute('data-IS')
  console.log(Is);
  if(Is==='false'){
      $(event.currentTarget.parentElement).toggleClass('toggle');
      console.log(event.currentTarget.querySelector('video'));
      
      event.currentTarget.querySelector('video').play()
      event.currentTarget.setAttribute('data-IS',true)
  }
  else{
    console.log('umm');
      $(event.currentTarget.parentElement).toggleClass('toggle');
      event.currentTarget.querySelector('video').pause()
      event.currentTarget.setAttribute('data-IS',false)
  }
});
})