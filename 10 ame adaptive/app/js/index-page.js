$(function() {

	// 7 secons script
	setTimeout(function() {
		$('.js-feedback-popup').css('display', 'block');

		$('.js-feedback-close').on('click', function(e) {
			e.preventDefault();
			
			$('.js-feedback-popup').css('display', 'none');
		});
	}, 7000);

	// img preview iframe click + autoplay!
	$('.img-preview-video img').on('click', function() {
		$(this).css('visibility', 'hidden');
		$('.img-preview-video iframe').css('display', 'block');
		var sr = $('.img-preview-video iframe').attr("src");
		sr = sr+'&autoplay=1';

		//console.log(sr);
		
		$('.img-preview-video iframe').attr("src", sr);
	});

	// img preview comments
	$('.reviews .video img').on('click', function() {
		$(this).css('display', 'none');
		$(this).parent().find('iframe').css('display', 'block');
	});

});