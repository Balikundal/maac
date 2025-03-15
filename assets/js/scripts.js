/*
Author       : theme_ocean 
Template Name: Penn - Education HTML Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		jQuery(window).on('load',function() {
		  setTimeout(function() {
				$('body').addClass('loaded');
			}, 500);
		});
		/*END PRELOADER JS*/	
			
		/*START MENU JS*/				
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "&#9660;",
			closedSymbol: "&#9658;" 	
		});
		
		if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});		  	
		/*END MENU JS*/
		
		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		$('.co-video-play').magnificPopup({
            type: 'iframe'
        });
		$('.product_item').mixItUp();
		/*END VIDEO JS*/	

		/* START VIDEO POPUP JS */
		$('.magnific_popup').magnificPopup({
		  disableOn: 700,
		  type: 'iframe',
		  mainClass: 'mfp-fade',
		  removalDelay: 160,
		  preloader: false,
		  fixedContentPos: false,
		  disableOn: 300
		});			

		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  items : 5,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/		

		/*START TESTIMONIAL JS*/	
		$("#testimonial-slider").owlCarousel({
		   items:4,
			itemsDesktop:[1000,4],
			itemsDesktopSmall:[980,4],
			itemsTablet:[768,3],
			itemsMobile:[650,1],
			pagination:true,
			navigation:true,
			navigationText:["",""],
			slideSpeed:1000,
			autoPlay:false
		});
		/*END TESTIMONIAL JS*/

		/* START EVENT JS */
		 $("#event-slider").owlCarousel({
			items:3,
			itemsDesktop:[1199,3],
			itemsDesktopSmall:[979,2],
			itemsTablet:[768,2],
			itemsMobile:[600,1],
			pagination: false,
			navigation:true,
			navigationText:["",""],
			slideSpeed:1000,
			autoPlay:false
		});
		/* END EVENT JS */		
			
	}); 		
	
	/*START RANGE SLIDER*/
	    var rangeSlider = function(){
        var slider = $('.range-slider'),
            range = $('.range-slider input[type="range"]'),
            value = $('.range-value');
        slider.each(function(){
            value.each(function(){
                var value = $(this).prev().attr('value');
                $(this).html(value);
            });
            range.on('input', function(){
                $(this).next(value).html(this.value);
            });
        });
    };
    rangeSlider();
	/*END RANGE SLIDER*/
	
	/*INITIATE PURE COUNTER*/
		new PureCounter();
	
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
			
})(jQuery);


// MODAL

// Get the modal graphic
var modal = document.getElementById("myModal");

// Get the div that opens the modal
var trigger = document.getElementById("modalTrigger");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("gclose")[0];

// When the user clicks on the div, open the modal
trigger.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onscroll = function() {
    modal.style.display = "none";
}


// Get the modal webdesign
var wbmyModal = document.getElementById("wbmyModal");

// Get the div that opens the modal
var wbTrigger = document.getElementById("wbTrigger");

// Get the <span> element that closes the modal
var wclose = document.getElementsByClassName("wclose")[0];

// When the user clicks on the div, open the modal
wbTrigger.onclick = function() {
    wbmyModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
wclose.onclick = function() {
    wbmyModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == wbmyModal) {
        wbmyModal.style.display = "none";
    }
}

window.onscroll = function() {
    wbmyModal.style.display = "none";
}



// Get the modal uiux designing
var uiuxmyModal = document.getElementById("uiuxmyModal");

// Get the div that opens the modal
var uiuxTrigger = document.getElementById("uiuxTrigger");

// Get the <span> element that closes the modal
var uclose = document.getElementsByClassName("uclose")[0];

// When the user clicks on the div, open the modal
uiuxTrigger.onclick = function() {
    uiuxmyModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
uclose.onclick = function() {
    uiuxmyModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == uiuxmyModal) {
        uiuxmyModal.style.display = "none";
    }
}

window.onscroll = function() {
    uiuxmyModal.style.display = "none";
}




// Get the modal fullstack designing
var fsmyModal = document.getElementById("fsmyModal");

// Get the div that opens the modal
var fsTrigger = document.getElementById("fsTrigger");

// Get the <span> element that closes the modal
var fsclose = document.getElementsByClassName("fsclose")[0];

// When the user clicks on the div, open the modal
fsTrigger.onclick = function() {
    fsmyModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
fsclose.onclick = function() {
    fsmyModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == fsmyModal) {
        fsmyModal.style.display = "none";
    }
}

window.onscroll = function() {
    fsmyModal.style.display = "none";
}

// Get the modal aidigital designing
var dcmyModal = document.getElementById("dcmyModal");

// Get the div that opens the modal
var dcTrigger = document.getElementById("dcTrigger");

// Get the <span> element that closes the modal
var dcclose = document.getElementsByClassName("dcclose")[0];

// When the user clicks on the div, open the modal
dcTrigger.onclick = function() {
    dcmyModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
dcclose.onclick = function() {
    dcmyModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == dcmyModal) {
        dcmyModal.style.display = "none";
    }
}

window.onscroll = function() {
    dcmyModal.style.display = "none";
}


// Get the modal digital marketing 
var dmmyModal = document.getElementById("dmmyModal");

// Get the div that opens the modal
var dmTrigger = document.getElementById("dmTrigger");

// Get the <span> element that closes the modal
var dmclose = document.getElementsByClassName("dmclose")[0];

// When the user clicks on the div, open the modal
dmTrigger.onclick = function() {
    dmmyModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
dmclose.onclick = function() {
    dmmyModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == dmmyModal) {
        dmmyModal.style.display = "none";
    }
}

window.onscroll = function() {
    dmmyModal.style.display = "none";
}










  

