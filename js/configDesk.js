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