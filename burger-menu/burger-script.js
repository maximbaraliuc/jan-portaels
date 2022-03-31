let burgerMenu = document.querySelector(".burger");
let activateBurger = function () {
  burgerMenu.classList.add("burger-active");
};
burgerMenu.addEventListener("click", activateBurger);
