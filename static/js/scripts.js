jQuery( document ).ready( function( $ ) {
	//Toggle Navigation on mobile
	$('.nav-toggle').on('click', function () {
		$(this).toggleClass('is-active');
		$('.nav-main').toggleClass('is-active');
	})	
});