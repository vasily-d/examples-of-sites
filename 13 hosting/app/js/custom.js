$(function(){

	// scroll to
	var btnGetStarted = $('.js-get-started');
	var plans = $('.js-plan');

	btnGetStarted.on('click', function(e) {
		e.preventDefault();
		var offsetPlans = parseInt(plans.offset().top);

		$('html, body').animate({
			scrollTop: offsetPlans
		}, 1000);
	});




	
});