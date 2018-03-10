$(function() {
	// slick slider1
	$('.slider1 .slides').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		dots: true,
		autoplaySpeed: 2000
	});

	// slick slider2
	$('.customer-testimonials .slider2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		dots: true,
		autoplaySpeed: 2000
	});

	// popup form1
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup1').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup и popup-overlay для их открытия
	  // $('.form1').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.form1').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.form1').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.form1').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});

	// popup form2
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup2').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup и popup-overlay для их открытия
	  // $('.form2').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.form2').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.form2').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.form2').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});

	// popup form3
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup3').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup и popup-overlay для их открытия
	  // $('.form3').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.form3').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.form3').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.form3').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});

	// popup .form4-osago1
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup4').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup и popup-overlay для их открытия
	  // $('.form4-osago1').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.form4-osago1').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.form4-osago1').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.form4-osago1').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});

	// popup .form5-osago2
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup5').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup и popup-overlay для их открытия
	  // $('.form5-osago2').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.form5-osago2').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.form5-osago2').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.form5-osago2').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});

	// slider2
	// $('.customer-testimonials .slider2').on('beforeChange', function(slick, slide){
 //      // console.log($('.customer-testimonials .slider2').animate({"background-position": "-=500px"}, "slow"););
 //      // left
 //  });



});