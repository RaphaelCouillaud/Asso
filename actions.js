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
let countDate = new Date('September 21, 2025 10:00:00').getTime();
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

let countDate2 = new Date('June 8, 2025 14:00:00').getTime();
function newYear2(){
  let currentTime2 = new Date().getTime();
  let gapTime2 = countDate2 - currentTime2;
    let seconds2 = 1000;
    let minutes2 = seconds2 * 60;
    let hours2 = minutes2 * 60;
    let days2 = hours2 * 24;

  let daysCount2 = Math.floor(gapTime2 / (days2));
  let hoursCount2 = Math.floor((gapTime2 % (days2)) / (hours2));
  let minutesCount2 = Math.floor((gapTime2 % (hours2)) / (minutes2));
  let secondsCount2 = Math.floor((gapTime2 % (minutes2)) / seconds2);

  document.getElementById('days2').innerText = daysCount2;
  document.getElementById('hours2').innerText = hoursCount2;
  document.getElementById('minutes2').innerText = minutesCount2;
  document.getElementById('seconds2').innerText = secondsCount2;
}
setInterval (function(){
  newYear2();
},1000);

// ACTUALITES //
const allCross = document.querySelectorAll('.visible-pannel img');



allCross.forEach(element => {

    element.addEventListener('click', function(){

        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

        const currentChoice = this.parentNode.parentNode.childNodes[3];

        // console.log(this.src);
        if(this.src.includes('plus')){
            this.src = 'img/minus.png';
            gsap.to(currentChoice, {duration: 0.5, height: height + 50, opacity: 1, transition: 'ease-in-out', padding: '20px 15px'})
        } else if (this.src.includes('minus')){
            this.src = 'img/plus.png';
            gsap.to(currentChoice, {duration: 0.5, height: 0, opacity: 0, transition: 'ease-in-out', padding: '0px 15px'})
        }
        
    })

});
// TYPE SCRIPT //
let textscript1 = "Nom de code opération : Le Débarquement";
    let array1 = Array.from(textscript1);

    Object.keys(array1).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription1").innerHTML += array1[key]),
        key * 285
      );
    });
let textscript2 = "Nom de code opération : Tempête du Marais";
    let array2 = Array.from(textscript2);

    Object.keys(array2).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription2").innerHTML += array2[key]),
        key * 290
      );
    });
let textscript3 = "Nom de code opération : Le Blockhaus";
    let array3 = Array.from(textscript3);

    Object.keys(array3).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription3").innerHTML += array3[key]),
        key * 295
      );
    });
let textscript4 = "Nom de code opération : Sentiers sauvages";
    let array4 = Array.from(textscript4);

    Object.keys(array4).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription4").innerHTML += array4[key]),
        key * 300
      );
    });
let textscript5 = "Nom de code opération : Tortues Géniales";
    let array5 = Array.from(textscript5);

    Object.keys(array5).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription5").innerHTML += array5[key]),
        key * 305
      );
    });
let textscript6 = "Nom de code opération : Girl Power";
    let array6 = Array.from(textscript6);

    Object.keys(array6).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription6").innerHTML += array6[key]),
        key * 310
      );
    });
let textscript7 = "Nom de code opération : Tempête du marais II";
    let array7 = Array.from(textscript7);

    Object.keys(array7).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription7").innerHTML += array7[key]),
        key * 315
      );
    });
let textscript8 = "Nom de code opération : Sentiers sauvages II";
    let array8 = Array.from(textscript8);

    Object.keys(array8).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription8").innerHTML += array8[key]),
        key * 320
      );
    });
let textscript9 = "Nom de code opération : Ville propre";
    let array9 = Array.from(textscript9);

    Object.keys(array9).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription9").innerHTML += array9[key]),
        key * 335
      );
    });
let textscript10 = "Nom de code opération : ⚡Tonnerre⚡ en Daire";
    let array10 = Array.from(textscript10);

    Object.keys(array10).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription10").innerHTML += array10[key]),
        key * 350
      );
    });
let textscript11 = "Nom de code opération : Détours de pistes";
    let array11 = Array.from(textscript11);

    Object.keys(array11).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription11").innerHTML += array11[key]),
        key * 350
      );
    });
let textscript12 = "Nom de code opération : Drôles de femmes";
    let array12 = Array.from(textscript12);

    Object.keys(array12).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription12").innerHTML += array12[key]),
        key * 350
      );
    });
let textscript13 = "Nom de code opération : Tortues Géniales II";
    let array13 = Array.from(textscript13);

    Object.keys(array13).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription13").innerHTML += array13[key]),
        key * 350
      );
    });
let textscript14 = "Nom de code opération : Promenons-nous dans les bois 1";
    let array14 = Array.from(textscript14);

    Object.keys(array14).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription14").innerHTML += array14[key]),
        key * 350
      );
    });
let textscript15 = "Nom de code opération : Lavage de plage";
    let array15 = Array.from(textscript15);

    Object.keys(array15).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription15").innerHTML += array15[key]),
        key * 345
      );
    });
let textscript16 = "Nom de code opération : La légende des déchets";
    let array16 = Array.from(textscript16);

    Object.keys(array16).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription16").innerHTML += array16[key]),
        key * 345
      );
    });
let textscript17 = "Nom de code opération : Promenons-nous dans les bois 2";
    let array17 = Array.from(textscript17);

    Object.keys(array17).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription17").innerHTML += array17[key]),
        key * 345
      );
    });
let textscript18 = "Nom de code opération : Opération mégots";
    let array18 = Array.from(textscript18);

    Object.keys(array18).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription18").innerHTML += array18[key]),
        key * 345
      );
    });
let textscript19 = "Nom de code opération : Détox de plage";
    let array19 = Array.from(textscript19);

    Object.keys(array19).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription19").innerHTML += array19[key]),
        key * 200
      );
    });
    let textscript20 = "Nom de code opération : Alerte à St-Froult";
    let array20 = Array.from(textscript20);

    Object.keys(array20).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription20").innerHTML += array20[key]),
        key * 220
      );
    });
    let textscript21 = "Nom de code opération : Les Gardiens de la Plage";
    let array21 = Array.from(textscript21);

    Object.keys(array21).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription21").innerHTML += array21[key]),
        key * 240
      );
    });
    let textscript22 = "Nom de code opération : Alerte à l'Embellie";
    let array22 = Array.from(textscript22);

    Object.keys(array22).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription22").innerHTML += array22[key]),
        key * 260
      );
    });
    let textscript23 = "Nom de code opération : Cueillette de Printemps";
    let array23 = Array.from(textscript23);

    Object.keys(array23).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription23").innerHTML += array23[key]),
        key * 280
      );
    });
    let textscript24 = "Nom de code opération : À l'abordage";
    let array24 = Array.from(textscript24);

    Object.keys(array24).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription24").innerHTML += array24[key]),
        key * 300
      );
    });
    let textscript25 = "Nom de code opération : Fleurs de l'amer";
    let array25 = Array.from(textscript25);

    Object.keys(array25).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription25").innerHTML += array25[key]),
        key * 320
      );
    });
     let textscript26 = "Nom de code opération : Dépollution sur rives";
    let array26 = Array.from(textscript26);

    Object.keys(array26).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription26").innerHTML += array26[key]),
        key * 340
      );
    });
     let textscript27 = "Nom de code opération : Game Day";
    let array27 = Array.from(textscript27);

    Object.keys(array27).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription27").innerHTML += array27[key]),
        key * 350
      );
    });
     let textscript28 = "Nom de code opération : World Clean Up Day 2022";
    let array28 = Array.from(textscript28);

    Object.keys(array28).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription28").innerHTML += array28[key]),
        key * 360
      );
    });
     let textscript29 = "Nom de code opération : La déchetterie";
    let array29 = Array.from(textscript29);

    Object.keys(array29).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription29").innerHTML += array29[key]),
        key * 370
      );
    });
     let textscript30 = "Nom de code opération : À la faveur de l'automne";
    let array30 = Array.from(textscript30);

    Object.keys(array30).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription30").innerHTML += array30[key]),
        key * 380
      );
    });
     let textscript31 = "Nom de code opération : Urgence à Bonne Anse";
    let array31 = Array.from(textscript31);

    Object.keys(array31).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription31").innerHTML += array31[key]),
        key * 385
      );
    });
     let textscript32 = "Nom de code opération : La déchetterie 2";
    let array32 = Array.from(textscript32);

    Object.keys(array32).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription32").innerHTML += array32[key]),
        key * 390
      );
    });
     let textscript33 = "Nom de code opération : Juste avant hiers";
    let array33 = Array.from(textscript33);

    Object.keys(array33).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription33").innerHTML += array33[key]),
        key * 395
      );
    });
     let textscript34 = "Nom de code opération : Les gardiens de la plage 2";
    let array34 = Array.from(textscript34);

    Object.keys(array34).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription34").innerHTML += array34[key]),
        key * 400
      );
    });
     let textscript35 = "Nom de code opération : Marais propre";
    let array35 = Array.from(textscript35);

    Object.keys(array35).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription35").innerHTML += array35[key]),
        key * 405
      );
    });
     let textscript36 = "Nom de code opération : Trash Lover";
    let array36 = Array.from(textscript36);
    Object.keys(array36).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription36").innerHTML += array36[key]),
        key * 305
      );
    });
     let textscript37 = "Nom de code opération : Cueillette de Printemps 2";
    let array37 = Array.from(textscript37);
    Object.keys(array37).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription37").innerHTML += array37[key]),
        key * 315
      );
    });
     let textscript38 = "Nom de code opération : Baie Watch";
    let array38 = Array.from(textscript38);
    Object.keys(array38).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription38").innerHTML += array38[key]),
        key * 325
      );
    });
     let textscript39 = "Nom de code opération : Planète Propre";
    let array39 = Array.from(textscript39);
    Object.keys(array39).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription39").innerHTML += array39[key]),
        key * 335
      );
    });
     let textscript40 = "Nom de code opération : WCUD 23";
    let array40 = Array.from(textscript40);
    Object.keys(array40).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription40").innerHTML += array40[key]),
        key * 345
      );
    });
     let textscript41 = "Nom de code opération : Gatseau IO";
    let array41 = Array.from(textscript41);
    Object.keys(array41).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription41").innerHTML += array41[key]),
        key * 335
      );
    });
     let textscript42 = "Nom de code opération : Les gardiens de la plage 3";
    let array42 = Array.from(textscript42);
    Object.keys(array42).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription42").innerHTML += array42[key]),
        key * 320
      );
    });
     let textscript43 = "Nom de code opération : Opération ville propre";
    let array43 = Array.from(textscript43);
    Object.keys(array43).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription43").innerHTML += array43[key]),
        key * 330
      );
    });
     let textscript44 = "Nom de code opération : Le petit Louis";
    let array44 = Array.from(textscript44);
    Object.keys(array44).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription44").innerHTML += array44[key]),
        key * 200
      );
    });
     let textscript45 = "Nom de code opération : Saint-Froult";
    let array45 = Array.from(textscript45);
    Object.keys(array45).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription45").innerHTML += array45[key]),
        key * 220
      );
    });
     let textscript46 = "Nom de code opération : La Cèpe";
    let array46 = Array.from(textscript46);
    Object.keys(array46).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription46").innerHTML += array46[key]),
        key * 240
      );
    });
     let textscript47 = "Nom de code opération : BA 721";
    let array47 = Array.from(textscript47);
    Object.keys(array47).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription47").innerHTML += array47[key]),
        key * 260
      );
    });
      let textscript48 = "Nom de code opération : Faites MHB propre";
    let array48 = Array.from(textscript48);
    Object.keys(array48).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription48").innerHTML += array48[key]),
        key * 280
      );
    });
      let textscript49 = "Nom de code opération : Mégothon";
    let array49 = Array.from(textscript49);
    Object.keys(array49).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription49").innerHTML += array49[key]),
        key * 300
      );
    });
      let textscript50= "Nom de code opération : WCUD 24";
    let array50 = Array.from(textscript50);
    Object.keys(array50).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription50").innerHTML += array50[key]),
        key * 310
      );
    });
      let textscript51= "Nom de code opération : L'Ile Madame";
    let array51 = Array.from(textscript51);
    Object.keys(array51).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription51").innerHTML += array51[key]),
        key * 315
      );
    });
      let textscript52= "Nom de code opération : Marennes Plage";
    let array52 = Array.from(textscript52);
    Object.keys(array52).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription52").innerHTML += array52[key]),
        key * 320
      );
    });
      let textscript53= "Nom de code opération : Montportail";
    let array53 = Array.from(textscript53);
    Object.keys(array53).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription53").innerHTML += array53[key]),
        key * 180
      );
    });
      let textscript54= "Nom de code opération : Dépollution XXL";
    let array54 = Array.from(textscript54);
    Object.keys(array54).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription54").innerHTML += array54[key]),
        key * 200
      );
    });
      let textscript55= "Nom de code opération : Les Gardiens de Marennes";
    let array55 = Array.from(textscript55);
    Object.keys(array55).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription55").innerHTML += array55[key]),
        key * 220
      );
    });
      let textscript56= "Nom de code opération : Des coeurs sur Bourcefranc";
    let array56 = Array.from(textscript56);
    Object.keys(array56).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription56").innerHTML += array56[key]),
        key * 240
      );
    });
      let textscript57= "Nom de code opération : Le Galon d'Or";
    let array57 = Array.from(textscript57);
    Object.keys(array57).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription57").innerHTML += array57[key]),
        key * 260
      );
    });
      let textscript58= "Nom de code opération : Le Lycée de la mer et du Littoral";
    let array58 = Array.from(textscript58);
    Object.keys(array58).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription58").innerHTML += array58[key]),
        key * 280
      );
    });
        let textscript59= "Nom de code opération : Le club Nature";
    let array59 = Array.from(textscript59);
    Object.keys(array59).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription59").innerHTML += array59[key]),
        key * 300
      );
    });
         let textscript60= "Nom de code opération : Les Bois de Saint-Just";
    let array60= Array.from(textscript60);
    Object.keys(array60).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription60").innerHTML += array60[key]),
        key * 320
      );
    });
         let textscript61= "Nom de code opération : Faites MHB propre";
    let array61= Array.from(textscript61);
    Object.keys(array61).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription61").innerHTML += array61[key]),
        key * 330
      );
    });
         let textscript62= "Nom de code opération : Vive l'éco-pétanque";
    let array62= Array.from(textscript62);
    Object.keys(array62).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription62").innerHTML += array62[key]),
        key * 340
      );
    });
   

