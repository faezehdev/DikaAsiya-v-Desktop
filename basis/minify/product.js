header.classList.add("activeHeader"),window.addEventListener("scroll",(function(){0==(window.pageYOffset||document.documentElement.scrollTop)&&$("header").addClass("activeHeader")}));const host={settings:{"default.binding.regex":"\\{##([^#]*)##\\}"}};let SwiperBanner=new Swiper(".swiper-Gallery",{slidesPerView:1,spaceBetween:0,effect:"fade",fadeEffect:{crossFade:!0},speed:2e3,pagination:{el:".Section-1 .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'"><span class="line"></span></span>'}},navigation:{nextEl:".Section-1 .swiper-button-next",prevEl:".Section-1 .swiper-button-prev"}});$bc.setSource("db.btn1",!0),$bc.setSource("db.btn2",!1);let tabBtns=document.querySelectorAll(".Tab-Item");tabBtns[0].classList.add("active"),tabBtns.forEach((e=>{e.addEventListener("click",(e=>{for(let e=0;e<tabBtns.length;e++)tabBtns[e].classList.remove("active");switch(e.currentTarget.classList.add("active"),e.currentTarget.getAttribute("id")){case"tab-1":console.log("tab 1"),$bc.setSource("db.btn1",!0),$bc.setSource("db.btn2",!1);break;case"tab-2":console.log("tab 2"),$bc.setSource("db.btn1",!1),$bc.setSource("db.btn2",!0)}}))}));let SwiperProduct=new Swiper(".swiper-RelatedProduct",{slidesPerView:3,spaceBetween:30,effect:"slide",speed:2e3}),SwiperProject=new Swiper(".swiper-RelatedProject",{slidesPerView:3,spaceBetween:30,effect:"slide",speed:2e3});