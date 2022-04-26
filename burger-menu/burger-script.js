let burgerMenu = document.querySelector(".burger-menu");
let changeBurger = function () {
  if (burgerMenu.classList.contains("burger-inactive")) {
    burgerMenu.classList.replace("burger-inactive", "burger-active");
  } else {
    burgerMenu.classList.replace("burger-active", "burger-inactive");
  }
};
burgerMenu.addEventListener("click", changeBurger);
