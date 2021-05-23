// PARALLAX SCROLL HEADER //
let header = document.getElementById('header');
let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let sun = document.getElementById('sun');
let back = document.getElementById('back');
let actioncounter = document.getElementById('actioncounter');
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
 actioncounter.style.marginTop = value * 0.25 + 'px';
 back.style.top = value * -0.15 + 'px';
 plants.style.top = value * 0.025 + 'px';
 fish.style.left = value * 0.55 + 'px';
 turtle.style.left = value * -0.5 + 'px';
 piles1.style.left = value * -3 + 'px';
 piles2.style.left = value * 3 + 'px';
 
 });
//MENU BURGER ANIMATION //
const menuAnim = document.querySelector('.menu-toggle');
let openMenu = false;
menuAnim.addEventListener('click', () => {
	if(!openMenu) {
		menuAnim.classList.add('open');
		openMenu = true;
	} else {
		menuAnim.classList.remove('open');
		openMenu = false;
	}
});

//COUNTDOWN//////////////////////////////////////////////////////////
let countDate = new Date('June 5, 2021 14:30:00').getTime();
function newYear(){
	let currentTime = new Date().getTime();
	let gapTime = countDate - currentTime;
		let seconds = 1000;
		let minutes = seconds * 60;
		let hours = minutes * 60;
		let days = hours * 24;

	let daysCount = Math.floor(gapTime / (days));
	let hoursCount = Math.floor((gapTime % (days)) / (hours));
	let minutesCount = Math.floor((gapTime % (hours)) / (minutes));
	let secondsCount = Math.floor((gapTime % (minutes)) / seconds);

	document.getElementById('days').innerText = daysCount;
	document.getElementById('hours').innerText = hoursCount;
	document.getElementById('minutes').innerText = minutesCount;
	document.getElementById('seconds').innerText = secondsCount;
}
setInterval (function(){
	newYear();
},1000)

// HIDE SHOW DIV //
const show1 = document.getElementById('op-1');
const show2 = document.getElementById('op-2');
const show3 = document.getElementById('op-3');
const show4 = document.getElementById('op-4');
const opText1 = document.getElementById('op-1-text');
const opText2 = document.getElementById('op-2-text');
const opText3 = document.getElementById('op-3-text');
const opText4 = document.getElementById('op-4-text');

show1.onclick = function(){
	opText1.style.display = "block";
	opText2.style.display = "none";
	opText3.style.display = "none";
	opText4.style.display = "none";
	show1.style.borderBottom = "5px solid #78e4e4";
	show2.style.borderBottom = "none";
	show3.style.borderBottom = "none";
	show4.style.borderBottom = "none";
}
show2.onclick = function(){
	opText1.style.display = "none";
	opText2.style.display = "block";
	opText3.style.display = "none";
	opText4.style.display = "none";
	show1.style.borderBottom = "none";
	show2.style.borderBottom = "5px solid #78e4e4";
	show3.style.borderBottom = "none";
	show4.style.borderBottom = "none";
}
show3.onclick = function(){
	opText1.style.display = "none";
	opText2.style.display = "none";
	opText3.style.display = "block";
	opText4.style.display = "none";
	show1.style.borderBottom = "none";
	show2.style.borderBottom = "none";
	show3.style.borderBottom = "5px solid #78e4e4";
	show4.style.borderBottom = "none";
}
show4.onclick = function(){
	opText1.style.display = "none";
	opText2.style.display = "none";
	opText3.style.display = "none";
	opText4.style.display = "block";
	show1.style.borderBottom = "none";
	show2.style.borderBottom = "none";
	show3.style.borderBottom = "none";
	show4.style.borderBottom = "5px solid #78e4e4";
}


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

