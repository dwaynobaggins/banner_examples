'use strict';

/**
 * Run the animation functions.
 */

// if include slider conditional is creating a link between iframe and banner by creating a slider.

Creative.prototype.start = function () {

  this.banner = document.querySelector('.banner-class');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = ['images/branding.png', 'images/f1_text1.png', 'images/f2_text1.png', 'images/f2_text2.png', 'images/f2_text3.png', 'images/f2_text4.png', 'images/f3_text1.png', 'images/cta.png'];

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.bindEvents();

    _this.exportRoot = new lib.lloyds_illustrative_bee_300x250();
    _this.stage = new createjs.Stage(_this.canvas);
    _this.stage.addChild(_this.exportRoot);
    _this.animate();
  });
};

function addScript(src, callback) {
  console.log('addScript');
  var extJavascript = document.createElement('script');
  extJavascript.setAttribute('type', 'text/javascript');
  extJavascript.setAttribute('src', src);
  extJavascript.addEventListener("load", callback);
  document.getElementsByTagName('head')[0].appendChild(extJavascript);
}

/**
 * Create dom elements.
 */
Creative.prototype.createElements = function () {

  this.logo = this.smartObject({
    id: 'LOGO',
    backgroundImage: 'images/branding.png',
    retina: true,
    parent: this.banner
  });

  this.f1Text1 = this.smartObject({
    id: 'F1TEXT1',
    backgroundImage: 'images/f1_text1.png',
    retina: true,
    parent: this.banner
  });

  this.f2Text1 = this.smartObject({
    id: 'F2TEXT1',
    backgroundImage: 'images/f2_text1.png',
    retina: true,
    parent: this.banner
  });

  this.f2Text2 = this.smartObject({
    id: 'F2TEXT2',
    backgroundImage: 'images/f2_text2.png',
    retina: true,
    parent: this.banner
  });

  this.f2Text3 = this.smartObject({
    id: 'F2TEXT3',
    backgroundImage: 'images/f2_text3.png',
    retina: true,
    parent: this.banner
  });

  this.f2Text4 = this.smartObject({
    id: 'F2TEXT4',
    backgroundImage: 'images/f2_text4.png',
    retina: false,
    parent: this.banner
  });

  this.f3Text1 = this.smartObject({
    id: 'F3TEXT1',
    backgroundImage: 'images/f3_text1.png',
    retina: true,
    parent: this.banner
  });

  this.cta = this.smartObject({
    id: 'CTA',
    backgroundImage: 'images/cta.png',
    retina: true,
    parent: this.banner
  });

  this.canvas = this.smartObject({
    type: 'canvas',
    width: this.bannerWidth,
    height: this.bannerHeight,
    parent: this.banner
  });
};

/**
 * Setup initial element states.
 */
Creative.prototype.setup = function () {
  TweenMax.set([this.f1Text1, this.f2Text1, this.f2Text2, this.f2Text3, this.f2Text4, this.f3Text1, this.cta], { autoAlpha: 0 });
};

/**
 * Hide the preloader.
 */
Creative.prototype.hidePreloader = function () {
  TweenMax.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Creative.prototype.animate = function () {

  createjs.Ticker.setFPS(lib.properties.fps);
  createjs.Ticker.addEventListener("tick", this.stage);

  var _this = this;

  this.timeline = new TimelineMax({ repeat: 0 }).addLabel('start', 0).to(this.f1Text1, 1, { autoAlpha: 1 }).to([this.f1Text1, this.canvas], 0.5, { autoAlpha: 0 }, "6").to(this.f2Text1, 1, { autoAlpha: 1 }).to(this.f2Text2, 1, { autoAlpha: 1 }).to(this.f2Text3, 1, { autoAlpha: 1 }).to(this.f2Text4, 1, { autoAlpha: 1 }).to([this.f2Text1, this.f2Text2, this.f2Text3, this.f2Text4], 0.5, { autoAlpha: 0 }, "+=4").to(this.f3Text1, 1, { autoAlpha: 1 }).to(this.cta, 1, { autoAlpha: 1, onComplete: function onComplete() {
      _this.exportRoot.play();
    } }).to(this.canvas, .3, { autoAlpha: 1 });
};