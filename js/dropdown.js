(function(){

	var element = document.getElementById("dropdown-menu");
	var button = document.getElementById("dropdown-menu__toggle");

	button.addEventListener("tap", function(e) {
		e.preventDefault();
		element.classList.toggle("dropdown-menu__container--show");
		button.classList.toggle("dropdown-menu__toggle--active");
	});

	// document.addEventListener("tap", function(e) {
	// 	if (element.classList.contains("dropdown-menu__container--show")){
	// 		element.classList.remove("dropdown-menu__container--show");
	// 	}
	// });

	window.addEventListener("keydown", function(event) {
	    if (event.keyCode == 27 && element.classList.contains("dropdown-menu__container--show")) {
	        element.classList.remove("dropdown-menu__container--show");
					button.classList.remove("dropdown-menu__toggle--active");
	  	}
	});

})();
