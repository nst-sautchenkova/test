//load
$(window).on('load', function () {
	$('#preloader').delay(700).fadeToggle(500);
	
});
$(window).on('load', function () {
	function anims() {
	  $('.start-anim').addClass('anim');
	}
	setTimeout(anims, 1000);

});




$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.fadeEl').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('anim');
		}
	});
	
	$('.animation').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
		}
	});
	
});



//fix header
$("document").ready(function($){
	var nav = $('.header');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			nav.addClass("header__scroll");
		} else {
			nav.removeClass("header__scroll");
		}
	});
});

// adaptive
$(document).on("ready", function () {
	if( window.innerWidth <= 1100 ){
		
		// slider
		$(".checkout-step").addClass('swiper-container');
		$(".checkout-step .swiper-wrapper").removeClass('flex');
		$(".checkout-step .swiper-wrapper").removeClass('flex_j_space-between');
		$(".checkout-step .swiper-wrapper").removeClass('flex_a_flex-start ');
		

		var swiper = new Swiper(".checkout-step.swiper-container", {
			slidesPerView: 3,
			spaceBetween: 20,
			pagination: {
				el: '.checkout-step .swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				760: {
				  slidesPerView: 2,
				  spaceBetween: 15,
				},
				375: {
				  slidesPerView: 1,
				  spaceBetween: 0,
				}
			  }
		});

	  	  
	} 
});

// Menu
$(document).on("ready", function () {
    $(".menu .trigger-menu").click(function () {
        $(this).toggleClass('op');
		$(".menu").toggleClass("menu-open");
		$('.menu .hamburger-menu__bar').toggleClass('animate');
    });
});


//ADD FILE

(function(e,t,n){var r=e.querySelectorAll("html")[0];r.className=r.className.replace(/(^|\s)no-js(\s|$)/,"$1js$2")})(document,window,0);
'use strict';
;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.input-file' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));
		
						




