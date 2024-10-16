header.classList.add('activeHeader')
window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st == 0) {
      $("header").addClass("activeHeader"); 
  }
   })

   const host = {
    debug: false,
    settings:{
        'connection.web.trust_login': 'https://basispanel.ir/apicms', 
    'connection.web.basiscore': 'https://basispanel.ir/apicms', 
    'connection.web.media': 'https://basispanel.ir/apicms', 
    'default.dbsource.verb': 'post', 
    'default.call.verb': 'get', 
    'default.viewCommand.groupColumn': 'prpid', 
        "default.dmnid":'4874',
        "default.binding.regex":"\\{##([^#]*)##\\}"
    }
    }
    
// gallery slider
let SwiperBanner= new Swiper ('.swiper-Gallery', {
    slidesPerView: 1,
    spaceBetween: 0,
    effect:'fade' ,
    fadeEffect: {
      crossFade: true,
    },
   speed:2000,
   pagination: {
    el: '.Section-1 .swiper-pagination',
          clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<span class="line"></span>' + '</span>';
      },
  },
  navigation: {
    nextEl: ".Section-1 .swiper-button-next",
    prevEl: ".Section-1 .swiper-button-prev",
  }
    }) 
 
// tab btn
$bc.setSource('db.btn1',true)
$bc.setSource('db.btn2',false)
let tabBtns = document.querySelectorAll('.Tab-Item')
tabBtns[0].classList.add('active')
tabBtns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
    for(let i =0 ; i <tabBtns.length ; i++){
        tabBtns[i].classList.remove('active')
    }
    e.currentTarget.classList.add('active')
    let ID = e.currentTarget.getAttribute('id')
    switch(ID){
        case 'tab-1':{
            console.log('tab 1');
            $bc.setSource('db.btn1',true)
            $bc.setSource('db.btn2',false)
            break
            
        }
        case 'tab-2':{
            console.log('tab 2');
            $bc.setSource('db.btn1',false)
            $bc.setSource('db.btn2',true)
            break
        }
    }
    })
})
// related product
let SwiperProduct= new Swiper ('.swiper-RelatedProduct', {
    slidesPerView: 3,
    spaceBetween: 30,
    effect:'slide' ,
   speed:2000
    })
// related project
let SwiperProject= new Swiper ('.swiper-RelatedProject', {
    slidesPerView: 3,
    spaceBetween: 30,
    effect:'slide' ,
   speed:2000
    })  

    let popUpBTN = document.querySelector('.clickForm')
    let popUp = document.querySelector('.ProductPOPUP')
    let closeBTN = document.querySelector('.PopUp_Box .Close')
    popUpBTN.addEventListener('click',()=>{
    popUp.classList.add('Open')
    })
    closeBTN.addEventListener('click',()=>{
    popUp.classList.remove('Open')
    })       
       

    function onSource2(args) { 
        const captcha = document.querySelector("input[name='captcha']").value; 
        const captchaid = document.querySelector("input[name='captchaid']").value; 
        console.log(captcha);
        const stringJson = JSON.stringify(args.source?.rows[0]); 
        $bc.setSource('edit.object2', { 
        value: stringJson, 
        captcha: captcha, 
        captchaid: captchaid ,
        
        }) 
        console.log('sourcd',stringJson);
        } 
        
        
        async function OnProcessesEditObjectFn2(args) {
        const response = args.response;
        const json = await response.json();
        
        console.log(json);
        if (json.errorid == 6) {
            console.log('با موفقیت ثبت شذ');
            document.querySelector('.main-container').classList.add('SEND')
            document.querySelector('.main-container h4').innerHTML='با موفقیت ثبت شد'
        
        setTimeout(()=>{
        document.querySelector('.main-container').classList.remove('SEND')
        },2000)
          
        
        }
        if (json.errorid == 4) {
        console.log(json);
        }
        
        
        if (json.errorid == 4) {
        console.log(json);
        document.querySelector('.main-container').classList.add('SEND')
        document.querySelector('.main-container h4').innerHTML='  کپچا اشتباه وارد شده  '
        setTimeout(()=>{
            document.querySelector('.main-container').classList.remove('SEND')
        },2000)
        }
        }
        
        function rendered(){
        console.log('rendered!');
        setTimeout(()=>{
            let productNamee = document.querySelector('.proName')
        let title= document.querySelector('[data-bc-section-title]')
        title.innerHTML = ''
        let con = document.querySelector('[data-bc-schema-column]').children
        let container =  document.querySelector('[data-bc-schema-column]')
        let caps = document.querySelector("input[name='captcha']")
        let refresh= document.querySelector('.refresh')
        let cpaimg = document.querySelector('img.capcha')
        let capchaid = document.querySelector("input[name='captchaid']")
        let a =$('[data-bc-schema-column]').children('[data-bc-question]')[0]
        let b =$('[data-bc-schema-column]').children('[data-bc-question]')[1]
        let c =$('[data-bc-schema-column]').children('[data-bc-question]')[2]
        let d =$('[data-bc-schema-column]').children('[data-bc-question]')[3]
        let e =$('[data-bc-schema-column]').children('[data-bc-question]')[4]

        let productName = a.querySelector('input')
        let Name = b.querySelector('input')
        let sname =c.querySelector('input')
        let phone =d.querySelector('input')
        let email =e.querySelector('input')
        console.log('productName',productNamee);
          $(productName).attr('placeholder','نام محصول ');
          $(productName).val(productNamee.innerHTML);
          $(Name).attr('placeholder','  نام    ');
          $(sname).attr('placeholder','    نام خانوادگی ');
          $(phone).attr('placeholder',' تلفن همراه');
          $(email).attr('placeholder','  ایمیل');
          $('div[data-bc-title-container]').css('display','none')
          let isEmpty=false
          let buttons = document.querySelector('.schemaBtn')
          let inputs = document.querySelectorAll('.ProductPOPUP input[type="text"]')
          buttons.addEventListener('click',()=>{
              console.log('click');
           inputs.forEach(input=>{
             console.log(input.value);
               if(input.value == ""){
                  isEmpty = true
                   console.log('فیلد را پرکنید');
               }
             })
           if(isEmpty){
             isEmpty = false
             document.querySelector('.main-container').classList.add('SEND')
             document.querySelector('.main-container h4').innerHTML='  فیلدها را پرکنید '
          setTimeout(()=>{
            document.querySelector('.main-container').classList.remove('SEND')
          },2000)
           }
          })
        },1000)
        }
        