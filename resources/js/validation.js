$( document ).ready(function() {
	function textIsBlank(varName)
	{
		if((varName.value).replace(/^\s+|\s+$/gm,'').length == 0) 
		{
			changeTextboxAppearance(varName);
			return true;
		}
		return false;
	}

	function changeTextboxAppearance(varName)
	{
		varName.focus();
		varName.style.borderColor="red";
	}

	function validateName() {
		var varName = document.getElementById("name");
		if (textIsBlank(varName) == true) 
		{
			sweetAlert("Oops...", "You left the Name field blank!", "error");
			return false;
		}
		if (varName.value.length >= 2 && (/^[A-Za-z\s]+$/.test(varName.value))==true) 
		{
			varName.style.borderColor="none";
			return true;
		}
		else if (varName.value.length < 2 && (/^[A-Za-z\s]+$/.test(varName.value))==true){
			changeTextboxAppearance(varName);
			sweetAlert("Oops...", "The Name you entered is too short!", "error");
			return false;
		}
		else {
			changeTextboxAppearance(varName);
			sweetAlert("Oops...", "Sorry, special characters and numbers are not allowed!", "error");
			return false;
		}
	}

	function validateEmail()
	{
		var varEmail = document.getElementById("email");
		var regexpr=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (textIsBlank(varEmail) == true) 
		{
			changeTextboxAppearance(varEmail);
			sweetAlert("Oops...", "You left the Email field blank!", "error");
			return false;
		}
		if (regexpr.test(varEmail.value) != true)
		{
			changeTextboxAppearance(varEmail);
			sweetAlert("Oops...", "Please enter a valid email address!", "error");
			return false;
		}
		else
		{
			varEmail.style.borderColor="none";
			return true;
		}
	}


	function validateForm() {
		if(validateName() == true & validateEmail() == true)
		{
			$.ajax({
				type: "POST",
				url: "formProcess.php",
				data: $("#form-contact").serialize(),
				success: function(text){
					formSuccess();
					$('#name').val('');
					$('#email').val('');
					$('#message').val('');
					$('#name').style.borderColor="#fff";
					$('#email').style.borderColor="#fff";
					console.log(text);
				},
				error: function(text){
					formFailure();
					console.log(text);
				}
			});	
		}
		else
		{
			validateName();
			validateEmail();
		}
	}
	
	$('#form-contact').submit(function(event) {

		// Stop the browser from submitting the form.
		
		event.preventDefault();
		validateForm();
	});
	
	/*function submitForm() {
		$.ajax({
			type: "POST",
			url: "formProcess.php",
			data: $('#form-contact').serialize(),
			success: function(text){
				if (text == "success"){
					if(validateName() & validateEmail()) {
						formSuccess();
					}
					else {
						formFailure();
					}
				}
			},
			error: function(text){
				alert(text);
			}
		});
	}*/
	
	function formSuccess(){
		swal("Good job!", "Your information was sent successfully!", "success");
	}
	
	
	function formFailure(){
		sweetAlert("Oops...", "Some error occured", "error");
	}

		/*if(validateForm()) {
			$.ajax({
				type: 'POST',
				// url: $(form).attr('action'),
				data: $('#form-contact').serialize(),
				// dataType: "JSON",
				url: "formProcess.php",
				success: function(){
					swal("Good job!", "Your information was sent successfully!", "success");
					
					
	//				alert("Thankyou");
					//alert("Success" + data);
					// Clear the form.
					$('#name').val('');
				//	$('#name').focus();
					$('#name').style.borderColor="#fff";
					$('#email').val('');
					$('#email').style.borderColor="#fff";
					$('#message').val('');
					
				},
				error: function(){
                    sweetAlert("Oops...", "Some error occured here", "error");
					// Make sure that the formMessages div has the 'error' class.
				}
			});	
		} else {
			sweetAlert("Oops...", "Some error occured", "error");
		}
	}); */
});