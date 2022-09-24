
'use strict'

const navOpenBtn=document.querySelector('.menuBtn');
const navbar=document.querySelector('.nav-list');
const closeNavBtn=document.querySelector('.closeBtn');
const mainSec=document.querySelector('.main');
const Body=document.querySelector('body');

navOpenBtn.addEventListener('click',function(e){
  e.preventDefault();
  navbar.style.transform=`translateX(${0}%)`;
  mainSec.style.opacity=".4";
  Body.style.backgroundColor="rgba(0, 0, 0,60%)";

});

closeNavBtn.addEventListener('click',function(e){
  e.preventDefault();
  navbar.style.transform=`translateX(${107}%)`;
  mainSec.style.opacity="1";
  Body.style.backgroundColor="white";
})

