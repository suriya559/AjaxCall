


function ajaxPost(){
			 
			var formData= {
					name :  $("#name").val(),
			      address : $("#address").val(),
			      date  :   $("#date").val(),
			phonenumber  :  $("#phonenumber").val(),
			}
			$.ajax({
				url: "saveData",
				type : "POST",
				 data : JSON.stringify(formData),
				 contentType : "application/json; charset=utf-8",
			    dataType: 'json',
			success: function(result){
				if(result.status=="success"){
					$("#resultdatadiv").html("<strong>"+
						result.data.name+" "
						   +" data stored successfully!!! </br>"
						+" ThankYou!!"+"</p>" +"</strong>"
						);		
					}else{
						$("#resultdata").html("<strong>Error</strong>");
					}
			
				},
				error : function(e) {
			        alert("Error!")
			        console.log("ERROR: ", e);
			      }
			    });
			
			
			      
			     
			      resetData();
			 
			    }
			    
			    function resetData(){
			      $("#name").val("");
			      $("#address").val("");
			      $("#date").val("");
			      $("#phonenumber").val("");
			    }
	    
