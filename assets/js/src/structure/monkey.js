/*	=============================================================================
	Functions
	========================================================================== */
	
	/*	--------------------------------------------------
		:: Set Dimension
		-------------------------------------------------- */
		function setDimensionMonkeyFN() {
			//var monkeyScene1Dimension = $( '.scene1 .monkey' ).height();
			//alert(monkeyScene1Dimension);
			var zodiacContentMonkeyHeight;
			if ( windowWidthFN() < 1024 ) {
				zodiacContentMonkeyHeight = (windowHeightFN() * 4) - 220;
			}
			if ( windowWidthFN() >= 1024 ) {
				zodiacContentMonkeyHeight = (windowHeightFN() * 4) + 80;
			}
			$( '.monkey-wrapper .zodiac-content' ).css( 'height', zodiacContentMonkeyHeight );
			
			var windowWidthHalf = windowWidthFN() / 2;
			var windowHeightHalf = windowHeightFN() / 2;
			var monkeysatworkWidth = windowWidthFN() * 0.95;
			var monkeysatworkInnerCellWidth = windowWidthHalf * 0.9;
			$( '.monkeysatwork-wrapper, .monkeysatwork-wrapper .display-table-row' ).css( 'width', monkeysatworkWidth );
			//$( '.monkeysatwork-wrapper .display-table-cell' ).css( 'width', monkeysatworkWidth / 2 );
			$( '.monkeysatwork-wrapper .display-table-cell' ).css({
				height	: windowHeightHalf * 0.9,
				width	: monkeysatworkWidth
			});
			$( '.monkeysatwork-wrapper .monkeysatwork' ).css( 'margin-left', '-' + monkeysatworkInnerCellWidth / 2 + 'px' );
			$( '.monkeysatwork-wrapper .display-table-cell div' ).css( 'width', monkeysatworkInnerCellWidth );
			//console.log(windowWidthFN());
			var monkeysScene3Height;
			if ( windowWidthFN() < 1024 ) {
				monkeysScene3Height = windowHeightFN();
			}
			if ( windowWidthFN() >= 1024 ) {
				monkeysScene3Height = windowHeightFN() + 300;
			}
			$( '.monkey-wrapper .zodiac-content .scene3' ).css( 'height', monkeysScene3Height );
			//$( '.zodiac-content .scene3' ).css( 'top', windowHeightFN() * 2 - 200 );
		}
		
	/*	--------------------------------------------------
		:: ScrollMagic
		-------------------------------------------------- */
		function scrollMagicMonkeyFN() {
			console.log('scrollMagicMonkeyFN');
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
					TweenMax.to( '.speech-bubble', 3.3, {
						delay		: 55,
						opacity		: 1,
						scale		: 1.5
					}),
					TweenMax.to( '.hand-wrapper .pull-left', 2.3, {
						delay		: 70,
						scale		: 1,
						top			: 0,
						left		: 0,
						rotation	: 5
					}),
					TweenMax.to( '.hand-wrapper .pull-right', 2.3, {
						delay		: 45,
						top			: 15,
						left		: -20,
						scale		: 1,
						rotation	: -50
					})
				]);
			
			var scene1 = new ScrollScene({
				//loglevel	: 3,
				//triggerHook		: 'onLeave',
				triggerElement	: '.btn-start',
				offset			: 100, /* offset the trigger 150px below #scene's top */
				duration		: scene1Duration /* How many pixels to scroll / animate */
			})
			.setTween( tween1 )
			//.setPin( $( '.scene1' ) )
			.addTo( scrollMagicController )
			.addIndicators( { suffix : 'scene1' } );
			
			if ( windowWidthFN() < 480 ) {
				//scene1.reverse(false);
			}
			
			//scene2
			
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
					TweenMax.to( '.scene2 .character', 3.3, {
						opacity		: 1,
						scale		: 1.5
					})
				]);
			
			var scene2 = new ScrollScene({
				//triggerHook		: 'onLeave',
				triggerElement	: '.scene2',
				offset			: -400,
				duration		: scene2Duration
			})
			.setTween( tween2 )
			//.setPin( $( '.scene2' ) )
			.addTo( scrollMagicController )
			.addIndicators( { suffix : 'scene2' } );
			
			if ( windowWidthFN() < 480 ) {
				//scene2.reverse(false);
			}
			
			
			var tween2_1Top;
			if ( windowWidthFN() < 480 ) {
				tween2_1Top		= 2;
			}
			/*if ( windowWidthFN() > 480 && windowWidthFN() < 1024 ) {
				scene2Duration	= 600;
				tween2_1Top		= 20;
			}*/
			if ( windowWidthFN() > 480 ) {
				tween2_1Top		= 30;
			}
			var tween2_1 = new TimelineMax ()
            	.add([
					TweenMax.fromTo( '.scene2 .phone-left', 1, {
						top		: 10,
					},
					{
						top		: tween2_1Top,
						repeat	: -1,
						yoyo	: true
					}),
					TweenMax.fromTo( '.scene2 .phone-right', 0.5, {
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
			.addIndicators( { suffix : 'scene2_1' } );
			
			if ( windowWidthFN() < 480 ) {
				//scene2_1.reverse(false);
			}
			
			
			var scene3Offset,
				scene3Duration,
				scene3Scale,
				scene3TopVehicle,
				scene3TopMonkey;
			if ( windowWidthFN() < 480 ) {
				console.log('1');
				scene3Offset		= 80;
				scene3Duration		= 240;
				scene3Scale			= 2;
				//scene3TopVehicle	= '+=140';
				//scene3TopMonkey	= '+=125';
				scene3TopVehicle	= '+=180';
				scene3TopMonkey		= '+=165';
			}
			if ( windowWidthFN() >= 480 && windowWidthFN() < 1024 ) {
				console.log('2');
				scene3Offset		= 120;
				scene3Duration		= 380;
				scene3Scale			= 2.5;
				scene3TopVehicle	= '+=320';
				scene3TopMonkey		= '+=270';
			}
			if ( windowWidthFN() >= 1024 && windowWidthFN() < 1280 ) {
				console.log('3');
				scene3Offset		= 180;
				scene3Duration		= 420;
				scene3Scale			= 3;
				scene3TopVehicle	= '+=320';
				scene3TopMonkey		= '+=235';
			}
			if ( windowWidthFN() > 1280 ) {
				console.log('4');
				scene3Offset		= 300;
				scene3Duration		= 480;
				scene3Scale			= 3.5;
				scene3TopVehicle	= '+=180';
				scene3TopMonkey		= '+=50';
			}
			var tween3 = new TimelineMax ()
            	.add([
					TweenMax.to( '.vehicles', 1, {
						scale	: scene3Scale,
						top		: scene3TopVehicle
					}),
					TweenMax.to( '.monkey-body', 1, {
						scale	: scene3Scale,
						top		: scene3TopMonkey
					}),
					TweenMax.to( '.monkey-leg-left', 1, {
						transform: 'scaleX(1.5) translateX(-1px)'
					}),
					TweenMax.to( '.monkey-leg-right', 1, {
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
			.addIndicators( { suffix : 'monkey scene3' } );
			
			if ( windowWidthFN() < 480 ) {
				//scene3.reverse(false);
			}
		}