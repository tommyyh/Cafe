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
tl.from(".c-lp h1, .c-lp p", {y: "100%", duration: 0.80, opacity: 0, stagger: 0.25});
tl.from(".c-lp img", {y: "25%", duration: 1, opacity: 0},"-=0.5");
tl2.to(".c-scroll", {y: "-3%", repeat: "-1", yoyo: true, delay: 1});
tl.from(".c-lp-img", {y: "25%", duration: 1, opacity: 0},"-=0.5");

// Contact us
const contact = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-c3",
      start: "center bottom"
   }
});

contact.from(".contact-rect", {x: "-75%", duration: 1, opacity: 0});
contact.from(".contact h1, .contact h3, .contact input, .contact textarea, .contact button", {y: "75%", duration: 1, opacity: 0, stagger: 0.18});

// Footer
const footer = gsap.timeline({
   scrollTrigger: {
      trigger: ".footer-info",
      start: "center bottom"
   }
});

footer.from(".footer-info h1", {y: "50%", duration: 1, opacity: 0, stagger: 0.25});
footer.from(".footer-f h1, .go-back", {y: "50%", duration: 1, opacity: 0, stagger: 0.25}, "-=0.5");