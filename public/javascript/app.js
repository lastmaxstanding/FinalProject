$(document).ready (function() {



var sdNumber = ["Desk01", "Desk02", "Desk03", "Desk04", "Desk05", "Desk06", "Desk07", "Desk08",
				"Desk09", "Desk10", "Desk11", "Desk12", "Desk13", "Desk14", "Desk15", "Desk16",
				"Desk17", "Desk18", "Desk19", "Desk20", "Desk21", "Desk22", "Desk23", "Desk24",
				"Desk25", "Desk26", "Desk27", "Desk28", "Desk29", "Desk30"];

var sdA = [$(".A01"), $(".A02"), $(".A03"), $(".A04"), $(".A05"), $(".A06"), $(".A07"), $(".A08"), 
		   $(".A09"), $(".A10"), $(".A11"), $(".A12"), $(".A13"), $(".A14"), $(".A15"), $(".A16"), 
		   $(".A17"), $(".A18"), $(".A19"), $(".A20"), $(".A21"), $(".A22"), $(".A23"), $(".A24"),
		   $(".A25"), $(".A26"), $(".A27"), $(".A28"), $(".A29"), $(".A30")];

var radioB = [$('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a01" }),
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a02" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a03" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a04" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a05" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a06" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a07" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a08" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a09" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a10" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a11" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a12" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a13" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a14" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a15" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a16" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a17" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a18" }), 
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a19" }),
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a20" }),
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a21" }),
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a22" }),
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a23" }),
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a24" }),
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a25" }),
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a26" }),
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a27" }),
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a28" }),
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a29" }),
			  $('<input/>', { type: "checkbox", id: "one", class: "butt", value: "a30" })]; 



// var tempR = [
// 	"Barry Allen",
// 	"Bruce Banner",
// 	"Clint Barton",
// 	"Arthur Curry",
// 	null,
// 	null,
// 	"Clark Kent", 
// 	"Scott Lang",
// 	"Lex Luthor",
// 	"Pietro Maximoff",
// 	"Wanda Maximoff",
// 	"Matt Murdock",
// 	"Edward Nigma",
// 	"Otto Octavius",
// 	"Norman Osborn",
// 	"Peter Parker",
// 	"Kitty Pride",
// 	"Diana Prince",
// 	"Harley Quinn",
// 	null,
// 	"Reed Richards",
// 	"Steve Rogers",
// 	"Natasha Romanoff", 
// 	"Tony Stark",
// 	null, 
// 	"Johnny Storm", 
// 	"Susan Storm",
// 	"Jennifer Walters",
// 	"Bruce Wayne", 
// 	"Wade Wilson"
	
// ];

	

	$.ajax({
	    url: "/students",
	    dataType: 'json',
	    success: function(studentapi){
	     
	      
	       var tempR = [];
	       
	       console.log(studentapi);

	       

	for (var d=0; d<studentapi.length; d++) {
	 			tempR.push(studentapi[d].name);
	 			console.log(studentapi[d].name);
	    	}

	 for (var d=0; d<sdA.length && d<sdNumber.length && d<tempR[0].length && d<radioB.length; d++) {

	var studentNameString;
	if (tempR[0][d] == null) {
		studentNameString = "&nbsp"
	} else {
		studentNameString = tempR[0][d]
	}
		$(sdA[d].prepend(sdNumber[d] + '<br/><div class="studentName">' + studentNameString + 
			'</div><br/>'));
	 
	}

	console.log(tempR[0]);



	var clonedRoster = tempR[0].slice();
	if (clonedRoster.length > 30) 
	clonedRoster.length = 30;

	$('#remove').click(function(){
		var clicked = [];
		// var clonedRoster = [];//var clonedRoster = tempR.slice(); //clones if no input
		
 	 //    
 		 $('.great:checked').each(function(){  

          var values = $(this).val();
          clicked.push(clonedRoster[values]);
          clonedRoster[values] = null;
          $(this).siblings('.studentName').text("");
          $(this).prop('checked',false);

          
         

          
   
      });

 		console.log(clonedRoster);
     
	});

	

	$('#add').click(function(){

		var valLast = $('#last').val().trim();
		var valFirst = $('#first').val().trim();
		var valSeat = parseInt($('#seat').val().trim() - 1);
		var valFL = valFirst + " " + valLast;

		// if (valLast == "") {
		// 	alert("Please Type a Last Name");
		// } else if (valFirst == "") {
		// 	alert("Please Type a First Name");
		// } else if (valSeat == 0 || "" || valSeat>30);
		// 	alert("Please Type a Proper Seat Number");


		$('#last').text("");

		clonedRoster.push(clonedRoster.splice(valSeat, 1, valFL));

		if (clonedRoster.length > 30)
			clonedRoster.length = 30;


	for (var c=0; c<clonedRoster.length && c<sdA.length && c<sdNumber.length; c++){
			var studentNameString2;
			if(clonedRoster[c] == null) {
		studentNameString2 = "&nbsp"
		} else {
		studentNameString2 = clonedRoster[c];
		}
		$(sdA[c].find('.studentName').html(studentNameString2));


	 
	}
				
				




		//console.log(clonedRoster.length);
		//console.log(clonedRoster);



		




 		

			}); //closes add button

	$('#save').on('click', function(){

		
		console.log(clonedRoster);

		


$.ajax({



            method: 'POST',

            url: '/students',

            data: {
            	
                updatedRoster: clonedRoster,
                
            },

            success: function(response){
                console.log(response);
                if (response == 'success'){
                    alert('Successfully updated');
                    
                } else {
                    alert('Error');
                }
            }

        

		}); //closes 2nd ajax

}); //closes save button


		} //closing results

	}); //closing ajax









	

}); //closing document ready