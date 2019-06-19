$(function() {

	$("#username_error_message").hide();
	$("#password_error_message").hide();
	$("#retype_password_error_message").hide();
	$("#email_error_message").hide();
	$("#phone_error_message").hide();


	var error_username = false;
	var error_password = false;
	var error_retype_password = false;
	var error_email = false;
	var error_phone = false;

	$("#name_regist").focusout(function() {

		check_username();
		
	});

	$("#pass_regist").focusout(function() {

		check_password();
		
	});

	$("#cnfrm_pass_regist").focusout(function() {

		check_retype_password();
		
	});

	$("#phone_regist").focusout(function() {

		check_password();
		
	});

	$("#email_regist").focusout(function() {

		check_email();
		
	});

	function check_username() {
	
		var username_length = $("#name_regist").val().length;
		
		if(username_length < 5 || username_length > 20) {
			$("#username_error_message").html("Should be between 6-20 characters");
			$("#username_error_message").show();
			error_username = true;
		} else {
			$("#username_error_message").hide();
		}
	
	}

	function check_phone() {
	
		var phone_length = $("#phone_regist").val().length;
		
		if(phone_length != 10) {
			$("#phone_error_message").html("Enter proper Phone Number");
			$("#phone_error_message").show();
			error_username = true;
		} else {
			$("#phone_error_message").hide();
		}
	
	}

	function check_password() {
	
		var password_length = $("#pass_regist").val().length;
		
		if(password_length < 8) {
			$("#password_error_message").html("At least 8 characters");
			$("#password_error_message").show();
			error_password = true;
		} else {
			$("#password_error_message").hide();
		}
	
	}

	function check_retype_password() {
	
		var password = $("#pass_regist").val();
		var retype_password = $("#cnfrm_pass_regist").val();
		
		if(password !=  retype_password) {
			$("#retype_password_error_message").html("Passwords don't match");
			$("#retype_password_error_message").show();
			error_retype_password = true;
		} else {
			$("#retype_password_error_message").hide();
		}
	
	}

	function check_email() {

		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	
		if(pattern.test($("#email_regist").val())) {
			$("#email_error_message").hide();
		} else {
			$("#email_error_message").html("Invalid email address");
			$("#email_error_message").show();
			error_email = true;
		}
	
	}



	$("#regist_form").submit(function() {
											
		error_username = false;
		error_password = false;
		error_retype_password = false;
		error_email = false;
		error_phone = false;
											
		check_username();
		check_password();
		check_retype_password();
		check_email();
		check_phone();
		
		if(error_username == false && error_password == false && error_retype_password == false && error_email == false && error_phone == false) {
			return true;
		} else {
			return false;	
		}

	});

});