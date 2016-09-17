$(document).ready (function() {

	$(".startBtn").on("click", function() {
		window.location.href="/currentseating";

		return false;
	});

	$(".csSelectBtn").on("click", function() {
		window.location.href="/currentseating";

		return false;
	});


	$(".ranSeatBtn").on("click", function(){
		window.location.href="/randomseating";
		
		return false;
	});

	$(".asSeatBtn").on("click", function(){
		window.location.href="/ascendingseating";
		
		return false;
	});

	$(".dsSeatBtn").on("click", function(){
		window.location.href="/descendingseating";
		
		return false;
	});

	$(".ranGroupBtn").on("click", function(){
		window.location.href="/randomgroups";
		
		return false;
	});

	$(".ranParBtn").on("click", function() {
		window.location.href="/randomparticipation";

		return false;
	});



});


