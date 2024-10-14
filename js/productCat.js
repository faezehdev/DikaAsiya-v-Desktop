<<<<<<< HEAD

header.classList.add('activeHeader')
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
=======
let section3 = document.querySelectorAll(".section3");
$(function () {
  fullpage();
});
// FULLPAGE
function fullpage() {
  $("#fullpage").fullpage({
      // scrollingSpeed: 1000,
    scrollBar: true,
    //   autoScrolling: true,
    //scrollOverflow:true,
    // fitToSection: false,
    afterLoad: function (origin, destination, direction, trigger) {
      $(".section3").removeClass("activeSection");
      if (destination.index>0) {
      
          console.log(destination.index);
          console.log(section3[destination.index-1]);
          section3[destination.index-1].classList.add("activeSection")
      }
    },
  });
}
>>>>>>> cfbde9a18e033b29b2812a21f40a8e7d11c9bf42
