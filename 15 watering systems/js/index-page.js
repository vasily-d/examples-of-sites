$(document).ready(function() {
	// slick slider1
	$('.slider1 .slider-slick').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		dots: true,
		responsive: [
		    {
		      breakpoint: 1060,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 3,
		        arrows: false
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        arrows: false
		      }
		    },
		    {
		      breakpoint: 420,
		      settings: {
		        slidesToShow: 1,
		        arrows: false
		      }
		    }
		  ]
	});

	// slick slider2
	$('.slider2 .slider-slick').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		dots: true,
		responsive: [
		    {
		      breakpoint: 1060,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 3,
		        arrows: false
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        arrows: false
		      }
		    }
		  ]

	});

	// jQuery smooth scrolling
	$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to1
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	  
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
		}

		return false; // выключаем стандартное действие
	});

	// magnific-popup
	$('.image-link').magnificPopup({type:'image'});
	$('.popup-link1').magnificPopup({
	  type: 'image'
	  // other options
	});
	

	// parallax js
	$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});


	// popup1
	$('.js-popup1').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup1 и popup-overlay для их открытия
	  // $('.popup1').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup1').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup1
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.popup1').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.popup1').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});

	// popup2
	$('.js-popup2').on('click', function(e) {
	  e.preventDefault();

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup2').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup2').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup2
	  $('#js-close-popup, .popup-overlay').on('click', function(e) {
	    // $('.popup2').css('display', 'none');
	    // $('.popup-overlay').css('display', 'none');
	    // or
	    $('.popup2').slideUp();
	    $('.popup-overlay').css('display', 'none');
	  });
	});



});
