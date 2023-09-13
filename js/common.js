'use strict'

const se = document.querySelector('.search');
const sie = se.querySelector('input');

se.addEventListener('click',function(){
  sie.focus();
});

sie.addEventListener('focus',function(){
  se.classList.add('focused');
  sie.setAttribute('placeholder','통합검색');
});

sie.addEventListener('blur',function(){
  se.classList.remove('focused');
  sie.setAttribute('placeholder','');
});

const thisyear = document.querySelector('.this-year');
thisyear.textContent = new Date().getFullYear();
