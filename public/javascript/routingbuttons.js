$(document).ready (function() {

	$(".csSelectBtn").on("click", function(){
		window.location.href="/";
		s
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

	$("#faqs").on("click", function() {
		window.location.href="/faq";

		return false;
	});

	$("#loginButton").on("click", function(){
		window.location.href="/login";

		return false;
	});

	$("#registerButton").on("click", function(){
		window.location.href="/register";

		return false;
	});

	$("#logoutButton").on("click", function(){
		window.location.href="/logout";

		return false;
	});

	$("#contactUs").on("click", function(){
		window.location.href="/contact";

		return false;
	});

});


