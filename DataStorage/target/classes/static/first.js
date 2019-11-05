	function formValidation() {
		
		var name = document.getElementById('name');
		var date = document.getElementById('date');
		var phonenumber = document.getElementById('phonenumber');
		var address = document.getElementById('address');
		if (name.value.length == 0) {
			document.getElementById('room').innerText = "* All fields are mandatory *"; 
			name.focus();
			return false;
			}
		else{
		
		if (inputAlphabet(name, "* For your name please use alphabets only *")) {
		if (lengthDefine(name, 3, 8)) {
		if (DateValidation(date, "* Please enter a valid date format *")) {
		if (textNumeric(phonenumber, "* Please enter numbers only")) {
		if (textAlphanumeric(address, "* For Address please use numbers and letters *")) {
		
		  return true;
          //return ajaxPost();
		}
		}
		}
		}
		
		return false;
		}
		
		function textNumeric(inputtext, alertMsg) {
		var numericExpression =/^(?=.*([6-9]))([0-9]){10}$/;
		if (inputtext.value.match(numericExpression)) {
		return true;
		} else {
		document.getElementById('phoneerror').innerText = alertMsg; 
		
		return false;
		}
		}
		
		function inputAlphabet(inputtext, alertMsg) {
		var alphaExp = /^[a-zA-Z]+$/;
		if (inputtext.value.match(alphaExp)) {
		return true;
		} else {
		document.getElementById('usererror').innerText = alertMsg;  
		alert(alertMsg);
		
		return false;
		}
		}
		
		function textAlphanumeric(inputtext, alertMsg) {
		var alphaExp = /^[0-9a-zA-Z]+$/;
		if (inputtext.value.match(alphaExp)) {
		return true;
		} else {
		document.getElementById('addresserror').innerText = alertMsg; 
		
		return false;
		}
		}
		
		function lengthDefine(inputtext, min, max) {
		var uInput = inputtext.value;
		if (uInput.length >= min && uInput.length <= max) {
		return true;
		} else {
		document.getElementById('usererror').innerText = "* Please enter between " + min + " and " + max + " characters *";  
		
		return false;
		}
		}
		
		function DateValidation(inputtext, alertMsg) {
			var udate=/^(19|20)\d{2}-(0|1)\d{1}-((0|1|2)\d{1})$/;
		if (inputtext.value.match(udate)) {
		
			return true;
			}
		else{
		document.getElementById('dateerror').innerText ="please enter valid date format"; 
		return false;
		} 
		}
		}
		
	}

