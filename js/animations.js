$(document).ready(function() {

	//VARIABLES

	//Tween Vars
	var first = $('#first');
	var second = $('#second');
	var third = $('#third');
	var fourth = $('#fourth');

	var t1 = $('#title1');
	var t2 = $('#title2');
	var t3 = $('#title3');
	var t4 = $('#title4');

	//Timer vars
	var seconds = 1;

	//Text objects

	var titles = {
		'1': 'Code',
		'2': 'CoTN',
		'3': 'Boats',
		'4': 'Music'
	};

	var content = {
		'1': 'Here is a lot of cool text about code.',
		'2': 'Here is some text about a meme game.',
		'3': '2D boats are really cool.',
		'4': 'I listen to way too much music.'
	};

	//FUNCTIONS

	var fadeIntoContent = function(title, idx) {

		console.log('hovered over container');

		var thecontent = content[idx];

		setTimeout(function() { title.html(thecontent)},(seconds*1000));
		TweenMax.to(title,seconds,{autoAlpha:0});
		TweenMax.to(title,seconds,{autoAlpha:1, delay:seconds});
	};

	var fadeIntoTitle = function(title, idx) {

		console.log('leave container');

		var thetitle = titles[idx];

		setTimeout(function() { title.html(thetitle)},(seconds*1000));
		TweenMax.to(title,seconds,{autoAlpha:0});
		TweenMax.to(title,seconds,{autoAlpha:1, delay:seconds});
	};

	//INIT

	first.hover(function() {fadeIntoContent(t1,'1')}, function() {fadeIntoTitle(t1,'1')});
	second.hover(function() {fadeIntoContent(t2,'2')}, function() {fadeIntoTitle(t2,'2')}); 
	third.hover(function() {fadeIntoContent(t3,'3')}, function() {fadeIntoTitle(t3,'3')}); 
	fourth.hover(function() {fadeIntoContent(t4,'4')}, function() {fadeIntoTitle(t4,'4')});  

});