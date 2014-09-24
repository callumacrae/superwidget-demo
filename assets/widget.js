'use strict';

$(window).on('orientationchange resize', function () {
	var portrait = (window.innerHeight < window.innerWidth);

	$('body').removeClass('landscape portrait')
		.addClass(portrait ? 'landscape' : 'portrait');
});

$(window).triggerHandler('orientationchange');