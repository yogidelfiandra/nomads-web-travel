import gsap from 'gsap';
import '../../components/breadcrumb-checkout';
import '../../components/checkout-content';
import '../../components/navbar-checkout';
import '../../components/sidebar-checkout';
import '../../index';

const nav = document.querySelector('.navbars-fixed-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 20) {
    nav.classList.add('shadow-sm');
  } else {
    nav.classList.remove('shadow-sm');
  }
});

gsap.from('.animation', {
  duration: 2,
  y: 100,
  opacity: 0,
  ease: 'back',
});
