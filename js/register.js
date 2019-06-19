$("#registration").click(function () {

        var name_regist = document.getElementById('name_regist').value;
        var email_regist = $("#email_regist").val();
        var phone_regist = $("#phone_regist").val();
        var pass_regist = $("#pass_regist").val();
        var cnfrm_pass_regist= $("#cnfrm_pass_regist").val();

        var data = JSON.stringify({
  "name": name_regist,
  "password": pass_regist,
  "confirm_password": cnfrm_pass_regist,
  "mobile": phone_regist,
  "email": email_regist
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    
    var returnData = this.responseText;
    var response = JSON.parse(returnData);
    console.log(response);
    if("data" in response) {
    window.location.href = 'edit_profile.html';
      console.log("success");
    }
    else {
      // console.log(returnData);
      var toast = returnData.slice(13,-2);
      toastr.error(toast)
    }

  }
});

xhr.open("POST", "http://manan.pythonanywhere.com/1.0/register");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("Postman-Token", "19456dcc-994a-4f03-b813-d48cd8bf3963");

xhr.send(data);

})