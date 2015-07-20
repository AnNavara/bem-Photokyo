(function(){

	var drop_el = document.getElementById("dropdown-menu");
	var drop_btn = document.getElementById("dropdown-menu__toggle");
	var review_el = document.getElementById("review-form");
	var review_btn = document.getElementById("add-review");
	var review_close = document.getElementById("review-close");

	drop_btn.addEventListener("tap", function(e) {
		e.preventDefault();
		drop_el.classList.toggle("dropdown-menu__container--show");
		drop_btn.classList.toggle("dropdown-menu__toggle--active");
	});

	review_btn.addEventListener("tap", function(e) {
		e.preventDefault();
		review_el.classList.toggle("add-review__form--show");
	});

	review_close.addEventListener("tap", function(e) {
		e.preventDefault();
		review_el.classList.toggle("add-review__form--show");
	});

	window.addEventListener("keydown", function(event) {
	    if (event.keyCode == 27 && drop_el.classList.contains("dropdown-menu__container--show")) {
	      drop_el.classList.remove("dropdown-menu__container--show");
				drop_btn.classList.remove("dropdown-menu__toggle--active");
	  	} else if(event.keyCode == 27 && review_el.classList.contains("add-review__form--show")) {
				review_el.classList.remove("add-review__form--show");
			}
	});
})();

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

(function() {

	document.querySelector(".slider__counter").innerHTML = 1 + " " + "/" + " " + document.querySelectorAll(".gallery-item").length;

	$(document).ready(function(){
		$(".slider").slick({
			prevArrow: $(".slider__btn"),
			nextArrow: $(".slider__btn--right")
		});
	});
	$(".slider").on("beforeChange", function(event, slick, currentSlide, nextSlide){
		document.querySelector(".slider__counter").innerHTML = (nextSlide + 1) + " " + "/" + " " + (document.querySelectorAll(".gallery-item").length - 2);
	});
})();
