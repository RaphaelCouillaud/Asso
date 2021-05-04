// PARALLAX SCROLL HEADER //
let header = document.getElementById('header');
let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let back = document.getElementById('back');
let btn = document.getElementById('btn');
let plants = document.getElementById('plants');
let water = document.getElementById('water');

window.addEventListener('scroll', () => {
 let value = window.scrollY;
 header.style.top = value * -0.5 + 'px';
 text.style.top = 50 + value * -0.5 + '%';
 bird1.style.top = value * -1.5 + 'px';
 bird1.style.left = value * -2 + 'px';
 bird2.style.top = value * -1.5 + 'px';
 bird2.style.left = value * 5 + 'px';
 btn.style.marginTop = value * 1.5 + 'px';
 back.style.top = value * -0.15 + 'px';
 plants.style.top = value * 0.25 + 'px';
 
 })



// SCROLL TO TOP //
//const toTop = document.querySelector(".to-top");

//window.addEventListener("scroll", () => {
  
//  if (window.pageYOffset > 1000) {
//    toTop.classList.add("active");
//  } else {
//    toTop.classList.remove("active");
//  }
//})
//////////////////////////////////////////////////////////////////////////////////////

