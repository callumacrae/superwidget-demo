'use strict';

var RATIO = 990 / 120;

var $widget = $('.widget');
var portrait;
var scrollCurrent;

$widget.scroll(function () {
	if (portrait) {
		scrollCurrent = $widget.scrollTop();
	} else {
		scrollCurrent = $widget.scrollLeft() / RATIO;
	}
});

$(window).on('orientationchange resize', function () {
	portrait = (window.innerHeight > window.innerWidth);

	$('body').removeClass('landscape portrait')
		.addClass(portrait ? 'portrait' : 'landscape');

	if (portrait) {
		$widget.scrollTop(scrollCurrent);
	} else {
		$widget.scrollLeft(scrollCurrent * RATIO);
	}
});

$(window).triggerHandler('orientationchange');

$('.js-widget-open').on('click', function () {
	$widget.fadeIn();
});