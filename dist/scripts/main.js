;(function($){
	'use strict';
var a = 1;
var b = 2;
var c = 3;
var d = 4;
console.log(a < b && b < c || c > d && d < a);

	$(window).on('load', function() {
		var slidesCount = $('#banner-slider .ba-slide').length;
		$('.ba-slider__counter .ba-amount').text(slidesCount);
		$('#banner-slider').slick({
			slide: '.ba-slide',
			prevArrow: '.ba-slider__controls .ba-slider__arrow--left',
			nextArrow: '.ba-slider__controls .ba-slider__arrow--right',
			dots: true
		});

		updateCurrentSlide();


		$('#banner-slider').on('afterChange', function(e) {
			updateCurrentSlide();
		});

		$('#banner-slider .slick-dots li').each(function() {
			var $this=$(this).find('button');
			if ($this.text()<10) {
			$this.text( '0' + $this.text() );
			}
		});


		// shop sliders
		$('#ba-shop-big .ba-slider').slick({
			slide: '.ba-slide',
			arrows: false,
			asNavFor: '#ba-shop .ba-slider',
		});
		$('#ba-shop .ba-slider').slick({
			slide: '.ba-slide',
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '#ba-shop-big .ba-slider',
			centerMode: true
		});

		// smooth scroll
		$('a[href*="#"]').on('click', function(event) {
			event.preventDefault();
			var where = $(this).attr('href');
			$('body, html').animate({
				scrollTop: $(where).offset().top,
			}, 500);
		});
	});



	function updateCurrentSlide() {
		var currentSlideIndex = $('#banner-slider .slick-active').data('slick-index') + 1; // slick-current vs slick-active
		$('.ba-slider__counter .ba-current-position').text('0'+currentSlideIndex);
	}



})(jQuery);
