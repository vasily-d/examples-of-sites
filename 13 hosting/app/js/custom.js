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
		var offset = nav.offset().left;
		var positionTo = $('.js-header').height();
		var navHeight = $('.js-header .wrap').innerHeight();

		// console.log(navHeight);

		$(document).on('scroll', function(e) {
			var currentPosition = $(this).scrollTop();

			if(currentPosition >= positionTo) {
				// показ меню с fixed
				nav.addClass('nav-fixed');
				nav.css('paddingLeft', offset);
				nav.css('paddingRight', offset);
				header.css('padding-top', navHeight);
			}
			else {
				nav.removeClass('nav-fixed');
				nav.removeAttr('style');
				header.removeAttr('style');
			}
		});
	})();

	(function(){
		// scroll when click to nav

		// get all offset
		var offsetHosting = $('.js-hosting').offset().top;
		var offsetDomains = $('.js-domains').offset().top;
		var offsetFeatures = $('.js-features').offset().top;
		var offsetPlans = $('.js-plans').offset().top;
		var offsetContacts = $('.js-contacts').offset().top;

		// console.log(offsetHosting);
		// console.log(offsetDomains);
		// console.log(offsetFeatures);
		// console.log(offsetPlans);
		// console.log(offsetContacts);

		// add event to eleemnt li (dynamic)
		$('.header-nav li a').on('click', function(e) {
			e.preventDefault();

			// get html of current element and scroll to - switch
			switch ($(this).html()) {
				case 'Hosting':
					$('html, body').animate({
						scrollTop: offsetHosting - 80
					}, 1000);
					break;
				case 'Domains':
					$('html, body').animate({
						scrollTop: offsetDomains - 80
					}, 1000);
					break;
				case 'Features':
					$('html, body').animate({
						scrollTop: offsetFeatures - 80
					}, 1000);
					break;
				case 'Plans':
					$('html, body').animate({
						scrollTop: offsetPlans - 80
					}, 1000);
					break;
				case 'Contacts':
					$('html, body').animate({
						scrollTop: offsetContacts - 80
					}, 1000);
			}
		});
	})();

	(function(){
		// modal and overlay control

		// event click to login
		$('.js-login').on('click', function(e) {
			e.preventDefault();

			var overlay = $('.overlay');
			var modal = $('.modal');

			// показ overlay и modal
			overlay.fadeIn(500);
			modal.fadeIn(500);

			// убрать scroll у body на время modal
			$('html, body').addClass('hideScroll');

			// event click to close
			$('.modal a, .overlay').on('click', function(e) {
				e.preventDefault();

				overlay.fadeOut(200);
				modal.fadeOut(200);

				$('html, body').removeClass('hideScroll');
			});
		});
	})();
});