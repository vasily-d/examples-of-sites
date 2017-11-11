$(function() {
	$('#datepicker').datepicker({
		// dayNamesMin: [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ]
	});
	
	new WOW().init();

	$('.sentence h2 a').on('click', function(e) {
		e.preventDefault();

		$('.popup').fadeIn(200);
	});

	$('.popup h3').on('click', function(e) {
		$('.popup').fadeOut(200);
	});
})