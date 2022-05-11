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
  } else {
    burgerMenu.classList.replace("js-on", "js-off");
    navigationBar.classList.replace("js-on", "js-off");
  }
};

burgerMenu.addEventListener("click", toggleBurgerState);

// ===========================================================================
// Navigation Menu
// ===========================================================================

let menuItem = document.querySelectorAll(".js-menu-item");
let menuButtons = document.querySelectorAll(".menu-button");

let activateMenuItem = function (e) {
  e.stopPropagation();
  menuItem.forEach((item) => item.classList.replace("js-on", "js-off"));
  this.classList.replace("js-off", "js-on");
  console.log("turned on");
};

let clickExceptMenuItem = function () {
  menuItem.forEach((item) => item.classList.replace("js-on", "js-off"));
};

menuItem.forEach((item) => item.addEventListener("click", activateMenuItem));
// menuItem.forEach((item) => item.addEventListener("mouseleave", clickExceptMenuItem));
document.addEventListener("click", clickExceptMenuItem);

// Refers also to the searchbar
// searchDeactivate();
// console.log("click viewport");

// ===========================================================================
// Display some data about the screen width.
// ===========================================================================

// let headerText = document.querySelector("h1");
// headerText.innerHTML = `Screen width is ${window.screen.width}px`;
// let widthHeader = function () {
//   if (window.screen.width >= 1366) {
//     headerText.innerHTML = "Screen width is >1366px";
//     console.log("Screen width is >1366px");
//   } else if (window.screen.width >= 1024) {
//     headerText.innerHTML = "Screen width is >1024px & <1366px";
//     console.log("Screen width is >1024px & <1366px");
//   } else if (window.screen.width < 1024 && window.screen.width >= 768) {
//     headerText.innerHTML = "Screen width is >768px & <1024px";
//     console.log("Screen width is >768px & <1024px");
//   } else {
//     headerText.innerHTML = "Screen width is <768px";
//     console.log("Screen width is <768px");
//   }
// };
// window.addEventListener("resize", widthHeader);

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
// UP Button
// ===========================================================================

let upButton = document.querySelector(".up-button");
let rootElement = document.documentElement;

let enableScrollUp = function () {
  if (rootElement.scrollTop > 100) {
    upButton.classList.replace("off", "on");
  } else {
    upButton.classList.replace("on", "off");
  }
};

let scrollTop = function (e) {
  e.stopPropagation();
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  // For Safari
  document.body.scrollTop({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", enableScrollUp);
upButton.addEventListener("click", scrollTop);

// ===========================================================================
// Gallery Button
// ===========================================================================

let buttonGalleryLeft = document.querySelectorAll(".atelier-gallery-container .btn-left");
let buttonGalleryRight = document.querySelectorAll(".atelier-gallery-container .btn-right");
// let galleryAtelier = document.querySelector(".atelier-gallery");

let swipeLeft = function (e) {
  // e.stopPropagation();
  e.srcElement.parentElement.lastElementChild.scrollBy({ left: -300, behavior: "smooth" });
  console.log("scroll left");
  console.log(e);
};
let swipeRight = function (e) {
  // e.stopPropagation();
  e.srcElement.parentElement.lastElementChild.scrollBy({ left: 300, behavior: "smooth" });
  console.log("scroll right");
  console.log(e.srcElement.parentElement.lastElementChild);
};

buttonGalleryLeft.forEach((item) => item.addEventListener("click", swipeLeft));
buttonGalleryRight.forEach((item) => item.addEventListener("click", swipeRight));
