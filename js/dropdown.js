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

	// document.addEventListener("tap", function(e) {
	// 	if (element.classList.contains("dropdown-menu__container--show")){
	// 		element.classList.remove("dropdown-menu__container--show");
	// 	}
	// });

	window.addEventListener("keydown", function(event) {
	    if (event.keyCode == 27 && drop_el.classList.contains("dropdown-menu__container--show")) {
	      drop_el.classList.remove("dropdown-menu__container--show");
				drop_btn.classList.remove("dropdown-menu__toggle--active");
	  	} else if(event.keyCode == 27 && review_el.classList.contains("add-review__form--show")) {
				review_el.classList.remove("add-review__form--show");
			}
	});

})();
