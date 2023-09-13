'use strict'

const tte = document.querySelector('#to-top');

tte.addEventListener('click',function(){
  gsap.to(window, .7, {
    scrollTo : 0
  });
});

const be = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function( e ){

  let o1 = { opacity : 1, display : 'block' },
      o2 = {  x : 100};

  if( window.scrollY > 500 ){

    o1.opacity = 0;
    o1.display = 'none';
    
    o2.x = 0;

  } 
  
  gsap.to(be, .6, o1);
  gsap.to(tte, .2, o2);

}, 300));

const fes = document.querySelectorAll('.fade-in');

fes.forEach(function( e, i ){

  gsap.to( e , 1, { opacity : 1, delay : ( i + 1 ) * .6 });

});

new Swiper(".notice-line .notice--swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true
});

new Swiper(".notice-promotion .promotion-swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: { delay: 5000 },
  pagination: {
    el: '.notice-promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl:'.notice-promotion .swiper-prev',
    nextEl:'.notice-promotion .swiper-next'
  }
});

new Swiper(".awards .awards-swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});

const ce = document.querySelector('.notice-promotion');
const tpb = document.querySelector('.toggle-promotion');
let pflag = false
tpb.addEventListener('click', function(){
  pflag = !pflag;
  if( pflag ){
    ce.classList.add('hide');
  }else{
    ce.classList.remove('hide');
  }
});

function random( min, max ){

  return parseFloat( ( Math.random() * ( max - min ) + min ).toFixed(2) );

}

function floatingObject( selector , delay, size ){
  gsap.to(selector, 
    random( 1.5, 2.5 ), 
    {  
      ease: Power1.easeInOut,
      y: size,
      repeat: -1,
      yoyo: true,
      delay: random( 0, delay )
  });
}

floatingObject( '.floating1' , 1, 15 );
floatingObject( '.floating2' , .5, 15 );
floatingObject( '.floating3' , 1.5, 20 );

const spyes = document.querySelectorAll('section.scroll-spy');
spyes.forEach(function( spye ){
  new ScrollMagic
     .Scene({ 
        triggerElement: spye,
        triggerHook: .8
      })
     .setClassToggle(spye, 'show')
     .addTo( new ScrollMagic.Controller() );
});
