fetch("../reference-all-pages/nav.html")
  .then((res) => res.text())
  .then((text) => {
    let oldElem = document.querySelector("#replace_with_navbar");
    let newElem = document.createElement("header");
    newElem.innerHTML = text;
    oldElem.parentNode.replaceChild(newElem, oldElem);
  });
