let menuButton = document.querySelector(".menu-item");
let dropdownMenu = document.querySelector(".dropdown");

let toggleOpen = function () {
  if (dropdownMenu.classList.contains("off")) {
    dropdownMenu.classList.replace("off", "on");
  } else {
    dropdownMenu.classList.replace("on", "off");
  }
};

menuButton.addEventListener("click", toggleOpen);
// menuButton.forEach((item) => item.addEventListener("click", toggleOpen));
menuButton;
