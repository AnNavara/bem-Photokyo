(function() {
	var form = document.getElementById("form");

	form.addEventListener("submit", function(event) {
		event.preventDefault();

		var elements = form.querySelectorAll(".contact-form input[type=text], .contact-form textarea");
		var data = "";

		for (var i = 0; i < elements.length; i++){
			var element = elements[i];

			var name = element.name;
			var value = element.value;

			data = data + encodeURIComponent(name) + "=" + encodeURIComponent(value) + "&";
		}

		request(data, function(response) {
			console.log(response);
		});

	});

	function request(data, fn) {
		var xhr = new XMLHttpRequest();

		xhr.open("post", "/send?" + (new Date()).getTime());

		xhr.addEventListener("readystatechange", function() {
			if (xhr.readyState == 4) {
				fn(xhr.resposeText);
				}
		});

	console.log(data);
	xhr.send(data);
	}

})();

/*
		var form = document.getElementById("form");
		var data = new FormData(form);
*/
