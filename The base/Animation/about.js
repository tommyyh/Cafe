// Nav - burger
let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".menu-burger");

burger.addEventListener("click", () => {
   burgerMenu.classList.toggle("openM");
   burger.classList.toggle("openB");
});

// Animations
const tl = gsap.timeline({defaults: {ease: "power1.out"}});
const tl2 = gsap.timeline({defaults: {ease: "power1.out"}});

// Navbar
tl.from(".nav", {y: "-100%", duration: 0.80, opacity: 0});
tl.from(".nav h1, .nav-ul li", {y: "-100%", duration: 0.70, opacity: 0, stagger: 0.1});

// Landing page
tl.from(".a-lp h1, .a-lp p, .a-lp button", {y: "100%", duration: 0.80, opacity: 0, stagger: 0.25});
tl.from(".a-lp img", {y: "25%", duration: 1, opacity: 0},"-=0.5");
tl2.to(".a-scroll", {y: "-3%", repeat: "-1", yoyo: true, delay: 1});