gsap.registerPlugin(ScrollTrigger);
let aboutNav = document.querySelectorAll(".aboutNav ul li")

let navContainer=document.querySelector(".aboutNav")
  
  const lenis = new Lenis()
  
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)


  // let tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".aboutNav",
  //     start: "top top",
  //     end: "max",
  //     pin: true,
  //   //   markers: true
  //   }
  // });



  for (let i = 0; i < aboutNav.length; i++) {
      const element = aboutNav[i];
      element.addEventListener("click" , function (params) {
        
              $(".aboutNav ul li").removeClass("activeNav")
              element.classList.add("activeNav")
              lenis.scrollTo(`.scroll-${i+1}` , {
                  offset : 0,   
              })
          
      })
  }




  Scrollbar.initAll(); 



  const memberSlider = new Swiper('.memberSlider', {
    // Optional parameters
  
    spaceBetween: 40,
  
    // Navigation arrows
    navigation: {
      nextEl: '.nextMember',
      prevEl: '.prevMember',
    },
    speed:1000,
    slidesPerView: 4,
    // And if we need scrollbar
   
  });
  const partnerSlider = new Swiper('.partnerSlider', {
    // Optional parameters
  
    spaceBetween: 40,
  
    // Navigation arrows
    navigation: {
      nextEl: '.nextpartner',
      prevEl: '.prevpartner',
    },
    speed:1000,
    slidesPerView: 3,
    // And if we need scrollbar
   
  });


  const gallerySlider = new Swiper('.gallerySlider', {
    slidesPerView:1.5,
  speed:1000,
  freeMode:true,
  grabCursor:true,
    // If we need pagination
    pagination: {
      el: '.galleryPagination',
      clickable:true,
    },
    navigation: {
        nextEl: '.nextBtn',
        prevEl: '.prevBtn',
      },
    spaceBetween: 40,
  });


  let scrolS = document.querySelectorAll(".scrolS")
  let darkSection = document.querySelectorAll(".darkSection")

  darkSection.forEach((element,i) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        end: "top -10%",
        start: "top 90%",
        
        scrub: true,
        // markers: true,
        onEnter: () => {
          // pagination.classList.add("darkPagination");
          // let newH=document.querySelector("header");
          // newH.classList.remove("dark");
          // newH.classList.remove("darkLogo");
          navContainer.classList.remove("darkNav")
          console.log("element",i);
          
        },
        onLeave: () => {
          console.log("leave",i);
          navContainer.classList.add("darkNav")
          // pagination.classList.remove("darkPagination");
          // let newH=document.querySelector("header");
          // newH.classList.add("dark");
          // newH.classList.add("darkLogo");
        },
        onEnterBack: () => {
          // pagination.classList.add("darkPagination");
          // let newH=document.querySelector("header");
          // newH.classList.remove("dark");
          // newH.classList.remove("darkLogo");
          navContainer.classList.remove("darkNav")
        },
        onLeaveBack: () => {
          // pagination.classList.remove("darkPagination");
          // let newH=document.querySelector("header");
          // newH.classList.add("dark");
          // newH.classList.add("darkLogo");
          navContainer.classList.add("darkNav")
        },
      },
    });
  });
  scrolS.forEach((element,i) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        end: "top -30%",
        start: "top 80%",
        
        scrub: true,
        // markers: true,
        onEnter: () => {
          // pagination.classList.add("darkPagination");
          // let newH=document.querySelector("header");
          // newH.classList.remove("dark");
          // newH.classList.remove("darkLogo");
          $(".aboutNav ul li").removeClass("activeNav")
          aboutNav[i].classList.add("activeNav")
          console.log("element",i);
          
        },
        // onLeave: () => {
        //   console.log("leave",i);
        //   aboutNav[i+1].classList.add("activeNav")
        //   // pagination.classList.remove("darkPagination");
        //   // let newH=document.querySelector("header");
        //   // newH.classList.add("dark");
        //   // newH.classList.add("darkLogo");
        // },
        onEnterBack: () => {
          // pagination.classList.add("darkPagination");
          // let newH=document.querySelector("header");
          $(".aboutNav ul li").removeClass("activeNav")
          // newH.classList.remove("dark");
          // newH.classList.remove("darkLogo");
          aboutNav[i].classList.add("activeNav")
        },
        // onLeaveBack: () => {
        //   // pagination.classList.remove("darkPagination");
        //   // let newH=document.querySelector("header");
        //   // newH.classList.add("dark");
        //   // newH.classList.add("darkLogo");
        //   aboutNav[i+1].classList.add("activeNav")
        // },
      },
    });
  });