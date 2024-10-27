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

ScrollTrigger.create({
    trigger: '.Right-Fixed',
    start: 'top 20%',
    endTrigger: ".Left-Products",
    end: "bottom 100%",
    pin: true,
    pinSpacing:false,
})

let i =0
let btns = [...document.querySelectorAll('.menu__list .menu__link')];
let menuActive = document.getElementsByClassName('menu__active')
let sections = document.querySelectorAll('.Product')
btns.forEach(btn=>{
    let id
    btn.addEventListener('click',(e)=>{
    id = e.currentTarget.getAttribute('id')
    btns.forEach(btn=>{         
        btn.classList.remove('active');
     })
    e.preventDefault();
    let target = $(e.currentTarget).attr('href');
    console.log(target);
    
    lenis.scrollTo(`${target}`,{offset:-30})
    e.currentTarget.classList.add('active');
    })
})
btns[0].classList.add('active')
btns.map(btn=>{
    btn.setAttribute('href',`#pro-${i}`)
    btn.classList.add(`pro-${i}`)
    sections[i].setAttribute('id',`pro-${i}`)  
    i++
    if(i>= btns.length){
        return
    }
})
setTimeout(() => {
    lenis.on('scroll',()=>{
        let scrTop = window.pageYOffset
        sections.forEach(sec =>{
            let activePro
            let top = scrTop;
            let offset = sec.offsetTop-150;
            let height= sec.offsetHeight;
            let id =sec.getAttribute('id')
            if(top>= offset && top < offset + height){
            btns.forEach(btn=>{         
            btn.classList.remove('active');
           document.querySelector('.menu__list .menu__item a[href*='+id + ']').classList.add('active')
           menuActive[0].style.top =`calc(${(document.querySelector('.menu__list .menu__item a[href*='+id + ']').offsetTop)}px)` 
           activePro = document.querySelector('.menu__list .menu__item a[href*='+id + ']')
           let ParentScroll = document.querySelector('#scrollContainer .Inner .menu__list')
           let i =activePro.getBoundingClientRect()
           let n =ParentScroll.getBoundingClientRect();
            if(n.bottom < i.bottom){
            var scrollDiv = activePro.offsetTop;
            ParentScroll.scrollTo({ top: scrollDiv, behavior: 'smooth'});
            activePro.scrollTop -= i.bottom - n.bottom + 50
            }
            else if (n.top > i.top){
                var scrollDiv = activePro.offsetTop - 200;
                ParentScroll.scrollTo({ top: scrollDiv, behavior: 'smooth'});
                activePro.scrollTop += n.top - i.top + 200
            }
            
            })
      
         }                                       
 })                            
    })
}, 100);
