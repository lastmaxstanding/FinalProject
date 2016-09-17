$(document).ready (function() {



var sdNumber = ["Desk01", "Desk02", "Desk03", "Desk04", "Desk05", "Desk06", "Desk07", "Desk08",
				"Desk09", "Desk10", "Desk11", "Desk12", "Desk13", "Desk14", "Desk15", "Desk16",
				"Desk17", "Desk18", "Desk19", "Desk20", "Desk21", "Desk22", "Desk23", "Desk24",
				"Desk25", "Desk26", "Desk27", "Desk28", "Desk29", "Desk30"];

var sdA = [$(".A01"), $(".A02"), $(".A03"), $(".A04"), $(".A05"), $(".A06"), $(".A07"), $(".A08"), 
		   $(".A09"), $(".A10"), $(".A11"), $(".A12"), $(".A13"), $(".A14"), $(".A15"), $(".A16"), 
		   $(".A17"), $(".A18"), $(".A19"), $(".A20"), $(".A21"), $(".A22"), $(".A23"), $(".A24"),
		   $(".A25"), $(".A26"), $(".A27"), $(".A28"), $(".A29"), $(".A30")];

var sdB = [$(".B01"), $(".B02"), $(".B03"), $(".B04"), $(".B05"), $(".B06"), $(".B07"), $(".B08"), 
		   $(".B09"), $(".B10"), $(".B11"), $(".B12"), $(".B13"), $(".B14"), $(".B15"), $(".B16"), 
		   $(".B17"), $(".B18"), $(".B19"), $(".B20"), $(".B21"), $(".B22"), $(".B23"), $(".B24"),
		   $(".B25"), $(".B26"), $(".B27"), $(".B28"), $(".B29"), $(".B30")];

var sdC = [$(".C01"), $(".C02"), $(".C03"), $(".C04"), $(".C05"), $(".C06"), $(".C07"), $(".C08"), 
		   $(".C09"), $(".C10"), $(".C11"), $(".C12"), $(".C13"), $(".C14"), $(".C15"), $(".C16"), 
		   $(".C17"), $(".C18"), $(".C19"), $(".C20"), $(".C21"), $(".C22"), $(".C23"), $(".C24"),
		   $(".C25"), $(".C26"), $(".C27"), $(".C28"), $(".C29"), $(".C30")];

var sdD = [$(".D01"), $(".D02"), $(".D03"), $(".D04"), $(".D05"), $(".D06"), $(".D07"), $(".D08"), 
		   $(".D09"), $(".D10"), $(".D11"), $(".D12"), $(".D13"), $(".D14"), $(".D15"), $(".D16"), 
		   $(".D17"), $(".D18"), $(".D19"), $(".D20"), $(".D21"), $(".D22"), $(".D23"), $(".D24"),
		   $(".D25"), $(".D26"), $(".D27"), $(".D28"), $(".D29"), $(".D30")];

var sdE = [$(".E01"), $(".E02"), $(".E03"), $(".E04"), $(".E05"), $(".E06"), $(".E07"), $(".E08"), 
		   $(".E09"), $(".E10"), $(".E11"), $(".E12"), $(".E13"), $(".E14"), $(".E15"), $(".E16"), 
		   $(".E17"), $(".E18"), $(".E19"), $(".E20"), $(".E21"), $(".E22"), $(".E23"), $(".E24"),
		   $(".E25"), $(".E26"), $(".E27"), $(".E28"), $(".E29"), $(".E30")];

var sdF = [$(".F01"), $(".F02"), $(".F03"), $(".F04"), $(".F05"), $(".F06"), $(".F07"), $(".F08"), 
		   $(".F09"), $(".F10"), $(".F11"), $(".F12"), $(".F13"), $(".F14"), $(".F15"), $(".F16"), 
		   $(".F17"), $(".F18"), $(".F19"), $(".F20"), $(".F21"), $(".F22"), $(".F23"), $(".F24"),
		   $(".F25"), $(".F26"), $(".F27"), $(".F28"), $(".F29"), $(".F30")];

var sdG = [$(".G01"), $(".G02"), $(".G03"), $(".G04"), $(".G05"), $(".G06"), $(".G07"), $(".G08"), 
		   $(".G09"), $(".G10"), $(".G11"), $(".G12"), $(".G13"), $(".G14"), $(".G15"), $(".G16"), 
		   $(".G17"), $(".G18"), $(".G19"), $(".G20"), $(".G21"), $(".G22"), $(".G23"), $(".G24"),
		   $(".G25"), $(".G26"), $(".G27"), $(".G28"), $(".G29"), $(".G30")];

var sdH = [$(".H01"), $(".H02"), $(".H03"), $(".H04"), $(".H05"), $(".H06"), $(".H07"), $(".H08"), 
		   $(".H09"), $(".H10"), $(".H11"), $(".H12"), $(".H13"), $(".H14"), $(".H15"), $(".H16"), 
		   $(".H17"), $(".H18"), $(".H19"), $(".H20"), $(".H21"), $(".H22"), $(".H23"), $(".H24"),
		   $(".H25"), $(".H26"), $(".H27"), $(".H28"), $(".H29"), $(".H30")];

var sdNames = [$(".sn01"), $(".sn02"), $(".sn03"), $(".sn04"), $(".sn05"), $(".sn06"), $(".sn07"), 
			   $(".sn08"), $(".sn09"), $(".sn10"), $(".sn11"), $(".sn12"), $(".sn13"), $(".sn14"),
			   $(".sn15"), $(".sn16"), $(".sn17"), $(".sn18"), $(".sn19"), $(".sn20"), $(".sn21"), 
			   $(".sn22"), $(".sn23"), $(".sn24"), $(".sn25"), $(".sn26"), $(".sn27"), $(".sn28"), 
			   $(".sn29"), $(".sn30")];




for (var d=0; d<sdA.length && d<sdNumber.length; d++) {
	 $(sdA[d].html(sdNumber[d]));
}
	

$('#cktd2a').css('opacity', '0');
$('#cktd9a').css('opacity', '0');

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

$('.asBtn').css('opacity', '0');
$('.raninv').css('opacity', '0');


	$.ajax({
	    url: "/roster",
	    dataType: 'json',
	    success: function(studentapi){
	     
	      
	       var tempR = [];
	       
	       console.log(studentapi);

	       

	for (var d=0; d<studentapi.length; d++) {
	 			tempR.push(studentapi[d].name.sort());
	 			console.log(studentapi[d].name);
	    	}

	 for (var d=0; d<sdNames.length && d<tempR[0].length; d++) {

	var studentNameString;
	if (tempR[0][d] == null) {
		studentNameString = "&nbsp"
	} else {
		studentNameString = tempR[0][d]
		console.log(studentNameString);
	}
		$(sdNames[d].prepend('<br/><div class="studentName">' + studentNameString + 
			'</div><br/>'));
	 
	}

	console.log(tempR[0]);



	var clonedRoster = tempR[0].slice();
	if (clonedRoster.length > 30) 
	clonedRoster.length = 30;


	

	



	$('.asSaveBtn').on('click', function(){

		
		console.log(clonedRoster);

		


$.ajax({



            method: 'POST',

            url: '/roster',

            data: {
            	
                updatedRoster: clonedRoster,
                
            },

            success: function(response){
                console.log(response);
                if (response == 'success'){
                    alert('Successfully updated');
                    console.log(clonedRoster);
                    
                } else {
                    alert('Error');
                }
            }

        

		}); //closes 2nd ajax

}); //closes save button


		} //closing studentapi results

	}); //closing ajax









	

}); //closing document ready