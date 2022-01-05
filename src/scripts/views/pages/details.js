import gsap from 'gsap';
import $ from 'jquery/src/jquery';
import 'xzoom';
import '../../../../node_modules/xzoom/dist/xzoom.css';
import '../../components/breadcrumb-details';
import '../../components/details-content';
import '../../components/navbar-details';
import '../../components/sidebar-details';
import '../../index';

const nav = document.querySelector('.navbars-fixed-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 20) {
    nav.classList.add('shadow-sm');
  } else {
    nav.classList.remove('shadow-sm');
  }
});

$(document).ready(() => {
  $('.xzoom, .xzoom-gallery').xzoom({
    zoomWidth: 500,
    title: false,
    tint: '#333',
    Xoffset: 15,
  });
});

gsap.from('.animation', {
  duration: 2,
  y: 100,
  opacity: 0,
  ease: 'back',
});
