

//---------------------------login------------------------------------------

$(document).ready(function() {
    $(".submit").click(function() {
        var mobile = $(".mobile").val();
        var password = $(".password").val();
        console.log(mobile);
        console.log(password);
        if (mobile == '') {
            console.log('hello')
        } else {
            var data = JSON.stringify({
                "password": password,
                "mobile": mobile
            });
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
            var response = this.responseText;
            var pasre = JSON.parse(response);
            var token = pasre["token"];
            console.log(token);
            localStorage.setItem('token', token);
            window.location.href = 'index.html';
            $(".dash").show();

            
  }
});
            xhr.open("POST", "http://manan.pythonanywhere.com/1.0/login");
            xhr.setRequestHeader("content-type", "application/json");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.send(data);
        }
    });
});


///----------------------Get user information----------------------------------

var data = null;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function() {
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



$("#logout").click(function() {
    localStorage.removeItem("token");
    $(".btn_login").show();
    $(".btn_register").show();
    window.location.href = 'index.html';
})


