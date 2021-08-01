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


