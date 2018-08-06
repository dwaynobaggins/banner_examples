'use strict';

/**
 * Run the animation functions.
 */

Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = ['images/bg.jpg', 'images/logo.png', 'images/text1.png', 'images/text2.png', 'images/text3.png', 'images/cta.png', 'images/glint.png'];

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
Banner.prototype.createElements = function () {

  this.bg = this.smartObject({
    backgroundImage: 'images/bg.jpg',
    retina: true,
    parent: this.banner
  });

  this.logo = this.smartObject({
    backgroundImage: 'images/logo.png',
    retina: true,
    parent: this.banner
  });

  this.text1 = this.smartObject({
    backgroundImage: 'images/text1.png',
    retina: true,
    parent: this.banner
  });

  this.text2 = this.smartObject({
    backgroundImage: 'images/text2.png',
    retina: true,
    parent: this.banner
  });

  this.text3 = this.smartObject({
    backgroundImage: 'images/text3.png',
    retina: true,
    parent: this.banner
  });

  this.cta = this.smartObject({
    backgroundImage: 'images/cta.png',
    retina: true,
    parent: this.banner
  });

  this.ctaShineDiv = this.smartObject({
    // backgroundImage: 'images/glint.png'
    type: 'div',
    parent: this.banner
  });

  this.ctaShine = this.smartObject({
    backgroundImage: 'images/glint.png',
    retina: true,
    type: 'div',
    parent: this.ctaShineDiv
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {

  this.ctaShineDiv.set({ width: 113, height: 21, x: 132, y: 166, overflow: 'hidden' });
  this.ctaShine.set({ x: -100 });
};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function () {
  TweenLite.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function () {
  var _this = this;

  function loop() {
    // _this.timeline.gotoAndPlay('start');
  }

  this.timeline = new TimelineLite({ onComplete: loop }).addLabel('start', 0)
  // .add(TweenLite.from(this.logo, 1, { autoAlpha: 0,  delay: 0, ease: Elastic.easeOut }))
  // .add(TweenLite.from(this.text1, 1, { autoAlpha: 0,  delay: 1, ease: Elastic.easeOut }));

  .delay(1.5).staggerFrom([this.text1, this.text2, this.text3], 1, {
    opacity: 0,
    y: 5,
    delay: .5
  }, 1).from(this.cta, 1, {
    opacity: 0,
    delay: 1
  }).to(this.ctaShine, 1, {
    x: 150
  });
};