$(document).ready(function(){

	//play video on main page
	$('.video-layer').on('click', function(ev) {
    $(".introVideo")[0].src += "&autoplay=1";
    ev.preventDefault();
 		$('.video-layer').hide();
 		$('.video-img').hide();
  });
	//play video on main page===end

	//hide cookie message
	$('.b-person-data__wrap .icon').click(function(){
		$('.b-person-data__wrap').hide();
	});
	//hide cookie message===end

	//navbar accordion
	$('.navbar-menu__el').click(function () {
		$('.navbar-menu__el').find('.navbar-menu__el-link').removeClass('navbar-menu__el-link--active')
		$('.navbar-menu__sub').slideUp();
		if(!$(this).find('.navbar-menu__sub').is(":visible")){
			$(this).find('.navbar-menu__el-link').toggleClass('navbar-menu__el-link--active');
			$(this).find('.navbar-menu__sub').slideDown();
		}
	});

	//top nav mobile
	var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
				$('.header-nav__sub').hide();
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.menu-toggle','.header-nav');


			$('.header-nav__el-icon').click(function () {
				var current = $(this).closest('.header-nav__el').find('.header-nav__sub');
				$('.header-nav__sub').not(current).slideUp();
				current.slideToggle();
			});


	//init fancy box
	$(".fancybox").fancybox();

	//init main-page slider
	$(".slider-main__wrap, .review-slider").owlCarousel({
		 items : 1,
		 autoHeight : true,
		 dots: true,
		 autoplay : true,
		 nav:true,
		 loop:true,
		 navText:[
				'<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>',
				'<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>'
		 ]
		 }
		);

	//init animate placeholder
	$('.input-animate').each(function(){
		var current = $(this);
		var dataString = "<span class='input-placeholder-val'>"+current.data('input')+"</span>";
		current.parent().append(dataString);
	});

	$('.input-animate').on('input', function (e) {
		$(e.currentTarget).attr('data-empty', !e.currentTarget.value);
	});

	$('.input-placeholder-val').click(function(){
		$(this).parent().find('.input-animate').focus(); //найти Input и повесить focus
	});

	//beauty select
	$('.select-beauty').niceSelect();

	/* ###### For only ies  ######*/
	//if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
	//	//code
	//}

	//message for old IE
	function isIE () {
	  var myNav = navigator.userAgent.toLowerCase();
	  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}

	if (isIE() < 10 &&  isIE()) {
		$('body').empty();
		$('body').prepend('<div class="old-browser"><div class="old-browser-text"> Браузер не поддерживается =(</div></div>');
	}

	//for init SVG 
	svg4everybody();
	localStorage.clear();
	sessionStorage.clear();
	//
	//clear local storage
	$(window).unload(function(){
	  localStorage.clear();
	});
	
	/* ###### For SlideToggle Elements  ######*/
	/*var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.icon-bars','.top-menu_link');*/


	/* ###### init RangeSLider  ######*/
	/* ###### bower i --save-dev nouislider  ######*/
	/* ###### https://gist.github.com/fantazer/2bdc4e6a63708e143718ffa7c32eae17  ######*/

	/*var slider = document.getElementById('rangeSlider'); //Элемент

	noUiSlider.create(slider, {
		start: [0, 100],
		connect: true,
		step: 10,
		range: {
			'min': 0,
			'max': 100,
		},
		pips: { // Show a scale with the slider
			mode: 'steps',
			density: 4
		}
	});*/

	
})

//cash SVG

;( function( window, document )
{
	'use strict';

	var file  = 'img/pack.html',
		revision = 1;

	if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
		return true;

	var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
		request,
		data,
		insertIT = function()
		{
			document.body.insertAdjacentHTML( 'afterbegin', data );
		},
		insert = function()
		{
			if( document.body ) insertIT();
			else document.addEventListener( 'DOMContentLoaded', insertIT );
		};

	if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
	{
		data = localStorage.getItem( 'inlineSVGdata' );
		if( data )
		{
			insert();
			return true;
		}
	}

	try
	{
		request = new XMLHttpRequest();
		request.open( 'GET', file, true );
		request.onload = function()
		{
			if( request.status >= 200 && request.status < 400 )
			{
				data = request.responseText;
				insert();
				if( isLocalStorage )
				{
					localStorage.setItem( 'inlineSVGdata',  data );
					localStorage.setItem( 'inlineSVGrev',   revision );
				}
			}
		}
		request.send();
	}
	catch( e ){}

}( window, document ) );