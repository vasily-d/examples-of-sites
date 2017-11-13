$(function() {
	$('.dropdown-toggle').dropdown();

	// aside nav
	$('.left-menu li').on('click', function(e) {
		console.log($(this).parent());
		$(this).parent().find('li').removeClass('active-li');
		$(this).addClass('active-li');
	});

});