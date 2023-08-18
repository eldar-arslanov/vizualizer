const title = document.querySelector(".header__title");
let isToggled = false;
title.addEventListener("click", function () {
  if (isToggled) {
    title.style.color = "rgb(255, 255, 255)";
    title.textContent = "VISUALIZER";
    isToggled = false;
  } else {
    title.style.color = "#be3939f0";
    title.textContent = "PHOTOGRAPHER";
    isToggled = true;
  }
});
