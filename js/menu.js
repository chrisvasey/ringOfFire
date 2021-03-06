//DIV HIDES
$(window).load(function(){
	$(".menu").hide();
	$(".game").hide();
	$(".rules").hide();
	$(".info").hide();
});


//MENU LOAD
$(window).load(function(){
	$(".menu").fadeIn('slow');
});

// //DEV SET
// $(window).load(function(){
// 	$(".game").fadeIn('slow');
// });

//playGame Button
$(document).ready(function(){
	$(".gameBtn").click(function() {
		$(".menu").fadeOut('fast');
		$(".game").delay(400).fadeIn('slow');
	});
});

//Rules Button
$(document).ready(function(){
	$(".rulesBtn").click(function() {
		$(".menu").fadeOut('fast');
		$(".game").fadeOut('fast');
		$(".rules").delay(400).fadeIn('slow');
	});
});

//Info Button
$(document).ready(function(){
	$(".infoBtn").click(function() {
		$(".menu").fadeOut('fast');
		$(".info").delay(400).fadeIn('slow');
	});
});

//Back Button
$(document).ready(function(){
	$(".back").click(function() {
		$(".game").fadeOut('fast');
		$(".rules").fadeOut('fast');
		$(".info").fadeOut('fast');
		$(".menu").delay(400).fadeIn('slow');
	});
});