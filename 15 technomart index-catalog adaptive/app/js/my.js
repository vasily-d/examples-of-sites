$(function() {
	// wow js
	new WOW().init();

	// click to buy on catalog.html
	$('.js-buy').on('click', function(e) {
		e.preventDefault();
		$('.js-popup').css('display', 'block');
		
		$('.js-close').on('click', function(e) {
			$('.js-popup').css('display', 'none');
		});

		$('.js-buy-link').on('click', function(e) {
			$('.js-popup').css('display', 'none');
		});
	});

	//js-bigMap and js-feedback
	$('.js-feedback-btn').on('click', function(e) {
		e.preventDefault();
		$('.js-feedback-popup').css('display', 'block');

		$('.js-feedback-close').on('click', function(e) {
			$('.js-feedback-popup').css('display', 'none');
		});
	});

	$('.js-bigMap').on('click', function(e) {
		e.preventDefault();
		$('.js-bigMap-popup').css('display', 'block').css('cursor', 'pointer');

		$('.js-bigMap-popup').on('click', function(e) {
			$(this).css('display', 'none');
		});
	});

	// service
	$('.js-service li').on('click', function(e) {
		$('.js-service li').removeClass('active');
		$(this).addClass('active');
	});

	// icheck
	$('input').iCheck({
	   checkboxClass: 'icheckbox_square',
	   radioClass: 'iradio_square',
	   increaseArea: '20%' // optional
	 });

	// rangeslider.js
	 $('input[type="range"]').rangeslider({
	 	polyfill : false
	 });
})