// HIDE SHOW ACTIONS //
const action20251 = document.getElementById('action25-1'); //options
const action20252 = document.getElementById('action25-2'); //options
const action20253 = document.getElementById('action25-3'); //options
const action20254 = document.getElementById('action25-4'); //options
const action20255 = document.getElementById('action25-5'); //options
const action20256 = document.getElementById('action25-6'); //options
const action20257 = document.getElementById('action25-7'); //options
const action20258 = document.getElementById('action25-8'); //options
const action20259 = document.getElementById('action25-9'); //options
const action202510 = document.getElementById('action25-10'); //options
const showAction20251 = document.getElementById('action25-1-text');
const showAction20252 = document.getElementById('action25-2-text');
const showAction20253 = document.getElementById('action25-3-text');
const showAction20254 = document.getElementById('action25-4-text');
const showAction20255 = document.getElementById('action25-5-text');
const showAction20256 = document.getElementById('action25-6-text');
const showAction20257 = document.getElementById('action25-7-text');
const showAction20258 = document.getElementById('action25-8-text');
const showAction20259 = document.getElementById('action25-9-text');
const showAction202510 = document.getElementById('action25-10-text');
action20251.onclick = function(){
  showAction20251.style.display = "flex"; 
  showAction20252.style.display = "none";
  showAction20253.style.display = "none";
  showAction20254.style.display = "none";
  showAction20255.style.display = "none";
  showAction20256.style.display = "none";
  showAction20257.style.display = "none";
  showAction20258.style.display = "none";
  showAction20259.style.display = "none";
  showAction202510.style.display = "none";
  action20251.style.opacity = "1";
  action20251.style.filter = "grayscale(0)";
  action20252.style.opacity = "0.5";
  action20252.style.filter = "grayscale(1)";  
  action20253.style.opacity = "0.5";
  action20253.style.filter = "grayscale(1)";
  action20254.style.opacity = "0.5";
  action20254.style.filter = "grayscale(1)";
  action20255.style.opacity = "0.5";
  action20255.style.filter = "grayscale(1)";
   action20256.style.opacity = "0.5";
  action20256.style.filter = "grayscale(1)";
   action20257.style.opacity = "0.5";
  action20257.style.filter = "grayscale(1)";
    action20258.style.opacity = "0.5";
  action20258.style.filter = "grayscale(1)";
    action20259.style.opacity = "0.5";
  action20259.style.filter = "grayscale(1)";
    action202510.style.opacity = "0.5";
  action202510.style.filter = "grayscale(1)";
 }
action20252.onclick = function(){
  showAction20251.style.display = "none"; 
  showAction20252.style.display = "flex";
  showAction20253.style.display = "none";  
  showAction20254.style.display = "none";  
  showAction20255.style.display = "none";
  showAction20256.style.display = "none";
  showAction20257.style.display = "none";
  showAction20258.style.display = "none";
  showAction20259.style.display = "none";
  showAction202510.style.display = "none";
  action20251.style.opacity = "0.5";
  action20251.style.filter = "grayscale(1)";
  action20252.style.opacity = "1";
  action20252.style.filter = "grayscale(0)"; 
  action20253.style.opacity = "0.5";
  action20253.style.filter = "grayscale(1)";
   action20254.style.opacity = "0.5";
  action20254.style.filter = "grayscale(1)";
  action20255.style.opacity = "0.5";
  action20255.style.filter = "grayscale(1)";
   action20256.style.opacity = "0.5";
  action20256.style.filter = "grayscale(1)";
    action20257.style.opacity = "0.5";
  action20257.style.filter = "grayscale(1)";
    action20258.style.opacity = "0.5";
  action20258.style.filter = "grayscale(1)";
    action20259.style.opacity = "0.5";
  action20259.style.filter = "grayscale(1)";
    action202510.style.opacity = "0.5";
  action202510.style.filter = "grayscale(1)";
    };
   action20253.onclick = function(){
  showAction20251.style.display = "none"; 
  showAction20252.style.display = "none";
  showAction20253.style.display = "flex";  
  showAction20254.style.display = "none";  
  showAction20255.style.display = "none";
  showAction20256.style.display = "none";
  showAction20257.style.display = "none";
  showAction20258.style.display = "none";
  showAction20259.style.display = "none";
  showAction202510.style.display = "none";
  action20251.style.opacity = "0.5";
  action20251.style.filter = "grayscale(1)";
  action20252.style.opacity = "0.5";
  action20252.style.filter = "grayscale(1)"; 
  action20253.style.opacity = "1";
  action20253.style.filter = "grayscale(0)";  
   action20254.style.opacity = "0.5";
  action20254.style.filter = "grayscale(1)";
  action20255.style.opacity = "0.5";
  action20255.style.filter = "grayscale(1)";
   action20256.style.opacity = "0.5";
  action20256.style.filter = "grayscale(1)";
    action20257.style.opacity = "0.5";
  action20257.style.filter = "grayscale(1)";
    action20258.style.opacity = "0.5";
  action20258.style.filter = "grayscale(1)";
    action20259.style.opacity = "0.5";
  action20259.style.filter = "grayscale(1)";
    action202510.style.opacity = "0.5";
  action202510.style.filter = "grayscale(1)";
    };
      action20254.onclick = function(){
  showAction20251.style.display = "none"; 
  showAction20252.style.display = "none";
  showAction20253.style.display = "none";  
  showAction20254.style.display = "flex"; 
  showAction20255.style.display = "none"; 
  showAction20256.style.display = "none";
  showAction20257.style.display = "none";
  showAction20258.style.display = "none";
  showAction20259.style.display = "none";
  showAction202510.style.display = "none";
  action20251.style.opacity = "0.5";
  action20251.style.filter = "grayscale(1)";
  action20252.style.opacity = "0.5";
  action20252.style.filter = "grayscale(1)"; 
  action20253.style.opacity = "0.5";
  action20253.style.filter = "grayscale(1)";  
   action20254.style.opacity = "1";
  action20254.style.filter = "grayscale(0)";
  action20255.style.opacity = "0.5";
  action20255.style.filter = "grayscale(1)";
   action20256.style.opacity = "0.5";
  action20256.style.filter = "grayscale(1)";
    action20257.style.opacity = "0.5";
  action20257.style.filter = "grayscale(1)";
    action20258.style.opacity = "0.5";
  action20258.style.filter = "grayscale(1)";
    action20259.style.opacity = "0.5";
  action20259.style.filter = "grayscale(1)";
    action202510.style.opacity = "0.5";
  action202510.style.filter = "grayscale(1)";
    };
   action20255.onclick = function(){
  showAction20251.style.display = "none"; 
  showAction20252.style.display = "none";
  showAction20253.style.display = "none";  
  showAction20254.style.display = "none"; 
  showAction20255.style.display = "flex"; 
  showAction20256.style.display = "none";
  showAction20257.style.display = "none";
  showAction20258.style.display = "none";
  showAction20259.style.display = "none";
  showAction202510.style.display = "none";
  action20251.style.opacity = "0.5";
  action20251.style.filter = "grayscale(1)";
  action20252.style.opacity = "0.5";
  action20252.style.filter = "grayscale(1)"; 
  action20253.style.opacity = "0.5";
  action20253.style.filter = "grayscale(1)";  
   action20254.style.opacity = "0.5";
  action20254.style.filter = "grayscale(1)";
  action20255.style.opacity = "1";
  action20255.style.filter = "grayscale(0)";
   action20256.style.opacity = "0.5";
  action20256.style.filter = "grayscale(1)";
    action20257.style.opacity = "0.5";
  action20257.style.filter = "grayscale(1)";
    action20258.style.opacity = "0.5";
  action20258.style.filter = "grayscale(1)";
    action20259.style.opacity = "0.5";
  action20259.style.filter = "grayscale(1)";
    action202510.style.opacity = "0.5";
  action202510.style.filter = "grayscale(1)";
    };
     action20256.onclick = function(){
  showAction20251.style.display = "none"; 
  showAction20252.style.display = "none";
  showAction20253.style.display = "none";  
  showAction20254.style.display = "none"; 
  showAction20255.style.display = "none"; 
  showAction20256.style.display = "flex";
  showAction20257.style.display = "none";
  showAction20258.style.display = "none";
  showAction20259.style.display = "none";
  showAction202510.style.display = "none";
  action20251.style.opacity = "0.5";
  action20251.style.filter = "grayscale(1)";
  action20252.style.opacity = "0.5";
  action20252.style.filter = "grayscale(1)"; 
  action20253.style.opacity = "0.5";
  action20253.style.filter = "grayscale(1)";  
   action20254.style.opacity = "0.5";
  action20254.style.filter = "grayscale(1)";
  action20255.style.opacity = "0.5";
  action20255.style.filter = "grayscale(1)";
   action20256.style.opacity = "1";
  action20256.style.filter = "grayscale(0)";
    action20257.style.opacity = "0.5";
  action20257.style.filter = "grayscale(1)";
    action20258.style.opacity = "0.5";
  action20258.style.filter = "grayscale(1)";
    action20259.style.opacity = "0.5";
  action20259.style.filter = "grayscale(1)";
    action202510.style.opacity = "0.5";
  action202510.style.filter = "grayscale(1)";
    };
    action20257.onclick = function(){
  showAction20251.style.display = "none"; 
  showAction20252.style.display = "none";
  showAction20253.style.display = "none";  
  showAction20254.style.display = "none"; 
  showAction20255.style.display = "none"; 
  showAction20256.style.display = "none";
  showAction20257.style.display = "flex";
  showAction20258.style.display = "none";
  showAction20259.style.display = "none";
  showAction202510.style.display = "none";
  action20251.style.opacity = "0.5";
  action20251.style.filter = "grayscale(1)";
  action20252.style.opacity = "0.5";
  action20252.style.filter = "grayscale(1)"; 
  action20253.style.opacity = "0.5";
  action20253.style.filter = "grayscale(1)";  
   action20254.style.opacity = "0.5";
  action20254.style.filter = "grayscale(1)";
  action20255.style.opacity = "0.5";
  action20255.style.filter = "grayscale(1)";
   action20256.style.opacity = "0.5";
  action20256.style.filter = "grayscale(1)";
    action20257.style.opacity = "1";
  action20257.style.filter = "grayscale(0)";
    action20258.style.opacity = "0.5";
  action20258.style.filter = "grayscale(1)";
    action20259.style.opacity = "0.5";
  action20259.style.filter = "grayscale(1)";
    action202510.style.opacity = "0.5";
  action202510.style.filter = "grayscale(1)";
    };
     action20258.onclick = function(){
  showAction20251.style.display = "none"; 
  showAction20252.style.display = "none";
  showAction20253.style.display = "none";  
  showAction20254.style.display = "none"; 
  showAction20255.style.display = "none"; 
  showAction20256.style.display = "none";
  showAction20257.style.display = "none";
  showAction20258.style.display = "flex";
  showAction20259.style.display = "none";
  showAction202510.style.display = "none";
  action20251.style.opacity = "0.5";
  action20251.style.filter = "grayscale(1)";
  action20252.style.opacity = "0.5";
  action20252.style.filter = "grayscale(1)"; 
  action20253.style.opacity = "0.5";
  action20253.style.filter = "grayscale(1)";  
   action20254.style.opacity = "0.5";
  action20254.style.filter = "grayscale(1)";
  action20255.style.opacity = "0.5";
  action20255.style.filter = "grayscale(1)";
   action20256.style.opacity = "0.5";
  action20256.style.filter = "grayscale(1)";
    action20257.style.opacity = "0.5";
  action20257.style.filter = "grayscale(1)";
    action20258.style.opacity = "1";
  action20258.style.filter = "grayscale(0)";
    action20259.style.opacity = "0.5";
  action20259.style.filter = "grayscale(1)";
    action202510.style.opacity = "0.5";
  action202510.style.filter = "grayscale(1)";
    };
       action20259.onclick = function(){
  showAction20251.style.display = "none"; 
  showAction20252.style.display = "none";
  showAction20253.style.display = "none";  
  showAction20254.style.display = "none"; 
  showAction20255.style.display = "none"; 
  showAction20256.style.display = "none";
  showAction20257.style.display = "none";
  showAction20258.style.display = "none";
  showAction20259.style.display = "flex";
  showAction202510.style.display = "none";
  action20251.style.opacity = "0.5";
  action20251.style.filter = "grayscale(1)";
  action20252.style.opacity = "0.5";
  action20252.style.filter = "grayscale(1)"; 
  action20253.style.opacity = "0.5";
  action20253.style.filter = "grayscale(1)";  
   action20254.style.opacity = "0.5";
  action20254.style.filter = "grayscale(1)";
  action20255.style.opacity = "0.5";
  action20255.style.filter = "grayscale(1)";
   action20256.style.opacity = "0.5";
  action20256.style.filter = "grayscale(1)";
    action20257.style.opacity = "0.5";
  action20257.style.filter = "grayscale(1)";
    action20258.style.opacity = "0.5";
  action20258.style.filter = "grayscale(1)";
    action20259.style.opacity = "1";
  action20259.style.filter = "grayscale(0)";
    action202510.style.opacity = "0.5";
  action202510.style.filter = "grayscale(1)";
    };
         action202510.onclick = function(){
  showAction20251.style.display = "none"; 
  showAction20252.style.display = "none";
  showAction20253.style.display = "none";  
  showAction20254.style.display = "none"; 
  showAction20255.style.display = "none"; 
  showAction20256.style.display = "none";
  showAction20257.style.display = "none";
  showAction20258.style.display = "none";
  showAction20259.style.display = "none";
  showAction202510.style.display = "flex";
  action20251.style.opacity = "0.5";
  action20251.style.filter = "grayscale(1)";
  action20252.style.opacity = "0.5";
  action20252.style.filter = "grayscale(1)"; 
  action20253.style.opacity = "0.5";
  action20253.style.filter = "grayscale(1)";  
   action20254.style.opacity = "0.5";
  action20254.style.filter = "grayscale(1)";
  action20255.style.opacity = "0.5";
  action20255.style.filter = "grayscale(1)";
   action20256.style.opacity = "0.5";
  action20256.style.filter = "grayscale(1)";
    action20257.style.opacity = "0.5";
  action20257.style.filter = "grayscale(1)";
    action20258.style.opacity = "0.5";
  action20258.style.filter = "grayscale(1)";
    action20259.style.opacity = "0.5";
  action20259.style.filter = "grayscale(1)";
    action202510.style.opacity = "1";
  action202510.style.filter = "grayscale(0)";
    };
