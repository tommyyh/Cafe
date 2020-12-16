// Nav - burger
let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".menu-burger");

burger.addEventListener("click", () => {
   burgerMenu.classList.toggle("openM");
   burger.classList.toggle("openB");
});

// Animations
const tl = gsap.timeline({defaults: {ease: "power1.out"}});

// Navbar
tl.from(".nav", {y: "-100%", duration: 0.80, opacity: 0});
tl.from(".nav h1, .nav-ul li", {y: "-100%", duration: 0.70, opacity: 0, stagger: 0.1});

// Landing page
tl.from(".lp h1, .lp p, .lp button", {y: "100%", duration: 0.80, opacity: 0, stagger: 0.25});
tl.from(".lp-img", {y: "25%", duration: 1, opacity: 0});

// About section
const about = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-3",
      start: "center bottom"
   }
});

about.from(".about-rect", {x: "-75%", duration: 1, opacity: 0})
about.from(".about h1, .about h3, .about p, .about-button", {y: "100%", duration: 1, opacity: 0, stagger: 0.1})

// What we do section
const wwd = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-4",
      start: "center bottom"
   }
});

wwd.from(".wwd-img", {x: "75%", opacity: 0, duration: 1});
wwd.from(".wwd-rect", {y: "90%", opacity: 0, duration: 1});
wwd.from(".wwd h1, .wwd h3, .wwd-text1, .wwd-text2", {x: "-75%", opacity: 0, duration: 1, stagger: 0.15});