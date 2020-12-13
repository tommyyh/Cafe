// Nav - burger
let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".menu-burger");

burger.addEventListener("click", () => {
   burgerMenu.classList.toggle("openM");
   burger.classList.toggle("openB");
});