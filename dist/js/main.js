$(document).ready(function(){

	$(window).scroll(function(){
		if ($(window).scrollTop() > $('.header').height()) {
			$('.header').addClass('header_active')
		} else {
			$('.header').removeClass('header_active')
		}
	})

	$('.header__burger').click(function(){
		$('.mobile').addClass('mobile_active')
	})

	$('.mobile__close').click(function(){
		$('.mobile').removeClass('mobile_active')
	})

})