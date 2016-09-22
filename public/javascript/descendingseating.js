$(document).ready (function() {



var sdNumber = ["Desk01", "Desk02", "Desk03", "Desk04", "Desk05", "Desk06", "Desk07", "Desk08",
				"Desk09", "Desk10", "Desk11", "Desk12", "Desk13", "Desk14", "Desk15", "Desk16",
				"Desk17", "Desk18", "Desk19", "Desk20", "Desk21", "Desk22", "Desk23", "Desk24",
				"Desk25", "Desk26", "Desk27", "Desk28", "Desk29", "Desk30"];

var sdA = [$(".A01"), $(".A02"), $(".A03"), $(".A04"), $(".A05"), $(".A06"), $(".A07"), $(".A08"), 
		   $(".A09"), $(".A10"), $(".A11"), $(".A12"), $(".A13"), $(".A14"), $(".A15"), $(".A16"), 
		   $(".A17"), $(".A18"), $(".A19"), $(".A20"), $(".A21"), $(".A22"), $(".A23"), $(".A24"),
		   $(".A25"), $(".A26"), $(".A27"), $(".A28"), $(".A29"), $(".A30")];


var sdNames = [$(".sn01"), $(".sn02"), $(".sn03"), $(".sn04"), $(".sn05"), $(".sn06"), $(".sn07"), 
			   $(".sn08"), $(".sn09"), $(".sn10"), $(".sn11"), $(".sn12"), $(".sn13"), $(".sn14"),
			   $(".sn15"), $(".sn16"), $(".sn17"), $(".sn18"), $(".sn19"), $(".sn20"), $(".sn21"), 
			   $(".sn22"), $(".sn23"), $(".sn24"), $(".sn25"), $(".sn26"), $(".sn27"), $(".sn28"), 
			   $(".sn29"), $(".sn30")];


	
	$.ajax({
	    url: "/roster",
	    dataType: 'json',
	    success: function(studentapi){
	     
	      
	       var tempR = [];
	       
	       console.log(studentapi);

	       

	for (var d=0; d<studentapi.length; d++) {
	 			tempR.push(studentapi[d].name.sort().reverse());
	 			console.log(studentapi[d].name);
	    	}

	 for (var d=0; d<sdA.length && d<tempR[0].length; d++) {

	var studentNameString;
	if (tempR[0][d] == null) {
		studentNameString = "&nbsp"
	} else {
		studentNameString = tempR[0][d]
		console.log(studentNameString);
	}
		$(sdA[d].prepend('<br/><div class="studentName">' + studentNameString + 
			'</div>'));
	 
	}

	console.log(tempR[0]);



	var clonedRoster = tempR[0].slice();
	if (clonedRoster.length > 30) 
	clonedRoster.length = 30;


	

	



	$('.dsSaveBtn').on('click', function(){

		
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