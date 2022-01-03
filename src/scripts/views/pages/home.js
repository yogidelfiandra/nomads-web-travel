import '../../components/app-bar';
import '../../components/popular-content';
import '../../components/section-networks';
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
