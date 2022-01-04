import $ from '../../../../node_modules/jquery/src/jquery';
import '../../../../node_modules/xzoom/dist/xzoom.css';
import '../../../../node_modules/xzoom/dist/xzoom.min';
import '../../components/appbar-details';
import '../../components/breadcrumb-details';
import '../../components/details-content';
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
