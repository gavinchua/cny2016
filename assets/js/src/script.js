/*
Table of Contents:
==================
jQuery Ready
	
	- 
	
Functions
	


*/





/*	=============================================================================
	jQuery Ready
	========================================================================== */
	
	$( document ).ready( function() {
		/*	--------------------------------------------------
			:: Window Width
			-------------------------------------------------- */
			windowWidthFN();
			
		/*	--------------------------------------------------
			:: Window Height
			-------------------------------------------------- */
			windowHeightFN();
			
		/*	--------------------------------------------------
			:: Detect Mobile Landscape
			-------------------------------------------------- */
			mobileLandscapeFN();
			
		/*	--------------------------------------------------
			:: Set Dimension
			-------------------------------------------------- */
			setDimensionFN();
			
		/*	--------------------------------------------------
			:: Nicescroll
			-------------------------------------------------- */
			nicescrollFN();
			
		/*	--------------------------------------------------
			:: Animsition
			-------------------------------------------------- */
			animsitionFN();
			
		/*	--------------------------------------------------
			:: wow.js
			-------------------------------------------------- */
			wowJSFN();
			
		/*	--------------------------------------------------
			:: Index Page
			-------------------------------------------------- */
			indexPageFN();
			
		/*	--------------------------------------------------
			:: bxslider
			-------------------------------------------------- */
			bxsliderFN();
	});



/*	=============================================================================
	jQuery Window Scroll
	========================================================================== */
	
	$( window ).scroll( function(){
		
	});



/*	=============================================================================
	jQuery Window Resize
	========================================================================== */
	
	$( window ).bind( 'resize', function() {
		/*	--------------------------------------------------
			:: Set Dimension
			-------------------------------------------------- */
			setDimensionFN();
			
		/*	--------------------------------------------------
			:: Detect Mobile Landscape
			-------------------------------------------------- */
			mobileLandscapeFN();
			
		/*	--------------------------------------------------
			:: Reset MagicScroll
			-------------------------------------------------- */
			//resetMagicScrollFN(); // To be uncommented when publishing
	});
	
	



/*	=============================================================================
	jQuery Window Load
	========================================================================== */
	
	$( window ).load(function () {
		/*	--------------------------------------------------
			:: 
			-------------------------------------------------- */
			/*setTimeout(function() {
				if ($(document).scrollTop() !== 0) $("html, body").animate({ scrollTop: 0 }, 'fast');
			}, 300);*/
    });
	
	
	
/*	=============================================================================
	jQuery Window Unload
	========================================================================== */
	
	$( window ).unload(function () {
		/*	--------------------------------------------------
			:: 
			-------------------------------------------------- */
			
    });