// HIDE SHOW ACTIONS //
const action20241 = document.getElementById('action24-1'); //options
const action20242 = document.getElementById('action24-2'); //options
const action20243 = document.getElementById('action24-3'); //options
const action20244 = document.getElementById('action24-4'); //options
const action20245 = document.getElementById('action24-5'); //options
const action20246 = document.getElementById('action24-6'); //options
const action20247 = document.getElementById('action24-7'); //options
const action20248 = document.getElementById('action24-8'); //options
const action20249 = document.getElementById('action24-9'); //options
const showAction20241 = document.getElementById('action24-1-text');
const showAction20242 = document.getElementById('action24-2-text');
const showAction20243 = document.getElementById('action24-3-text');
const showAction20244 = document.getElementById('action24-4-text');
const showAction20245 = document.getElementById('action24-5-text');
const showAction20246 = document.getElementById('action24-6-text');
const showAction20247 = document.getElementById('action24-7-text');
const showAction20248 = document.getElementById('action24-8-text');
const showAction20249 = document.getElementById('action24-9-text');
action20241.onclick = function(){
  showAction20241.style.display = "flex"; 
  showAction20242.style.display = "none";    
  showAction20243.style.display = "none"; 
  showAction20244.style.display = "none"; 
showAction20245.style.display = "none"; 
  showAction20246.style.display = "none"; 
  showAction20247.style.display = "none"; 
   showAction20248.style.display = "none"; 
   showAction20249.style.display = "none"; 
  action20241.style.opacity = "1";
  action20241.style.filter = "grayscale(0)";
  action20242.style.opacity = "0.5";
  action20242.style.filter = "grayscale(1)";  
  action20243.style.opacity = "0.5";
  action20243.style.filter = "grayscale(1)";
  action20244.style.opacity = "0.5";
  action20244.style.filter = "grayscale(1)";
  action20245.style.opacity = "0.5";
  action20245.style.filter = "grayscale(1)";
  action20246.style.opacity = "0.5";
  action20246.style.filter = "grayscale(1)";
  action20247.style.opacity = "0.5";
  action20247.style.filter = "grayscale(1)"; 
  action20248.style.opacity = "0.5";
  action20248.style.filter = "grayscale(1)"; 
  action20249.style.opacity = "0.5";
  action20249.style.filter = "grayscale(1)"; 
}
action20242.onclick = function(){
  showAction20241.style.display = "none"; 
  showAction20242.style.display = "flex";  
  showAction20243.style.display = "none";
  showAction20244.style.display = "none"; 
  showAction20245.style.display = "none"; 
  showAction20246.style.display = "none"; 
  showAction20247.style.display = "none"; 
  showAction20248.style.display = "none"; 
  showAction20249.style.display = "none"; 
  action20241.style.opacity = "0.5";
  action20241.style.filter = "grayscale(1)";
  action20242.style.opacity = "1";
  action20242.style.filter = "grayscale(0)"; 
  action20243.style.opacity = "0.5";
  action20243.style.filter = "grayscale(1)";
   action20244.style.opacity = "0.5";
  action20244.style.filter = "grayscale(1)";
   action20245.style.opacity = "0.5";
  action20245.style.filter = "grayscale(1)";
   action20246.style.opacity = "0.5";
  action20246.style.filter = "grayscale(1)";
   action20247.style.opacity = "0.5";
  action20247.style.filter = "grayscale(1)";
   action20248.style.opacity = "0.5";
  action20248.style.filter = "grayscale(1)"; 
  action20249.style.opacity = "0.5";
  action20249.style.filter = "grayscale(1)";
    };
action20243.onclick = function(){
  showAction20241.style.display = "none"; 
  showAction20242.style.display = "none";  
  showAction20243.style.display = "flex";
  showAction20244.style.display = "none"; 
  showAction20245.style.display = "none"; 
  showAction20246.style.display = "none"; 
  showAction20247.style.display = "none"; 
  showAction20248.style.display = "none";
  showAction20249.style.display = "none";  
  action20241.style.opacity = "0.5";
  action20241.style.filter = "grayscale(1)";
  action20242.style.opacity = "0.5";
  action20242.style.filter = "grayscale(1)"; 
  action20243.style.opacity = "1";
  action20243.style.filter = "grayscale(0)";
   action20244.style.opacity = "0.5";
  action20244.style.filter = "grayscale(1)";
   action20245.style.opacity = "0.5";
  action20245.style.filter = "grayscale(1)";
   action20246.style.opacity = "0.5";
  action20246.style.filter = "grayscale(1)";
   action20247.style.opacity = "0.5";
  action20247.style.filter = "grayscale(1)";
   action20248.style.opacity = "0.5";
  action20248.style.filter = "grayscale(1)";
  action20249.style.opacity = "0.5";
  action20249.style.filter = "grayscale(1)"; 
  };
  action20244.onclick = function(){
  showAction20241.style.display = "none"; 
  showAction20242.style.display = "none";  
  showAction20243.style.display = "none";
  showAction20244.style.display = "flex"; 
  showAction20245.style.display = "none"; 
  showAction20246.style.display = "none"; 
  showAction20247.style.display = "none"; 
  showAction20248.style.display = "none"; 
  showAction20249.style.display = "none"; 
  action20241.style.opacity = "0.5";
  action20241.style.filter = "grayscale(1)";
  action20242.style.opacity = "0.5";
  action20242.style.filter = "grayscale(1)"; 
  action20243.style.opacity = "0.5";
  action20243.style.filter = "grayscale(1)";
  action20244.style.opacity = "1";
  action20244.style.filter = "grayscale(0)";
   action20245.style.opacity = "0.5";
  action20245.style.filter = "grayscale(1)";
   action20246.style.opacity = "0.5";
  action20246.style.filter = "grayscale(1)";
   action20247.style.opacity = "0.5";
  action20247.style.filter = "grayscale(1)";
   action20248.style.opacity = "0.5";
  action20248.style.filter = "grayscale(1)"; 
  action20249.style.opacity = "0.5";
  action20249.style.filter = "grayscale(1)";
    };
action20245.onclick = function(){
  showAction20241.style.display = "none"; 
  showAction20242.style.display = "none";  
  showAction20243.style.display = "none";
  showAction20244.style.display = "none"; 
  showAction20245.style.display = "flex"; 
  showAction20246.style.display = "none"; 
  showAction20247.style.display = "none"; 
  showAction20248.style.display = "none"; 
  showAction20249.style.display = "none"; 
  action20241.style.opacity = "0.5";
  action20241.style.filter = "grayscale(1)";
  action20242.style.opacity = "0.5";
  action20242.style.filter = "grayscale(1)"; 
  action20243.style.opacity = "0.5";
  action20243.style.filter = "grayscale(1)";
  action20244.style.opacity = "0.5";
  action20244.style.filter = "grayscale(1)";
   action20245.style.opacity = "1";
  action20245.style.filter = "grayscale(0)";
   action20246.style.opacity = "0.5";
  action20246.style.filter = "grayscale(1)";
   action20247.style.opacity = "0.5";
  action20247.style.filter = "grayscale(1)";
   action20248.style.opacity = "0.5";
  action20248.style.filter = "grayscale(1)"; 
  action20249.style.opacity = "0.5";
  action20249.style.filter = "grayscale(1)";
    };
  action20246.onclick = function(){
  showAction20241.style.display = "none"; 
  showAction20242.style.display = "none";  
  showAction20243.style.display = "none";
  showAction20244.style.display = "none"; 
  showAction20245.style.display = "none"; 
  showAction20246.style.display = "flex"; 
  showAction20247.style.display = "none"; 
  showAction20248.style.display = "none"; 
  showAction20249.style.display = "none"; 
  action20241.style.opacity = "0.5";
  action20241.style.filter = "grayscale(1)";
  action20242.style.opacity = "0.5";
  action20242.style.filter = "grayscale(1)"; 
  action20243.style.opacity = "0.5";
  action20243.style.filter = "grayscale(1)";
  action20244.style.opacity = "0.5";
  action20244.style.filter = "grayscale(1)";
   action20245.style.opacity = "0.5";
  action20245.style.filter = "grayscale(1)";
   action20246.style.opacity = "1";
  action20246.style.filter = "grayscale(0)";
   action20247.style.opacity = "0.5";
  action20247.style.filter = "grayscale(1)"; 
   action20248.style.opacity = "0.5";
  action20248.style.filter = "grayscale(1)";  
  action20249.style.opacity = "0.5";
  action20249.style.filter = "grayscale(1)";
  };
