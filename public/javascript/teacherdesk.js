$(document).ready (function() {


	$('#cktd2a').css('opacity', '0');
	$('#cktd9a').css('opacity', '0');





$(function() {
	$("input[type=\"radio\"]").click(function(){
		var thisElem = $(this);
		var value = thisElem.val();
        $(".box").css('opacity', '0');
		$("."+value).css('opacity', '1');
		//localStorage:
		localStorage.setItem("option", value);
		//Cookies:
		//document.cookie="option="+value;
    });
	//localStorage:
	var itemValue = localStorage.getItem("option");
	if (itemValue !== null) {
		$("input[value=\""+itemValue+"\"]").click();
	}	

});



	



 

});