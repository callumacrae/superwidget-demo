'use strict';

$(window).on('orientationchange resize', function () {
	var portrait = (window.innerHeight < window.innerWidth);

	$('body').removeClass('landscape portrait')
		.addClass(portrait ? 'landscape' : 'portrait');
});

$(window).triggerHandler('orientationchange');

var $widget = $('.widget');
$('.js-widget-open').on('click', function () {
	$widget.fadeIn();
});