/*	=============================================================================
	Functions
	========================================================================== */
	
	/*	--------------------------------------------------
		:: Window Width
		-------------------------------------------------- */
		function windowWidthFN() {
			var windowWidth =  $( window ).width();
			return windowWidth;
		}
		//alert(windowWidthFN());
		
	/*	--------------------------------------------------
		:: Window Height
		-------------------------------------------------- */
		function windowHeightFN() {
			var windowHeight =  $( window ).height();
			return windowHeight;
		}
		//alert(windowHeightFN());
		
	/*	--------------------------------------------------
		:: Detect Mobile Landscape
		-------------------------------------------------- */
		function mobileLandscapeFN() {
			if ( windowWidthFN() < 768 ) {
				if( windowWidthFN() > windowHeightFN() ) {
					alert( 'Please view the site in Mobile Portrait format!' );
				}
			}
		}
		
	/*	--------------------------------------------------
		:: Set Dimension
		-------------------------------------------------- */
		function setDimensionFN() {
			//$( '.main, .home, .home .container, .zodiac-loading-wrapper, .zodiac-content .scene' ).css( 'height', windowHeightFN() );//, .zodiac-content > div
			$( '.home .main' ).css( 'height', windowHeightFN() );
			
			$( '.zodiac-loading-wrapper, .zodiac-intro' ).css( 'width', windowWidthFN() * 0.95 );
			
			var footerHomeHeight = $( '.home footer' ).height();
			//console.log(footerHomeHeight);
			$( '.pot > div' ).css( 'bottom', footerHomeHeight * 0.85 );
			var zodiacIconHomeDimension = footerHomeHeight * 0.3;
			//$( '.home .zodiac' ).css( 'width', (zodiacIconHomeDimension * 4) + 80 );
			$( '.home .zodiac li a' ).css({
				height	: zodiacIconHomeDimension,
				width	: zodiacIconHomeDimension
			});
			
			$( '.zodiac-content .scene' ).css( 'width', windowWidthFN() );
			//alert($( '.zodiac-content .scene' ).width());
		}
		
	/*	--------------------------------------------------
		:: Nicescroll
		-------------------------------------------------- */
		function nicescrollFN() {
			$( 'html' ).niceScroll({
				autohidemode		: false,
				background			: '',
				cursorborder		: 'none',
				cursorborderradius	: 0,
				cursorcolor			: 'rgba(255, 255, 255, 0.8)',
				//cursorwidth			: '10px',
				zindex				: 10
			});
		}
		
	/*	--------------------------------------------------
		:: Animsition
		-------------------------------------------------- */
		function animsitionFN() {
			$( '.animsition' ).animsition({
				inClass		: 'fade-in-down-lg',
				//outClass	: 'fade-out-up-lg',
				inDuration	: 800,
				loading		: false
			});
		}
		
	/*	--------------------------------------------------
		:: wow.js
		-------------------------------------------------- */
		function wowJSFN() {
			new WOW().init();
		}
		
	/*	--------------------------------------------------
		:: Index Page
		-------------------------------------------------- */
		function indexPageFN() {
			setTimeout(function() {
				$( '.bx-controls' ).fadeIn( 'slow' );
			}, 2500);
			
			$( '.zodiac a' ).hover(function(){
				//$( this ).toggleClass( 'zoomIn' );
				$( this ).toggleClass( 'zoomLarge' );
			});
			
			/*$( '.zodiac a' ).click(function(e){
				e.preventDefault();
				$( this ).toggleClass( 'animsition-link' );
				
				var rel = $( this ).attr( 'rel' );
				console.log(rel);
				var wrapper = $( '.' + rel + '-wrapper' );
				console.log(wrapper);
				$( '.home .main' ).removeClass( 'fadeInLeft' ).addClass( 'fadeOutLeft' );
				
				setTimeout(function() {
					$( '.home' ).addClass( 'hide-only' );
					
					$.ajax({
						url		: rel + '.php',
						error	: function() {
							console.log('ajax error');
						},
						success	: function( data ) {
							console.log('ajax success');
							//console.log(data);
							wrapper.html( data );
						},
						type	: 'GET'
					});
				}, 800);
				
				setTimeout(function() {
					$( '.zodiac-wrapper .main, .zodiac-loading-wrapper, .zodiac-content .scene' ).css( 'height', windowHeightFN() );
					wrapper.removeClass( 'hide-only' );
					circularProgressFN(rel);
					//setDimensionGoatFN();
					var zodiacUpper = ucfirst(rel);
					//console.log(zodiacUpper);
					var thisFunction = 'setDimension' + zodiacUpper + 'FN';
					//console.log(thisFunction);
					window[thisFunction]();
					backHomeFN();
				}, 1000);
			});*/
			
			var zodiacArray = [ 'goat', 'monkey' ];
			
			/*$.each( zodiacArray, function( index, value ){
				console.log(value);
				if ( $( '.' + value + '-wrapper.debug').length ) {
					console.log('debug: '+ value);
					$( '.zodiac-wrapper .main, .zodiac-loading-wrapper, .zodiac-content .scene' ).css( 'height', windowHeightFN() );
					
					circularProgressFN(value);
					
					var zodiacUpper = ucfirst(value);
					//console.log(zodiacUpper);
					var thisFunction = 'setDimension' + zodiacUpper + 'FN';
					//console.log(thisFunction);
					window[thisFunction]();
				}
			});*/
			
			/*if ( $( '.goat-wrapper.debug').length ) {
				console.log('debug');
				circularProgressFN('goat');
			}
			
			if ( $( '.monkey-wrapper.debug').length ) {
				console.log('debug');
				circularProgressFN('monkey');
			}*/
			
			$( '.share' ).click(function(e){
				e.preventDefault();
				var u=location.href;
				//window.open( 'https://www.facebook.com/sharer.php?u='+encodeURIComponent(u),'sharer','toolbar=0,status=0,width=626,height=436');
				window.open( 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent( u ),'sharer','toolbar=0,status=0,width=570,height=400' );
			});
		}
		
	/*	--------------------------------------------------
		:: bxslider
		-------------------------------------------------- */
		function bxsliderFN() {
			if ( $( '.bxslider-carousel' ).length > 0 ) {
				if ( windowWidthFN() < 768 ) {
					bxsliderCarouselConfigFN();
					bxsliderCarouselInitFN();
				}
			}
			
			var thisMaxSlides, thisSlideWidth, bxsliderCarousel;
			
			function bxsliderCarouselConfigFN() {
				if ( windowWidthFN() < 768 ) {
					console.log('< 768');
					thisMaxSlides	= 3;
					thisSlideWidth	= 200;
				}
				if ( windowWidthFN() < 480 ) {
					console.log('< 480');
					thisMaxSlides	= 2;
					thisSlideWidth	= 200;
				}
				if ( windowWidthFN() < 320 ) {
					console.log('< 320');
					thisMaxSlides	= 1;
					thisSlideWidth	= 200;
				}
			}
			
			function bxsliderCarouselInitFN() {
				bxsliderCarousel  = $( '.bxslider-carousel' ).bxSlider({
					hideControlOnEnd	: true,
					infiniteLoop		: false,
					maxSlides			: thisMaxSlides,
					moveSlides			: 1,
					pager				: false,
					slideWidth			: thisSlideWidth,
					//startSlide			: startSlideNo,
					onSliderLoad		: function(){
						
					},
					onBeforeSlide		: function(currentSlide, totalSlides, currentSlideHtmlObject){
						
					}
				});
			}
		}
		
	/*	--------------------------------------------------
		:: Circular Progress
		-------------------------------------------------- */
		function circularProgressFN(zodiac) {
			console.log('circularProgressFN: ' + zodiac);
			$( 'body' ).addClass( 'bg-red' );
			if ( $( '.' + zodiac + '-wrapper #loader').length ) {
				console.log('loader');
				var startColor = '#cf3648';
				var endColor = '#000000';
				
				var circle = new ProgressBar.Circle( '.' + zodiac + '-wrapper #loader', {
					color		: startColor,
					trailColor	: '#cf3648',
					trailWidth	: 0,
					strokeWidth	: 5,
					step		: function(state, circle) {
						circle.path.setAttribute( 'stroke', state.color );
					}
				});
				
				circle.animate( 1, {
					duration	: 2500,
					from		: {
						color	: startColor
					},
					to			: {
						color	: endColor
					}
				}, function() {
					$( 'body' ).removeClass( 'overflow-y-hidden' );
					$( '.' + zodiac + '-wrapper .loader' ).addClass( 'fadeOut animated' );
					setTimeout(function() {
						$( '.' + zodiac + '-wrapper .loader' ).addClass( 'hide-only' );
					}, 500);
					setTimeout(function() {
						$( '.' + zodiac + '-wrapper .zodiac-intro, .zodiac-wrapper .zodiac-content' ).removeClass( 'hide-only' );
						$( '.' + zodiac + '-wrapper .zodiac-intro' ).addClass( 'fadeIn animated' );
						circle.destroy();
						var zodiacUpper = ucfirst(zodiac);
						//console.log(zodiacUpper);
						var thisFunction = 'scrollMagic' + zodiacUpper + 'FN';
						//console.log(thisFunction);
						window[thisFunction]();
					}, 1000);/**/
				});
			}
		}
		
	/*	--------------------------------------------------
		:: Back Home
		-------------------------------------------------- */
		function backHomeFN() {
			$( '.btn-home' ).click(function(e){
				e.preventDefault();
				$.scrollTo( '.zodiac-wrapper .main', 1500, { easing : 'easeInOutQuad' } );
				
				setTimeout(function() {
					/*$( this ).toggleClass( 'animsition-link' );
					$( '.home' ).removeClass( 'hide-only' );
					$( '.home .main' ).removeClass( 'fadeOutLeft' ).addClass( 'fadeInLeft' );
					$( '.zodiac-wrapper' ).addClass( 'hide-only' ).empty();
					$( '.zodiac-wrapper .loader' ).removeClass( 'fadeOut animated hide-only' );
					$( '.zodiac-wrapper .zodiac-intro, .zodiac-wrapper .zodiac-content' ).addClass( 'hide-only' );
					$( '.zodiac-wrapper .zodiac-intro' ).removeClass( 'fadeIn animated' );
					$( '.zodiac-wrapper .scene1 ').css( 'top', 'auto' );
					//$( '.goat-wrapper .scene1 ').css( 'top', 'auto' );
					//$( '.monkey-wrapper .scene1 ').css( 'top', 'auto' );
					$( 'body' ).addClass( 'overflow-y-hidden' );*/
					
				}, 1600);/**/
			});
		}
		
	/*	--------------------------------------------------
		:: Reset MagicScroll
		-------------------------------------------------- */
		function resetMagicScrollFN() {
			console.log('resetMagicScrollFN');
			//location.reload();
			//window.location.href = window.location.href;
			if (window.RT) clearTimeout(window.RT);
				window.RT = setTimeout( function() {
					this.location.reload(false);
			}, 200);
		}
		
	/*	--------------------------------------------------
		:: Convert Uppercase
		-------------------------------------------------- */
		function ucfirst(str) {
			var firstLetter = str.substr(0, 1);
			return firstLetter.toUpperCase() + str.substr(1);
		}
		
	/*	--------------------------------------------------
		:: Avoid `console` errors
		-------------------------------------------------- */
		(function() {
			var method;
			var noop = function () {};
			var methods = [
				'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
				'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
				'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
				'timeStamp', 'trace', 'warn'
			];
			var length = methods.length;
			var console = (window.console = window.console || {});
		
			while (length--) {
				method = methods[length];
		
				// Only stub undefined methods.
				if (!console[method]) {
					console[method] = noop;
				}
			}
		}());