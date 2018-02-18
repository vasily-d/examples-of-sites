$(function() {
		// slick slider
		$('.slider .slider-slick').slick({
			slidesToShow: 1,
			autoplay: true,
  		autoplaySpeed: 2000,
			arrows: true,
			dots: true
		});




		// slick slider2
		$('.slider2 .slider-slick').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true,
			infinite: true,
			autoplay: true,
  		autoplaySpeed: 2000,
			arrows: true,
			dots: true,
			responsive: [
		    {
		      breakpoint: 540,
		      settings: {
		        arrows: false
		      }
		    }
		  ]
		});

		// изменение центрального блока в slider2 + работа с dots 345
		$('.slider2 .slider-slick').on('afterChange', function(event, slick, currentSlide, nextSlide) {

			// сброс значений
			$('.zero').css('display', 'none');
			$('.one').css('display', 'none');
			$('.two').css('display', 'none');

			// применение новых данных для центрального дива
			if ($('.slider2 .slider-slick .slick-current img').attr('alt') == 'photo1') {
				$('.two').css('display', 'block');
			}
			if ($('.slider2 .slider-slick .slick-current img').attr('alt') == 'photo2') {
				$('.zero').css('display', 'block');
			}
			if ($('.slider2 .slider-slick .slick-current img').attr('alt') == 'photo3') {
				$('.one').css('display', 'block');
			}


			if (currentSlide == 3) {
				// console.log( $('.slider2 .slick-dots li button').eq(0) );
				// $('.slider2 .slick-dots li button').eq(0).css('background','#ff0');
			}
		});






		



		// popups
		// ставим на кнопку которая вызывает данный popup
		$('.js-popup').on('click', function(e) {
			e.preventDefault();

			// поиск button close popup
			$('#js-close-popup, .popup-overlay1').on('click', function(e) {
				// $('.popup1').css('display', 'none');
				// $('.popup-overlay1').css('display', 'none');
				// or
				$('.popup1').slideUp();
				$('.popup-overlay1').css('display', 'none');
			});

			// поиск popup и popup-overlay для их открытия
			// $('.popup1').css('display', 'block');
			// $('.popup-overlay1').css('display', 'block');
			// or
			$('.popup1').slideDown();
			$('.popup-overlay1').css('display', 'block');
		});

		// ставим на кнопку которая вызывает данный popup
		$('.js-popup2').on('click', function(e) {
			e.preventDefault();

			// поиск button close popup
			$('#js-close-popup2, .popup-overlay1').on('click', function(e) {
				// $('.popup2').css('display', 'none');
				// $('.popup-overlay1').css('display', 'none');
				// or
				$('.popup2').slideUp();
				$('.popup-overlay1').css('display', 'none');
			});

			// поиск popup и popup-overlay для их открытия
			// $('.popup2').css('display', 'block');
			// $('.popup-overlay1').css('display', 'block');
			// or
			$('.popup2').slideDown();
			$('.popup-overlay1').css('display', 'block');
		});

		// ставим на кнопку которая вызывает данный popup - если нужно прикрутить popup3 к кнопке
		// $('.js-popup3').on('click', function(e) {
		// 	e.preventDefault();

		// 	// поиск button close popup
		// 	$('#js-close-popup3, .popup-overlay1').on('click', function(e) {
		// 		// $('.popup3').css('display', 'none');
		// 		// $('.popup-overlay1').css('display', 'none');
		// 		// or
		// 		$('.popup3').slideUp();
		// 		$('.popup-overlay1').css('display', 'none');
		// 	});

		// 	// поиск popup и popup-overlay для их открытия
		// 	// $('.popup3').css('display', 'block');
		// 	// $('.popup-overlay1').css('display', 'block');
		// 	// or
		// 	$('.popup3').slideDown();
		// 	$('.popup-overlay1').css('display', 'block');
		// });









		// scroll
		$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to
			var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
		  
		  if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
				$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
		  }

			return false; // выключаем стандартное действие
		});

		// play
		$('.play-js').on('click', function(e) {
			$('.youtube-overlay').hide();

			 	setTimeout(function() 
		 	  {
			 		
					// $('.video-youtube iframe').click();
					// console.log($('.video-youtube iframe'));

					var sr = $('.video-youtube iframe').attr("src");
					sr = sr+'&autoplay=1';

					//console.log(sr);
					
					$('.video-youtube iframe').attr("src", sr);
					
		 	  }, 50);

		});


		// открытие popup3 через 1 минуту
	 	setTimeout(function() 
 	  {
	 		// $('.popup3').css('display', 'block');

			// поиск button close popup
			$('#js-close-popup3, .popup-overlay1').on('click', function(e) {
				// $('.popup3').css('display', 'none');
				// $('.popup-overlay1').css('display', 'none');
				// or
				$('.popup3').slideUp();
				$('.popup-overlay1').css('display', 'none');
			});

			// поиск popup и popup-overlay для их открытия
			// $('.popup3').css('display', 'block');
			// $('.popup-overlay1').css('display', 'block');
			// or
			$('.popup3').slideDown();
			$('.popup-overlay1').css('display', 'block');
 	  }, 60000);



});