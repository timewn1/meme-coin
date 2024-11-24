gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0);

// header class
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
  let currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop) {
    $('.header').addClass('down');
  } else {
    $('.header').removeClass('down');
  }

  lastScrollTop = currentScrollTop;
});

var case_swiper = new Swiper(".partner-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed:500,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
    1024:{
      slidesPerView: 'auto',
      spaceBetween: 0,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  }
});


// partner page modal
$('.sec-partner-page-content .partner-item').click(function() {
  $('.partner-modal__wrap, .full-bg').addClass('open-modal');
});

$(document).on('click', '.full-bg.open-modal', function() {
  $('.partner-modal__wrap, .full-bg').removeClass('open-modal');
});

$('.partner-modal-close, .partner-modal-close-sp').click(function() {
  $('.partner-modal__wrap, .full-bg').removeClass('open-modal');
});

$('.sec-fv-img-arrow').click(function() {
  $('html, body').animate({
    scrollTop: $('#service').offset().top
  }, 'fast');
});

$('.sp-menu-btn').click(function() {
  $('.header-sp-menu-main__wrap, .header-sp-menu-main, .sp-menu-btn').toggleClass('open-menu');
});

$(document).click(function(event) {
  if (!$(event.target).closest('.header-sp-menu-main.open-menu, .sp-menu-btn').length) {
    $('.header-sp-menu-main__wrap, .header-sp-menu-main, .sp-menu-btn').removeClass('open-menu');
  }
});