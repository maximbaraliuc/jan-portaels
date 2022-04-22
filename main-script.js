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

let navigationItems = document.querySelector(".menu-item > span");
let dropdownMenus = document.querySelector(".dropdown-list");
// dropdownMenus.forEach((item) => item.classList.add("off"));

let toggleOnOff = function () {
  console.log("start");
  if (dropdownMenus.classList.contains("off")) {
    dropdownMenus.classList.replace("off", "on");
    console.log("on");
  } else {
    dropdownMenus.classList.replace("on", "off");
    console.log("off");
  }
};

navigationItems.forEach((item) => item.addEventListener("click", toggleOnOff));

// navigationItems.addEventListener("click", toggleOnOff);
// navigationItem.forEach((item) => item.addEventListener("click", toggleOpen));

//
//
// Clicked menu buttons to remain active if not clicked elsewhere

/* let menuLinks = document.querySelectorAll(".off");
// menuLinks.forEach((text) => console.log(text));
// menuLinks.forEach((text) => (text.className = "on"));
// menuLinks.forEach((text) => console.log(text));

let keepActive = function () {
  menuLinks.forEach((item) => item.classList.replace("on", "off"));
  if (this.classList.contains("off")) {
    this.classList.replace("off", "on");
  }
  console.log(this);
};

menuLinks.forEach((item) => item.addEventListener("click", keepActive)); */
