'use strict';

/**
 * Run the animation functions.
 */

Banner.prototype.start = function () {

  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = ['images/halifax-logo.svg', 'images/visa-logo.png',
  // 'images/sprite.png',
  'images/sprite-sheet.png', 'images/sprite-sheet2.png',
  // 'images/sprite2.png',
  'images/bg.jpg', 'images/copy1.png', 'images/darkBlueArrow.svg', 'images/lightBlueArrow.svg', 'images/f2_text1.png', 'images/f2_text2.png', 'images/darkBlueArrow2.svg', 'images/lightBlueArrow2.svg', 'images/legals.png', 'images/end_cta.png', 'images/end_text1.png', 'images/x.svg'];

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
    _this.previewControls();
  });
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function () {

  this.bg = this.smartObject({
    id: 'BG',
    backgroundImage: 'images/bg.jpg',
    width: this.bannerWidth,
    height: this.bannerHeight,
    parent: this.banner
  });

  this.spriteContainer = this.smartObject({
    id: 'SPRITE-CONTAINER',
    height: 139,
    width: 139,
    overflow: 'hidden',
    left: 'none',
    parent: this.banner
  });

  this.sprite = this.smartObject({
    id: 'SPRITE',
    backgroundImage: 'images/sprite-sheet.png',
    left: 'none',
    backgroundPosition: '0px 139px',
    parent: this.spriteContainer
  });

  this.copy1 = this.smartObject({
    id: 'COPY1',
    backgroundImage: 'images/copy1.png',
    parent: this.banner
  });

  this.blueArrow = this.smartObject({
    id: 'BLUE-ARROW',
    backgroundImage: 'images/darkBlueArrow.svg',
    parent: this.banner
  });

  this.lightArrow = this.smartObject({
    id: 'LIGHT-ARROW',
    backgroundImage: 'images/lightBlueArrow.svg',
    parent: this.banner
  });

  this.blueArrow2 = this.smartObject({
    id: 'BLUE-ARROW2',
    backgroundImage: 'images/darkBlueArrow2.svg',
    parent: this.banner
  });

  this.lightArrow2 = this.smartObject({
    id: 'LIGHT-ARROW2',
    backgroundImage: 'images/lightBlueArrow2.svg',
    parent: this.banner
  });

  //FRAME 2

  this.f2Text1 = this.smartObject({
    id: 'F2-TEXT1',
    backgroundImage: 'images/f2_text1.png',
    parent: this.banner
  });

  this.f2Text2 = this.smartObject({
    id: 'F2-TEXT2',
    backgroundImage: 'images/f2_text2.png',
    parent: this.banner
  });

  // END FRAME

  this.endFrameBg = this.smartObject({
    id: 'End-BG',
    backgroundColor: '#00a8e7',
    width: this.bannerWidth,
    height: this.bannerHeight,
    parent: this.banner
  });

  /*this.xEnd = this.smartObject({
    id: 'X-END',
    backgroundImage: 'images/x.svg',
    parent: this.banner
  });*/

  this.endText1 = this.smartObject({
    id: 'END-TEXT1',
    backgroundImage: 'images/end_text1.png',
    parent: this.banner
  });

  this.legals = this.smartObject({
    id: 'LEGALS',
    backgroundImage: 'images/legals.png',
    zIndex: 5,
    parent: this.banner
  });

  this.endCta = this.smartObject({
    id: 'END-CTA',
    backgroundImage: 'images/end_cta.png',
    parent: this.banner
  });

  this.visaLogo = this.smartObject({
    id: 'VISA-LOGO',
    backgroundImage: 'images/visa-logo.png',
    zIndex: 2,
    parent: this.banner
  });

  this.halifaxLogo = this.smartObject({
    id: 'HALIFAX-LOGO',
    backgroundImage: 'images/halifax-logo.svg',
    width: 77,
    height: 41,
    top: 'none',
    left: 'none',
    parent: this.banner
  });

  this.halifaxLogoEndFrame = this.smartObject({
    id: 'HALIFAX-LOGO-END-FRAME',
    backgroundImage: 'images/halifax-logo.svg',
    width: 77,
    height: 41,
    top: 'none',
    left: 'none',
    zIndex: 3,
    parent: this.banner
  });

  this.sprite2 = this.smartObject({
    id: 'SPRITE2',
    backgroundImage: 'images/sprite-sheet2.png',
    zIndex: 10,
    backgroundPosition: '0px 180px',
    parent: this.banner
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  //FIRST SPRITE
  //HOW MANY FRAMES DOES THE SPRITE HAVE:
  this.spriteFrame = 31;

  //FIND THE HEIGHT AND WIDTH OF THE SPRITE:
  this.spriteHeight = parseInt(this.sprite.style.height, 10);
  this.spriteWidth = parseInt(this.sprite.style.width, 10);
  this.spriteContainer.set({ right: -4, top: 41 });

  //SECOND SPRITE
  //HOW MANY FRAMES DOES THE SPRITE HAVE:
  this.spriteFrame2 = 22;
  this.sprite2.set({ top: 32, left: -60 });
  //FIND THE HEIGHT AND WIDTH OF THE SPRITE:
  this.spriteHeight2 = parseInt(this.sprite2.style.height, 10);
  this.spriteWidth2 = parseInt(this.sprite2.style.width, 10);
  // this.spriteContainer2.set({ bottom: 0});
  this.arrowHeight = parseInt(this.blueArrow.style.height, 10);
  this.arrowWidth = parseInt(this.blueArrow.style.width, 10);
  this.blueArrow.set({ top: '-' + this.arrowHeight });
  this.lightArrow.set({ top: '-' + this.arrowHeight });
  this.blueArrow2.set({ top: '-' + this.arrowHeight });
  this.lightArrow2.set({ top: '-' + this.arrowHeight });
  //this.xEnd.set({ top: '-68%', left: '-17%' })
  this.xEnd = document.getElementById('X-END');
  TweenLite.set(this.xEnd, { transformOrigin: "center center" });
  this.halifaxLogo.set({ bottom: 20, right: 19 });
  this.halifaxLogoEndFrame.set({ bottom: 20, right: 19 });
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

  this.secondFrameDissapear = [this.f2Text1, this.f2Text2, this.halifaxLogo, this.visaLogo];
  this.endFrameAppear = [this.halifaxLogoEndFrame, this.endText1, this.endCta];

  this.timeline = new TimelineMax({ paused: false, onUpdate: function onUpdate() {
      if (_this.slider) {
        _this.slider.value = this.totalProgress() * 100;
        _this.timer.value = this.time();
      }
    } }).to(this.sprite, 2, { backgroundPosition: '0px -' + this.spriteHeight / this.spriteFrame * (this.spriteFrame - 0.95) + 'px', ease: SteppedEase.config(this.spriteFrame) }, 'start')
  //.to(this.sprite, 1, { x: '-=5' }, 1.4)
  .to(this.blueArrow, 1.5, { y: '+=35', ease: Elastic.easeOut, z: 0.1 }, 'start+=0.6').from(this.copy1, 0.4, { scale: 0, transformOrigin: '35% 35%' }, 'start+=2').to(this.blueArrow, 1, { y: '+=' + (this.arrowHeight - 35), ease: Elastic.easeIn.config(1, 1) }, '+=0.5').to(this.legals, 0.4, { autoAlpha: 0 }).to(this.lightArrow, 1.5, { y: '+=35', ease: Elastic.easeOut }).staggerFrom([this.f2Text1, this.f2Text2], 0.5, { autoAlpha: 0 }, 0.5, 'secondFrame-=0.5').to(this.secondFrameDissapear, 0.5, { autoAlpha: 0 }, 'secondFrame+=8').staggerTo([this.lightArrow, this.blueArrow2], 1, { y: '+=' + (this.arrowHeight - 35), ease: Elastic.easeIn.config(1, 1) }, 0.3, '-=0.5').from(this.xEnd, 0.75, { autoAlpha: 0 }, 'endFrame').from(this.endFrameBg, 0.5, { autoAlpha: 0 }, 'endFrame').to(this.legals, 0.4, { autoAlpha: 1 }, 'endFrame').to(this.xEnd, 0.75, { scale: 6.5, ease: Back.easeOut }, 'endFrame+=0.25').from(this.endFrameAppear, 0.5, { autoAlpha: 0 }, 'endFrame+=0.4').to(this.visaLogo, 0.5, { autoAlpha: 1 }, 'endFrame+=0.4').from(this.sprite2, 0.5, { autoAlpha: 0 }).to(this.sprite2, 2, { backgroundPosition: '0px -' + this.spriteHeight2 / this.spriteFrame2 * (this.spriteFrame2 - 0.96) + 'px', ease: SteppedEase.config(this.spriteFrame2 - 1) }, '-=0.4');
};

Banner.prototype.previewControls = function () {
  var _this = this;
  if (this.slider) {
    console.log("pulling from inside iframe");
    this.pauseBtn.addEventListener('click', function () {
      return _this.timeline.pause();
    });
    this.playBtn.addEventListener('click', function () {
      return _this.timeline.play();
    });
    this.slider.addEventListener('input', function () {
      _this.timeline.totalProgress(this.value / 100);
      _this.timeline.pause();
    });
  }
};