action20247.onclick = function(){
  showAction20241.style.display = "none"; 
  showAction20242.style.display = "none";  
  showAction20243.style.display = "none";
  showAction20244.style.display = "none"; 
  showAction20245.style.display = "none"; 
  showAction20246.style.display = "none"; 
  showAction20247.style.display = "flex"; 
  showAction20248.style.display = "none"; 
  showAction20249.style.display = "none"; 
  action20241.style.opacity = "0.5";
  action20241.style.filter = "grayscale(1)";
  action20242.style.opacity = "0.5";
  action20242.style.filter = "grayscale(1)"; 
  action20243.style.opacity = "0.5";
  action20243.style.filter = "grayscale(1)";
  action20244.style.opacity = "0.5";
  action20244.style.filter = "grayscale(1)";
   action20245.style.opacity = "0.5";
  action20245.style.filter = "grayscale(1)";
   action20246.style.opacity = "0.5";
  action20246.style.filter = "grayscale(1)";
   action20247.style.opacity = "1";
  action20247.style.filter = "grayscale(0)"; 
   action20248.style.opacity = "0.5";
  action20248.style.filter = "grayscale(1)";  
  action20249.style.opacity = "0.5";
  action20249.style.filter = "grayscale(1)";
  };
  action20248.onclick = function(){
  showAction20241.style.display = "none"; 
  showAction20242.style.display = "none";  
  showAction20243.style.display = "none";
  showAction20244.style.display = "none"; 
  showAction20245.style.display = "none"; 
  showAction20246.style.display = "none"; 
  showAction20247.style.display = "none"; 
  showAction20248.style.display = "flex"; 
  showAction20249.style.display = "none"; 
  action20241.style.opacity = "0.5";
  action20241.style.filter = "grayscale(1)";
  action20242.style.opacity = "0.5";
  action20242.style.filter = "grayscale(1)"; 
  action20243.style.opacity = "0.5";
  action20243.style.filter = "grayscale(1)";
  action20244.style.opacity = "0.5";
  action20244.style.filter = "grayscale(1)";
   action20245.style.opacity = "0.5";
  action20245.style.filter = "grayscale(1)";
   action20246.style.opacity = "0.5";
  action20246.style.filter = "grayscale(1)";
   action20247.style.opacity = "0.5";
  action20247.style.filter = "grayscale(1)"; 
   action20248.style.opacity = "1";
  action20248.style.filter = "grayscale(0)";  
  action20249.style.opacity = "0.5";
  action20249.style.filter = "grayscale(1)";
  };
  action20249.onclick = function(){
  showAction20241.style.display = "none"; 
  showAction20242.style.display = "none";  
  showAction20243.style.display = "none";
  showAction20244.style.display = "none"; 
  showAction20245.style.display = "none"; 
  showAction20246.style.display = "none"; 
  showAction20247.style.display = "none"; 
  showAction20248.style.display = "none"; 
  showAction20249.style.display = "flex"; 
  action20241.style.opacity = "0.5";
  action20241.style.filter = "grayscale(1)";
  action20242.style.opacity = "0.5";
  action20242.style.filter = "grayscale(1)"; 
  action20243.style.opacity = "0.5";
  action20243.style.filter = "grayscale(1)";
  action20244.style.opacity = "0.5";
  action20244.style.filter = "grayscale(1)";
   action20245.style.opacity = "0.5";
  action20245.style.filter = "grayscale(1)";
   action20246.style.opacity = "0.5";
  action20246.style.filter = "grayscale(1)";
   action20247.style.opacity = "0.5";
  action20247.style.filter = "grayscale(1)"; 
   action20248.style.opacity = "0.5";
  action20248.style.filter = "grayscale(1)";  
  action20249.style.opacity = "1";
  action20249.style.filter = "grayscale(0.5)";
  };
// HIDE SHOW ACTIONS //
const action20231 = document.getElementById('action23-1'); //options
const action20232 = document.getElementById('action23-2'); //options
const action20233 = document.getElementById('action23-3'); //options
const action20234 = document.getElementById('action23-4'); //options
const action20235 = document.getElementById('action23-5'); //options
const action20236 = document.getElementById('action23-6'); //options
const action20237 = document.getElementById('action23-7'); //options
const action20238 = document.getElementById('action23-8'); //options
const showAction20231 = document.getElementById('action23-1-text');
const showAction20232 = document.getElementById('action23-2-text');
const showAction20233 = document.getElementById('action23-3-text');
const showAction20234 = document.getElementById('action23-4-text');
const showAction20235 = document.getElementById('action23-5-text');
const showAction20236 = document.getElementById('action23-6-text');
const showAction20237 = document.getElementById('action23-7-text');
const showAction20238 = document.getElementById('action23-8-text');
action20231.onclick = function(){
  showAction20231.style.display = "flex"; 
  showAction20232.style.display = "none";  
  showAction20233.style.display = "none"; 
  showAction20234.style.display = "none";  
  showAction20235.style.display = "none"; 
  showAction20236.style.display = "none"; 
  showAction20237.style.display = "none"; 
  showAction20238.style.display = "none";
  action20231.style.opacity = "1";
  action20231.style.filter = "grayscale(0)";
  action20232.style.opacity = "0.5";
  action20232.style.filter = "grayscale(1)";  
  action20233.style.opacity = "0.5";
  action20233.style.filter = "grayscale(1)"; 
  action20234.style.opacity = "0.5";
  action20234.style.filter = "grayscale(1)"; 
  action20235.style.opacity = "0.5";
  action20235.style.filter = "grayscale(1)";  
  action20236.style.opacity = "0.5";
  action20236.style.filter = "grayscale(1)"; 
  action20237.style.opacity = "0.5";
  action20237.style.filter = "grayscale(1)"; 
  action20238.style.opacity = "0.5";
  action20238.style.filter = "grayscale(1)"; 
}
action20232.onclick = function(){
  showAction20231.style.display = "none"; 
  showAction20232.style.display = "flex";  
  showAction20233.style.display = "none"; 
  showAction20234.style.display = "none";
  showAction20235.style.display = "none";
  showAction20236.style.display = "none"; 
  showAction20237.style.display = "none";
  showAction20238.style.display = "none";
  action20231.style.opacity = "0.5";
  action20231.style.filter = "grayscale(1)";
  action20232.style.opacity = "1";
  action20232.style.filter = "grayscale(0)"; 
  action20233.style.opacity = "0.5";
  action20233.style.filter = "grayscale(1)";
  action20234.style.opacity = "0.5";
  action20234.style.filter = "grayscale(1)"; 
  action20235.style.opacity = "0.5";
  action20235.style.filter = "grayscale(1)";
  action20236.style.opacity = "0.5";
  action20236.style.filter = "grayscale(1)"; 
  action20237.style.opacity = "0.5";
  action20237.style.filter = "grayscale(1)";
  action20238.style.opacity = "0.5";
  action20238.style.filter = "grayscale(1)";
  };
action20233.onclick = function(){
  showAction20231.style.display = "none"; 
  showAction20232.style.display = "none";  
  showAction20233.style.display = "flex";
  showAction20234.style.display = "none";
  showAction20235.style.display = "none"; 
  showAction20236.style.display = "none"; 
  showAction20237.style.display = "none";
  showAction20238.style.display = "none";
  action20231.style.opacity = "0.5";
  action20231.style.filter = "grayscale(1)";
  action20232.style.opacity = "0.5";
  action20232.style.filter = "grayscale(1)"; 
  action20233.style.opacity = "1";
  action20233.style.filter = "grayscale(0)"; 
  action20234.style.opacity = "0.5";
  action20234.style.filter = "grayscale(1)";
  action20235.style.opacity = "0.5";
  action20235.style.filter = "grayscale(1)";
  action20236.style.opacity = "0.5";
  action20236.style.filter = "grayscale(1)"; 
  action20237.style.opacity = "0.5";
  action20237.style.filter = "grayscale(1)";
  action20238.style.opacity = "0.5";
  action20238.style.filter = "grayscale(1)";
  };
  action20234.onclick = function(){
  showAction20231.style.display = "none"; 
  showAction20232.style.display = "none";  
  showAction20233.style.display = "none";
  showAction20234.style.display = "flex"; 
  showAction20235.style.display = "none"; 
  showAction20236.style.display = "none";
  showAction20237.style.display = "none";
  showAction20238.style.display = "none";
  action20231.style.opacity = "0.5";
  action20231.style.filter = "grayscale(1)";
  action20232.style.opacity = "0.5";
  action20232.style.filter = "grayscale(1)"; 
  action20233.style.opacity = "0.5";
  action20233.style.filter = "grayscale(1)"; 
  action20234.style.opacity = "1";
  action20234.style.filter = "grayscale(0)";
  action20235.style.opacity = "0.5";
  action20235.style.filter = "grayscale(1)";
  action20236.style.opacity = "0.5";
  action20236.style.filter = "grayscale(1)"; 
  action20237.style.opacity = "0.5";
  action20237.style.filter = "grayscale(1)";
  action20238.style.opacity = "0.5";
  action20238.style.filter = "grayscale(1)";
  };
  action20235.onclick = function(){
  showAction20231.style.display = "none"; 
  showAction20232.style.display = "none";  
  showAction20233.style.display = "none";
  showAction20234.style.display = "none"; 
  showAction20235.style.display = "flex"; 
  showAction20236.style.display = "none";
  showAction20237.style.display = "none";
  showAction20238.style.display = "none";
  action20231.style.opacity = "0.5";
  action20231.style.filter = "grayscale(1)";
  action20232.style.opacity = "0.5";
  action20232.style.filter = "grayscale(1)"; 
  action20233.style.opacity = "0.5";
  action20233.style.filter = "grayscale(1)"; 
  action20234.style.opacity = "0.5";
  action20234.style.filter = "grayscale(1)";
  action20235.style.opacity = "1";
  action20235.style.filter = "grayscale(0)";
  action20236.style.opacity = "0.5";
  action20236.style.filter = "grayscale(1)"; 
  action20237.style.opacity = "0.5";
  action20237.style.filter = "grayscale(1)";
  action20238.style.opacity = "0.5";
  action20238.style.filter = "grayscale(1)";
  };
  action20236.onclick = function(){
  showAction20231.style.display = "none"; 
  showAction20232.style.display = "none";  
  showAction20233.style.display = "none";
  showAction20234.style.display = "none"; 
  showAction20235.style.display = "none"; 
  showAction20236.style.display = "flex";
  showAction20237.style.display = "none";
  showAction20238.style.display = "none";
  action20231.style.opacity = "0.5";
  action20231.style.filter = "grayscale(1)";
  action20232.style.opacity = "0.5";
  action20232.style.filter = "grayscale(1)"; 
  action20233.style.opacity = "0.5";
  action20233.style.filter = "grayscale(1)"; 
  action20234.style.opacity = "0.5";
  action20234.style.filter = "grayscale(1)";
  action20235.style.opacity = "0.5";
  action20235.style.filter = "grayscale(1)";
  action20236.style.opacity = "1";
  action20236.style.filter = "grayscale(0)"; 
  action20237.style.opacity = "0.5";
  action20237.style.filter = "grayscale(1)";
  action20238.style.opacity = "0.5";
  action20238.style.filter = "grayscale(1)";
  };
  action20237.onclick = function(){
  showAction20231.style.display = "none"; 
  showAction20232.style.display = "none";  
  showAction20233.style.display = "none";
  showAction20234.style.display = "none"; 
  showAction20235.style.display = "none"; 
  showAction20236.style.display = "none";
  showAction20237.style.display = "flex";
  showAction20238.style.display = "none";
  action20231.style.opacity = "0.5";
  action20231.style.filter = "grayscale(1)";
  action20232.style.opacity = "0.5";
  action20232.style.filter = "grayscale(1)"; 
  action20233.style.opacity = "0.5";
  action20233.style.filter = "grayscale(1)"; 
  action20234.style.opacity = "0.5";
  action20234.style.filter = "grayscale(1)";
  action20235.style.opacity = "0.5";
  action20235.style.filter = "grayscale(1)";
  action20236.style.opacity = "0.5";
  action20236.style.filter = "grayscale(1)"; 
  action20237.style.opacity = "1";
  action20237.style.filter = "grayscale(0)";
  action20238.style.opacity = "0.5";
  action20238.style.filter = "grayscale(1)";
  };
  action20238.onclick = function(){
  showAction20231.style.display = "none"; 
  showAction20232.style.display = "none";  
  showAction20233.style.display = "none";
  showAction20234.style.display = "none"; 
  showAction20235.style.display = "none"; 
  showAction20236.style.display = "none";
  showAction20237.style.display = "none";
  showAction20238.style.display = "flex";
  action20231.style.opacity = "0.5";
  action20231.style.filter = "grayscale(1)";
  action20232.style.opacity = "0.5";
  action20232.style.filter = "grayscale(1)"; 
  action20233.style.opacity = "0.5";
  action20233.style.filter = "grayscale(1)"; 
  action20234.style.opacity = "0.5";
  action20234.style.filter = "grayscale(1)";
  action20235.style.opacity = "0.5";
  action20235.style.filter = "grayscale(1)";
  action20236.style.opacity = "0.5";
  action20236.style.filter = "grayscale(1)"; 
  action20237.style.opacity = "0.5";
  action20237.style.filter = "grayscale(1)";
  action20238.style.opacity = "1";
  action20238.style.filter = "grayscale(0)";
  };
