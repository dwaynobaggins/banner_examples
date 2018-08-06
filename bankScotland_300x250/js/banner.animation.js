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
  this.images = ['images/logo.png', 'images/x1.png', 'images/x2.png', 'images/logo2.png', 'images/f1_text1.png', 'images/f2_text1.png', 'images/f3_text1.png', 'images/f4_text1.png', 'images/cta.png', 'images/cta_arr.png', 'images/bg.jpg'];

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
Creative.prototype.createElements = function () {
  this.bg = this.smartObject({
    backgroundImage: 'images/bg.jpg',
    parent: this.banner
  });
  this.f1Text1 = this.smartObject({
    backgroundImage: 'images/f1_text1.png',
    retina: true,
    parent: this.banner
  });
  this.f2Text1 = this.smartObject({
    backgroundImage: 'images/f2_text1.png',
    retina: true,
    parent: this.banner
  });
  this.f3Text1 = this.smartObject({
    backgroundImage: 'images/f3_text1.png',
    retina: true,
    parent: this.banner
  });
  this.blueBG = this.smartObject({
    backgroundColor: '#05286a',
    height: this.bannerHeight,
    width: this.bannerWidth,
    parent: this.banner
  });
  this.f4Text1 = this.smartObject({
    backgroundImage: 'images/f4_text1.png',
    retina: true,
    parent: this.banner
  });
  this.cta = this.smartObject({
    backgroundImage: 'images/cta.png',
    retina: true,
    parent: this.banner
  });
  this.cta_arr = this.smartObject({
    backgroundImage: 'images/cta_arr.png',
    retina: true,
    parent: this.banner
  });
  this.x1 = this.smartObject({
    backgroundImage: 'images/x1.png',
    parent: this.banner
  });
  this.x2 = this.smartObject({
    backgroundImage: 'images/x2.png',
    parent: this.banner
  });
  this.logo = this.smartObject({
    backgroundImage: 'images/logo.png',
    retina: true,
    parent: this.banner
  });
  this.logo2 = this.smartObject({
    backgroundImage: 'images/logo2.png',
    retina: true,
    parent: this.banner
  });
};

/**
 * Setup initial element states.
 */
Creative.prototype.setup = function () {
  this.x1.set({ top: 250, left: 500 });
  this.x2.set({ top: 250, left: -500 });
  this.logo2.set({ autoAlpha: 0, top: -28, scale: 1.6 });
};

/**
 * Hide the preloader.
 */
Creative.prototype.hidePreloader = function () {
  TweenLite.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Creative.prototype.animate = function () {
  var _this = this;

  this.timeline = new TimelineLite({
    id: 'Timeline', hideGlobalTimeline: true
  }).from(this.f1Text1, 1, { autoAlpha: 0 }).to(this.f1Text1, 1, { autoAlpha: 0 }, '+=2').from(this.f2Text1, 1, { autoAlpha: 0 }).to(this.f2Text1, 1, { autoAlpha: 0 }, '+=2').from(this.f3Text1, 1, { autoAlpha: 0 }).to([this.f3Text1, this.logo], 1, { autoAlpha: 0 }, '+=2').from(this.blueBG, 1, { autoAlpha: 0 }).from(this.f4Text1, 1, { autoAlpha: 0 }, '-=.5').to(this.f4Text1, 1, { autoAlpha: 0 }, '+=9').to(this.x1, .8, { top: 76, left: 99 }).to(this.x2, .8, { top: 76, left: 99 }, '-=.8').to(this.blueBG, 1, { backgroundColor: '#005ba2' }).to(this.logo2, 1, { autoAlpha: 1 }, '-=1').to([this.x1, this.x2], .6, { autoAlpha: 0 }, '-=.8').to(this.logo2, 1, { scale: 1.0, top: 0 }, '-=.4').from([this.cta, this.cta_arr], 1, { autoAlpha: 0 }).to(this.cta_arr, .3, { x: 5 }).to(this.cta_arr, .3, { x: 0 }).to(this.cta_arr, .3, { x: 5 }).to(this.cta_arr, .3, { x: 0 });

  // GSDevTools.create();

  this.bgTL = new TimelineLite({}).from(this.bg, 10, { scale: 1.2 });
};