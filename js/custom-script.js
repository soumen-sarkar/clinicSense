$(document).ready(function(){
	
	//Image carousel
	$('.carousel').carousel({
		//interval: 4000
	});
	
	$('.tourCat').on('click',function(){
		$('.tourCat').removeClass('selected');
		$(this).addClass('selected');
		
		//get  href attr val
		var data_target = $(this).attr('data-target');
		//alert(data_target);
		
		$('.eachTourContent').removeClass('active');
		$('#'+data_target).addClass('active');
	});
	
	/* Sticky Header */
	function sticky_relocate() {
		var window_top = $(window).scrollTop();
		var div_top = $('#sticky-anchor').offset().top;
		var btn_top = $('#sticky-btn-anchor').offset().top;
		
		if (window_top > div_top) {
			$('#sticky').addClass('stick');
		} else {
			$('#sticky').removeClass('stick');
		}
		
		if(window_top > btn_top){
			$('.shyBtn').hide();
			$('.magicBtn').show();
			$('img.logo').css({"float": "left"});
			if(screen.width>480){
				$('.magicBtn').css({"display": "inline-block", "float": "right"});
			}
			else{
				$('.magicBtn').css({"display": "inline-block", "float": "none"});
			}
			
		}
		else{
			$('.magicBtn').css({"float": "none !important"});
			$('.magicBtn').hide();
			$('.shyBtn').show();
			$('img.logo').css({"float": "none !important", "display": "block", "margin-left": "auto", "margin-right": "auto"});
			
		}
		
	}
	$(function () {
		$(window).scroll(sticky_relocate);
		sticky_relocate();
	});
	
});
