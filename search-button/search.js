// ===========================================================================
// Searchbar
// ===========================================================================

let searchForm = document.querySelector(".js-search-container");
let closeButton = document.querySelector(".js-close-button");
let searchButton = document.querySelector(".js-search-button");
let inputArea = document.querySelector(".js-search-input");

let searchbarActivate = function () {
  if (searchForm.classList.contains("js-search-inactive")) {
    searchForm.classList.replace("js-search-inactive", "js-search-active");
    console.log("search active");
  }
};
let searchbarClose = function (e) {
  e.stopPropagation();
  if (inputArea.value !== "") {
    inputArea.value = "";
  }
  console.log("input is cleared");
  searchDeactivate();
};

let searchDeactivate = function () {
  if (searchForm.classList.contains("js-search-active")) {
    searchForm.classList.replace("js-search-active", "js-search-inactive");
    console.log("search inactive");
  }
};

closeButton.addEventListener("click", searchbarClose);
searchButton.addEventListener("click", searchbarActivate);
inputArea.addEventListener("click", searchbarActivate);
inputArea.addEventListener("input", searchbarActivate);
