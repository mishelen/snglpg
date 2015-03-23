'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			// // needed to use joyride
			// // doc: http://foundation.zurb.com/docs/components/joyride.html
			// $(document).on('click', '#start-jr', function () {
			//     $(document).foundation('joyride', 'start');
			// });
			_userAgentInit();
		};
	return {
		init: _init
	};
})(document, jQuery);

var folio_in_folio = new Swiper('.folio_in_folio', {
	pagination: '.folio_in_folio-p',
	grabCursor: true,
	paginationClickable: true,
	autoplay: 2000,
	autoplayDisableOnInteraction: true,
	loop: true
});
var client = new Swiper('.clientlist', {
	grabCursor: true,
	spaceBetween: 33,
	slidesPerView: 'auto',
	centeredSlides: true,
	autoplay: 2000,
	autoplayDisableOnInteraction: true
});





(function() {
	app.init();
})();
