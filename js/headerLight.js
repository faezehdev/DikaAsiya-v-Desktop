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
let searchP = document.querySelector('.Search-popup')
let searchPBTN = document.querySelector('header .searchIconHeader')
let closeSBTN = document.querySelector('.Search-popup .Close')
let OtherItems = document.querySelectorAll('header .Right .Items .Item ')
let menuOP = false
let isopen = false
document.addEventListener('mouseleave',()=>{
  isopen = false
  searchP.classList.remove('openSearch')
  toggleMenu.classList.remove('openMenu')
  toggle.classList.remove('openMenu')
  toggle.classList.remove('openMenu')
  header.classList.remove('activeHeader')
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
// header.addEventListener('mouseenter',(e)=>{
//   header.classList.add('activeHeader')
// })
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
    header.classList.remove('activeHeader')
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
// if(!menuOP){
//     OtherItems.forEach(o=>{
//         o.addEventListener('mouseleave',()=>{
//             header.classList.remove('activeHeader')
//         })
//     }) 
//     menuOP = false
  
// }
toggle.addEventListener('click',()=>{
    menuOP = false
  if(!isopen){
    console.log('open menu');
    toggleMenu.classList.add('openMenu')
    toggle.classList.add('openMenu')
    header.classList.add('activeHeader')
    HoverMneu.classList.add('notActive')
    document.querySelector('.toggle-menu').classList.add('active')
    isopen = true
    lenis.stop()
  }
else{
    console.log('hide menu');
  toggleMenu.classList.remove('openMenu')
  toggle.classList.remove('openMenu')
//   header.classList.add('activeHeader')
// 
  header.classList.remove('activeHeader')
  HoverMneu.classList.add('notActive')
  document.querySelector('.toggle-menu').classList.remove('active')
  isopen = false
  lenis.start()
//   OtherItems.forEach(o=>{
//     o.addEventListener('mouseleave',()=>{
//         header.classList.remove('activeHeader')
//     })
// })
}
  
})



  // search popup
  searchPBTN.addEventListener('click',()=>{
    searchP.classList.add('openSearch')
    header.classList.add('activeHeader')
    let input = document.querySelector('.Search-popup input#inputHeader')
    let innerBtn = document.querySelector('.SearchIcon-1')
    innerBtn.addEventListener('click',()=>{
     
      console.log('val',input.value);
      if(input.value == ''){
          return
           }
         else{
             console.log('val',input.value);
             setTimeout(()=>{
            window.location.href = `/search.bc?q=${input.value}`
             },1000)}
        
    })
    input.addEventListener("keypress", function(event) {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {
        // Cancel the default action, if needed
        if(input.value != ''){
          event.preventDefault();
        console.log('clicked');
    console.log('val',input );
    console.log('val',input.value);
      window.location.href = `/search.bc?q=${input.value}`
    setTimeout(() => {
     
    }, 1000);
        }
    
    
      }
    })
  })
  closeSBTN.addEventListener('click',()=>{
    console.log('clll');
    
    header.classList.remove('activeHeader')
    searchP.classList.remove('openSearch')
  })

   