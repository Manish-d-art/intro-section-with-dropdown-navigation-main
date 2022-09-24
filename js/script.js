
'use strict'

const navOpenBtn=document.querySelector('.menuBtn');
const navbar=document.querySelector('.nav-list');
const closeNavBtn=document.querySelector('.closeBtn');

navOpenBtn.addEventListener('click',function(e){
  e.preventDefault();
  navbar.style.transform=`translateX(${0}%)`;
});

closeNavBtn.addEventListener('click',function(e){
  e.preventDefault();
  navbar.style.transform=`translateX(${107}%)`;
})

