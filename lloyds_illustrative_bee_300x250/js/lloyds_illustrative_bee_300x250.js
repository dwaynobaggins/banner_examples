"use strict";

(function (lib, img, cjs, ss, an) {

	var p; // shortcut to reference prototypes
	lib.webFontTxtInst = {};
	var loadedTypekitCount = 0;
	var loadedGoogleCount = 0;
	var gFontsUpdateCacheList = [];
	var tFontsUpdateCacheList = [];
	lib.ssMetadata = [];

	lib.updateListCache = function (cacheList) {
		for (var i = 0; i < cacheList.length; i++) {
			if (cacheList[i].cacheCanvas) cacheList[i].updateCache();
		}
	};

	lib.addElementsToCache = function (textInst, cacheList) {
		var cur = textInst;
		while (cur != null && cur != exportRoot) {
			if (cacheList.indexOf(cur) != -1) break;
			cur = cur.parent;
		}
		if (cur != exportRoot) {
			var cur2 = textInst;
			var index = cacheList.indexOf(cur);
			while (cur2 != null && cur2 != cur) {
				cacheList.splice(index, 0, cur2);
				cur2 = cur2.parent;
				index++;
			}
		} else {
			cur = textInst;
			while (cur != null && cur != exportRoot) {
				cacheList.push(cur);
				cur = cur.parent;
			}
		}
	};

	lib.gfontAvailable = function (family, totalGoogleCount) {
		lib.properties.webfonts[family] = true;
		var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
		for (var f = 0; f < txtInst.length; ++f) {
			lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);
		}loadedGoogleCount++;
		if (loadedGoogleCount == totalGoogleCount) {
			lib.updateListCache(gFontsUpdateCacheList);
		}
	};

	lib.tfontAvailable = function (family, totalTypekitCount) {
		lib.properties.webfonts[family] = true;
		var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
		for (var f = 0; f < txtInst.length; ++f) {
			lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);
		}loadedTypekitCount++;
		if (loadedTypekitCount == totalTypekitCount) {
			lib.updateListCache(tFontsUpdateCacheList);
		}
	};
	// symbols:
	// helper functions:

	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}

	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
	}

	(lib.stick = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// FlashAICB
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#78B536").ss(4.2).p("Ai9DYIgZgaQgNgMAAgRQAAgQANgMIFblcQAMgLARAAQARAAALALIAaAaQAMAMAAARQAAAQgMAMIlcFcQgLALgRAAQgRAAgMgLg");
		this.shape.setTransform(82.4, 258, 1, 1, 7.8);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f().s("#78B536").ss(4.2).p("AkUEvIgagaQgLgMAAgRQAAgQALgMIIJoJQAMgMARAAQARAAALAMIAaAaQAMAMAAAQQAAARgMAMIoJIJQgMALgQAAQgRAAgMgLg");
		this.shape_1.setTransform(68.5, 239.8, 1, 1, 7.8);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f().s("#78B536").ss(4.2).p("Al6GWIgbgcQgMgLAAgQQAAgQAMgMILZrYQALgMAQAAQAQAAAMAMIAbAbQAMAMAAAQQAAAQgMALIrZLZQgLAMgQAAQgQAAgMgMg");
		this.shape_2.setTransform(54.7, 221.5, 1, 1, 7.8);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f().s("#78B536").ss(4.2).p("AkTEuIgagaQgMgMAAgQQAAgRAMgMIIJoJQALgLARAAQARAAAMALIAZAbQAMALAAARQAAARgMAMIoJIIQgLAMgRAAQgRAAgLgMg");
		this.shape_3.setTransform(40.9, 203.3, 1, 1, 7.8);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f().s("#78B536").ss(4.2).p("Ai9DYIgagaQgLgMAAgQQAAgRALgMIFclcQAMgLAQAAQARAAAMALIAaAaQALAMAAARQAAAQgLAMIlcFcQgMALgQAAQgRAAgMgLg");
		this.shape_4.setTransform(27, 185, 1, 1, 7.8);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#78B536").ss(4.2).p("A2s2sMAtZAtZ");
		this.shape_5.setTransform(-100.5, 16.4, 1, 1, 7.8);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#78B536").ss(4.2).p("ACfCgQhCBChdAAQhcAAhChCQhDhDAAhdQAAhcBDhDQBChCBcAAQBdAABCBCQBDBDAABcQAABdhDBDg");
		this.shape_6.setTransform(-239.4, -164.3, 1, 1, 7.8);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
	}).prototype = getMCSymbolPrototype(lib.stick, new cjs.Rectangle(-264, -188.9, 373.4, 480.6), null);

	(lib.drip = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#BAC390").ss(5, 1).p("AGQEVQAAClh1B2Qh2B1ilAAQilAAh1h1Qh1h2AAilQAAiKDImYQA+h/BLiLQAmhGAYgsIA/ByQBLCLA+B/QDIGYAACKg");
		this.shape.setTransform(-1.5, 1.7, 1, 1, 0, 0, 0, -1.5, -63.3);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	}).prototype = getMCSymbolPrototype(lib.drip, new cjs.Rectangle(-42.5, -11.7, 85, 147), null);

	(lib.bee = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, { start: 0 });

		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#FFFFFF").ss(5, 1).p("AEMBQQAggVAagfQA8hMgMhgQgLhhhNg8QhMg8hgAMQhhALg7BMIkuF/QgkAvAGA6QAHA7AvAlQAlAdAvABQAtACAmgZg");
		this.shape.setTransform(55.4, 81.9);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#074731").s().p("AjsFgQgvgBglgdQgvglgHg7QgGg6AkgvIEul/QA7hMBhgLQBggMBMA8QBNA8ALBhQAMBgg8BMQgaAfggAVImlD5QgkAXgqAAIgFAAg");
		this.shape_1.setTransform(55.4, 81.9);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f().s("#FFFFFF").ss(5, 1).p("AkLBQQghgVgYgfQg8hMALhgQAMhhBMg8QBMg8BhAMQBgALA7BMIEuF/QAlAvgHA6QgHA7gvAlQgkAdgvABQguACgmgZg");
		this.shape_2.setTransform(-55.4, 81.9);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#074731").s().p("ACaFJImlj5QghgVgYgfQg8hMALhgQAMhhBMg8QBMg8BhAMQBgALA7BMIEuF/QAlAvgHA6QgHA7gvAlQgkAdgvABIgGAAQgqAAgkgXg");
		this.shape_3.setTransform(-55.4, 81.9);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f().s("#FFFFFF").ss(5, 1).p("AENAUQhqgdhzgHQitgMiQAu");
		this.shape_4.setTransform(0.1, 77.6);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#074731").s().p("AkMASQCPguCtAMQByAHBsAdg");
		this.shape_5.setTransform(0.1, 77.6);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#FFFFFF").ss(5, 1).p("AEiAXQhqggh4gJQjDgQieA4");
		this.shape_6.setTransform(0.1, 59.1);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#074731").s().p("AkhAWQCeg4DDAQQB4AJBqAgg");
		this.shape_7.setTransform(0.1, 59.1);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#FFFFFF").ss(5, 1).p("AE2AaQhQgch2gPQjrgdi6BI");
		this.shape_8.setTransform(0.1, 40.6);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#074731").s().p("Ak1AaQC6hIDrAdQB2APBQAcg");
		this.shape_9.setTransform(0.1, 40.6);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f().s("#FFFFFF").ss(5, 1).p("AEWAVQhrgeh0gIQi2gNiWAy");
		this.shape_10.setTransform(0.2, 22.1);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#074731").s().p("AkVAUQCWgyC2ANQB0AIBrAeg");
		this.shape_11.setTransform(0.2, 22.1);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f().s("#FFFFFF").ss(5, 1).p("ADohzQAABghEBDQhEBEhgAAQhfAAhEhEQhEhDAAhgg");
		this.shape_12.setTransform(0.1, 125.7);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#074731").s().p("AijAwQhEhDAAhgIHPAAQAABghEBDQhEBEhgAAQhfAAhEhEg");
		this.shape_13.setTransform(0.1, 125.7);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f().s("#FFFFFF").ss(5, 1).p("AgshDIABASQACAXAHATQAVA+A5AN");
		this.shape_14.setTransform(15.2, 141.9);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#074731").s().p("AgigHQgHgTgCgXIAAgSIBYCHQg6gNgVg+g");
		this.shape_15.setTransform(15.2, 141.9);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f().s("#FFFFFF").ss(5, 1).p("AAshDIAAASQgCAXgHATQgUA+g6AN");
		this.shape_16.setTransform(-15, 141.9);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#074731").s().p("AAshDIAAASQgCAXgHATQgUA+g6ANg");
		this.shape_17.setTransform(-15, 141.9);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f().s("#FFFFFF").ss(5, 1).p("Ak3i6IABAcIBPLZIHPAAIBPrZIABgcQAAh0hLhZQhKhXhvgTIgmhCQgEgHgJAAQgHAAgEAHIgmBBQhwAShLBYQhMBZAAB1g");
		this.shape_18.setTransform(0.1, 57.1);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#074731").s().p("AjnI7IhPrYIgBgcQAAh2BMhYQBLhZBwgSIAmhAQAEgIAHAAQAJAAAEAIIAmBBQBvATBKBYQBLBYAAB1IgBAcIhPLYg");
		this.shape_19.setTransform(0.1, 57.1);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f().s("#FFFFFF").ss(5, 1).p("AEHgTQAYgeAOgmQAhhbgphYQgphYhbghQhbghhYApQhYApghBbIinHKQgUA4AZA1QAZA2A4AUQAsAQAtgNQAsgNAcgkg");
		this.shape_20.setTransform(45.4, 74.7);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#074731").s().p("AjcGKQg4gUgZg2QgZg1AUg4ICnnKQAhhbBYgpQBYgpBbAhQBbAhApBYQApBYghBbQgOAmgYAeIlCFvQgcAkgsANQgVAGgUAAQgYAAgYgJg");
		this.shape_21.setTransform(45.4, 74.7);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f().s("#FFFFFF").ss(5, 1).p("AkGgTQgZgegNgmQghhbAphYQAphYBbghQBbghBXApQBYApAhBbICnHKQAVA4gZA1QgZA2g4AUQgsAQgtgNQgsgNgcgkg");
		this.shape_22.setTransform(-45.4, 74.7);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#074731").s().p("ACEGNQgsgNgcgkIlClvQgZgegNgmQghhbAphYQAphYBbghQBbghBXApQBYApAhBbICnHKQAVA4gZA1QgZA2g4AUQgYAJgZAAQgTAAgVgGg");
		this.shape_23.setTransform(-45.4, 74.7);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).to({ state: [{ t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }] }, 3).wait(3));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-105.2, -22.2, 200.7, 173.4);

	// stage content:
	(lib.lloyds_illustrative_bee_300x250 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// timeline functions:
		this.frame_94 = function () {
			this.stop();
		};
		this.frame_199 = function () {
			this.stop();
			this.bee.gotoAndStop("start");
		};

		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(105).call(this.frame_199).wait(1));

		// bee
		this.bee = new lib.bee();
		this.bee.parent = this;
		this.bee.setTransform(394, 387, 0.33, 0.33, 171.7, 0, 0, -723.8, -42.3);
		this.bee._off = true;

		this.timeline.addTween(cjs.Tween.get(this.bee).wait(95).to({ _off: false }, 0).to({ regX: -723.9, regY: -42.1, scaleX: 0.33, scaleY: 0.33, rotation: 238.2, x: 296.8, y: 323.2 }, 55, cjs.Ease.get(0.2)).wait(50));

		// bee
		this.instance = new lib.bee();
		this.instance.parent = this;
		this.instance.setTransform(320.3, 68.2, 0.33, 0.33, 90, 0, 0, 4.7, 150.1);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({ _off: false }, 0).wait(1).to({ regX: 0, regY: 74.3, rotation: 89.6, x: 343.5, y: 66.6 }, 0).wait(1).to({ rotation: 88.8, x: 340.2, y: 66.7 }, 0).wait(1).to({ rotation: 87.7, x: 336.2 }, 0).wait(1).to({ rotation: 86.5, x: 331.7, y: 66.8 }, 0).wait(1).to({ rotation: 85.3, x: 326.1 }, 0).wait(1).to({ rotation: 84, x: 321.3, y: 66.9 }, 0).wait(1).to({ rotation: 82.7, x: 316.6, y: 67 }, 0).wait(1).to({ rotation: 81.5, x: 311.8, y: 67.1 }, 0).wait(1).to({ rotation: 80.3, x: 307.2, y: 67.3 }, 0).wait(1).to({ rotation: 79.1, x: 302.8, y: 67.6 }, 0).wait(1).to({ rotation: 78, x: 298.7, y: 67.9 }, 0).wait(1).to({ rotation: 77, x: 294.8, y: 68.2 }, 0).wait(1).to({ rotation: 76.1, x: 291.4, y: 68.5 }, 0).wait(1).to({ rotation: 75.3, x: 288.4, y: 68.8 }, 0).wait(1).to({ rotation: 74.7, x: 285.8, y: 69.1 }, 0).wait(1).to({ rotation: 74.2, x: 283.9, y: 69.3 }, 0).wait(1).to({ rotation: 73.7, x: 282.1, y: 69.6 }, 0).wait(1).to({ rotation: 73.1, x: 279.9, y: 69.9 }, 0).wait(1).to({ rotation: 72.6, x: 277.8, y: 70.1 }, 0).wait(1).to({ rotation: 72.1, x: 275.7, y: 70.5 }, 0).wait(1).to({ rotation: 71.5, x: 273.5, y: 70.8 }, 0).wait(1).to({ rotation: 71, x: 271.4, y: 71.2 }, 0).wait(1).to({ rotation: 70.4, x: 269.2, y: 71.6 }, 0).wait(1).to({ rotation: 69.9, x: 267, y: 71.9 }, 0).wait(1).to({ rotation: 69.3, x: 264.8, y: 72.4 }, 0).wait(1).to({ rotation: 68.8, x: 262.5, y: 72.8 }, 0).wait(1).to({ rotation: 68.2, x: 260.3, y: 73.3 }, 0).wait(1).to({ rotation: 67.6, x: 258, y: 73.8 }, 0).wait(1).to({ rotation: 67.1, x: 255.7, y: 74.3 }, 0).wait(1).to({ rotation: 66.5, x: 253.3, y: 74.9 }, 0).wait(1).to({ rotation: 65.9, x: 251, y: 75.4 }, 0).wait(1).to({ rotation: 65.3, x: 248.6, y: 76.1 }, 0).wait(1).to({ rotation: 64.7, x: 246.1, y: 76.7 }, 0).wait(1).to({ rotation: 64.1, x: 243.6, y: 77.4 }, 0).wait(1).to({ rotation: 63.5, x: 241.1, y: 78.1 }, 0).wait(1).to({ rotation: 62.9, x: 238.6, y: 78.9 }, 0).wait(1).to({ rotation: 62.2, x: 236, y: 79.7 }, 0).wait(1).to({ rotation: 61.6, x: 233.4, y: 80.5 }, 0).wait(1).to({ rotation: 60.9, x: 230.7, y: 81.4 }, 0).wait(1).to({ rotation: 60.2, x: 228, y: 82.4 }, 0).wait(1).to({ rotation: 59.5, x: 225.2, y: 83.4 }, 0).wait(1).to({ rotation: 58.8, x: 222.3, y: 84.5 }, 0).wait(1).to({ rotation: 58.1, x: 219.4, y: 85.7 }, 0).wait(1).to({ rotation: 57.4, x: 216.3, y: 86.9 }, 0).wait(1).to({ rotation: 56.6, x: 213.3, y: 88.3 }, 0).wait(1).to({ rotation: 55.8, x: 210.1, y: 89.7 }, 0).wait(1).to({ rotation: 55, x: 206.8, y: 91.3 }, 0).wait(1).to({ rotation: 54.1, x: 203.4, y: 92.9 }, 0).wait(1).to({ rotation: 53.2, x: 199.8, y: 94.8 }, 0).wait(1).to({ rotation: 52.3, x: 196.1, y: 96.8 }, 0).wait(1).to({ rotation: 51.3, x: 192.1, y: 99.1 }, 0).wait(1).to({ rotation: 50.2, x: 187.9, y: 101.7 }, 0).wait(1).to({ rotation: 49, x: 183.2, y: 104.7 }, 0).wait(1).to({ rotation: 47.6, x: 178, y: 108.2 }, 0).wait(1).to({ rotation: 45.9, x: 171.8, y: 112.9 }, 0).wait(1).to({ rotation: 43.7, x: 163.8, y: 119.3 }, 0).wait(1).to({ rotation: 41.4, x: 156, y: 126.5 }, 0).wait(1).to({ rotation: 39.1, x: 148.3, y: 134.3 }, 0).wait(1).to({ rotation: 36.7, x: 140.8, y: 142.8 }, 0).wait(1).to({ rotation: 34.1, x: 133.6, y: 152.2 }, 0).wait(1).to({ rotation: 31.4, x: 126.4, y: 162.6 }, 0).wait(1).to({ rotation: 28.4, x: 119.1, y: 174.6 }, 0).wait(1).to({ rotation: 24.8, x: 111.5, y: 189.6 }, 0).wait(1).to({ rotation: 21, x: 104.1, y: 207.5 }, 0).wait(1).to({ rotation: 17.5, x: 98.2, y: 224.8 }, 0).wait(1).to({ rotation: 14.3, x: 93.8, y: 240.8 }, 0).wait(1).to({ rotation: 11.3, x: 90.4, y: 255.7 }, 0).wait(1).to({ rotation: 8.3, x: 87.7, y: 269.8 }, 0).wait(1).to({ rotation: 5.5, x: 85.5, y: 283.3 }, 0).wait(1).to({ rotation: 2.7, x: 83.9, y: 296.3 }, 0).wait(1).to({ regX: -4.7, regY: 64.9, rotation: 0, x: 84.1, y: 334 }, 0).to({ _off: true }, 1).wait(105));

		// drip
		this.instance_1 = new lib.drip();
		this.instance_1.parent = this;
		this.instance_1.setTransform(86.1, 138, 0.063, 0.062, 0, 0, 0, 0.8, 0);
		this.instance_1.alpha = 0;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ regX: 1.6, scaleX: 0.06, scaleY: 0.06, alpha: 1 }, 4, cjs.Ease.get(-1)).to({ regX: 1.2, scaleX: 0.24, scaleY: 0.26, y: 138.1 }, 56).to({ regX: 1.4, regY: 0.5, scaleX: 0.26, scaleY: 0.3, y: 140.1 }, 4, cjs.Ease.get(-1)).wait(1).to({ regX: 0.4, regY: 0.4, x: 85.7, y: 140 }, 0).wait(1).to({ regX: 0, regY: 65, x: 85.5, y: 160.1 }, 0).wait(1).to({ scaleX: 0.26, scaleY: 0.3, y: 161.6 }, 0).wait(1).to({ scaleX: 0.26, scaleY: 0.31, y: 163.5 }, 0).wait(1).to({ scaleX: 0.26, scaleY: 0.31, x: 85.4, y: 165.8 }, 0).wait(1).to({ scaleX: 0.27, scaleY: 0.31, x: 85.3, y: 168.6 }, 0).wait(1).to({ scaleX: 0.27, scaleY: 0.31, x: 85.2, y: 171.7 }, 0).wait(1).to({ scaleX: 0.27, scaleY: 0.31, y: 175.2 }, 0).wait(1).to({ scaleX: 0.27, scaleY: 0.32, x: 85.1, y: 179 }, 0).wait(1).to({ scaleX: 0.27, scaleY: 0.32, x: 84.9, y: 183.3 }, 0).wait(1).to({ scaleX: 0.28, scaleY: 0.32, x: 84.8, y: 188 }, 0).wait(1).to({ scaleX: 0.28, scaleY: 0.33, x: 84.7, y: 193.3 }, 0).wait(1).to({ scaleX: 0.28, scaleY: 0.33, x: 84.5, y: 199.2 }, 0).wait(1).to({ scaleX: 0.29, scaleY: 0.34, x: 84.4, y: 206 }, 0).wait(1).to({ scaleX: 0.29, scaleY: 0.34, x: 84.2, y: 213.9 }, 0).wait(1).to({ scaleX: 0.3, scaleY: 0.35, x: 83.9, y: 223.8 }, 0).wait(1).to({ scaleX: 0.31, scaleY: 0.36, x: 83.6, y: 237.8 }, 0).wait(1).to({ scaleX: 0.32, scaleY: 0.38, x: 82.8, y: 268.2 }, 0).wait(1).to({ scaleX: 0.36, scaleY: 0.43, x: 81.3, y: 327.3 }, 0).wait(1).to({ scaleX: 0.38, scaleY: 0.46, x: 80.2, y: 369.8 }, 0).wait(1).to({ regX: 0.2, regY: 0.1, scaleX: 0.4, scaleY: 0.48, x: 79.7, y: 366.1 }, 0).to({ _off: true }, 1).wait(114));

		// stick
		this.instance_2 = new lib.stick();
		this.instance_2.parent = this;
		this.instance_2.setTransform(35.4, 90.2, 0.48, 0.48, -28, 0, 0, 1.9, 139.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ _off: true }, 95).wait(105));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-1.3, 87.5, 451.4, 287.6);
	// library properties:
	lib.properties = {
		width: 300,
		height: 250,
		fps: 30,
		color: "#004531",
		opacity: 1.00,
		webfonts: {},
		manifest: [],
		preloads: []
	};
})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib, images, createjs, ss, AdobeAn;