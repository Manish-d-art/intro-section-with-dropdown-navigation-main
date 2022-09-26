
'use strict'

const navOpenBtn=document.querySelector('.menuBtn');
const navbar=document.querySelector('.nav-list');
const closeNavBtn=document.querySelector('.closeBtn');
const mainSec=document.querySelector('.main');
const Body=document.querySelector('body');
const dropdown1=document.querySelector('.dropdown-1');
const dropdown2=document.querySelector('.dropdown-2');
const dropdownBtn1=document.querySelector('.dropdownBtn-1');
const dropdownBtn2=document.querySelector('.dropdownBtn-2');
const arrow1=document.querySelector('.arrow1');
const arrow2=document.querySelector('.arrow2');


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
});

// dropdown-1 
dropdownBtn1.addEventListener('click',function(e){
  e.preventDefault();
  dropdown1.classList.toggle('dropStyle1');
  // arrow1.classList.toggle('arrow-1');
});

//dropdown-2
dropdownBtn2.addEventListener('click',function(e){
  e.preventDefault();
  dropdown2.classList.toggle('dropStyle2');
  // arrow2.classList.toggle('arrow-2');
})


