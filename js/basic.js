



$(document).ready(function() {
 
if (localStorage.getItem('token') != null) {
	console.log('hello');
	$(".btn_login").hide();
	$(".btn_register").hide();
}
else {
$(".dash").hide();
}

});