// HIDE SHOW ACTIONS //
const action20221 = document.getElementById('action-1'); //options
const action20222 = document.getElementById('action-2'); //options
const action20223 = document.getElementById('action-3'); //options
const action20224 = document.getElementById('action-4'); //options
const action20225 = document.getElementById('action-5'); //options
const action20226 = document.getElementById('action-6'); //options
const action20227 = document.getElementById('action-7'); //options
const action20228 = document.getElementById('action-8'); //options
const action20229 = document.getElementById('action-9'); //options
const action202210 = document.getElementById('action-10'); //options
const action202211 = document.getElementById('action-11'); //options
const action202212 = document.getElementById('action-12'); //options
const action202213 = document.getElementById('action-13'); //options
const action202214 = document.getElementById('action-14'); //options
const action202215 = document.getElementById('action-15'); //options
const action202216 = document.getElementById('action-16'); //options
const action202217 = document.getElementById('action-17'); //options
const showAction20221 = document.getElementById('action-1-text');
const showAction20222 = document.getElementById('action-2-text');
const showAction20223 = document.getElementById('action-3-text');
const showAction20224 = document.getElementById('action-4-text');
const showAction20225 = document.getElementById('action-5-text');
const showAction20226 = document.getElementById('action-6-text');
const showAction20227 = document.getElementById('action-7-text');
const showAction20228 = document.getElementById('action-8-text');
const showAction20229 = document.getElementById('action-9-text');
const showAction202210 = document.getElementById('action-10-text');
const showAction202211 = document.getElementById('action-11-text');
const showAction202212 = document.getElementById('action-12-text');
const showAction202213 = document.getElementById('action-13-text');
const showAction202214 = document.getElementById('action-14-text');
const showAction202215 = document.getElementById('action-15-text');
const showAction202216 = document.getElementById('action-16-text');
const showAction202217 = document.getElementById('action-17-text');


