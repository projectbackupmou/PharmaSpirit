//testimonial_slider
var cc = $('#client_logo_slider');
cc.owlCarousel({
	autoplay:false,
    loop:true,
    nav:false,
	dots:true,
	margin:20,
	animationSpeed: 200,
	
	//animateOut: 'fadeOut',
    items: 1,
	navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ],
	
	responsive : {
    // breakpoint from 0 up
   0:{
            items:1,
            nav:false
        },
    // breakpoint from 480 up
   480:{
            items:2,
            nav:false,	
        },
    // breakpoint from 768 up
    768:{
            items:4,
            nav:false,
        },
		
		992:{
            items:5,
            nav:false,
        }
	
}
});

jQuery(document).ready(function(){
	jQuery(window).scroll(function(){
	if (jQuery(this).scrollTop() > 100) {
	jQuery('#scrollup').fadeIn();
	} else {
	jQuery('#scrollup').fadeOut();
	}
	});
	jQuery('#scrollup').click(function(){
	jQuery("html, body").animate({ scrollTop: 0 }, 400);
	return false;
	});
	});
//script to create sticky header 
jQuery(function(){
    createSticky(jQuery("#sticky-wrap"));
});

function createSticky(sticky) {
    if (typeof sticky != "undefined") {

        var pos = sticky.offset().top ,
            win = jQuery(window);

        win.on("scroll", function() {

            if( win.scrollTop() > pos ) {
                sticky.addClass("stickyhead");
            } else {
                sticky.removeClass("stickyhead");
            }           
        });         
    }
}
	
	
	   /*wow = new WOW(
	   {
	   animateClass: 'animated',
	   offset:       200
	   }
	   );
	   wow.init();*/
jQuery(document).ready(function($) {
			jQuery('.stellarnav').stellarNav({
				theme: 'dark',
				breakpoint: 991,
				position: 'right'
				//phoneBtn: '18009997788',
				//locationBtn: 'https://www.google.com/maps'
			});
		});
jQuery(document).ready(function() {
     
		    jQuery(".li_search").click(function() {
		       jQuery(".search-box").toggle();
		       jQuery("input[type='text']").focus();
		     });
 
 		});	