document.body.onload = onReady();
//var staggerInterval
function onReady() {

	TweenLite.set("#bg",{opacity:0});
    TweenLite.set("#kate_bg",{scale:1.14});
    TweenLite.set("#arrows",{opacity:0, scale:1.14});
    TweenLite.set("#title",{opacity:0.5});
    
    TweenLite.set("#title1",{opacity:1});
    TweenLite.set("#title2",{opacity:1});
    TweenLite.set("#title3",{opacity:1});
    TweenLite.set("#title_crown",{opacity:1});
    
    TweenLite.set("#iphone",{opacity:0});
    TweenLite.set("#logoRimmel",{opacity:1});
    TweenLite.set("#GTRL_app",{opacity:0});
	TweenLite.set("#endFrameText", {opacity:0});
	TweenLite.set("#txt_1", {opacity:0,y:25});
	TweenLite.set("#txt_2", {opacity:0,y:25});
	TweenLite.set("#txt_3", {opacity:0,y:25});

            
	
//	document.getElementsByClassName("bannerClick")[0].addEventListener("mouseover", onOver);
//	document.getElementsByClassName("bannerClick")[0].addEventListener("mouseout", onOut);
	document.getElementById("bannerClick").addEventListener("click", exit);
	
	startAnimation();
	
}



function startAnimation() {
	document.getElementById("banner").classList.remove("hide");
    
	TweenLite.to("#kate_bg", 1,{scale:1, y:-1, ease:Power1.easeInOut,rotation:0.01});
	
	//MAIN TEXT IN
	
	var tl = new TimelineLite({delay: 0.5});
    
     tl.to("#title1", 0.5,{x:245, y:-35, opacity:1, ease:Expo.easeOut}, "-=0.1")
        .to("#title_crown", 0.5,{x:44, y:107, opacity:1, ease:Expo.easeOut}, "-=0.2")
        .to("#title2", 0.5,{x:-178, y:50, opacity:1, ease:Expo.easeOut}, "-=0.3")
        .to("#title3", 0.5,{x:236, y:55 , opacity:1, ease:Expo.easeOut}, "-=0.3")
      
        .to("#arrows", 0.2,{scale:1, opacity:1, ease:Power1.easeInOut}, "-=0.1")
        .to("#arrows", 0.2,{scale:1.5, y:-20, opacity:1, ease:Power1.easeInOut}, "-=0.1")
        .to("#arrows", 0.2,{scale:1, y:0, opacity:1, ease:Power1.easeInOut}, "-=0.1")
      
        .to("#bg", 1,{opacity:1, ease:Expo.easeOut}, "+=1.0")

        .to("#iphone", 0.5,{y:0, opacity:1, ease:Expo.easeOut}, "-=0.1")
       // .to("#txt_1", 0.5,{y:0, opacity:1, ease:Expo.easeOut}, "-=0.1")
        .to(["#txt_1", "#txt_3", "#txt_2", "#GTRL_app"], 0.5,{y:0, opacity:1, ease:Expo.easeOut, onComplete:MainTweenDone}, "-=0.1")
    
        // .to("#iphone", 0.3,{rotation:4, x:20, y:-2, opacity:1, ease:Expo.easeOut})
        // .to("#iphone", 0.3,{rotation:0, x:0, y:0, opacity:1, ease:Bounce.easeOut})
		
        ;
}

function MainTweenDone() {
   
    var shakeTween = function(repeatCount){
       var max = 5;
       var min = -5;
       // TweenMax.to("#iphone", 0.15,{repeat:repeatCount-1, rotation:5, transformOrigin:"90px 156px", x:Math.floor(Math.random() * (max - min + 2) + min), delay:.1});
       TweenMax.to("#iphone", 0.15,{repeat:repeatCount-1, rotation:5, transformOrigin:"90px 156px", delay:.1});
       TweenMax.to("#iphone", 0.15,{y:0, x:0, rotation:0, delay:(repeatCount+1) * .1});
    }

    shakeTween(5);
}

function exit() {
	console.log("Exit")
	TweenMax.killAll(true, true, true, true);
	window.open(window.clickTag);
}


//function randomInteger(min, max){
//	return Math.floor(Math.random() * (1 + max - min) + min);
//}