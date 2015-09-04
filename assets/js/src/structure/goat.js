/*	=============================================================================
	Functions
	========================================================================== */
	
	/*	--------------------------------------------------
		:: Set Dimension
		-------------------------------------------------- */
		function setDimensionGoatFN() {
			//var goatScene1Dimension = $( '.scene1 .goat' ).height();
			//alert(goatScene1Dimension);
			var zodiacContentGoatHeight;
			if ( windowWidthFN() < 1024 ) {
				zodiacContentGoatHeight = (windowHeightFN() * 4) - 220;
			}
			if ( windowWidthFN() >= 1024 ) {
				zodiacContentGoatHeight = (windowHeightFN() * 4) + 80;
			}
			$( '.goat-wrapper .zodiac-content' ).css( 'height', zodiacContentGoatHeight );
			
			var windowWidthHalf = windowWidthFN() / 2;
			var windowHeightHalf = windowHeightFN() / 2;
			var goatsatworkWidth = windowWidthFN() * 0.95;
			var goatsatworkInnerCellWidth = windowWidthHalf * 0.9;
			$( '.goatsatwork-wrapper, .goatsatwork-wrapper .display-table-row' ).css( 'width', goatsatworkWidth );
			//$( '.goatsatwork-wrapper .display-table-cell' ).css( 'width', goatsatworkWidth / 2 );
			$( '.goatsatwork-wrapper .display-table-cell' ).css({
				height	: windowHeightHalf * 0.9,
				width	: goatsatworkWidth
			});
			$( '.goatsatwork-wrapper .goatsatwork' ).css( 'margin-left', '-' + goatsatworkInnerCellWidth / 2 + 'px' );
			$( '.goatsatwork-wrapper .display-table-cell div' ).css( 'width', goatsatworkInnerCellWidth );
			//console.log(windowWidthFN());
			var goatsScene3Height;
			if ( windowWidthFN() < 1024 ) {
				goatsScene3Height = windowHeightFN();
			}
			if ( windowWidthFN() >= 1024 ) {
				goatsScene3Height = windowHeightFN() + 300;
			}
			$( '.goat-wrapper .zodiac-content .scene3' ).css( 'height', goatsScene3Height );
			//$( '.zodiac-content .scene3' ).css( 'top', windowHeightFN() * 2 - 200 );
		}
		
	/*	--------------------------------------------------
		:: ScrollMagic
		-------------------------------------------------- */
		function scrollMagicGoatFN() {
			console.log('scrollMagicGoatFN');
			$.scrollTo( 'body' );
			
			var scrollMagicController = new ScrollMagic();// { loglevel : 3 } 
			
			var drinkswrapperTop,
				scene1Duration;
			if ( windowWidthFN() < 480 ) {
				console.log('1');
				drinkswrapperTop = windowHeightFN() * 0.135;
				scene1Duration = 200;
			}
			if ( windowWidthFN() >= 480 && windowWidthFN() < 1024 ) {
				console.log('11');
				drinkswrapperTop = windowHeightFN() * 0.3;
				scene1Duration = 400;
			}
			if ( windowWidthFN() >= 1024 && windowWidthFN() < 1280 ) {
				console.log('111');
				drinkswrapperTop = windowHeightFN() * 0.25;
				scene1Duration = 400;
			}
			if ( windowWidthFN() > 1280 ) {
				console.log('1111');
				drinkswrapperTop = 240;
				scene1Duration = 520;
			}
			console.log(windowWidthFN());
			var tween1 = new TimelineMax ()
            	.add([
					TweenMax.to( '.scene1', 1, {
						top			: -200
					}),
					TweenMax.to( '.scene1 .character', 3.3, {
						opacity		: 1,
						scale		: 1.5
					}),
					TweenMax.to( '.drinks-wrapper', 2.3, {
						delay		: 1,
						opacity		: 1
					}),
					TweenMax.to( '.drinks-wrapper .pull-left', 2.3, {
						delay		: 1,
						scale		: 1.5,
						top			: drinkswrapperTop
					}),
					TweenMax.to( '.drinks-wrapper .pull-right', 2.3, {
						delay		: 1,
						scale		: 1.5,
						top			: drinkswrapperTop
					})/**/
				]);
			
			var scene1 = new ScrollScene({
				//loglevel	: 3,
				//triggerHook		: 'onLeave',
				triggerElement	: '.btn-start',
				//offset			: -200, /* offset the trigger 150px below #scene's top */
				duration		: scene1Duration /* How many pixels to scroll / animate */
			})
			.setTween( tween1 )
			//.setPin( $( '.scene1' ) )
			.addTo( scrollMagicController )
			//.addIndicators( { suffix : 'scene1' } );
			
			if ( windowWidthFN() < 480 ) {
				//scene1.reverse(false);
			}
			
			var scene2Duration;
			if ( windowWidthFN() < 480 ) {
				scene2Duration	= 450;
			}
			/*if ( windowWidthFN() > 480 && windowWidthFN() < 1024 ) {
				scene2Duration	= 600;
			}*/
			if ( windowWidthFN() > 480 ) {
				scene2Duration	= 700;
			}
			var tween2 = new TimelineMax ()
            	.add([
					TweenMax.to( '.hour', 1, {
						rotation	: 75//25
					}),
					TweenMax.to( '.min', 1, {
						rotation	: 1080//360
					})
				]);
			
			var scene2 = new ScrollScene({
				//triggerHook		: 'onLeave',
				triggerElement	: '.scene2',
				offset			: -100,
				duration		: scene2Duration
			})
			.setTween( tween2 )
			//.setPin( $( '.scene2' ) )
			.addTo( scrollMagicController )
			//.addIndicators( { suffix : 'scene2' } );
			
			if ( windowWidthFN() < 480 ) {
				//scene2.reverse(false);
			}
			
			
			var tween2_1Top;
			if ( windowWidthFN() < 480 ) {
				tween2_1Top		= 10;
			}
			/*if ( windowWidthFN() > 480 && windowWidthFN() < 1024 ) {
				scene2Duration	= 600;
				tween2_1Top		= 20;
			}*/
			if ( windowWidthFN() > 480 ) {
				tween2_1Top		= 20;
			}
			var tween2_1 = new TimelineMax ()
            	.add([
					TweenMax.fromTo( '.goatsatwork.up', 1, {
						top		: 0
					},
					{
						top		: tween2_1Top,
						repeat	: -1,
						yoyo	: true
					}),
					TweenMax.fromTo( '.goatsatwork.down', 0.5, {
						top		: 0
					},
					{
						top		: '-' + tween2_1Top,
						repeat	: -1,
						yoyo	: true
					})
				]);
			
			var scene2_1 = new ScrollScene({
				//triggerHook		: 'onLeave',
				triggerElement	: '.scene2',
				offset			: -100,
				duration		: scene2Duration
			})
			.setTween( tween2_1 )
			//.setPin( $( '.scene2' ) )
			.addTo( scrollMagicController )
			//.addIndicators( { suffix : 'scene2_1' } );
			
			if ( windowWidthFN() < 480 ) {
				//scene2_1.reverse(false);
			}
			
			
			var scene3Offset,
				scene3Duration,
				scene3Scale,
				scene3TopVehicle,
				scene3TopGoat;
			if ( windowWidthFN() < 480 ) {
				console.log('1');
				scene3Offset		= 80;
				scene3Duration		= 240;
				scene3Scale			= 2;
				//scene3TopVehicle	= '+=140';
				//scene3TopGoat		= '+=125';
				scene3TopVehicle	= '+=180';
				scene3TopGoat		= '+=165';
			}
			if ( windowWidthFN() >= 480 && windowWidthFN() < 1024 ) {
				console.log('2');
				scene3Offset		= 120;
				scene3Duration		= 380;
				scene3Scale			= 2.5;
				scene3TopVehicle	= '+=320';
				scene3TopGoat		= '+=270';
			}
			if ( windowWidthFN() >= 1024 && windowWidthFN() < 1280 ) {
				console.log('3');
				scene3Offset		= 180;
				scene3Duration		= 420;
				scene3Scale			= 3;
				scene3TopVehicle	= '+=320';
				scene3TopGoat		= '+=235';
			}
			if ( windowWidthFN() > 1280 ) {
				console.log('4');
				scene3Offset		= 300;
				scene3Duration		= 480;
				scene3Scale			= 3.5;
				scene3TopVehicle	= '+=180';
				scene3TopGoat		= '+=50';
			}
			var tween3 = new TimelineMax ()
            	.add([
					TweenMax.to( '.vehicles', 1, {
						scale	: scene3Scale,
						top		: scene3TopVehicle
					}),
					TweenMax.to( '.goat-body', 1, {
						scale	: scene3Scale,
						top		: scene3TopGoat
					}),
					TweenMax.to( '.goat-leg-left', 1, {
						transform: 'scaleX(1.5) translateX(-1px)'
					}),
					TweenMax.to( '.goat-leg-right', 1, {
						transform: 'scaleX(1.5) translateY(-1px)'
					})/**/
				]);
			
			var scene3 = new ScrollScene({
				//triggerHook		: 'onLeave',
				triggerElement	: '.scene3',
				offset			: scene3Offset,
				duration		: scene3Duration
			})
			.setTween( tween3 )
			//.setPin( $( '.scene3' ) )
			.addTo( scrollMagicController )
			//.addIndicators( { suffix : 'scene3' } );
			
			if ( windowWidthFN() < 480 ) {
				//scene3.reverse(false);
			}
		}