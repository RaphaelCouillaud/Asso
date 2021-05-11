// PARALLAX SCROLL HEADER //
let header = document.getElementById('header');
let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let sun = document.getElementById('sun');
let back = document.getElementById('back');
let btn = document.getElementById('btn');
let plants = document.getElementById('plants');
let turtle = document.getElementById('turtle');
let fish = document.getElementById('fish');
let piles1 = document.getElementById('piles1');
let piles2 = document.getElementById('piles2');
let water = document.getElementById('water');

window.addEventListener('scroll', () => {
 let value = window.scrollY;
 header.style.top = value * -0.5 + 'px';
 text.style.top = 50 + value * -0.5 + '%';
 bird1.style.top = value * -1.5 + 'px';
 bird1.style.left = value * -2 + 'px';
 bird2.style.top = value * -1.5 + 'px';
 bird2.style.left = value * 5 + 'px';
 cloud1.style.left = value * -2 + 'px';
 cloud2.style.left = value * 5 + 'px';
 sun.style.left = value * -0.5 + 'px';
 sun.style.top = value * 0.25 + 'px';
 btn.style.marginTop = value * 0.5 + 'px';
 back.style.top = value * -0.15 + 'px';
 plants.style.top = value * 0.025 + 'px';
 fish.style.left = value * 0.55 + 'px';
 turtle.style.left = value * -0.5 + 'px';
 piles1.style.left = value * -3 + 'px';
 piles2.style.left = value * 3 + 'px';
 
 });

//COUNDOWN//////////////////////////////////////////////////////////



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

