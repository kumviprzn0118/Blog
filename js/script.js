(function($, window, document, undefined) {
	"use strict";

	/*
	* smoothScroll
	* ページ内リンクスムーススクロール
	*/
	$.fn.smoothScroll = function(scrOffset, scrDuration) {
		scrOffset = scrOffset || 0;
		scrDuration = scrDuration || 1000;
		jQuery.easing.easeOutExpo = function (x, t, b, c, d) {
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		};  
		return this.click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length && target;
				if (target.length) {
					var targetOffset = target.offset().top - scrOffset;
					$('html, body').animate({scrollTop: targetOffset}, {duration: scrDuration, easing: 'easeOutExpo'});
					return false;
				}
			}
		});
	};
	
	/*
	* setMovieSlider
	* 動画一覧スライダー
	*/
	var setMovieSlider = function() {
		$('.movie__items').slick({
			dots: true,
			draggable: false,
			infinite: false,
			slidesToShow: 3,
			responsive: [{
				breakpoint: 767,
				settings: {
					slidesToShow: 2
				}
			}]
		});
	};
	
	/*
	 * setModalMovie
	 * モーダルウィンドウへの動画ソースセット
	 * 閉じる際に停止
	 */
	var setModalMovie = function() {
		$('.js-open-movie').on('click', function() {
			var src = $(this).attr('href');
			$('#movieModalVideo').attr('src', src);
		});
		$(document).on('closed', '.remodal', function() {
			var video = $('#movieModalVideo').get(0);
			if (!video.paused) {
				video.pause();
				video.currentTime = 0;
			}
		});
	};
	
	/*
	 * ready
	*/
	$(function() {
		$('.js-scroll').smoothScroll();
		setMovieSlider();
		setModalMovie();
	});
	
})(jQuery, window, document);