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
