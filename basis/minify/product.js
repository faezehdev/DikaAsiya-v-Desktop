header.classList.add("activeHeader"),window.addEventListener("scroll",(function(){0==(window.pageYOffset||document.documentElement.scrollTop)&&$("header").addClass("activeHeader")}));const host={debug:!1,settings:{"connection.web.trust_login":"https://basispanel.ir/apicms","connection.web.basiscore":"https://basispanel.ir/apicms","connection.web.media":"https://basispanel.ir/apicms","default.dbsource.verb":"post","default.call.verb":"get","default.viewCommand.groupColumn":"prpid","default.dmnid":"4874","default.binding.regex":"\\{##([^#]*)##\\}"}};let SwiperBanner=new Swiper(".swiper-Gallery",{slidesPerView:1,spaceBetween:0,effect:"fade",fadeEffect:{crossFade:!0},speed:2e3,pagination:{el:".Section-1 .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'"><span class="line"></span></span>'}},navigation:{nextEl:".Section-1 .swiper-button-next",prevEl:".Section-1 .swiper-button-prev"}});$bc.setSource("db.btn1",!0),$bc.setSource("db.btn2",!1);let tabBtns=document.querySelectorAll(".Tab-Item");tabBtns[0].classList.add("active"),tabBtns.forEach((e=>{e.addEventListener("click",(e=>{for(let e=0;e<tabBtns.length;e++)tabBtns[e].classList.remove("active");switch(e.currentTarget.classList.add("active"),e.currentTarget.getAttribute("id")){case"tab-1":console.log("tab 1"),$bc.setSource("db.btn1",!0),$bc.setSource("db.btn2",!1);break;case"tab-2":console.log("tab 2"),$bc.setSource("db.btn1",!1),$bc.setSource("db.btn2",!0)}}))}));let SwiperProduct=new Swiper(".swiper-RelatedProduct",{slidesPerView:3,spaceBetween:30,effect:"slide",speed:2e3}),SwiperProject=new Swiper(".swiper-RelatedProject",{slidesPerView:3,spaceBetween:30,effect:"slide",speed:2e3}),popUpBTN=document.querySelector(".clickForm"),popUp=document.querySelector(".ProductPOPUP"),closeBTN=document.querySelector(".PopUp_Box .Close");function onSource2(e){const t=document.querySelector("input[name='captcha']").value,c=document.querySelector("input[name='captchaid']").value;console.log(t);const n=JSON.stringify(e.source?.rows[0]);$bc.setSource("edit.object2",{value:n,captcha:t,captchaid:c}),console.log("sourcd",n)}async function OnProcessesEditObjectFn2(e){const t=e.response,c=await t.json();console.log(c),6==c.errorid&&(console.log("با موفقیت ثبت شذ"),document.querySelector(".main-container").classList.add("SEND"),document.querySelector(".main-container h4").innerHTML="با موفقیت ثبت شد",setTimeout((()=>{document.querySelector(".main-container").classList.remove("SEND")}),2e3)),4==c.errorid&&console.log(c),4==c.errorid&&(console.log(c),document.querySelector(".main-container").classList.add("SEND"),document.querySelector(".main-container h4").innerHTML="  کپچا اشتباه وارد شده  ",setTimeout((()=>{document.querySelector(".main-container").classList.remove("SEND")}),2e3))}function rendered(){console.log("rendered!"),setTimeout((()=>{let e=document.querySelector(".proName");document.querySelector("[data-bc-section-title]").innerHTML="";document.querySelector("[data-bc-schema-column]").children,document.querySelector("[data-bc-schema-column]"),document.querySelector("input[name='captcha']"),document.querySelector(".refresh"),document.querySelector("img.capcha"),document.querySelector("input[name='captchaid']");let t=$("[data-bc-schema-column]").children("[data-bc-question]")[0],c=$("[data-bc-schema-column]").children("[data-bc-question]")[1],n=$("[data-bc-schema-column]").children("[data-bc-question]")[2],o=$("[data-bc-schema-column]").children("[data-bc-question]")[3],r=$("[data-bc-schema-column]").children("[data-bc-question]")[4],a=t.querySelector("input"),s=c.querySelector("input"),l=n.querySelector("input"),i=o.querySelector("input"),d=r.querySelector("input");console.log("productName",e),$(a).attr("placeholder","نام محصول "),$(a).val(e.innerHTML),$(s).attr("placeholder","  نام    "),$(l).attr("placeholder","    نام خانوادگی "),$(i).attr("placeholder"," تلفن همراه"),$(d).attr("placeholder","  ایمیل"),$("div[data-bc-title-container]").css("display","none");let u=!1,p=document.querySelector(".schemaBtn"),m=document.querySelectorAll('.ProductPOPUP input[type="text"]');p.addEventListener("click",(()=>{console.log("click"),m.forEach((e=>{console.log(e.value),""==e.value&&(u=!0,console.log("فیلد را پرکنید"))})),u&&(u=!1,document.querySelector(".main-container").classList.add("SEND"),document.querySelector(".main-container h4").innerHTML="  فیلدها را پرکنید ",setTimeout((()=>{document.querySelector(".main-container").classList.remove("SEND")}),2e3))}))}),1e3)}popUpBTN.addEventListener("click",(()=>{popUp.classList.add("Open")})),closeBTN.addEventListener("click",(()=>{popUp.classList.remove("Open")}));