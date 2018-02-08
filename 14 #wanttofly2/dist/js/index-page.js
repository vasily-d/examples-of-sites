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
		// $('.slider2 .slider-slick').slick({
		// 	slidesToShow: 3,
		// 	slidesToScroll: 1,
		// 	infinite: true,
		// 	autoplay: true,
  // 		autoplaySpeed: 2000,
		// 	arrows: true,
		// 	dots: true
		// });

		// owl
		$('.owl-carousel').owlCarousel({
			items: 2,
			loop: true,
			autoWidth: true,
			margin: 25,
			autoplay: true,
			nav: true,
			dots: true
		});

		$('.owl-carousel').on('changed.owl.carousel', function(event) {
		 	setTimeout(function() 
	 	  {
		 		$('.owl-dot.active').click();

	 	  	// получение центрального слайда
	 	  	//console.log($('.owl-dot.active').index());

	 	  	// сброс значений
	 	  	$('.zero').css('display', 'none');
	 	  	$('.one').css('display', 'none');
	 	  	$('.two').css('display', 'none');

	 	  	// применение новых данных для центрального дива
	 	  	if ($('.owl-dot.active').index() == 0) {
	 	  		$('.zero').css('display', 'block');
	 	  	}
	 	  	if ($('.owl-dot.active').index() == 1) {
	 	  		$('.one').css('display', 'block');
	 	  	}
	 	  	if ($('.owl-dot.active').index() == 2) {
	 	  		$('.two').css('display', 'block');
	 	  	}
	 	  }, 140);
		});		

		// popups
		// ставим на кнопку которая вызывает данный popup
		$('.js-popup').on('click', function(e) {
			e.preventDefault();

			// поиск button close popup
			$('#js-close-popup').on('click', function(e) {
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
			$('#js-close-popup2').on('click', function(e) {
				// $('.popup2').css('display', 'none');
				// $('.popup-overlay1').css('display', 'none');
				// or
				$('.popup2').slideUp();
				$('.popup-overlay1').css('display', 'none');
			});

			// поиск popup и popup-overlay для их открытия
			// $('.popup1').css('display', 'block');
			// $('.popup-overlay1').css('display', 'block');
			// or
			$('.popup2').slideDown();
			$('.popup-overlay1').css('display', 'block');
		});

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


});