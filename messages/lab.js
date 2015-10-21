function parse() {

	var request = new XMLHttpRequest();
	var url = "data.json";

	request.open("GET", url, true);

	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200){
			var response = JSON.parse(request.responseText);

			elem = document.getElementById("messages");
			for(key in response){
				var message = response[key];
				elem.innerHTML += "<div id='message'>" + message["content"] + "</div>" + " -" + "<div id='username'>" + message["username"] + "</div>";
			}
		}
	}

	request.send();
}