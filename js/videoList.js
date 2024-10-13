header.classList.add('activeHeader')
window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st == 0) {
      $("header").addClass("activeHeader"); 
  }
   })
   let videos = document.querySelectorAll('.VideoList .Video')
   videos.forEach(video=>{
    gsap.to(video,{
        opacity:1,
        scrollTrigger:{
            trigger:video,
            start:'top 50%',
            end:'bottom bottom',
            stagger:.3
        }
       })
   })
