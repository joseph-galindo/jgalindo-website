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

	var c1 = $('#content1');
	var c2 = $('#content2');
	var c3 = $('#content3');
	var c4 = $('#content4');

	//Text vars

	var seconds = 1;

	//FUNCTIONS

	var fadeoutTitle = function(title, content) {

		console.log('hovered over container');

		TweenMax.to(title,1,{autoAlpha:0});
		TweenMax.to(content,1,{autoAlpha:1});
	};

	var fadeoutContent = function(title, content) {

		console.log('leave container');

		TweenMax.to(title,1,{autoAlpha:1});
		TweenMax.to(content,1,{autoAlpha:0});
	};

	//INIT

	first.hover(function() {fadeoutTitle(t1,c1)}, function() {fadeoutContent(t1,c1)});
	second.hover(function() {fadeoutTitle(t2,c2)},function() {fadeoutContent(t2,c2)}); 
	third.hover(function() {fadeoutTitle(t3,c3)},function() {fadeoutContent(t3,c3)}); 
	fourth.hover(function() {fadeoutTitle(t4,c4)},function() {fadeoutContent(t4,c4)});  

});