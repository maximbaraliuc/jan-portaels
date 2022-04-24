"use strict";

// ===========================================================================
// Burger Menu Setup
// ===========================================================================

/* let burgerMenu = document.querySelector(".burger");
let changeBurger = function () {
  if (burgerMenu.classList.contains("burger-inactive")) {
    burgerMenu.classList.replace("burger-inactive", "burger-active");
  } else {
    burgerMenu.classList.replace("burger-active", "burger-inactive");
  }
};
burgerMenu.addEventListener("click", changeBurger); */

// ===========================================================================
// Navigation Menu
// ===========================================================================
let dropdownActive = false;
let navigationButtons = document.querySelectorAll(".menu-button");
let dropdownMenus = document.querySelectorAll(".js-dropdown-list");

// Toggle the dropdown menu visibility
let toggleOnOff = function (e) {
  // Stop the propagation to exclude conflicts with anywhereClickOnOff()
  e.stopPropagation();

  let dropdownCurrent = this.nextElementSibling;
  if ((dropdownActive = true)) {
    dropdownMenus.forEach((elem) => elem.classList.replace("on", "off"));
    navigationButtons.forEach((elem) => elem.classList.replace("js-active", "js-not-active"));
    dropdownActive = false;
  }
  if (dropdownCurrent.classList.contains("off")) {
    // Change the button style
    this.classList.replace("js-not-active", "js-active");
    // Change the dropdown visibility
    dropdownCurrent.classList.replace("off", "on");
    dropdownActive = true;
  }
  console.log("click button");
};

// Hides all the dropdown menus when clicked anywhere.
let anywhereClickOnOff = function () {
  if ((dropdownActive = true)) {
    dropdownMenus.forEach((elem) => elem.classList.replace("on", "off"));
    navigationButtons.forEach((elem) => elem.classList.replace("js-active", "js-not-active"));
    dropdownActive = false;
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
