window.addEventListener('DOMContentLoaded', event => {
  // FUNGSI MENYUSUTKAN NAVBAR
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');if (!navbarCollapsible) {
      return ;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }
  };



//mengecilkan navbar
navbarShrink(); 

//mengecilkan navbar saat halaman di gulir
document.addEventListener('scroll', navbarShrink);

//Aktifkan Bootstrap scrollspy pada elemen navigasi utama
const mainNav = document.body.querySelector('#mainNav');
if (mainNav) {
  new bootstrap.ScrollSpy(document.body, {
    target: '#mainNav' ,
    rootMargin: '0px 0px -40%' ,
  });
 };
 
 //Ciutkan navbar responsif saat toggler terlihat
 const navbarToggler = document.body.querySelector('.navbar-toggler');
 const responsiveNavItems = [].slice.call(
   document.querySelectorAll('#navbarResponsive .nav-link')
   );
   responsiveNavItems.map( function (responsiveNavItem) {
     responsiveNavItem.addEventListener('click', () => {
       if (window.getComputedStyle(navbarToggler).display !== 'none') {
         navbarToggler.click();
       }
     });
   });
});