action20221.onclick = function(){
	showAction20221.style.display = "flex";	
  showAction20222.style.display = "none";
  showAction20223.style.display = "none";
  showAction20224.style.display = "none";
  showAction20225.style.display = "none";
  showAction20226.style.display = "none";
  showAction20227.style.display = "none";
  showAction20228.style.display = "none";
  showAction20229.style.display = "none";
  showAction202210.style.display = "none";
  showAction202211.style.display = "none";
  showAction202212.style.display = "none";
  showAction202213.style.display = "none";
  showAction202214.style.display = "none";
  showAction202215.style.display = "none";
  showAction202216.style.display = "none";
  showAction202217.style.display = "none";
	action20221.style.opacity = "1";
	action20221.style.filter = "grayscale(0)";
  action20222.style.opacity = "0.5";
  action20222.style.filter = "grayscale(1)";	
  action20223.style.opacity = "0.5";
  action20223.style.filter = "grayscale(1)"; 
  action20224.style.opacity = "0.5";
  action20224.style.filter = "grayscale(1)";   
  action20225.style.opacity = "0.5";
  action20225.style.filter = "grayscale(1)"; 
  action20226.style.opacity = "0.5";
  action20226.style.filter = "grayscale(1)";  
  action20227.style.opacity = "0.5";
  action20227.style.filter = "grayscale(1)"; 
  action20228.style.opacity = "0.5";
  action20228.style.filter = "grayscale(1)";  
  action20229.style.opacity = "0.5";
  action20229.style.filter = "grayscale(1)";  
  action202210.style.opacity = "0.5";
  action202210.style.filter = "grayscale(1)";  
  action202211.style.opacity = "0.5";
  action202211.style.filter = "grayscale(1)"; 
  action202212.style.opacity = "0.5";
  action202212.style.filter = "grayscale(1)"; 
  action202213.style.opacity = "0.5";
  action202213.style.filter = "grayscale(1)";
  action202214.style.opacity = "0.5";
  action202214.style.filter = "grayscale(1)";
  action202215.style.opacity = "0.5";
  action202215.style.filter = "grayscale(1)";
  action202216.style.opacity = "0.5";
  action202216.style.filter = "grayscale(1)";
  action202217.style.opacity = "0.5";
  action202217.style.filter = "grayscale(1)";
}
action20222.onclick = function(){
  showAction20221.style.display = "none"; 
  showAction20222.style.display = "flex";
  showAction20223.style.display = "none";
  showAction20224.style.display = "none";
  showAction20225.style.display = "none";
  showAction20226.style.display = "none";
  showAction20227.style.display = "none";
  showAction20228.style.display = "none";
  showAction20229.style.display = "none";
  showAction202210.style.display = "none";
  showAction202211.style.display = "none";
  showAction202212.style.display = "none";
  showAction202213.style.display = "none";
  showAction202214.style.display = "none";
  showAction202215.style.display = "none";
  showAction202216.style.display = "none";
  showAction202217.style.display = "none";
  action20221.style.opacity = "0.5";
  action20221.style.filter = "grayscale(1)";
  action20222.style.opacity = "1";
  action20222.style.filter = "grayscale(0)";  
  action20223.style.opacity = "0.5";
  action20223.style.filter = "grayscale(1)"; 
  action20224.style.opacity = "0.5";
  action20224.style.filter = "grayscale(1)"; 
  action20225.style.opacity = "0.5";
  action20225.style.filter = "grayscale(1)";
  action20226.style.opacity = "0.5";
  action20226.style.filter = "grayscale(1)"; 
  action20227.style.opacity = "0.5";
  action20227.style.filter = "grayscale(1)";
  action20228.style.opacity = "0.5";
  action20228.style.filter = "grayscale(1)";  
  action20229.style.opacity = "0.5";
  action20229.style.filter = "grayscale(1)"; 
  action202210.style.opacity = "0.5";
  action202210.style.filter = "grayscale(1)";   
  action202211.style.opacity = "0.5";
  action202211.style.filter = "grayscale(1)";
  action202212.style.opacity = "0.5";
  action202212.style.filter = "grayscale(1)";
  action202213.style.opacity = "0.5";
  action202213.style.filter = "grayscale(1)";
  action202214.style.opacity = "0.5";
  action202214.style.filter = "grayscale(1)";
  action202215.style.opacity = "0.5";
  action202215.style.filter = "grayscale(1)";
  action202216.style.opacity = "0.5";
  action202216.style.filter = "grayscale(1)";
  action202217.style.opacity = "0.5";
  action202217.style.filter = "grayscale(1)";
};
action20223.onclick = function(){
  showAction20221.style.display = "none"; 
  showAction20222.style.display = "none";
  showAction20223.style.display = "flex";
  showAction20224.style.display = "none";
  showAction20225.style.display = "none";
  showAction20226.style.display = "none";
  showAction20227.style.display = "none";
  showAction20228.style.display = "none";
  showAction20229.style.display = "none";
  showAction202210.style.display = "none";
  showAction202211.style.display = "none";
  showAction202212.style.display = "none";
  showAction202213.style.display = "none";
  showAction202214.style.display = "none";
  showAction202215.style.display = "none";
  showAction202216.style.display = "none";
  showAction202217.style.display = "none";
  action20221.style.opacity = "0.5";
  action20221.style.filter = "grayscale(1)";
  action20222.style.opacity = "0.5";
  action20222.style.filter = "grayscale(1)";  
  action20223.style.opacity = "1";
  action20223.style.filter = "grayscale(0)";  
  action20224.style.opacity = "0.5";
  action20224.style.filter = "grayscale(1)";
  action20225.style.opacity = "0.5";
  action20225.style.filter = "grayscale(1)";
  action20226.style.opacity = "0.5";
  action20226.style.filter = "grayscale(1)"; 
  action20227.style.opacity = "0.5";
  action20227.style.filter = "grayscale(1)"; 
  action20228.style.opacity = "0.5";
  action20228.style.filter = "grayscale(1)"; 
  action20229.style.opacity = "0.5";
  action20229.style.filter = "grayscale(1)";  
  action202210.style.opacity = "0.5";
  action202210.style.filter = "grayscale(1)";  
  action202211.style.opacity = "0.5";
  action202211.style.filter = "grayscale(1)";
  action202212.style.opacity = "0.5";
  action202212.style.filter = "grayscale(1)";
  action202213.style.opacity = "0.5";
  action202213.style.filter = "grayscale(1)";
  action202214.style.opacity = "0.5";
  action202214.style.filter = "grayscale(1)";
  action202215.style.opacity = "0.5";
  action202215.style.filter = "grayscale(1)";
  action202216.style.opacity = "0.5";
  action202216.style.filter = "grayscale(1)";
  action202217.style.opacity = "0.5";
  action202217.style.filter = "grayscale(1)";
};
action20224.onclick = function(){
  showAction20221.style.display = "none"; 
  showAction20222.style.display = "none";
  showAction20223.style.display = "none";
  showAction20224.style.display = "flex";
  showAction20225.style.display = "none";
  showAction20226.style.display = "none";
  showAction20227.style.display = "none";
  showAction20228.style.display = "none";
  showAction20229.style.display = "none";
  showAction202210.style.display = "none";
  showAction202211.style.display = "none";
  showAction202212.style.display = "none";
  showAction202213.style.display = "none";
  showAction202214.style.display = "none";
  showAction202215.style.display = "none";
  showAction202216.style.display = "none";
  showAction202217.style.display = "none";
  action20221.style.opacity = "0.5";
  action20221.style.filter = "grayscale(1)";
  action20222.style.opacity = "0.5";
  action20222.style.filter = "grayscale(1)";  
  action20223.style.opacity = "0.5";
  action20223.style.filter = "grayscale(1)";  
  action20224.style.opacity = "1";
  action20224.style.filter = "grayscale(0)";
  action20225.style.opacity = "0.5";
  action20225.style.filter = "grayscale(1)";
  action20226.style.opacity = "0.5";
  action20226.style.filter = "grayscale(1)"; 
  action20227.style.opacity = "0.5";
  action20227.style.filter = "grayscale(1)";
  action20228.style.opacity = "0.5";
  action20228.style.filter = "grayscale(1)"; 
  action20229.style.opacity = "0.5";
  action20229.style.filter = "grayscale(1)"; 
  action202210.style.opacity = "0.5";
  action202210.style.filter = "grayscale(1)";  
  action202211.style.opacity = "0.5";
  action202211.style.filter = "grayscale(1)";  
  action202212.style.opacity = "0.5";
  action202212.style.filter = "grayscale(1)"; 
  action202213.style.opacity = "0.5";
  action202213.style.filter = "grayscale(1)";
  action202214.style.opacity = "0.5";
  action202214.style.filter = "grayscale(1)";
  action202215.style.opacity = "0.5";
  action202215.style.filter = "grayscale(1)";
  action202216.style.opacity = "0.5";
  action202216.style.filter = "grayscale(1)";
  action202217.style.opacity = "0.5";
  action202217.style.filter = "grayscale(1)";
};
action20225.onclick = function(){
  showAction20221.style.display = "none"; 
  showAction20222.style.display = "none";
  showAction20223.style.display = "none";
  showAction20224.style.display = "none";
  showAction20225.style.display = "flex";
  showAction20226.style.display = "none";
  showAction20227.style.display = "none";
  showAction20228.style.display = "none";
  showAction20229.style.display = "none";
  showAction202210.style.display = "none";
  showAction202211.style.display = "none";
  showAction202212.style.display = "none";
  showAction202213.style.display = "none";
  showAction202214.style.display = "none";
  showAction202215.style.display = "none";
  showAction202216.style.display = "none";
  showAction202217.style.display = "none";
  action20221.style.opacity = "0.5";
  action20221.style.filter = "grayscale(1)";
  action20222.style.opacity = "0.5";
  action20222.style.filter = "grayscale(1)";  
  action20223.style.opacity = "0.5";
  action20223.style.filter = "grayscale(1)";  
  action20224.style.opacity = "0.5";
  action20224.style.filter = "grayscale(1)";
  action20225.style.opacity = "1";
  action20225.style.filter = "grayscale(0)";  
  action20226.style.opacity = "0.5";
  action20226.style.filter = "grayscale(1)"; 
  action20227.style.opacity = "0.5";
  action20227.style.filter = "grayscale(1)";
  action20228.style.opacity = "0.5";
  action20228.style.filter = "grayscale(1)"; 
  action20229.style.opacity = "0.5";
  action20229.style.filter = "grayscale(1)"; 
  action202210.style.opacity = "0.5";
  action202210.style.filter = "grayscale(1)";
  action202211.style.opacity = "0.5";
  action202211.style.filter = "grayscale(1)"; 
  action202212.style.opacity = "0.5";
  action202212.style.filter = "grayscale(1)";  
  action202213.style.opacity = "0.5";
  action202213.style.filter = "grayscale(1)";
  action202214.style.opacity = "0.5";
  action202214.style.filter = "grayscale(1)";
  action202215.style.opacity = "0.5";
  action202215.style.filter = "grayscale(1)";
  action202216.style.opacity = "0.5";
  action202216.style.filter = "grayscale(1)";
  action202217.style.opacity = "0.5";
  action202217.style.filter = "grayscale(1)";
};
action20226.onclick = function(){
  showAction20221.style.display = "none"; 
  showAction20222.style.display = "none";
  showAction20223.style.display = "none";
  showAction20224.style.display = "none";
  showAction20225.style.display = "none";
  showAction20226.style.display = "flex";
  showAction20227.style.display = "none";
  showAction20228.style.display = "none";
  showAction20229.style.display = "none";
  showAction202210.style.display = "none";
  showAction202211.style.display = "none";
  showAction202212.style.display = "none";
  showAction202213.style.display = "none";
  showAction202214.style.display = "none";
  showAction202215.style.display = "none";
  showAction202216.style.display = "none";
  showAction202217.style.display = "none";
  action20221.style.opacity = "0.5";
  action20221.style.filter = "grayscale(1)";
  action20222.style.opacity = "0.5";
  action20222.style.filter = "grayscale(1)";  
  action20223.style.opacity = "0.5";
  action20223.style.filter = "grayscale(1)";  
  action20224.style.opacity = "0.5";
  action20224.style.filter = "grayscale(1)";
  action20225.style.opacity = "0.5";
  action20225.style.filter = "grayscale(1)";  
  action20226.style.opacity = "1";
  action20226.style.filter = "grayscale(0)"; 
  action20227.style.opacity = "0.5";
  action20227.style.filter = "grayscale(1)"; 
  action20228.style.opacity = "0.5";
  action20228.style.filter = "grayscale(1)"; 
  action20229.style.opacity = "0.5";
  action20229.style.filter = "grayscale(1)"; 
  action202210.style.opacity = "0.5";
  action202210.style.filter = "grayscale(1)"; 
  action202211.style.opacity = "0.5";
  action202211.style.filter = "grayscale(1)"; 
  action202212.style.opacity = "0.5";
  action202212.style.filter = "grayscale(1)";
  action202213.style.opacity = "0.5";
  action202213.style.filter = "grayscale(1)";
  action202214.style.opacity = "0.5";
  action202214.style.filter = "grayscale(1)";
  action202215.style.opacity = "0.5";
  action202215.style.filter = "grayscale(1)";
  action202216.style.opacity = "0.5";
  action202216.style.filter = "grayscale(1)";
  action202217.style.opacity = "0.5";
  action202217.style.filter = "grayscale(1)";
};
action20227.onclick = function(){
  showAction20221.style.display = "none"; 
  showAction20222.style.display = "none";
  showAction20223.style.display = "none";
  showAction20224.style.display = "none";
  showAction20225.style.display = "none";
  showAction20226.style.display = "none";
  showAction20227.style.display = "flex";
  showAction20228.style.display = "none";
  showAction20229.style.display = "none";
  showAction202210.style.display = "none";
  showAction202211.style.display = "none";
  showAction202212.style.display = "none";
  showAction202213.style.display = "none";
  showAction202214.style.display = "none";
  showAction202215.style.display = "none";
  showAction202216.style.display = "none";
  showAction202217.style.display = "none";
  action20221.style.opacity = "0.5";
  action20221.style.filter = "grayscale(1)";
  action20222.style.opacity = "0.5";
  action20222.style.filter = "grayscale(1)";  
  action20223.style.opacity = "0.5";
  action20223.style.filter = "grayscale(1)";  
  action20224.style.opacity = "0.5";
  action20224.style.filter = "grayscale(1)";
  action20225.style.opacity = "0.5";
  action20225.style.filter = "grayscale(1)";  
  action20226.style.opacity = "0.5";
  action20226.style.filter = "grayscale(1)"; 
  action20227.style.opacity = "1";
  action20227.style.filter = "grayscale(0)"; 
  action20228.style.opacity = "0.5";
  action20228.style.filter = "grayscale(1)"; 
  action20229.style.opacity = "0.5";
  action20229.style.filter = "grayscale(1)"; 
  action202210.style.opacity = "0.5";
  action202210.style.filter = "grayscale(1)"; 
  action202211.style.opacity = "0.5";
  action202211.style.filter = "grayscale(1)"; 
  action202212.style.opacity = "0.5";
  action202212.style.filter = "grayscale(1)";
  action202213.style.opacity = "0.5";
  action202213.style.filter = "grayscale(1)";
  action202214.style.opacity = "0.5";
  action202214.style.filter = "grayscale(1)";
  action202215.style.opacity = "0.5";
  action202215.style.filter = "grayscale(1)";
  action202216.style.opacity = "0.5";
  action202216.style.filter = "grayscale(1)";
  action202217.style.opacity = "0.5";
  action202217.style.filter = "grayscale(1)";
};
action20228.onclick = function(){
  showAction20221.style.display = "none"; 
  showAction20222.style.display = "none";
  showAction20223.style.display = "none";
  showAction20224.style.display = "none";
  showAction20225.style.display = "none";
  showAction20226.style.display = "none";
  showAction20227.style.display = "none";
  showAction20228.style.display = "flex";
  showAction20229.style.display = "none";
  showAction202210.style.display = "none";
  showAction202211.style.display = "none";
  showAction202212.style.display = "none";
  showAction202213.style.display = "none";
  showAction202214.style.display = "none";
  showAction202215.style.display = "none";
  showAction202216.style.display = "none";
  showAction202217.style.display = "none";
  action20221.style.opacity = "0.5";
  action20221.style.filter = "grayscale(1)";
  action20222.style.opacity = "0.5";
  action20222.style.filter = "grayscale(1)";  
  action20223.style.opacity = "0.5";
  action20223.style.filter = "grayscale(1)";  
  action20224.style.opacity = "0.5";
  action20224.style.filter = "grayscale(1)";
  action20225.style.opacity = "0.5";
  action20225.style.filter = "grayscale(1)";  
  action20226.style.opacity = "0.5";
  action20226.style.filter = "grayscale(1)"; 
  action20227.style.opacity = "0.5";
  action20227.style.filter = "grayscale(1)"; 
  action20228.style.opacity = "1";
  action20228.style.filter = "grayscale(0)"; 
  action20229.style.opacity = "0.5";
  action20229.style.filter = "grayscale(1)"; 
  action202210.style.opacity = "0.5";
  action202210.style.filter = "grayscale(1)"; 
  action202211.style.opacity = "0.5";
  action202211.style.filter = "grayscale(1)"; 
  action202212.style.opacity = "0.5";
  action202212.style.filter = "grayscale(1)";
  action202213.style.opacity = "0.5";
  action202213.style.filter = "grayscale(1)";
  action202214.style.opacity = "0.5";
  action202214.style.filter = "grayscale(1)";
  action202215.style.opacity = "0.5";
  action202215.style.filter = "grayscale(1)";
  action202216.style.opacity = "0.5";
  action202216.style.filter = "grayscale(1)";
  action202217.style.opacity = "0.5";
  action202217.style.filter = "grayscale(1)";
};
action20229.onclick = function(){
  showAction20221.style.display = "none"; 
  showAction20222.style.display = "none";
  showAction20223.style.display = "none";
  showAction20224.style.display = "none";
  showAction20225.style.display = "none";
  showAction20226.style.display = "none";
  showAction20227.style.display = "none";
  showAction20228.style.display = "none";
  showAction20229.style.display = "flex";
  showAction202210.style.display = "none";
  showAction202211.style.display = "none";
  showAction202212.style.display = "none";
  showAction202213.style.display = "none";
  showAction202214.style.display = "none";
  showAction202215.style.display = "none";
  showAction202216.style.display = "none";
  showAction202217.style.display = "none";
  action20221.style.opacity = "0.5";
  action20221.style.filter = "grayscale(1)";
  action20222.style.opacity = "0.5";
  action20222.style.filter = "grayscale(1)";  
  action20223.style.opacity = "0.5";
  action20223.style.filter = "grayscale(1)";  
  action20224.style.opacity = "0.5";
  action20224.style.filter = "grayscale(1)";
  action20225.style.opacity = "0.5";
  action20225.style.filter = "grayscale(1)";  
  action20226.style.opacity = "0.5";
  action20226.style.filter = "grayscale(1)"; 
  action20227.style.opacity = "0.5";
  action20227.style.filter = "grayscale(1)"; 
  action20228.style.opacity = "0.5";
  action20228.style.filter = "grayscale(1)"; 
  action20229.style.opacity = "1";
  action20229.style.filter = "grayscale(0)"; 
  action202210.style.opacity = "0.5";
  action202210.style.filter = "grayscale(1)"; 
  action202211.style.opacity = "0.5";
  action202211.style.filter = "grayscale(1)"; 
  action202212.style.opacity = "0.5";
  action202212.style.filter = "grayscale(1)";
  action202213.style.opacity = "0.5";
  action202213.style.filter = "grayscale(1)";
  action202214.style.opacity = "0.5";
  action202214.style.filter = "grayscale(1)";
  action202215.style.opacity = "0.5";
  action202215.style.filter = "grayscale(1)";
  action202216.style.opacity = "0.5";
  action202216.style.filter = "grayscale(1)";
  action202217.style.opacity = "0.5";
  action202217.style.filter = "grayscale(1)";
};
action202210.onclick = function(){
  showAction20221.style.display = "none"; 
  showAction20222.style.display = "none";
  showAction20223.style.display = "none";
  showAction20224.style.display = "none";
  showAction20225.style.display = "none";
  showAction20226.style.display = "none";
  showAction20227.style.display = "none";
  showAction20228.style.display = "none";
  showAction20229.style.display = "none";
  showAction202210.style.display = "flex";
  showAction202211.style.display = "none";
  showAction202212.style.display = "none";
  showAction202213.style.display = "none";
  showAction202214.style.display = "none";
  showAction202215.style.display = "none";
  showAction202216.style.display = "none";
  showAction202217.style.display = "none";
  action20221.style.opacity = "0.5";
  action20221.style.filter = "grayscale(1)";
  action20222.style.opacity = "0.5";
  action20222.style.filter = "grayscale(1)";  
  action20223.style.opacity = "0.5";
  action20223.style.filter = "grayscale(1)";  
  action20224.style.opacity = "0.5";
  action20224.style.filter = "grayscale(1)";
  action20225.style.opacity = "0.5";
  action20225.style.filter = "grayscale(1)";  
  action20226.style.opacity = "0.5";
  action20226.style.filter = "grayscale(1)"; 
  action20227.style.opacity = "0.5";
  action20227.style.filter = "grayscale(1)"; 
  action20228.style.opacity = "0.5";
  action20228.style.filter = "grayscale(1)"; 
  action20229.style.opacity = "0.5";
  action20229.style.filter = "grayscale(1)"; 
  action202210.style.opacity = "1";
  action202210.style.filter = "grayscale(0)";  
  action202211.style.opacity = "0.5";
  action202211.style.filter = "grayscale(1)";
  action202212.style.opacity = "0.5";
  action202212.style.filter = "grayscale(1)";
  action202213.style.opacity = "0.5";
  action202213.style.filter = "grayscale(1)";
  action202214.style.opacity = "0.5";
  action202214.style.filter = "grayscale(1)";
  action202215.style.opacity = "0.5";
  action202215.style.filter = "grayscale(1)";
  action202216.style.opacity = "0.5";
  action202216.style.filter = "grayscale(1)";
  action202217.style.opacity = "0.5";
  action202217.style.filter = "grayscale(1)";
};
action202211.onclick = function(){
  showAction20221.style.display = "none"; 
  showAction20222.style.display = "none";
  showAction20223.style.display = "none";
  showAction20224.style.display = "none";
  showAction20225.style.display = "none";
  showAction20226.style.display = "none";
  showAction20227.style.display = "none";
  showAction20228.style.display = "none";
  showAction20229.style.display = "none";
  showAction202210.style.display = "none";
  showAction202211.style.display = "flex";
  showAction202212.style.display = "none";
  showAction202213.style.display = "none";
  showAction202214.style.display = "none";
  showAction202215.style.display = "none";
  showAction202216.style.display = "none";
  showAction202217.style.display = "none";
  action20221.style.opacity = "0.5";
  action20221.style.filter = "grayscale(1)";
  action20222.style.opacity = "0.5";
  action20222.style.filter = "grayscale(1)";  
  action20223.style.opacity = "0.5";
  action20223.style.filter = "grayscale(1)";  
  action20224.style.opacity = "0.5";
  action20224.style.filter = "grayscale(1)";
  action20225.style.opacity = "0.5";
  action20225.style.filter = "grayscale(1)";  
  action20226.style.opacity = "0.5";
  action20226.style.filter = "grayscale(1)"; 
  action20227.style.opacity = "0.5";
  action20227.style.filter = "grayscale(1)"; 
  action20228.style.opacity = "0.5";
  action20228.style.filter = "grayscale(1)"; 
  action20229.style.opacity = "0.5";
  action20229.style.filter = "grayscale(1)"; 
  action202210.style.opacity = "0.5";
  action202210.style.filter = "grayscale(1)";  
  action202211.style.opacity = "1";
  action202211.style.filter = "grayscale(0)";
  action202212.style.opacity = "0.5";
  action202212.style.filter = "grayscale(1)";
  action202213.style.opacity = "0.5";
  action202213.style.filter = "grayscale(1)";
  action202214.style.opacity = "0.5";
  action202214.style.filter = "grayscale(1)";
  action202215.style.opacity = "0.5";
  action202215.style.filter = "grayscale(1)";
  action202216.style.opacity = "0.5";
  action202216.style.filter = "grayscale(1)";
  action202217.style.opacity = "0.5";
  action202217.style.filter = "grayscale(1)";
};
action202212.onclick = function(){
  showAction20221.style.display = "none"; 
  showAction20222.style.display = "none";
  showAction20223.style.display = "none";
  showAction20224.style.display = "none";
  showAction20225.style.display = "none";
  showAction20226.style.display = "none";
  showAction20227.style.display = "none";
  showAction20228.style.display = "none";
  showAction20229.style.display = "none";
  showAction202210.style.display = "none";
  showAction202211.style.display = "none";
  showAction202212.style.display = "flex";
  showAction202213.style.display = "none";
  showAction202214.style.display = "none";
  showAction202215.style.display = "none";
  showAction202216.style.display = "none";
  showAction202217.style.display = "none";
  action20221.style.opacity = "0.5";
  action20221.style.filter = "grayscale(1)";
  action20222.style.opacity = "0.5";
  action20222.style.filter = "grayscale(1)";  
  action20223.style.opacity = "0.5";
  action20223.style.filter = "grayscale(1)";  
  action20224.style.opacity = "0.5";
  action20224.style.filter = "grayscale(1)";
  action20225.style.opacity = "0.5";
  action20225.style.filter = "grayscale(1)";  
  action20226.style.opacity = "0.5";
  action20226.style.filter = "grayscale(1)"; 
  action20227.style.opacity = "0.5";
  action20227.style.filter = "grayscale(1)"; 
  action20228.style.opacity = "0.5";
  action20228.style.filter = "grayscale(1)"; 
  action20229.style.opacity = "0.5";
  action20229.style.filter = "grayscale(1)"; 
  action202210.style.opacity = "0.5";
  action202210.style.filter = "grayscale(1)";  
  action202211.style.opacity = "0.5";
  action202211.style.filter = "grayscale(1)";
  action202212.style.opacity = "1";
  action202212.style.filter = "grayscale(0)";
  action202213.style.opacity = "0.5";
  action202213.style.filter = "grayscale(1)";
  action202214.style.opacity = "0.5";
  action202214.style.filter = "grayscale(1)";
  action202215.style.opacity = "0.5";
  action202215.style.filter = "grayscale(1)";
  action202216.style.opacity = "0.5";
  action202216.style.filter = "grayscale(1)";
  action202217.style.opacity = "0.5";
  action202217.style.filter = "grayscale(1)";
};
action202213.onclick = function(){
  showAction20221.style.display = "none"; 
  showAction20222.style.display = "none";
  showAction20223.style.display = "none";
  showAction20224.style.display = "none";
  showAction20225.style.display = "none";
  showAction20226.style.display = "none";
  showAction20227.style.display = "none";
  showAction20228.style.display = "none";
  showAction20229.style.display = "none";
  showAction202210.style.display = "none";
  showAction202211.style.display = "none";
  showAction202212.style.display = "none";
  showAction202213.style.display = "flex";
  showAction202214.style.display = "none";
  showAction202215.style.display = "none";
  showAction202216.style.display = "none";
  showAction202217.style.display = "none";
  action20221.style.opacity = "0.5";
  action20221.style.filter = "grayscale(1)";
  action20222.style.opacity = "0.5";
  action20222.style.filter = "grayscale(1)";  
  action20223.style.opacity = "0.5";
  action20223.style.filter = "grayscale(1)";  
  action20224.style.opacity = "0.5";
  action20224.style.filter = "grayscale(1)";
  action20225.style.opacity = "0.5";
  action20225.style.filter = "grayscale(1)";  
  action20226.style.opacity = "0.5";
  action20226.style.filter = "grayscale(1)"; 
  action20227.style.opacity = "0.5";
  action20227.style.filter = "grayscale(1)"; 
  action20228.style.opacity = "0.5";
  action20228.style.filter = "grayscale(1)"; 
  action20229.style.opacity = "0.5";
  action20229.style.filter = "grayscale(1)"; 
  action202210.style.opacity = "0.5";
  action202210.style.filter = "grayscale(1)";  
  action202211.style.opacity = "0.5";
  action202211.style.filter = "grayscale(1)";
  action202212.style.opacity = "0.5";
  action202212.style.filter = "grayscale(1)";
  action202213.style.opacity = "1";
  action202213.style.filter = "grayscale(0)";
  action202214.style.opacity = "0.5";
  action202214.style.filter = "grayscale(1)";
  action202215.style.opacity = "0.5";
  action202215.style.filter = "grayscale(1)";
  action202216.style.opacity = "0.5";
  action202216.style.filter = "grayscale(1)";
  action202217.style.opacity = "0.5";
  action202217.style.filter = "grayscale(1)";
};
action202214.onclick = function(){
  showAction20221.style.display = "none"; 
  showAction20222.style.display = "none";
  showAction20223.style.display = "none";
  showAction20224.style.display = "none";
  showAction20225.style.display = "none";
  showAction20226.style.display = "none";
  showAction20227.style.display = "none";
  showAction20228.style.display = "none";
  showAction20229.style.display = "none";
  showAction202210.style.display = "none";
  showAction202211.style.display = "none";
  showAction202212.style.display = "none";
  showAction202213.style.display = "none";
  showAction202214.style.display = "flex";
  showAction202215.style.display = "none";
  showAction202216.style.display = "none";
  showAction202217.style.display = "none";
  action20221.style.opacity = "0.5";
  action20221.style.filter = "grayscale(1)";
  action20222.style.opacity = "0.5";
  action20222.style.filter = "grayscale(1)";  
  action20223.style.opacity = "0.5";
  action20223.style.filter = "grayscale(1)";  
  action20224.style.opacity = "0.5";
  action20224.style.filter = "grayscale(1)";
  action20225.style.opacity = "0.5";
  action20225.style.filter = "grayscale(1)";  
  action20226.style.opacity = "0.5";
  action20226.style.filter = "grayscale(1)"; 
  action20227.style.opacity = "0.5";
  action20227.style.filter = "grayscale(1)"; 
  action20228.style.opacity = "0.5";
  action20228.style.filter = "grayscale(1)"; 
  action20229.style.opacity = "0.5";
  action20229.style.filter = "grayscale(1)"; 
  action202210.style.opacity = "0.5";
  action202210.style.filter = "grayscale(1)";  
  action202211.style.opacity = "0.5";
  action202211.style.filter = "grayscale(1)";
  action202212.style.opacity = "0.5";
  action202212.style.filter = "grayscale(1)";
  action202213.style.opacity = "0.5";
  action202213.style.filter = "grayscale(1)";
  action202214.style.opacity = "1";
  action202214.style.filter = "grayscale(0)";
  action202215.style.opacity = "0.5";
  action202215.style.filter = "grayscale(1)";
  action202216.style.opacity = "0.5";
  action202216.style.filter = "grayscale(1)";
  action202217.style.opacity = "0.5";
  action202217.style.filter = "grayscale(1)";
};
action202215.onclick = function(){
  showAction20221.style.display = "none"; 
  showAction20222.style.display = "none";
  showAction20223.style.display = "none";
  showAction20224.style.display = "none";
  showAction20225.style.display = "none";
  showAction20226.style.display = "none";
  showAction20227.style.display = "none";
  showAction20228.style.display = "none";
  showAction20229.style.display = "none";
  showAction202210.style.display = "none";
  showAction202211.style.display = "none";
  showAction202212.style.display = "none";
  showAction202213.style.display = "none";
  showAction202214.style.display = "none";
  showAction202215.style.display = "flex";
  showAction202216.style.display = "none";
  showAction202217.style.display = "none";
  action20221.style.opacity = "0.5";
  action20221.style.filter = "grayscale(1)";
  action20222.style.opacity = "0.5";
  action20222.style.filter = "grayscale(1)";  
  action20223.style.opacity = "0.5";
  action20223.style.filter = "grayscale(1)";  
  action20224.style.opacity = "0.5";
  action20224.style.filter = "grayscale(1)";
  action20225.style.opacity = "0.5";
  action20225.style.filter = "grayscale(1)";  
  action20226.style.opacity = "0.5";
  action20226.style.filter = "grayscale(1)"; 
  action20227.style.opacity = "0.5";
  action20227.style.filter = "grayscale(1)"; 
  action20228.style.opacity = "0.5";
  action20228.style.filter = "grayscale(1)"; 
  action20229.style.opacity = "0.5";
  action20229.style.filter = "grayscale(1)"; 
  action202210.style.opacity = "0.5";
  action202210.style.filter = "grayscale(1)";  
  action202211.style.opacity = "0.5";
  action202211.style.filter = "grayscale(1)";
  action202212.style.opacity = "0.5";
  action202212.style.filter = "grayscale(1)";
  action202213.style.opacity = "0.5";
  action202213.style.filter = "grayscale(1)";
  action202214.style.opacity = "0.5";
  action202214.style.filter = "grayscale(1)";
  action202215.style.opacity = "1";
  action202215.style.filter = "grayscale(0)";
  action202216.style.opacity = "0.5";
  action202216.style.filter = "grayscale(1)";
  action202217.style.opacity = "0.5";
  action202217.style.filter = "grayscale(1)";
};
action202216.onclick = function(){
  showAction20221.style.display = "none"; 
  showAction20222.style.display = "none";
  showAction20223.style.display = "none";
  showAction20224.style.display = "none";
  showAction20225.style.display = "none";
  showAction20226.style.display = "none";
  showAction20227.style.display = "none";
  showAction20228.style.display = "none";
  showAction20229.style.display = "none";
  showAction202210.style.display = "none";
  showAction202211.style.display = "none";
  showAction202212.style.display = "none";
  showAction202213.style.display = "none";
  showAction202214.style.display = "none";
  showAction202215.style.display = "none";
  showAction202216.style.display = "flex";
  showAction202217.style.display = "none";
  action20221.style.opacity = "0.5";
  action20221.style.filter = "grayscale(1)";
  action20222.style.opacity = "0.5";
  action20222.style.filter = "grayscale(1)";  
  action20223.style.opacity = "0.5";
  action20223.style.filter = "grayscale(1)";  
  action20224.style.opacity = "0.5";
  action20224.style.filter = "grayscale(1)";
  action20225.style.opacity = "0.5";
  action20225.style.filter = "grayscale(1)";  
  action20226.style.opacity = "0.5";
  action20226.style.filter = "grayscale(1)"; 
  action20227.style.opacity = "0.5";
  action20227.style.filter = "grayscale(1)"; 
  action20228.style.opacity = "0.5";
  action20228.style.filter = "grayscale(1)"; 
  action20229.style.opacity = "0.5";
  action20229.style.filter = "grayscale(1)"; 
  action202210.style.opacity = "0.5";
  action202210.style.filter = "grayscale(1)";  
  action202211.style.opacity = "0.5";
  action202211.style.filter = "grayscale(1)";
  action202212.style.opacity = "0.5";
  action202212.style.filter = "grayscale(1)";
  action202213.style.opacity = "0.5";
  action202213.style.filter = "grayscale(1)";
  action202214.style.opacity = "0.5";
  action202214.style.filter = "grayscale(1)";
  action202215.style.opacity = "0.5";
  action202215.style.filter = "grayscale(1)";
  action202216.style.opacity = "1";
  action202216.style.filter = "grayscale(0)";
  action202217.style.opacity = "0.5";
  action202217.style.filter = "grayscale(1)";
};
action202217.onclick = function(){
  showAction20221.style.display = "none"; 
  showAction20222.style.display = "none";
  showAction20223.style.display = "none";
  showAction20224.style.display = "none";
  showAction20225.style.display = "none";
  showAction20226.style.display = "none";
  showAction20227.style.display = "none";
  showAction20228.style.display = "none";
  showAction20229.style.display = "none";
  showAction202210.style.display = "none";
  showAction202211.style.display = "none";
  showAction202212.style.display = "none";
  showAction202213.style.display = "none";
  showAction202214.style.display = "none";
  showAction202215.style.display = "none";
  showAction202216.style.display = "none";
  showAction202217.style.display = "flex";
  action20221.style.opacity = "0.5";
  action20221.style.filter = "grayscale(1)";
  action20222.style.opacity = "0.5";
  action20222.style.filter = "grayscale(1)";  
  action20223.style.opacity = "0.5";
  action20223.style.filter = "grayscale(1)";  
  action20224.style.opacity = "0.5";
  action20224.style.filter = "grayscale(1)";
  action20225.style.opacity = "0.5";
  action20225.style.filter = "grayscale(1)";  
  action20226.style.opacity = "0.5";
  action20226.style.filter = "grayscale(1)"; 
  action20227.style.opacity = "0.5";
  action20227.style.filter = "grayscale(1)"; 
  action20228.style.opacity = "0.5";
  action20228.style.filter = "grayscale(1)"; 
  action20229.style.opacity = "0.5";
  action20229.style.filter = "grayscale(1)"; 
  action202210.style.opacity = "0.5";
  action202210.style.filter = "grayscale(1)";  
  action202211.style.opacity = "0.5";
  action202211.style.filter = "grayscale(1)";
  action202212.style.opacity = "0.5";
  action202212.style.filter = "grayscale(1)";
  action202213.style.opacity = "0.5";
  action202213.style.filter = "grayscale(1)";
  action202214.style.opacity = "0.5";
  action202214.style.filter = "grayscale(1)";
  action202215.style.opacity = "0.5";
  action202215.style.filter = "grayscale(1)";
  action202216.style.opacity = "0.5";
  action202216.style.filter = "grayscale(1)";
  action202217.style.opacity = "1";
  action202217.style.filter = "grayscale(0)";
};

