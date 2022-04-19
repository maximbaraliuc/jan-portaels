//
//
// Burger Menu Setup

let burgerMenu = document.querySelector(".burger");
let changeBurger = function () {
  if (burgerMenu.classList.contains("burger-inactive")) {
    burgerMenu.classList.replace("burger-inactive", "burger-active");
  } else {
    burgerMenu.classList.replace("burger-active", "burger-inactive");
  }
};
burgerMenu.addEventListener("click", changeBurger);

//
//
// Clicked menu buttons to remain active if not clicked elsewhere

let menuLinks = document.querySelectorAll(".off");
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

menuLinks.forEach((item) => item.addEventListener("click", keepActive));
