"use strict";

// ===========================================================================
// Searchbar
// ===========================================================================

let searchForm = document.querySelector(".js-search-container");
let closeButton = document.querySelector(".js-close-button");
let searchButton = document.querySelector(".js-search-button");

let searchInputActive = function (e) {
  if (searchForm.classList.contains("js-search-inactive")) {
    searchForm.classList.replace("js-search-inactive", "js-search-active");
    console.log("search active");
  }
};
let closeSearch = function (e) {
  e.stopPropagation();
  if (searchForm.classList.contains("js-search-active")) {
    searchForm.classList.replace("js-search-active", "js-search-inactive");
    console.log("search inactive");
  }
};

closeButton.addEventListener("click", closeSearch);
searchButton.addEventListener("click", closeSearch);
searchForm.addEventListener("click", searchInputActive);
