"use strict";

// ===========================================================================
// Searchbar
// ===========================================================================

let searchButton = document.querySelector(".js-search-container");
let searchArea = document.querySelector("#js-site-search");

let searchIconChange = function () {
  if (searchButton.classList.contains("js-search-inactive")) {
    searchButton.classList.replace("js-search-inactive", "js-search-active");
    console.log("search active");
  } else {
    searchButton.classList.replace("js-search-active", "js-search-inactive");
    console.log("search inactive");
  }
};

let focusedSearch = function (e) {
  e.stopPropagation();
};

searchButton.addEventListener("click", searchIconChange);
searchArea.addEventListener("click", focusedSearch);
