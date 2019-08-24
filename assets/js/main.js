jQuery(document).ready(function($){
	
	$(".slider-area").owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn'
		
	});
	
	$(".client-fitback-carousel").owlCarousel({
		items:1,
		loop:true,
		margin:30,
		nav:false,
		dots:true,
		autoplay:true
		
		
	});
	
	$(".advisor-slide-area").owlCarousel({
		items:1,
		loop:true,
		margin:30,
		nav:true,
		dots:true,
		autoplay:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
		
		
	});
	
	$(".logo-carousel").owlCarousel({
		items:4,
		loop:true,
		margin:30,
		nav:false,
		dots:true,
		autoplay:true
		
		
		
	});
	
	//video
	
	$(".video-play-btn").magnificPopup({
        type: 'iframe'
    });
	
	//counterUp
	
	$(".counter-number").counterUp({
			delay: 10,
            time: 1000
			
		});
	//barfiller
		
	$('#bar1').barfiller({
		barColor:'#1a8bb3'
	});
	$('#bar2').barfiller({
		barColor:'#1a8bb3'
	});
	$('#bar3').barfiller({
		barColor:'#1a8bb3'
	});
	$('#bar4').barfiller({
		barColor:'#1a8bb3'
	});
});