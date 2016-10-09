$(function(){

	"use strict";
	// page loader
	$('#page-loader').delay(6000).fadeOut(3000);

	// wow plugin
	new WOW().init();

	var topoffset=50;
	var wheight=$(window).height(); // get the hieght of the window

	$('.fullheight').css('height',wheight);

// replace IMG inside carousel with a background image
	$('#home .item img').each(function (){
			var imgSrc=$(this).attr('src');
			$(this).parent().css({ 'background-image' : 'url('+imgSrc+')' });
			$(this).remove();
	});

// adjust height .fullheight elements on window resize
	$(window).resize( function () {
		wheight=$(window).height();
		$('.fullheight').css('height',wheight);
	});

// add scroll spy
$('body').scrollspy({
	target:'header .navbar',
	offset:topoffset
});

// add inbody class
var hrefVal=$(this).find('li.active a').attr('href');
if(hrefVal !== '#home'){
	$('header nav').addClass('inbody');
}else {
	$('header nav').removeClass('inbody');
}

// Add inbody class to nav when scrollspy evet fires
$('.navbar-fixed-top').on('activate.bs.scrollspy', function(){
    var hrefVal=$(this).find('li.active a').attr('href');

    if(hrefVal !== '#home'){
      $('header nav').addClass('inbody');
    }else {
      $('header nav').removeClass('inbody');
    }
});


// add smooth scrolling
 $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 1000);
        return false;
      }// target.length
    }// click function
  });// smooth scrolling



// automatically generate carousel iindicators
});
