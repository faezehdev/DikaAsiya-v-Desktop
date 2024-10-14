$(function () {
    loadMoreFn();
  });

function loadMoreFn(params) {
    let loadMore = document.querySelector(".loadMore");
    let currentItems = 6;
    const elementList = [...document.querySelectorAll(".projectBox")];
    if (currentItems < elementList.length) {
      loadMore.addEventListener("click", function (e) {
        const elementList = [...document.querySelectorAll(".projectBox")];
        loadMore.classList.add("show-loader");
        for (let i = currentItems; i < currentItems + 6; i++) {
          setTimeout(() => {
            e.target.classList.remove("show-loader");
            if (elementList[i]) {
              elementList[i].style.display = "block";
            }
          }, 0);
        }
        currentItems += 6;
        if (currentItems >= elementList.length) {
          loadMore.classList.add("loaded");
        }
      });
    } else {
      loadMore.classList.add("loaded");
    }
    
    
}

let filterBtn = document.querySelectorAll(".filterBtn")

filterBtn.forEach(element => {
  element.addEventListener("click" , function (params) {
    $('.projectContainer').imagesLoaded( function() {
      // images have loaded
      loadMoreFn();
    });
  })
});