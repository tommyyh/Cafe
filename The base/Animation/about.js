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
tl.from(".a-lp h1, .a-lp p", {y: "100%", duration: 0.80, opacity: 0, stagger: 0.25});
tl.from(".a-lp img", {y: "25%", duration: 1, opacity: 0},"-=0.5");
tl2.to(".a-scroll", {y: "-3%", repeat: "-1", yoyo: true, delay: 1});

// Beanery section
const beanery = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-a3",
      start: "center bottom"
   }
});

beanery.from(".beanery-rect", {x: "-75%", duration: 1, opacity: 0});
beanery.from(".beanery h1, .beanery h3, .beanery-text1, .beanery-text2", {y: "65%", duration: 1, opacity: 0, stagger:  0.15});

// History section
const history = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-a4",
      start: "center bottom"
   }
});

beanery.from(".history-img-d", {y: "75%", duration: 1, opacity: 0}, "-=0.75");
history.from(".history-rect-d", {x: "75%", duration: 1, opacity: 0}, "-=0.4");
history.from(".history h1, .history h3, .history p", {y: "50%", duration: 1, opacity: 0, stagger: 0.18});

// Staff section
const staff = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-a5",
      start: "center bottom"
   }
});

staff.from(".staff-slope, .staff-info", {y: "50%", duration: 1, opacity: 0, stagger: 0.20});

// Access section
const access = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-a6",
      start: "center bottom"
   }
});

access.from(".access", {x: "75%", duration: 1, opacity: 0});
access.from(".access-img", {x: "-75%", duration: 1, opacity: 0}, "-=1");
access.from(".access h1, .access h3, .access-open, .access-tel, .access-address", {y: "67%", duration: 1, opacity: 0, stagger: 0.15});

// Contact us
const contact = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-a7",
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