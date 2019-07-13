$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	var nav = $('.nav'),
			navClass = 'nav_scroll';

	$(window).on('scroll load resize', function() {
		var scrollTop = $(window).scrollTop();

		if (scrollTop > 130) {
			nav.addClass(navClass);
		} else {
			nav.removeClass(navClass);
		}
	});
});
