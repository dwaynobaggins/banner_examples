var el = {}; //elements object
var isIOS = (/iPhone|iPad|iPod/i).test(navigator.userAgent);
var isIE9 = (/MSIE 9\./i).test(navigator.userAgent);

function startAd() {
    el.adDiv = document.getElementById("ad");
    el.videoContainer = document.getElementById("video-container");
    el.video = document.getElementById("video");
    el.sdkVideoPlayer = document.getElementById("sdk-video-player");
    el.sdkVideoPlayButton = document.getElementById("sdk-video-play-button");

    el.c_copy1a = document.getElementById('c_copy1a');
    el.c_copy1b = document.getElementById('c_copy1b');

    el.c_copy2a = document.getElementById('c_copy2a');
    el.c_copy2b = document.getElementById('c_copy2b');

    el.c_packshot = document.getElementById('c_packshot');
    el.expandbtn = document.getElementById('expand-button');
    el.discbtn = document.getElementById('discover-button');
    el.buybtn = document.getElementById('buy-button');
    el.btnCont = document.getElementById('btnCont');
    el.e_left = document.getElementById('e_left');
    el.e_right = document.getElementById('e_right');

    el.e_panelTop = document.getElementById('e_panelTop');
    el.e_panelBottom = document.getElementById('e_panelBottom');
    el.e_tcs = document.getElementById('e_tcs');
    el.e_badge = document.getElementById('e_badge');
    // el.e_logo1bg = document.getElementById('e_logo1bg');
    el.e_logo1 = document.getElementById('e_logo1');
    // el.e_logo2bg = document.getElementById('e_logo2bg');
    // el.e_logo2 = document.getElementById('e_logo2');

    el.e_pack = document.getElementById('e_pack');
    el.e_copya = document.getElementById('e_copya');
    el.e_copyb = document.getElementById('e_copyb');

    addEventListeners();

    requestAnimationFrame(loop);

    if (isIOS) {
        centerWebkitVideoControls();
    }

    el.video.addEventListener('ended',myHandler,false);
    function myHandler(e) {
        if(!e) { e = window.event; }

        setTimeout(function(){ //Fix for replay glitch when scrub to end of video
                if(!el.video.paused){
                    el.video.pause();
                    console.log('Video Finished2');
                }

            }, 150);
            pause = 'false';
            console.log('Video Finished');
            el.videoContainer.className = "centered fadeOut";
            el.videoContainer.style.pointerEvents = 'none';
            requestAnimationFrame(loop2);
    }
}

function addEventListeners() {
    document.getElementById("expand-button").addEventListener("click", expand);
    document.getElementById("close-button").addEventListener("click", collapse);
    document.getElementById("clickthrough-button").addEventListener("click", clickthrough);
    document.getElementById("discover-button").addEventListener("click", userActionCounter);
    document.getElementById("buy-button").addEventListener("click", replayVideo);
}

function expand() {
    resetClasses();
    el.adDiv.classList.remove("collapsed");
    el.adDiv.classList.add("expanded");

    el.videoContainer.className = "centered fadeIn";
    //el.e_right.className = "show";
    //el.e_left.className = "show2";
    el.e_badge.className = "fadeIn2";
    document.getElementById('video').play();

    if (isIE9) {
        forceVideoToDisplayInIE9();
    }
}

function forceVideoToDisplayInIE9() {
    el.video.style.height = "1px";
    setTimeout(function() {
        el.video.style.height = "";
    }, 100);
}

function collapse() {
    el.adDiv.classList.remove("expanded");
    el.adDiv.classList.add("collapsed");
    if (el.video) {
        el.video.pause();
    }
    resetClasses();
}

function clickthrough() {
    if (el.video) {
        el.video.pause();
    }
    console.log('ClickThrough');
}

function userActionCounter() {
    console.log('User Action');
}

function replayVideo() {
    console.log('Replay Video');

    resetClasses();

    el.videoContainer.className = "centered fadeIn";
    //el.e_right.className = "show";
    //el.e_left.className = "show2";
    //el.e_badge.className = "fadeIn2";
    document.getElementById('video').play();

    if (isIE9) {
        forceVideoToDisplayInIE9();
    }
}



