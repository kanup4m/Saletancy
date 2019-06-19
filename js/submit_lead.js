///////-------------------POST USER LEAD ------------------------//

	$(document).ready(function() {
		$("#suubmit_lead").click(function() {
			var title = $("#title").val();
			var description = $("#description").val();
			var category = $("#category").val();
			var sub_cat = $("#sub_cat").val();
			var feature = $("#features").val();
			var tag = $("#tag").val();
			var price = $("#price").val();
			var score = $("#score").val();


			var data = JSON.stringify({
               
			"title":title,
			"description":description,
			"category":category,
	   		"subcategory":sub_cat,
	   		"price":price,
	   		"tag":tag,
	   		"feature":feature,
	   		"score":score
     		});


			var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
    window.location.href = 'listing_detail.html';
      }
});

var toke = localStorage.getItem("token");
xhr.open("POST", "http://manan.pythonanywhere.com/1.0/leads");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-authorization-token", toke);
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);


		})
	})



// var data = null;

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === 4) {
//     console.log(this.responseText);
//     var lead_data = this.responseText;
//     var lead_result = JSON.parse(lead_data);
//         var lead_name = lead_result.data.name;
//         var lead_price= lead_result.data.price;
//         var lead_sub_cat=lead_result.data.subcategory;
//   }
// });
// var toke = localStorage.getItem("token");
// xhr.open("GET", "http://manan.pythonanywhere.com/1.0/leads");
// xhr.setRequestHeader("x-authorization-token", toke);
// xhr.setRequestHeader("cache-control", "no-cache");
// xhr.setRequestHeader("Postman-Token", "87c89a73-d353-45ff-84af-7fcd72d89af3");

// xhr.send(data);