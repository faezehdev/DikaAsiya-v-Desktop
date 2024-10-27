

var elements = document.querySelectorAll('.ProCat');
  var products = document.querySelector('.ProductCats')
  var groupSize = 5;
  var groupCount = Math.ceil(elements.length / groupSize);
  for (var i = 0; i < groupCount; i++) {
  var startIndex = i * groupSize;
  var endIndex = startIndex + groupSize;
  var groupElements = Array.from(elements).slice(startIndex, endIndex);
  var groupDiv = document.createElement('div');
  groupDiv.className = 'Row';
  let groupInnerDiv = document.createElement('div')
  groupInnerDiv.className = 'innerRow'
  groupElements.forEach(function (element,index) {
  groupDiv.appendChild(element);
  if(index > 0){
      groupDiv.appendChild(groupInnerDiv)
      groupInnerDiv.appendChild(element)
  }

  });
  
  products.appendChild(groupDiv)
}
window.addEventListener("scroll", function(){
  var st = window.pageYOffset || document.documentElement.scrollTop; 
  console.log(st);
  if (st == 0) {
    $("header").addClass("activeHeader"); 
}
 })
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

