/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	// prepare objects to tween


	requestAnimationFrame(animate);

	function animate(time) {
		requestAnimationFrame(animate);
		TWEEN.update(time);
	}

	var i = 0,
		len = 1e5,
		objects = [];

	for (; i < len; i += 1) {
		objects[i] = {property: 0};
	}

	function test() {

		for (i = 0; i < len; i += 1) {
			new TWEEN.Tween(objects[i])
				.to({ property: 20 }, 20e3)
				// .onUpdate(function() {
				// 	console.log(this.property);
				// })
				.start();

		}

/*
		 setInterval(function () {
		 console.log(objects[len - 1].property);
		 }, 100);
*/

	}

	startAfter(test, 5);

	function startAfter(fn, count) {
		for (var i = 1; i <= count; i += 1) {
			setTimeout(console.log.bind(console, 'start after ' + i), (count - i) * 1e3);
		}
		setTimeout(fn, count * 1e3);
	}

}(window));