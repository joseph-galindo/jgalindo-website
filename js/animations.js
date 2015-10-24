$(document).ready(function() {

	console.log('doc ready');

	//Tween Vars
	var first = $('#first');
	var second = $('#second');
	var third = $('#third');
	var fourth = $('#fourth');

	var t1 = $('#title1');
	var t2 = $('#title2');
	var t3 = $('#title3');
	var t4 = $('#title4');

	//Text vars

	var colorfirst = first.css('background-color');
	var colorsecond = second.css('background-color');

	var seconds = 10;

	var tweenContainers = function() {

		TweenMax.to(first,seconds,{backgroundColor:colorsecond, ease: Sine.easeInOut});
		TweenMax.to(second,seconds,{backgroundColor:colorfirst, ease: Sine.easeInOut});
		TweenMax.to(third,seconds,{backgroundColor:colorsecond, ease: Sine.easeInOut});
		TweenMax.to(fourth,seconds,{backgroundColor:colorfirst, ease: Sine.easeInOut});

		TweenMax.to(t1,seconds,{color:colorfirst, ease: Sine.easeInOut});
		TweenMax.to(t2,seconds,{color:colorsecond, ease: Sine.easeInOut});
		TweenMax.to(t3,seconds,{color:colorfirst, ease: Sine.easeInOut});
		TweenMax.to(t4,seconds,{color:colorsecond, ease: Sine.easeInOut});

		var temp = colorfirst;
		colorfirst = colorsecond;
		colorsecond = temp;
	};

	//to start at t=0
	tweenContainers();
	//then loop infinitely
	setInterval(tweenContainers,seconds*1000);

});

//Functions

var x = function() {
	return 1+2;
};