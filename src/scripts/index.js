import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/css/main.css';

const nav = document.querySelector('.navbar-fixed-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 20) {
    nav.classList.add('sticky', 'shadow-sm');
  } else {
    nav.classList.remove('sticky', 'shadow-sm');
  }
});
