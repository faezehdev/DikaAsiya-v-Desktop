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
