'use strict';

var app = (function (document, $) {
	var option = {
		clientlist: {
			grabCursor: true,
			spaceBetween: 33,
			slidesPerView: 'auto',
			centeredSlides: true,
			autoplay: 3140,
			autoplayDisableOnInteraction: true
		}
	};
	var docElem = document.documentElement,
		_userAgentInit = function () {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function () {
			$(document).foundation();

			var folio = document.getElementsByClassName('folio_in_folio'),
				folioSwipers = [];

			var clientListSwiper = new Swiper('.clientlist', option.clientlist);
			
			for (var i = folio.length - 1; i >= 0; i--) {
				folioSwipers.push(new Swiper(folio[i], {
					pagination: folio[i].getElementsByClassName('folio_in_folio-p')[0],
					grabCursor: true,
					paginationClickable: true,
					autoplay: 3140,
					autoplayDisableOnInteraction: true,
					loop: true
				}));
			}

			_userAgentInit();
		};
	return {
		init: _init
	};
})(document, jQuery);

(function () {
	app.init();
})();
