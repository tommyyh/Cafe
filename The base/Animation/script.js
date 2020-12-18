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
tl.from(".lp-img", {y: "25%", duration: 1, opacity: 0},"-=0.5");

// About section
const about = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-3",
      start: "center bottom"
   }
});

about.from(".about-rect", {x: "-75%", duration: 1, opacity: 0});
about.from(".about h1, .about h3, .about p, .about-button", {y: "100%", duration: 1, opacity: 0, stagger: 0.1}, "-=0.20");

// What we do section
const wwdImg = gsap.timeline({
   scrollTrigger: {
      trigger: ".wwd-img",
      start: "center bottom"
   }
});

const wwd = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-4",
      start: "center bottom"
   }
});

wwdImg.from(".wwd-img", {x: "75%", duration: 1, opacity: 0});
wwd.from(".wwd-rect", {y: "75%", opacity: 0, duration: 1, delay: 0.25});
wwd.from(".wwd h1, .wwd h3, .wwd-text1, .wwd-text2", {x: "-75%", opacity: 0, duration: 1, stagger: 0.15, delay: 0.04});

// Menu section
const menu = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-5",
      start: "center bottom"
   }
});

menu.from(".menu-rect", {x: "85%", duration: 1, opacity: 0});
menu.from(".menu-img", {x: "-75%", duration: 1, opacity: 0}, "-=1");
menu.from(".menu h1, .menu h3, .menu p, .menu-button", {y: "75%", duration: 1, opacity: 0, stagger: 0.1});

// Reservation
const reserv = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-6",
      start: "center bottom"
   }
});

reserv.from(".reserv-img", {y: "75%", duration: 1, opacity: 0});
reserv.from(".reserv h1, .reserv-button", {x: "-50%", duration: 1, opacity: 0, stagger: 0.15});

// Benefits
const benefits = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-7",
      start: "center bottom"
   }
});

benefits.from(".benefits", {x: "-80%", duration: 1, opacity: 0});
benefits.from(".benefits-img", {x: "-80%", duration: 1, opacity: 0});
benefits.from(".benefits h1, .benefits h3, .benefits p, .benefits-button", {y: "50%", duration: 1, opacity: 0, stagger: 0.15}, "-=0.25");

// Reviews
const rew = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-8",
      start: "center bottom"
   }
});

rew.from(".reviews-rect", {x: "75%", duration: 1, opacity: 0});
rew.from(".reviews h1, .reviews h3, .reviews-text, .reviews-sign, .reviews-star img", {y: "75%", duration: 1, opacity: 0, stagger: 0.15});

// Contact us
const contact = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-9",
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