const action1 = document.getElementById('ac-1'); //options
const action2 = document.getElementById('ac-2');
const action3 = document.getElementById('ac-3');
const action4 = document.getElementById('ac-4');
const action5 = document.getElementById('ac-5');
const action6 = document.getElementById('ac-6');
const action7 = document.getElementById('ac-7');
const action8 = document.getElementById('ac-8');
const action9 = document.getElementById('ac-9');
const action10 = document.getElementById('ac-10');
const action11 = document.getElementById('ac-11');
const action12 = document.getElementById('ac-12');
const action13 = document.getElementById('ac-13');
const action14 = document.getElementById('ac-14');
const action15 = document.getElementById('ac-15');
const action16 = document.getElementById('ac-16');
const action17 = document.getElementById('ac-17');
const action18 = document.getElementById('ac-18');
const showAction1 = document.getElementById('ac-1-text');//choix display
const showAction2 = document.getElementById('ac-2-text');
const showAction3 = document.getElementById('ac-3-text');
const showAction4 = document.getElementById('ac-4-text');//choix display
const showAction5 = document.getElementById('ac-5-text');
const showAction6 = document.getElementById('ac-6-text');
const showAction7 = document.getElementById('ac-7-text');//choix display
const showAction8 = document.getElementById('ac-8-text');
const showAction9 = document.getElementById('ac-9-text');
const showAction10 = document.getElementById('ac-10-text');
const showAction11 = document.getElementById('ac-11-text');
const showAction12 = document.getElementById('ac-12-text');
const showAction13 = document.getElementById('ac-13-text');
const showAction14 = document.getElementById('ac-14-text');
const showAction15 = document.getElementById('ac-15-text');
const showAction16 = document.getElementById('ac-16-text');
const showAction17 = document.getElementById('ac-17-text');
const showAction18 = document.getElementById('ac-18-text');

