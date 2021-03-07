const cont = () => {
  // Nav
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    let windowPosition = window.scrollY > 500;

    nav.classList.toggle('scroll-nav', windowPosition);
  });

  // Nav - burger
  let burger = document.querySelector('.burger');
  let burgerMenu = document.querySelector('.menu-burger');

  burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('openM');
    burger.classList.toggle('openB');
  });

  // Animations
  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
  const tl2 = gsap.timeline({ defaults: { ease: 'power1.out' } });

  // Navbar
  tl.from('.nav', { y: '-100%', duration: 0.8, opacity: 0 });
  tl.from('.nav h1, .nav-ul li', {
    y: '-100%',
    duration: 0.7,
    opacity: 0,
    stagger: 0.1,
  });

  // Landing page
  tl.from('.r-lp-img', { y: '-50%', duration: 1, opacity: 0 });
  tl.from('.r-lp h1, .r-lp p', {
    y: '100%',
    duration: 0.8,
    opacity: 0,
    stagger: 0.25,
  });
  tl.from('.r-lp img', { y: '25%', duration: 1, opacity: 0 }, '-=0.5');
  tl2.to('.r-scroll', { y: '-3%', repeat: '-1', yoyo: true, delay: 1 });

  // Reservation
  const reservation = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-r3',
      start: 'center bottom',
    },
  });

  reservation.from('.reservation-rect', { x: '75%', duration: 1, opacity: 0 });
  reservation.from(
    '.reservation h1, .reservation h3, .reservation input, .reservation button',
    { y: '75%', duration: 1, opacity: 0, stagger: 0.15 }
  );

  // Footer
  const footer = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer-info',
      start: 'center bottom',
    },
  });

  footer.from('.footer-info h1', {
    y: '50%',
    duration: 1,
    opacity: 0,
    stagger: 0.25,
  });
  footer.from(
    '.footer-f h1, .go-back',
    { y: '50%', duration: 1, opacity: 0, stagger: 0.25 },
    '-=0.5'
  );
};

cont();
