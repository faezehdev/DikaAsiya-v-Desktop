gsap.registerPlugin(ScrollTrigger);
let aboutNav = document.querySelectorAll(".aboutNav ul li")


  
  const lenis = new Lenis()
  
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)


  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".aboutNav",
      start: "top top",
      end: "max",
      pin: true,
    //   markers: true
    }
  });



  aboutNav[0].classList.add("activeNav")
  for (let i = 0; i < aboutNav.length; i++) {
      const element = aboutNav[i];
      element.addEventListener("click" , function (params) {
        
              $(".aboutNav ul li").removeClass("activeNav")
              element.classList.add("activeNav")
              lenis.scrollTo(`.scroll-${i+1}` , {
                  offset : -122,   
              })
          
      })
  }




  Scrollbar.initAll(); 