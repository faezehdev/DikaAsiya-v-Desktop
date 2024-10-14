let snapSection = document.querySelectorAll(".snapSection");
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
      $(".snapSection").removeClass("activeSection");
      if (destination.index>0) {
      
          console.log(destination.index);
          console.log(snapSection[destination.index-1]);
          snapSection[destination.index-1].classList.add("activeSection")
      }
    },
  });
}
