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
let navigationButtons = document.querySelectorAll(".js-menu-item > span");
let dropdownMenus = document.querySelectorAll(".js-dropdown-list");

let toggleOnOff = function (e) {
  // Stop the propagation to exclude conflicts with viewportClickToOnOff()
  e.stopPropagation();

  let dropdownCurrent = this.nextElementSibling;
  if ((dropdownActive = true)) {
    dropdownMenus.forEach((elem) => elem.classList.replace("on", "off"));
    dropdownActive = false;
  }
  if (dropdownCurrent.classList.contains("off")) {
    dropdownCurrent.classList.replace("off", "on");
    dropdownActive = true;
  }
  console.log("click button");
};

let viewportClickToOnOff = function () {
  if ((dropdownActive = true)) {
    dropdownMenus.forEach((elem) => elem.classList.replace("on", "off"));
    dropdownActive = false;
  }
  console.log("click viewport");
};

// Toggle the dropdown menu on click
document.addEventListener("click", viewportClickToOnOff);
navigationButtons.forEach((item) => item.addEventListener("click", toggleOnOff));
