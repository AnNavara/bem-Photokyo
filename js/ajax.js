(function() {
	var form = document.getElementById("form");
	var success = form.querySelector(".form-success");
	var close = form.querySelector(".form-success__close");

	form.addEventListener("submit", function(event) {
		event.preventDefault();

		success.classList.add("form-success--active");

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

	close.addEventListener("tap", function(event) {
		event.preventDefault();
		success.classList.remove("form-success--active");
	});

	window.addEventListener("keydown", function(event) {
			if (event.keyCode == 27 && success.classList.contains("form-success--active")) {
					success.classList.remove("form-success--active");
			}
	});

	function request(data, fn) {
		var xhr = new XMLHttpRequest();

		xhr.open("post", "/send?" + (new Date()).getTime());

		xhr.addEventListener("readystatechange", function() {
			if (xhr.readyState == 4) {
				fn(xhr.resposeText);
				}
		});

	xhr.send(data);
	}

})();

/*
		var form = document.getElementById("form");
		var data = new FormData(form);
*/
