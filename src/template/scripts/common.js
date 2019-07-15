$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');



	$('.services__slider').slick();

	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('file');
	

	


	var hum = $('.hum'),
			humClass = 'hum_toggle',
			nav = $('.nav'),
			navToggle = 'nav_toggle',
			navScroll = 'nav_scroll',
			navMobile = $('.nav-mobile'),
			navMobileFixed = 'nav-mobile_fixed',
			navMobileBlue = 'nav-mobile_blue'

	hum.click(function(){
		hum.toggleClass(humClass);
		nav.toggleClass(navToggle);
		navMobile.addClass(navMobileFixed).toggleClass(navMobileBlue);
	})

	$(window).on('load scroll resize', function() {
		var scrollTop = $(window).scrollTop();

		if (!nav.hasClass(navToggle)) {
			if (scrollTop > 65){
				navMobile.addClass(navMobileFixed);
			} else{
				navMobile.removeClass(navMobileFixed);
			}
		}
		

		if (scrollTop > 130) {
			nav.addClass(navScroll);
		} else {
			nav.removeClass(navScroll);
		}
	});

	$(".nav__list a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);

    hum.removeClass(humClass);
		nav.removeClass(navToggle);
		navMobile.removeClass(navMobileBlue);
	  return false;
	});
});
