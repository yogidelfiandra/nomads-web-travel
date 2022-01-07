import gsap from 'gsap';
import '../../components/app-bar';
import '../../components/popular-content';
import '../../components/section-networks';
import '../../components/section-newsletter';
import '../../components/section-stats';
import '../../components/section-testimonial';
import '../../index';

const nav = document.querySelector('.navbar-fixed-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 20) {
    nav.classList.add('sticky', 'shadow-sm');
  } else {
    nav.classList.remove('sticky', 'shadow-sm');
  }
});

gsap.from('header h1', {
  duration: 2,
  y: -50,
  opacity: 0,
  delay: 0.2,
});

gsap.from('header p', {
  duration: 2,
  y: -50,
  opacity: 0,
  delay: 0.6,
});

gsap.from('header .btn-get-started', {
  duration: 2,
  y: -50,
  opacity: 0,
  delay: 1.2,
  ease: 'back',
});
