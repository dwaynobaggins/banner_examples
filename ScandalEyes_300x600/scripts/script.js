
var el = {}; //elements object
var sentenceOne = ">INTRODUCING";
var sentenceTwo = "CARA_DELEVINGNE"
var charsArrayOne = [];
var charsArrayTwo = [];
var charSetSizeMin = 3;
var charSetSizeMax = 8;
var charAppearRate = 0.1;
var totalCharSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","<",">","[","]","#","_"];

var textLeftMargin = 15;
var textTopMargin = 50;
var textHozSpacing = 17;
var textVertSpacing = 30;

// if (Enabler.isInitialized()) {
//   init();
// } else {
//   Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
// }

// // Runs when Enabler is ready.
// function init() {
//   console.log("Enabler: isInitialized");
//   if (Enabler.isPageLoaded()) {
//     politeInit();
//   } else {
//     Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
//   }
// };

// // Runs when the page is completely loaded.   
// function politeInit() {
//   console.log("Enabler: Page is Loaded");
//   if(Enabler.isVisible()) {
//     startAd();
//   } else {
//     Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, startAd);
//   } 
// };

function startAd() {

	el.ad_container = document.getElementById('ad-container');
	el.clickthrough_button = document.getElementById('clickthrough-button');
	
	//Bring in listeners
//	addListeners();

	// Setting elements
	
	TweenLite.set("#cara_blur", {x:300});
	TweenLite.set("#cara_flat", {x:300});
	TweenLite.set("#logo",{opacity:1});
	TweenLite.set("#cta",{opacity:0, scale:1.2});

	TweenLite.set("#packshot",{x:307});

	TweenLite.set("#mask", {x:288});
	TweenLite.set("#volume", {x:-288});

	TweenLite.set("#text2",{x:332});
	TweenLite.set("#text3",{x:402});

   	createText(charsArrayOne, sentenceOne, 0);
   	createText(charsArrayTwo, sentenceTwo, textVertSpacing);

  	frame1_animation();

	//Show Ad
	el.ad_container.style.display = "block";
}

//Add Event Listeners
function addListeners() {
 	el.clickthrough_button.addEventListener('click', clickthrough_buttonClick);
}

function frame1_animation()	{
	TweenLite.delayedCall(0.3, animateLineOfText, [charsArrayOne]);
	TweenLite.delayedCall(1.7, animateLineOfText, [charsArrayTwo]);

	var tl = new TimelineLite({delay: 2});
    tl.to("#cta", 0.2,{scale:0.7, opacity:1, ease:Power1.easeInOut}, "-=0.1");
    tl.to("#cta", 0.2,{scale:1.1, opacity:1, ease:Power1.easeInOut}, "-=0.1");
    tl.to("#cta", 0.2,{scale:1, opacity:1, ease:Power1.easeInOut}, "-=0.1");

    TweenLite.delayedCall(3, frame2_animation);
}

function frame2_animation()	{
	//TweenLite.to("#textContainer", 1, {x:-300, ease:Expo.easeOut});

	TweenLite.to("#cara_blur", 1, {x:-80, ease:Expo.easeOut});
	TweenLite.to("#cara_blur", 0.4, {opacity:0, delay:0.6, ease:Sine.easeOut, overwrite:false});

	TweenLite.to("#cara_flat", 1, {x:-80, ease:Expo.easeOut});
	TweenLite.delayedCall(4, frame3_animation);
}

function frame3_animation()	{
	TweenLite.to("#textContainer", 1, {x:-300, ease:Expo.easeOut});

	TweenLite.to("#cara_blur", 1, {x:-637, ease:Expo.easeOut});
	TweenLite.to("#cara_blur", 0.4, {opacity:1, ease:Sine.easeOut, overwrite:false});

	TweenLite.to("#cara_flat", 1, {x:-637, ease:Expo.easeOut});

	TweenLite.to("#mask", 1, {x:0, delay:0.1, ease:Sine.easeOut});
	TweenLite.to("#volume", 1, {x:0, delay:0.1, ease:Sine.easeOut});

	TweenLite.to("#text2", 1, {x:32, delay:0.3, ease:Expo.easeOut});

	TweenLite.to("#packshot", 1, {x:7, delay:1, ease:Expo.easeOut, overwrite:false});
	TweenLite.to("#text3", 1, {x:110, delay:1.3, ease:Expo.easeOut, overwrite:false});

	//TweenLite.delayedCall(3.5, frame4_animation);
}

function frame4_animation()	{
	
}

function createText(array, sentence, vertSpacing)	{
	var chars = sentence.split('');

	for (i = 0 ; i < chars.length; i++) {
		var character = checkSpecials(chars[i]);
		var newEl =	document.createElement("div");
	    newEl.id = chars[i] + "_" + i;
	   	newEl.className = "pos transparent half-size";
	   	newEl.innerHTML = "<img src='images/" + character + ".png'>";
	   	newEl.style.top = vertSpacing + textTopMargin + 'px';
		newEl.style.left = textLeftMargin + (textHozSpacing * i) + 'px';
	   	var position = document.getElementById('textContainer');
	   	position.appendChild(newEl);
	   	array[i] = newEl;
	}
}

function checkSpecials(obj)	{
	var special;
	switch(obj) {
	    case "<":
	        special = "1";
	        break;
	    case ">":
	        special = "2";
	        break;
	    case "[":
	        special = "3";
	        break;
	    case "]":
	        special = "4";
	        break;
	    case "#":
	        special = "5";
	        break;
	    case "_":
	        special = "6";
	        break;
	    default:
	        special = obj;
	}
	return special;
}

function animateLineOfText(array) {
	for (i = 0; i < array.length; i++) {
	    TweenLite.delayedCall(i * charAppearRate, animateCharacter, [array[i]]);
	}
}

function createCharSet(objId)	{
	var charSet = new Array();
	var totalCharSetDup = totalCharSet.slice(0);
	var finalChar = checkSpecials(objId.slice(0, 1));
	charSetSize = getRandomInt(charSetSizeMin, charSetSizeMax);

	for (i = 0; i < charSetSize; i++) {
		var itemPos = Math.floor(Math.random()*totalCharSetDup.length)
		var item = totalCharSetDup[itemPos];
		totalCharSetDup.splice(itemPos, 1);
		var character = checkSpecials(item);
		if (i == 0)	{
			charSet.push("6");
		}
		else {
			charSet.push(character);
		}
		
	}
	charSet.push(finalChar);
	return charSet;
}

function animateCharacter(obj) {
	var cNodes = obj.childNodes;
	obj.className = "pos opaque half-size";

	var charSet = createCharSet(obj.id);
	for (i = 0; i < charSet.length; i++) {
		TweenLite.delayedCall(i * 0.1, changeCharImage, [cNodes[0], charSet, i]);
	}
}

function changeCharImage(obj, charSet, index)	{
	obj.src = "images/" + charSet[index] + ".png";
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clickthrough_buttonClick() {
	console.log("Exit");
	TweenMax.killAll(true, true, true, true);
	window.open(window.clickTag);
}

window.onload = function() {
  startAd();
};
