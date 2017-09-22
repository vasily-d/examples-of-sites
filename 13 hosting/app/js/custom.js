$(function(){

	(function(){
		// scroll to when click to .js-get-started
		var btnGetStarted = $('.js-get-started');
		var plans = $('.js-plan');

		btnGetStarted.on('click', function(e) {
			e.preventDefault();
			var offsetPlans = parseInt(plans.offset().top);

			$('html, body').animate({
				scrollTop: offsetPlans
			}, 1000);
		});
	})();
	

	(function(){
		// show header menu when smooth scroll first block
		var header = $('.js-header');
		var nav = $('.header-nav').parent();
		// var toBlock = $('.benefits');
		// var offset = nav.offset().left;
		var positionTo = $('.js-header').height();
		var navHeight = $('.js-header .wrap').innerHeight();

		// console.log(navHeight);

		$(document).on('scroll', function(e) {
			var currentPosition = $(this).scrollTop();

			if(currentPosition >= positionTo) {
				// показ меню с fixed
				nav.addClass('nav-fixed');
				header.css('padding-top', navHeight);
			}
			else {
				nav.removeClass('nav-fixed');
				header.removeAttr('style');
			}
		});
	})();
	
	

});