action1.onclick = function(){
	showAction1.style.display = "flex";
	showAction2.style.display = "none";
	showAction3.style.display = "none";		
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";
	showAction9.style.display = "none";
	showAction10.style.display = "none";
	showAction11.style.display = "none";
	showAction12.style.display = "none";
	showAction13.style.display = "none";
	showAction14.style.display = "none";
	showAction15.style.display = "none";
	showAction16.style.display = "none";
	showAction17.style.display = "none";
	showAction18.style.display = "none";
	action1.style.opacity = "1";
	action1.style.filter = "grayscale(0)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";
}
action2.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "flex";
	showAction3.style.display = "none";
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";	
	showAction11.style.display = "none";
	showAction12.style.display = "none";
	showAction13.style.display = "none";
	showAction14.style.display = "none";
	showAction15.style.display = "none";
	showAction16.style.display = "none";
	showAction17.style.display = "none";
	showAction18.style.display = "none";
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "1";
	action2.style.filter = "grayscale(0)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";
}
action3.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "flex";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";
	showAction11.style.display = "none";
	showAction12.style.display = "none";
	showAction13.style.display = "none";
	showAction14.style.display = "none";	
	showAction15.style.display = "none";
	showAction16.style.display = "none";
	showAction17.style.display = "none";
	showAction18.style.display = "none";
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "1";
	action3.style.filter = "grayscale(0)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";
}
action4.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "flex";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";
	showAction11.style.display = "none";
	showAction12.style.display = "none";
	showAction13.style.display = "none";
	showAction14.style.display = "none";
	showAction15.style.display = "none";
	showAction16.style.display = "none";
	showAction17.style.display = "none";	
	showAction18.style.display = "none";
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "1";
	action4.style.filter = "grayscale(0.5)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";	
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";
}
action5.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "flex";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";
	showAction11.style.display = "none";
	showAction12.style.display = "none";
	showAction13.style.display = "none";
	showAction14.style.display = "none";	
	showAction15.style.display = "none";
	showAction16.style.display = "none";
	showAction17.style.display = "none";
	showAction18.style.display = "none";
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";		
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "1";
	action5.style.filter = "grayscale(0)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";
}
action6.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "flex";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";
	showAction11.style.display = "none";
	showAction12.style.display = "none";
	showAction13.style.display = "none";
	showAction14.style.display = "none";
	showAction15.style.display = "none";
	showAction16.style.display = "none";
	showAction17.style.display = "none";	
	showAction18.style.display = "none";
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";		
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "1";
	action6.style.filter = "grayscale(0)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";
}
action7.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "flex";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";
	showAction10.style.display = "none";	
	showAction11.style.display = "none";
	showAction12.style.display = "none";
	showAction13.style.display = "none";
	showAction14.style.display = "none";
	showAction15.style.display = "none";
	showAction16.style.display = "none";
	showAction17.style.display = "none";
	showAction18.style.display = "none";	
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "1";
	action7.style.filter = "grayscale(0)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";
}
action8.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "flex";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";
	showAction11.style.display = "none";
	showAction12.style.display = "none";
	showAction13.style.display = "none";
	showAction14.style.display = "none";
	showAction15.style.display = "none";
	showAction16.style.display = "none";
	showAction17.style.display = "none";
	showAction18.style.display = "none";	
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "1";
	action8.style.filter = "grayscale(0)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";
}
action9.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "flex";	
	showAction10.style.display = "none";
	showAction11.style.display = "none";
	showAction12.style.display = "none";
	showAction13.style.display = "none";
	showAction14.style.display = "none";	
	showAction15.style.display = "none";
	showAction16.style.display = "none";
	showAction17.style.display = "none";
	showAction18.style.display = "none";
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "1";
	action9.style.filter = "grayscale(0)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";
};
action10.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "flex";
	showAction11.style.display = "none";
	showAction12.style.display = "none";
	showAction13.style.display = "none";	
	showAction14.style.display = "none";
	showAction15.style.display = "none";
	showAction16.style.display = "none";
	showAction17.style.display = "none";
	showAction18.style.display = "none";
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "1";
	action10.style.filter = "grayscale(0)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";
};
action11.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";
	showAction11.style.display = "flex";
	showAction12.style.display = "none";
	showAction13.style.display = "none";
	showAction14.style.display = "none";
	showAction15.style.display = "none";
	showAction16.style.display = "none";
	showAction17.style.display = "none";
	showAction18.style.display = "none";	
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "1";
	action11.style.filter = "grayscale(0)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";
};
action12.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";
	showAction11.style.display = "none";
	showAction12.style.display = "flex";
	showAction13.style.display = "none";
	showAction14.style.display = "none";	
	showAction15.style.display = "none";
	showAction16.style.display = "none";
	showAction17.style.display = "none";
	showAction18.style.display = "none";
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "1";
	action12.style.filter = "grayscale(0)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";
};
action13.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";
	showAction11.style.display = "none";
	showAction12.style.display = "none";
	showAction13.style.display = "flex";
	showAction14.style.display = "none";	
	showAction15.style.display = "none";
	showAction16.style.display = "none";
	showAction17.style.display = "none";
	showAction18.style.display = "none";
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "1";
	action13.style.filter = "grayscale(0)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";
};
action14.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";
	showAction11.style.display = "none";
	showAction12.style.display = "none";
	showAction13.style.display = "none";
	showAction14.style.display = "flex";
	showAction15.style.display = "none";
	showAction16.style.display = "none";
	showAction17.style.display = "none";
	showAction18.style.display = "none";	
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "1";
	action14.style.filter = "grayscale(0)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";

};
action15.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";
	showAction11.style.display = "none";
	showAction12.style.display = "none";
	showAction13.style.display = "none";
	showAction14.style.display = "none";
	showAction15.style.display = "flex";
	showAction16.style.display = "none";	
	showAction17.style.display = "none";
	showAction18.style.display = "none";
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "1";
	action15.style.filter = "grayscale(0)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";
};
action16.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";
	showAction11.style.display = "none";
	showAction12.style.display = "none";
	showAction13.style.display = "none";
	showAction14.style.display = "none";
	showAction15.style.display = "none";
	showAction16.style.display = "flex";
	showAction17.style.display = "none";	
	showAction18.style.display = "none";
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "1";
	action16.style.filter = "grayscale(0";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";
};
action17.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";
	showAction11.style.display = "none";
	showAction12.style.display = "none";
	showAction13.style.display = "none";
	showAction14.style.display = "none";
	showAction15.style.display = "none";
	showAction16.style.display = "none";
	showAction17.style.display = "flex";	
	showAction18.style.display = "none";
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "1";
	action17.style.filter = "grayscale(0.5)";
	action18.style.opacity = "0.5";
	action18.style.filter = "grayscale(1)";
};
action18.onclick = function(){
	showAction1.style.display = "none";
	showAction2.style.display = "none";
	showAction3.style.display = "none";	
	showAction4.style.display = "none";
	showAction5.style.display = "none";
	showAction6.style.display = "none";
	showAction7.style.display = "none";
	showAction8.style.display = "none";	
	showAction9.style.display = "none";	
	showAction10.style.display = "none";
	showAction11.style.display = "none";
	showAction12.style.display = "none";
	showAction13.style.display = "none";
	showAction14.style.display = "none";
	showAction15.style.display = "none";
	showAction16.style.display = "none";
	showAction17.style.display = "none";	
	showAction18.style.display = "flex";
	action1.style.opacity = "0.5";
	action1.style.filter = "grayscale(1)";
	action2.style.opacity = "0.5";
	action2.style.filter = "grayscale(1)";
	action3.style.opacity = "0.5";
	action3.style.filter = "grayscale(1)";	
	action4.style.opacity = "0.5";
	action4.style.filter = "grayscale(1)";
	action5.style.opacity = "0.5";
	action5.style.filter = "grayscale(1)";
	action6.style.opacity = "0.5";
	action6.style.filter = "grayscale(1)";
	action7.style.opacity = "0.5";
	action7.style.filter = "grayscale(1)";
	action8.style.opacity = "0.5";
	action8.style.filter = "grayscale(1)";	
	action9.style.opacity = "0.5";
	action9.style.filter = "grayscale(1)";
	action10.style.opacity = "0.5";
	action10.style.filter = "grayscale(1)";
	action11.style.opacity = "0.5";
	action11.style.filter = "grayscale(1)";
	action12.style.opacity = "0.5";
	action12.style.filter = "grayscale(1)";
	action13.style.opacity = "0.5";
	action13.style.filter = "grayscale(1)";
	action14.style.opacity = "0.5";
	action14.style.filter = "grayscale(1)";
	action15.style.opacity = "0.5";
	action15.style.filter = "grayscale(1)";
	action16.style.opacity = "0.5";
	action16.style.filter = "grayscale(1)";
	action17.style.opacity = "0.5";
	action17.style.filter = "grayscale(1)";
	action18.style.opacity = "1";
	action18.style.filter = "grayscale(0.5)";

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

// SKILLS BARS ANIMATION //
const skillsSection = document.getElementById('skill-bars');
// const skillsSection1 = document.getElementById('skill-bars1');

const progressBars = document.querySelectorAll('.info');

function showProgress() {
  progressBars.forEach(progressBar => {
    const valueBar = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${valueBar}%`;
  });
}

function hideProgress() {
  progressBars.forEach(p => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

window.addEventListener('scroll',() => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
 //  const sectionPos1 = skillsSection1.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.5;

  if(sectionPos < screenPos || sectionPos1 < screenPos ){
      showProgress();
  } else{
     hideProgress();
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

