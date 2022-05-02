"use strict";

// ===========================================================================
// Burger Menu Setup
// ===========================================================================

let navigationBar = document.querySelector(".navigation");
let burgerMenu = document.querySelector(".burger-menu");

let toggleBurgerState = function () {
  if (burgerMenu.classList.contains("js-off")) {
    burgerMenu.classList.replace("js-off", "js-on");
    navigationBar.classList.replace("js-off", "js-on");
    console.log("burger active");
  } else {
    burgerMenu.classList.replace("js-on", "js-off");
    navigationBar.classList.replace("js-on", "js-off");
    console.log("burger inactive");
  }
};

burgerMenu.addEventListener("click", toggleBurgerState);

// ===========================================================================
// Navigation Menu
// ===========================================================================

let menuItem = document.querySelectorAll(".js-menu-item");
let menuButtons = document.querySelectorAll(".menu-button");
let dropDown = document.querySelectorAll(".dropdown-list");

let activateMenuItem = function (e) {
  e.stopPropagation();
  // Add a timeout for small screen size
  if (window.screen.width < 768) {
    setTimeout(() => {
      menuItem.forEach((item) => item.classList.replace("js-on", "js-off"));
      console.log("Delayed for 0.25 second.");
    }, "250");
    setTimeout(() => {
      this.classList.replace("js-off", "js-on");
      console.log("Delayed for 0.35 second.");
    }, "350");
    console.log("screen is narrower than 768px");
  } else {
    menuItem.forEach((item) => item.classList.replace("js-on", "js-off"));
    this.classList.replace("js-off", "js-on");
    console.log("screen is wider than 768px");
  }
  console.log("activate - this, e:", this, e);
};

let deactivateMenuItem = function (e) {
  e.stopPropagation();
  this.classList.replace("js-on", "js-off");
  console.log("deactivate - this, e:", this, e);
};

let clickExceptMenuItem = function (e) {
  menuItem.forEach((item) => item.classList.replace("js-on", "js-off"));
};

// Activate
menuItem.forEach((item) => item.addEventListener("touchend", activateMenuItem));
if (window.screen.width > 767) {
  menuItem.forEach((item) => item.addEventListener("mouseover", activateMenuItem));
}

// Deactivate
menuItem.forEach((item) => item.addEventListener("mouseleave", deactivateMenuItem));
document.addEventListener("click", clickExceptMenuItem);

// Refers also to the searchbar
// searchDeactivate();
// console.log("click viewport");

// ===========================================================================
// Display some data about the screen width.
// ===========================================================================

let headerText = document.querySelector("h1");
headerText.innerHTML = `Screen width is ${window.screen.width}px`;
let widthHeader = function () {
  if (window.screen.width >= 1366) {
    headerText.innerHTML = "Screen width is >1366px";
    console.log("Screen width is >1366px");
  } else if (window.screen.width >= 1024) {
    headerText.innerHTML = "Screen width is >1024px & <1366px";
    console.log("Screen width is >1024px & <1366px");
  } else if (window.screen.width < 1024 && window.screen.width >= 768) {
    headerText.innerHTML = "Screen width is >768px & <1024px";
    console.log("Screen width is >768px & <1024px");
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
let searchInput = document.querySelector(".js-search-input");

let searchbarActivate = function (e) {
  e.stopPropagation();
  if (searchForm.classList.contains("js-off")) {
    searchForm.classList.replace("js-off", "js-on");
    console.log("search active");
  }
};
let searchbarClose = function (e) {
  e.stopPropagation();
  if (searchInput.value !== "") {
    searchInput.value = "";
    console.log("input is cleared");
  }
  if (searchForm.classList.contains("js-on")) {
    searchForm.classList.replace("js-on", "js-off");
    console.log("search inactive");
  }
};

closeButton.addEventListener("click", searchbarClose);
searchButton.addEventListener("click", searchbarActivate);
searchInput.addEventListener("click", searchbarActivate);
searchInput.addEventListener("input", searchbarActivate);

// ===========================================================================
// ...
// ===========================================================================
