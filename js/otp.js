///send and verify otp
$(".send_otp").click(function() {

	var otp_send = $(".otp").val();
	var mobile = $(".mobile").val();
	// console.log(otp);
	var data = JSON.stringify({
  "mobile": mobile
});
	console.log(mobile);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    var response = this.responseText;
    var pasre = JSON.parse(response);
    var otp = pasre["otp"];
    localStorage.setItem('store_otp',otp);
    console.log(otp);    

var data = JSON.stringify({
  "mobile": mobile,
  "otp": otp
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://manan.pythonanywhere.com/1.0/verify_otp");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "80ff55ff-cdba-16e3-0db4-59a0fbdc6a27");

xhr.send(data);




  }
});

xhr.open("POST", "http://manan.pythonanywhere.com/1.0/send_otp");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "77035002-9888-dcdd-6041-18be7c2cf7fc");
xhr.send(data);
})

//login via otp


$(".submit").click(function() {
  var mobile = $(".mobile").val();
  var otp_value = $(".otp").val();
  var otp = localStorage.getItem('store_otp');
  console.log(otp);
  console.log(otp_value);
  if(otp_value===otp) {

    var data = JSON.stringify({
  "mobile": mobile,
  "otp": otp_value
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    // console.log(this.responseText);
            $(".dash").show();
    var response = this.responseText;
    var pasre = JSON.parse(response);
    var token = pasre["token"];
    console.log(token);
    localStorage.setItem('token', token);
      window.location.href = 'index.html';

  }
});

xhr.open("POST", "http://manan.pythonanywhere.com/1.0/login");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "68668997-baf3-bd83-1eb3-f6a262918be3");

xhr.send(data);



  }





})


//Get user information

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    // console.log(this.responseText);
    var profile = this.responseText;
    var result = JSON.parse(profile);
    var name = result.data.name;
    var email = result.data.email;
    var phone = result.data.mobile;

 document.getElementById("name").value = name; 
 document.getElementById("email").value = email; 
 document.getElementById("phone").value = phone; 



  }
});
var toke = localStorage.getItem("token");

xhr.open("GET", "http://manan.pythonanywhere.com/1.0/user/me");
xhr.setRequestHeader("x-authorization-token", toke);
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "8fdafd70-1f9b-5f78-dfb7-9c4a33940e44");

xhr.send(data);





