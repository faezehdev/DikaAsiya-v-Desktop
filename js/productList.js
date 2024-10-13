header.classList.add('activeHeader')
window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st == 0) {
      $("header").addClass("activeHeader"); 
  }
   })

ScrollTrigger.create({
    trigger: '.Right-Fixed',
    start: 'top 10%',
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
