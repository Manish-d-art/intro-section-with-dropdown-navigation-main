
'use strict'

const navOpenBtn=document.querySelector('.menuBtn');
const navbar=document.querySelector('.nav-list');
const closeNavBtn=document.querySelector('.closeBtn');
const mainSec=document.querySelector('.main');
const Body=document.querySelector('body');
const dropdown1=document.querySelector('.dropdown-1');
const dropdown2=document.querySelector('.dropdown-2');


//mobile nav open 
navOpenBtn.addEventListener('click',function(e){
  e.preventDefault();
  navbar.style.transform=`translateX(${0}%)`;
  mainSec.style.opacity=".8";
  Body.style.backgroundColor="hsl(0, 0%, 8%,.54)";

});

//mobile nav close
closeNavBtn.addEventListener('click',function(e){
  e.preventDefault();
  navbar.style.transform=`translateX(${107}%)`;
  mainSec.style.opacity="1";
  Body.style.backgroundColor="white";
})

