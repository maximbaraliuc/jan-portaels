"use strict";

// ===========================================================================
// Burger Menu Setup
// ===========================================================================

let burgerMenu = document.querySelector(".burger-menu");
let navigation = document.querySelector("nav");

let changeBurger = function () {
  if (burgerMenu.classList.contains("js-burger-inactive")) {
    burgerMenu.classList.replace("js-burger-inactive", "js-burger-active");
    navigation.classList.replace("nav-elements-hidden", "nav-elements-visible");
    console.log(navigation.classList);
  } else {
    burgerMenu.classList.replace("js-burger-active", "js-burger-inactive");
    navigation.classList.replace("nav-elements-visible", "nav-elements-hidden");
  }
};
burgerMenu.addEventListener("click", changeBurger);

// ===========================================================================
// Navigation Menu
// ===========================================================================
let dropdownActive = false;
let navigationButtons = document.querySelectorAll(".js-menu-button");
let dropdownMenus = document.querySelectorAll(".js-dropdown-list");

// Toggle the dropdown menu visibility
let toggleOnOff = function (e) {
  // Stop the propagation to exclude conflicts with anywhereClickOnOff()
  e.stopPropagation();

  let dropdownCurrent = this.nextElementSibling;
  if ((dropdownActive = true)) {
    dropdownMenus.forEach((elem) => elem.classList.replace("js-dropdown-on", "js-dropdown-off"));
    navigationButtons.forEach((elem) => elem.classList.replace("js-menu-active", "js-menu-inactive"));
    dropdownActive = false;
  }
  if (dropdownCurrent.classList.contains("js-dropdown-off")) {
    // Change the button style
    this.classList.replace("js-menu-inactive", "js-menu-active");
    // Change the dropdown visibility
    dropdownCurrent.classList.replace("js-dropdown-off", "js-dropdown-on");
    dropdownActive = true;
  }
  console.log("click button");
};

// Hides all the dropdown menus when clicked anywhere.
// Refers also to the searchbar
let anywhereClickOnOff = function () {
  if ((dropdownActive = true)) {
    dropdownMenus.forEach((elem) => elem.classList.replace("js-dropdown-on", "js-dropdown-off"));
    navigationButtons.forEach((elem) => elem.classList.replace("js-menu-active", "js-menu-inactive"));
    dropdownActive = false;
  }

  if ((searchActive = true)) {
    searchForm.classList.replace("js-search-active", "js-search-inactive");
    searchActive = false;
  }
  console.log("click viewport");
};

let mouseenterOn = function () {
  console.log("mouseenter work in progress");
};

let mouseleaveOff = function () {
  console.log("mouseleave work in progress");
};

// Events initialization.
document.addEventListener("click", anywhereClickOnOff);
navigationButtons.forEach((item) => item.addEventListener("click", toggleOnOff));
navigationButtons.forEach((item) => item.addEventListener("mouseenter", toggleOnOff));
dropdownMenus.forEach((item) => item.addEventListener("mouseleave", anywhereClickOnOff));

// Display some data about the screen width.
let headerText = document.querySelector("h1");
let widthHeader = function () {
  if (window.screen.width >= 1024) {
    headerText.innerHTML = "Screen width is >=1024px";
    console.log("Screen width is >1024px");
  } else if (window.screen.width < 1024 && window.screen.width >= 768) {
    headerText.innerHTML = "Screen width is between 768px and 1024px";
    console.log("Screen width is between 768px and 1024px");
  } else {
    headerText.innerHTML = "Screen width is <768px";
    console.log("Screen width is <768px");
  }
};
window.addEventListener("resize", widthHeader);

// ===========================================================================
// Searchbar
// ===========================================================================

let searchForm = document.querySelector(".js-search-container");
let closeButton = document.querySelector(".js-close-button");
let searchButton = document.querySelector(".js-search-button");
let inputArea = document.querySelector(".search-input");
let searchActive = false;

let searchInputActive = function (e) {
  e.stopPropagation();
  if (searchForm.classList.contains("js-search-inactive")) {
    searchForm.classList.replace("js-search-inactive", "js-search-active");
    searchActive = true;
    console.log("search active");
  }
};
let closeSearch = function (e) {
  e.stopPropagation();
  if (searchForm.classList.contains("js-search-active")) {
    searchForm.classList.replace("js-search-active", "js-search-inactive");
    inputArea.value = "";
    searchActive = false;
    console.log("search inactive");
  }
};

closeButton.addEventListener("click", closeSearch);
searchButton.addEventListener("click", closeSearch);
searchForm.addEventListener("click", searchInputActive);
searchForm.addEventListener("input", searchInputActive);

// ===========================================================================
// ...
// ===========================================================================
