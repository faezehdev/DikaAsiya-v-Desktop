
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