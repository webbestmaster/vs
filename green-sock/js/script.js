/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	// prepare objects to tween

	var i = 0,
		len = 10000,
		objects = [];

	for (; i < len; i += 1) {
		objects[i] = {property: 0};
	}

	function test() {

		for (i = 0; i < len; i += 1) {
			TweenMax.to(objects[i], 20, {
				property: 20
			});
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