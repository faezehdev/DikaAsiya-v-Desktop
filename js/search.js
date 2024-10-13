
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

  // search popup
  let searchP = document.querySelector('.Search-popup')
  let searchPBTN = document.querySelector('header .searchIconHeader')
  let closeSBTN = document.querySelector('.Search-popup .Close')
  searchPBTN.addEventListener('click',()=>{
    searchP.classList.add('openSearch')
    let input = document.querySelector('.Search-popup input#inputHeader')
    console.log('val',input.value);
    if(input.value == ''){
        return
         }
       else{
           console.log('val',input.value);
           setTimeout(()=>{
          window.location.href = `/search.bc?q=${input.value}`
           },1000)}
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
    searchP.classList.remove('openSearch')
  })
  header.classList.add('activeHeader')






  
