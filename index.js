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
};

// HIDE SHOW ACTIONS //
const action1 = document.getElementById('ac-1'); //options
const action2 = document.getElementById('ac-2');
const showAction1 = document.getElementById('ac-1-text');//choix display
const showAction2 = document.getElementById('ac-2-text');


action1.onclick = function(){
	showAction1.style.display = "block";
	showAction2.style.display = "none";	
	action1.style.opacity = "1";
	action1.style.filter = "grayscale(0)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
}
action2.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "block";	
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "1";
	action2.style.filter = "grayscale(0)";	
}

// SHOW HIDE ANSWERS //
const question1 = document.getElementById('question-1');
const question2 = document.getElementById('question-2');
const question3 = document.getElementById('question-3');
const question4 = document.getElementById('question-4');
const question5 = document.getElementById('question-5');
const question6 = document.getElementById('question-6');
const question7 = document.getElementById('question-7');
const answer1 = document.getElementById('question-1-text');
const answer2 = document.getElementById('question-2-text');
const answer3 = document.getElementById('question-3-text');
const answer4 = document.getElementById('question-4-text');
const answer5 = document.getElementById('question-5-text');
const answer6 = document.getElementById('question-6-text');
const answer7 = document.getElementById('question-7-text');


question1.onclick = function(){
	answer1.style.display = "block";
	answer2.style.display = "none";	
	answer3.style.display = "none";	
	answer4.style.display = "none";	
	answer5.style.display = "none";	
	answer6.style.display = "none";	
	answer7.style.display = "none";		
	question1.style.opacity = "1";
	question1.style.transform = "scale(1.25)";
	question2.style.opacity = "0.5";
	question2.style.transform = "scale(1)";	
	question3.style.opacity = "0.5";
	question3.style.transform = "scale(1)";		
	question4.style.opacity = "0.5";
	question4.style.transform = "scale(1)";		
	question5.style.opacity = "0.5";
	question5.style.transform = "scale(1)";		
	question6.style.opacity = "0.5";	
	question6.style.transform = "scale(1)";	
	question7.style.opacity = "0.5";
	question7.style.transform = "scale(1)";	
}
question2.onclick = function(){
	answer1.style.display = "none";
	answer2.style.display = "block";
	answer3.style.display = "none";	
	answer4.style.display = "none";	
	answer5.style.display = "none";	
	answer6.style.display = "none";	
	answer7.style.display = "none";		
	question1.style.opacity = "0.5";
	question1.style.transform = "scale(1)";
	question2.style.opacity = "1";
	question2.style.transform = "scale(1.25)";	
	question3.style.opacity = "0.5";
	question3.style.transform = "scale(1)";		
	question4.style.opacity = "0.5";
	question4.style.transform = "scale(1)";		
	question5.style.opacity = "0.5";
	question5.style.transform = "scale(1)";		
	question6.style.opacity = "0.5";	
	question6.style.transform = "scale(1)";	
	question7.style.opacity = "0.5";
	question7.style.transform = "scale(1)";	
}
question3.onclick = function(){
	answer1.style.display = "none";
	answer2.style.display = "none";	
	answer3.style.display = "block";	
	answer4.style.display = "none";	
	answer5.style.display = "none";	
	answer6.style.display = "none";	
	answer7.style.display = "none";		
	question1.style.opacity = "0.5";
	question1.style.transform = "scale(1)";
	question2.style.opacity = "0.5";
	question2.style.transform = "scale(1)";	
	question3.style.opacity = "1";
	question3.style.transform = "scale(1.25)";		
	question4.style.opacity = "0.5";
	question4.style.transform = "scale(1)";		
	question5.style.opacity = "0.5";
	question5.style.transform = "scale(1)";		
	question6.style.opacity = "0.5";	
	question6.style.transform = "scale(1)";	
	question7.style.opacity = "0.5";
	question7.style.transform = "scale(1)";	
}
question4.onclick = function(){
	answer1.style.display = "none";
	answer2.style.display = "none";	
	answer3.style.display = "none";	
	answer4.style.display = "block";	
	answer5.style.display = "none";	
	answer6.style.display = "none";	
	answer7.style.display = "none";	
	question1.style.opacity = "0.5";
	question1.style.transform = "scale(1)";
	question2.style.opacity = "0.5";
	question2.style.transform = "scale(1)";	
	question3.style.opacity = "0.5";
	question3.style.transform = "scale(1)";		
	question4.style.opacity = "1";
	question4.style.transform = "scale(1.25)";		
	question5.style.opacity = "0.5";
	question5.style.transform = "scale(1)";		
	question6.style.opacity = "0.5";	
	question6.style.transform = "scale(1)";	
	question7.style.opacity = "0.5";
	question7.style.transform = "scale(1)";		
}
question5.onclick = function(){
	answer1.style.display = "none";
	answer2.style.display = "none";	
	answer3.style.display = "none";	
	answer4.style.display = "none";	
	answer5.style.display = "block";	
	answer6.style.display = "none";	
	answer7.style.display = "none";		
	question1.style.opacity = "0.5";
	question1.style.transform = "scale(1)";
	question2.style.opacity = "0.5";
	question2.style.transform = "scale(1)";	
	question3.style.opacity = "0.5";
	question3.style.transform = "scale(1)";		
	question4.style.opacity = "0.5";
	question4.style.transform = "scale(1)";		
	question5.style.opacity = "1";
	question5.style.transform = "scale(1.25)";		
	question6.style.opacity = "0.5";	
	question6.style.transform = "scale(1)";	
	question7.style.opacity = "0.5";
	question7.style.transform = "scale(1)";		
}
question6.onclick = function(){
	answer1.style.display = "none";
	answer2.style.display = "none";	
	answer3.style.display = "none";	
	answer4.style.display = "none";	
	answer5.style.display = "none";	
	answer6.style.display = "block";	
	answer7.style.display = "none";		
	question1.style.opacity = "0.5";
	question1.style.transform = "scale(1)";
	question2.style.opacity = "0.5";
	question2.style.transform = "scale(1)";	
	question3.style.opacity = "0.5";
	question3.style.transform = "scale(1)";		
	question4.style.opacity = "0.5";
	question4.style.transform = "scale(1)";		
	question5.style.opacity = "0.5";
	question5.style.transform = "scale(1)";		
	question6.style.opacity = "1";	
	question6.style.transform = "scale(1.25)";	
	question7.style.opacity = "0.5";
	question7.style.transform = "scale(1)";	
}
question7.onclick = function(){
	answer1.style.display = "none";
	answer2.style.display = "none";	
	answer3.style.display = "none";	
	answer4.style.display = "none";	
	answer5.style.display = "none";	
	answer6.style.display = "none";	
	answer7.style.display = "block";	
	question1.style.opacity = "0.5";
	question1.style.transform = "scale(1)";
	question2.style.opacity = "0.5";
	question2.style.transform = "scale(1)";	
	question3.style.opacity = "0.5";
	question3.style.transform = "scale(1)";		
	question4.style.opacity = "0.5";
	question4.style.transform = "scale(1)";		
	question5.style.opacity = "0.5";
	question5.style.transform = "scale(1)";		
	question6.style.opacity = "0.5";	
	question6.style.transform = "scale(1)";	
	question7.style.opacity = "1";
	question7.style.transform = "scale(1.25)";	
	
}
// COUNTER //
//jQuery(window).scroll(startCounter);
//function startCounter() {
//    var hT = jQuery('.contentcounter').offset().top,
//        hH = jQuery('.contentcounter').outerHeight(),
//        wH = jQuery(window).height();
//    if (jQuery(window).scrollTop() > hT+hH-wH) {
//        jQuery(window).off("scroll", startCounter);
//        jQuery('.numbercounter').each(function () {
//            var $this = jQuery(this);
//           jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
//                duration: 2000,
//                easing: 'swing',
//                step: function () {
//                    $this.text(Math.ceil(this.Counter));
//                }
//            });
//       });
//    }
//}

// ok///////////////////////////////////////////////////////
//jQuery('.numbercounter').each(function () {
//            var $this = jQuery(this);
//            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
//                duration: 5000,
//                easing: 'swing',
//                step: function () {
//                    $this.text(Math.ceil(this.Counter));
//               }
//           });
 //       });

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

