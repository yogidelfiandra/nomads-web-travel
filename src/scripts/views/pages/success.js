import gsap from 'gsap';
import '../../components/navbar-checkout';
import '../../index';

gsap.from('.section-success img', {
  duration: 2.5,
  y: -100,
  opacity: 0,
  ease: 'bounce.out',
});

gsap.from('.section-success h1', {
  duration: 2,
  y: -50,
  opacity: 0,
  delay: 3,
});

gsap.from('.section-success p', {
  duration: 2,
  y: -50,
  opacity: 0,
  delay: 4,
});

gsap.from('.section-success .btn-homepage', {
  duration: 2,
  y: -50,
  opacity: 0,
  delay: 5,
  ease: 'back',
});
