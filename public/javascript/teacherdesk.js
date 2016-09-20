$(document).ready (function() {


	$('#cktd2a').css('opacity', '0');
	$('#cktd9a').css('opacity', '0');



$(function() {
	$("input[type=\"radio\"]").click(function(){
		var thisElem = $(this);
		var value = thisElem.val();
        $(".box").css('opacity', '0');
		$("."+value).css('opacity', '0');
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



	



 $('.tdSelectBtn').click(function(){
var temp1 = $("input[value='td1']:checked").val();
var temp2 = $("input[value='td2']:checked").val();
var temp3 = $("input[value='td3']:checked").val();
var temp4 = $("input[value='td4']:checked").val();
var temp5 = $("input[value='td5']:checked").val();
var temp6 = $("input[value='td6']:checked").val();
var temp7 = $("input[value='td7']:checked").val();
var temp8 = $("input[value='td8']:checked").val();
var temp9 = $("input[value='td9']:checked").val();
var temp10 = $("input[value='td10']:checked").val();
var temp11 = $("input[value='td11']:checked").val();
var temp12 = $("input[value='td12']:checked").val(); 

if(temp1){
	$('#cktd1').css('opacity', '1');
	$('#cktd2').css('opacity', '0');
	$('#cktd3').css('opacity', '0');
	$('#cktd4').css('opacity', '0');
	$('#cktd5').css('opacity', '0');
	$('#cktd6').css('opacity', '0');
	$('#cktd7').css('opacity', '0');
	$('#cktd8').css('opacity', '0');
	$('#cktd9').css('opacity', '0');
	$('#cktd10').css('opacity', '0');
	$('#cktd11').css('opacity', '0');
	$('#cktd12').css('opacity', '0');
		
} else if (temp2){
	$('#cktd1').css('opacity', '0');
	$('#cktd2').css('opacity', '1');
	$('#cktd3').css('opacity', '0');
	$('#cktd4').css('opacity', '0');
	$('#cktd5').css('opacity', '0');
	$('#cktd6').css('opacity', '0');
	$('#cktd7').css('opacity', '0');
	$('#cktd8').css('opacity', '0');
	$('#cktd9').css('opacity', '0');
	$('#cktd10').css('opacity', '0');
	$('#cktd11').css('opacity', '0');
	$('#cktd12').css('opacity', '0');	
} else if (temp3){
	$('#cktd1').css('opacity', '0');
	$('#cktd2').css('opacity', '0');
	$('#cktd3').css('opacity', '1');
	$('#cktd4').css('opacity', '0');
	$('#cktd5').css('opacity', '0');
	$('#cktd6').css('opacity', '0');
	$('#cktd7').css('opacity', '0');
	$('#cktd8').css('opacity', '0');
	$('#cktd9').css('opacity', '0');
	$('#cktd10').css('opacity', '0');
	$('#cktd11').css('opacity', '0');
	$('#cktd12').css('opacity', '0');
} else if (temp4){
	$('#cktd1').css('opacity', '0');
	$('#cktd2').css('opacity', '0');
	$('#cktd3').css('opacity', '0');
	$('#cktd4').css('opacity', '1');
	$('#cktd5').css('opacity', '0');
	$('#cktd6').css('opacity', '0');
	$('#cktd7').css('opacity', '0');
	$('#cktd8').css('opacity', '0');
	$('#cktd9').css('opacity', '0');
	$('#cktd10').css('opacity', '0');
	$('#cktd11').css('opacity', '0');
	$('#cktd12').css('opacity', '0');
} else if (temp5){
	$('#cktd1').css('opacity', '0');
	$('#cktd2').css('opacity', '0');
	$('#cktd3').css('opacity', '0');
	$('#cktd4').css('opacity', '0');
	$('#cktd5').css('opacity', '1');
	$('#cktd6').css('opacity', '0');
	$('#cktd7').css('opacity', '0');
	$('#cktd8').css('opacity', '0');
	$('#cktd9').css('opacity', '0');
	$('#cktd10').css('opacity', '0');
	$('#cktd11').css('opacity', '0');
	$('#cktd12').css('opacity', '0');
} else if (temp6){
	$('#cktd1').css('opacity', '0');
	$('#cktd2').css('opacity', '0');
	$('#cktd3').css('opacity', '0');
	$('#cktd4').css('opacity', '0');
	$('#cktd5').css('opacity', '0');
	$('#cktd6').css('opacity', '1');
	$('#cktd7').css('opacity', '0');
	$('#cktd8').css('opacity', '0');
	$('#cktd9').css('opacity', '0');
	$('#cktd10').css('opacity', '0');
	$('#cktd11').css('opacity', '0');
	$('#cktd12').css('opacity', '0');
} else if (temp7){
	$('#cktd1').css('opacity', '0');
	$('#cktd2').css('opacity', '0');
	$('#cktd3').css('opacity', '0');
	$('#cktd4').css('opacity', '0');
	$('#cktd5').css('opacity', '0');
	$('#cktd6').css('opacity', '0');
	$('#cktd7').css('opacity', '1');
	$('#cktd8').css('opacity', '0');
	$('#cktd9').css('opacity', '0');
	$('#cktd10').css('opacity', '0');
	$('#cktd11').css('opacity', '0');
	$('#cktd12').css('opacity', '0');
} else if (temp8){
	$('#cktd1').css('opacity', '0');
	$('#cktd2').css('opacity', '0');
	$('#cktd3').css('opacity', '0');
	$('#cktd4').css('opacity', '0');
	$('#cktd5').css('opacity', '0');
	$('#cktd6').css('opacity', '0');
	$('#cktd7').css('opacity', '0');
	$('#cktd8').css('opacity', '1');
	$('#cktd9').css('opacity', '0');
	$('#cktd10').css('opacity', '0');
	$('#cktd11').css('opacity', '0');
	$('#cktd12').css('opacity', '0');
} else if (temp9){
	$('#cktd1').css('opacity', '0');
	$('#cktd2').css('opacity', '0');
	$('#cktd3').css('opacity', '0');
	$('#cktd4').css('opacity', '0');
	$('#cktd5').css('opacity', '0');
	$('#cktd6').css('opacity', '0');
	$('#cktd7').css('opacity', '0');
	$('#cktd8').css('opacity', '0');
	$('#cktd9').css('opacity', '1');
	$('#cktd10').css('opacity', '0');
	$('#cktd11').css('opacity', '0');
	$('#cktd12').css('opacity', '0');
}else if (temp10){
	$('#cktd1').css('opacity', '0');
	$('#cktd2').css('opacity', '0');
	$('#cktd3').css('opacity', '0');
	$('#cktd4').css('opacity', '0');
	$('#cktd5').css('opacity', '0');
	$('#cktd6').css('opacity', '0');
	$('#cktd7').css('opacity', '0');
	$('#cktd8').css('opacity', '0');
	$('#cktd9').css('opacity', '0');
	$('#cktd10').css('opacity', '1');
	$('#cktd11').css('opacity', '0');
	$('#cktd12').css('opacity', '0');
}else if (temp11){
	$('#cktd1').css('opacity', '0');
	$('#cktd2').css('opacity', '0');
	$('#cktd3').css('opacity', '0');
	$('#cktd4').css('opacity', '0');
	$('#cktd5').css('opacity', '0');
	$('#cktd6').css('opacity', '0');
	$('#cktd7').css('opacity', '0');
	$('#cktd8').css('opacity', '0');
	$('#cktd9').css('opacity', '0');
	$('#cktd10').css('opacity', '0');
	$('#cktd11').css('opacity', '1');
	$('#cktd12').css('opacity', '0');
}else if (temp12){
	$('#cktd1').css('opacity', '0');
	$('#cktd2').css('opacity', '0');
	$('#cktd3').css('opacity', '0');
	$('#cktd4').css('opacity', '0');
	$('#cktd5').css('opacity', '0');
	$('#cktd6').css('opacity', '0');
	$('#cktd7').css('opacity', '0');
	$('#cktd8').css('opacity', '0');
	$('#cktd9').css('opacity', '0');
	$('#cktd10').css('opacity', '0');
	$('#cktd11').css('opacity', '0');
	$('#cktd12').css('opacity', '1');
}
}); 

});