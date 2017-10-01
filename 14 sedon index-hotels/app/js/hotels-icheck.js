$(function() {
	$('input').iCheck({
		checkboxClass: 'icheckbox_polaris',
		radioClass: 'iradio_polaris'
	});

	$("#range").ionRangeSlider({
		// min: 0,
		// max: 10000,
		// from: 1000,
		// to: 9000,
		type: 'double',
		hide_min_max: true,
		hide_from_to: true
		// prefix: "$",
		// grid: true,
		// grid_num: 10
	});
})