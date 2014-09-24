'use strict';

$.fx.speeds._default = 1000;

$('.panel-first').find('form').submit(function (e) {
	e.preventDefault();

	$('.panel-first').hide()
		.next().show();
	$('.basket').fadeIn();
});

$('.panel-second').click(function () {
	$(this).hide()
		.next().show();
});

var i = 1;
$('.basket').click(function () {
	$(this).hide();
	$('.panel-third').hide();
	$('.panel-second').show();

	var selector = '.book' + i;

	if (confirm('Do you want gift wrapping? +£2.50')) {
		selector += ', .book-wrapped'
	}

	$(selector).show();
	$('.panel-second').fadeOut(function () {
		$(selector).animate({
			top: 450,
			left: 25 + ((i - 1) * 15) + '%',
			opacity: 1
		})
			.find('img').animate({
				width: 200
			}).end()
			.find('span').animate({
				opacity: 1
			}, function () {
				$('.panel-first').fadeIn();
				$('.checkout').fadeIn();
				i++;
			})
	});
});

$('.checkout').click(function () {
	$(this).animate({
		top: 0,
		opacity: 0
	}, function () {
		$('.details').fadeIn();
	});

	$('[class^="book"]').animate({
		top: 20
	});

	$('[class^="panel"]').fadeOut();
});

$('.details, .address').on('keyup', function () {
	var $this = $(this);

	if ($this.find(':invalid').length) {
		return;
	}

	$this.find('h2').fadeOut(function () {
		$this.next().fadeIn();
	});
});
