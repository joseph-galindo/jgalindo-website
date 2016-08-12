$(function() {

	//declare functions

	function checkHeaderPos() {
		var currentTop = $(window).scrollTop();
		var headerHeight = $('.first-row').height();
		var isFixed = $('.header').hasClass('fixed');

		if(currentTop >= headerHeight && !isFixed) {
			//if scrolled past the height of the header
			//and the header has not been fixed yet
			//fix the header
			$('.header').addClass('fixed');
		}

		if(currentTop < headerHeight && isFixed) {
			//if scrolled before the height of the header
			//and the header is fixed from prior scrolling
			//unfix the header
			$('.header').removeClass('fixed');
		}
	}

	function checkNav() {
	    var nav = $('.header')
	    var anchor = nav.find('a');
	    var current = window.location.pathname.split('/')[1];
	    // current = current.replace('.html','');

	    for (var i = 0; i < anchor.length; i++) {

	    	//this split is messy...doublecheck this works as intended in prod environment

	        if((anchor[i].href).split('/')[3] == current) {
	            anchor[i].className = "active";
	        }

	        if(current == '') {
	        	anchor[0].className = "active";
	        }
	    }
	}

	//declare listeners

	$(window).scroll(function(event) {
		checkHeaderPos();
	});

	//arbitrary executions go here

	checkNav();
});