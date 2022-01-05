// PARALLAX SCROLL HEADER //

let text = document.getElementById('text');

let butterflies = document.getElementById('butterflies');
let butterflies1 = document.getElementById('butterflies1');

let back = document.getElementById('back');
let actioncounter = document.getElementById('actioncounter');

let plants = document.getElementById('plants');
let turtle = document.getElementById('turtle');
let fish = document.getElementById('fish');
let piles1 = document.getElementById('piles1');
let piles2 = document.getElementById('piles2');


window.addEventListener('scroll', () => {
 let value = window.scrollY;

 
 text.style.top = 50 + value * -0.5 + '%';
 butterflies.style.top = value * -1 + 'px';
 butterflies.style.left = value * 1 + 'px';
 butterflies1.style.top = value * -1.02 + 'px';
 butterflies1.style.left = value * 1.025 + 'px';
 actioncounter.style.marginTop = value * -0.025 + 'px';
 back.style.top = value * -0.15 + 'px';
 plants.style.top = value * 0.025 + 'px';
 fish.style.left = value * 0.55 + 'px';
 turtle.style.left = value * -0.5 + 'px';
 piles1.style.left = value * -3 + 'px';
 piles2.style.left = value * 3 + 'px'; 
 });
// PARALLAX PORTRAIT SCROLL HEADER //

let textphone = document.getElementById('textphone');
let bird1phone = document.getElementById('bird1phone');
let bird2phone = document.getElementById('bird2phone');

let cloudphone = document.getElementById('cloudphone');

let sunphone = document.getElementById('sunphone');
let backphone = document.getElementById('backphone');

let plantsphone = document.getElementById('plantsphone');
let turtlephone = document.getElementById('turtlephone');
let fishphone = document.getElementById('fishphone');
let piles1phone = document.getElementById('piles1phone');
let piles2phone = document.getElementById('piles2phone');
let waterphone = document.getElementById('waterphone');

window.addEventListener('scroll', () => {
 let valuephone = window.scrollY;
 
 textphone.style.top = 20 + valuephone * -0.5 + '%';
 bird1phone.style.top = valuephone * -1.5 + 'px';
 bird1phone.style.left = valuephone * -2 + 'px';
 bird2phone.style.top = valuephone * -1.5 + 'px';
 bird2phone.style.left = valuephone * 5 + 'px'; 
 cloudphone.style.left = valuephone * -1 + 'px'; 
 sunphone.style.left = valuephone * 0.5 + 'px';
 sunphone.style.top = valuephone * 0.25 + 'px'; 
 backphone.style.top = valuephone * -0.15 + 'px';
 plantsphone.style.top = valuephone * 0.025 + 'px';
 fishphone.style.left = valuephone * 0.5 + 'px';
 turtlephone.style.left = valuephone * -0.5 + 'px';
 piles1phone.style.left = valuephone * -3 + 'px';
 piles2phone.style.left = valuephone * 3 + 'px'; 
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
let countDate = new Date('February 6, 2022 10:30:00').getTime();
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
},1000);

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
	show1.style.borderBottom = "5px solid white";
	show2.style.borderBottom = "none";
	show3.style.borderBottom = "none";
	show4.style.borderBottom = "none";
	show1.style.opacity = "1";
	show2.style.opacity = "0.7";
	show3.style.opacity = "0.7";
	show4.style.opacity = "0.7";

}
show2.onclick = function(){
	opText1.style.display = "none";
	opText2.style.display = "block";
	opText3.style.display = "none";
	opText4.style.display = "none";
	show1.style.borderBottom = "none";
	show2.style.borderBottom = "5px solid white";
	show3.style.borderBottom = "none";
	show4.style.borderBottom = "none";
	show1.style.opacity = "0.7";
	show2.style.opacity = "1";
	show3.style.opacity = "0.7";
	show4.style.opacity = "0.7";
}
show3.onclick = function(){
	opText1.style.display = "none";
	opText2.style.display = "none";
	opText3.style.display = "block";
	opText4.style.display = "none";
	show1.style.borderBottom = "none";
	show2.style.borderBottom = "none";
	show3.style.borderBottom = "5px solid white";
	show4.style.borderBottom = "none";
	show1.style.opacity = "0.7";
	show2.style.opacity = "0.7";
	show3.style.opacity = "1";
	show4.style.opacity = "0.7";
}
show4.onclick = function(){
	opText1.style.display = "none";
	opText2.style.display = "none";
	opText3.style.display = "none";
	opText4.style.display = "block";
	show1.style.borderBottom = "none";
	show2.style.borderBottom = "none";
	show3.style.borderBottom = "none";
	show4.style.borderBottom = "5px solid white";
	show1.style.opacity = "0.7";
	show2.style.opacity = "0.7";
	show3.style.opacity = "0.7";
	show4.style.opacity = "1";
};


////////////////////////////////////////////////////////////////////////////
//INTERSECTION OBSERVER hori//
const ratio = 0.1
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}
const handleIntersect = function (entries, observer) {
	entries.forEach(function (entry) {
		if (entry.intersectionRatio > ratio) {
			entry.target.classList.add('reveal-visible')
			observer.unobserve(entry.target)			
		}
		})
}
const observerIntersect = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (revealTitle) {
	observerIntersect.observe(revealTitle)
})
///////////////////////////////////////////////////////////////
var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter-up').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.numbercounter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});


// SCROLL TO TOP //
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  
if (window.pageYOffset > 600) {
toTop.classList.add("up");
} else {
toTop.classList.remove("up");
}
})
//////////////////////////////////////////////////////////////////////////////////////