function centerWebkitVideoControls() {
    document.body.classList.add("ios-center-video-controls");
}

function resetClasses(){
    el.videoContainer.className = "centered";
    el.videoContainer.style.pointerEvents = 'auto';
    el.discbtn.style.pointerEvents = 'none';
    el.buybtn.style.pointerEvents = 'none';
    el.c_copy1a.className = "pos transparent";
    el.c_copy1b.className = "pos transparent";
    el.c_copy2a.className = "pos opaque";
    el.c_copy2b.className = "pos opaque";
    el.c_packshot.className = "pos opaque";
    el.expandbtn.className = "ad_button opaque";
    el.e_right.className = "";
    el.e_left.className = "";
    el.e_badge.className = "";
    // el.e_logo1bg.className = "";
    el.e_logo1.className = "pos";
 	el.e_panelTop.className = "pos transparent";
    el.e_panelBottom.className = "pos transparent";
	    // el.e_logo2bg.className = "";
    // el.e_logo2.className = "pos";
    el.e_tcs.className = "pos transparent";
    el.buybtn.className = "ad_button";
    el.discbtn.className = "ad_button";
    el.e_copya.className ="pos transparent";
    el.e_pack.className = "";
    el.e_copyb.className ="pos transparent";

    tick = 0;
    pause = 'true';
    clearTimeout(timer);
} 

var tick = 0;
var factor = 10; // 1,10,100,1000 for loop of 1 milisecond to 1 second;
var interval = 1000 / factor;
var timer;
var pause = 'false';

function loop() {

timer = setTimeout(function() {
        tick++;
       // console.log(tick);

    switch(tick){
        case .5 * factor :
            el.c_copy1a.className += " fadeInLeft";
            el.c_copy1b.className += " fadeInRight";
        break;
        case 3.0 * factor :
            el.c_copy1a.className += " fadeOut";
            el.c_copy1b.className += " fadeOut";
        break;
        case 3.3 * factor :
            el.c_copy2a.className += " fadeIn";
            el.c_copy2b.className += " fadeIn";
            el.c_packshot.className = "sliderA";
        break;

        case 4.5 * factor :
            el.expandbtn.className += " fadeIn";
            tick = 0;
            pause = 'true';
            clearTimeout(timer);
        break;
        }
        if(pause == 'false'){
            requestAnimationFrame(loop);
            //console.log('Timer Paused');
        }
    
    }, interval);
}

function loop2() {

timer = setTimeout(function() {
        tick++;
       // console.log(tick);

    switch(tick){
        case .5 * factor :
		
			el.e_panelTop.className = "fadeInLeft";
			el.e_right.className = "fadeInRight";
			el.e_panelBottom.className = "fadeInLeft";
			// el.e_logo1bg.className = "hide";
            // el.e_logo1.className += " hide";
            // el.e_logo2bg.className = "show3";
            // el.e_left.className = "hide2";
            // el.e_badge.className +=" hide3";
        break;
        case 1.0 * factor :
            // el.e_logo2.className += " fadeInLeft";
        break;
        case 1.2 * factor :
            el.e_copya.className +=" fadeInLeft";
            el.e_copyb.className +=" fadeInRight";
            el.e_tcs.className += " fadeIn";
            el.e_pack.className = "packAnim";
            el.e_badge.className = "pos fadeIn index";
        break;
        case 1.4 * factor :
            el.btnCont.style.visibility = 'visible';
            el.buybtn.className += " fadeIn";
            el.buybtn.style.pointerEvents = 'auto';
            el.discbtn.className += " fadeIn";
            el.discbtn.style.pointerEvents = 'auto';
            tick = 0;
            pause = 'true';
            clearTimeout(timer);
        break;
        }
        if(pause == 'false'){
            requestAnimationFrame(loop2);
            //console.log('Timer Paused');
        }
    }, interval);
}

window.addEventListener("load", startAd);
