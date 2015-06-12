(function() {

	var slideshow = (function () {
		var numSlides = document.querySelectorAll(".gallery-item").length,
			currentSlideIndex = 0,
			running = false,
			slideSelector = document.querySelectorAll(".gallery-item"),
			currentSlide,
			newSlide,
			counter = document.querySelector(".slider__counter"),
			mode;

		function animateSlides (newMode) {
			// prevents function from running while an animation is active
			if (running) {
				return false;
			}
			running = true;

			//define target slides factoring in passed-in mode argument
			mode = newMode;
			setTargets(newMode);

			//set staging position
			newSlide.style.left = mode === "prev" ? "-100%" : "100%";
			currentSlide.style.left = "0%";

			newSlide.classList.remove("gallery-item--inactive");

			//begins both animations
			animate(newSlide);
			animate(currentSlide);
		}

		// defines target slides according to direction of animation
		function setTargets() {
			// get the index of the next slide. hard reset to 0 or numSlides (-1) so slideshow can loop back
			if (mode === "prev") {
				newSlideIndex = slideSelector[currentSlideIndex - 1] === undefined ? (numSlides - 1) : currentSlideIndex - 1;
			} else {
				newSlideIndex = slideSelector[currentSlideIndex + 1] === undefined ? 0 : currentSlideIndex + 1;
			}

			currentSlide = slideSelector[currentSlideIndex];
			newSlide = slideSelector[newSlideIndex];
			counter.innerHTML = newSlideIndex + 1 + " " + "/" + " " + numSlides;

		}

		function animate (slide) {
			var i = 0;

			// animation interval
			var animationInt = setInterval(function(){
				//animate one tick according to direction
				slide.style.left = mode === "prev" ? ( parseInt(slide.style.left) + 5 ) + "%"
													: ( parseInt(slide.style.left) - 5 ) + "%";

				i++;
				if(i >= 20) {
					stopAnimation();
				}
			}, 20);

			// clears interval, returns all elements to a nominal state
			function stopAnimation () {
				currentSlide.classList.add("gallery-item--inactive");
				newSlide.style.left = "0%";
				clearInterval(animationInt);
				currentSlideIndex = newSlideIndex;
				running = false;
			}
		}

		// sets the container height to the height of slides. height not defined in css.
		window.onload = setContainerSize;
		window.onresize = setContainerSize;

		function setContainerSize() {
			var container = document.getElementsByClassName("slider")[0];
			container.style.height = getComputedStyle(slideSelector[currentSlideIndex]).height;
		}

		// expose the private animate function & call with appropriate argument
		return {
			nextSlide: function () {
				animateSlides("next");
			},
			prevSlide: function () {
				animateSlides("prev");
			}
		};
	})();

	document.querySelector(".slider__counter").innerHTML = 1 + " " + "/" + " " + document.querySelectorAll(".gallery-item").length;

	var prevArrow = document.getElementById("slider-left");
	var nextArrow = document.getElementById("slider-right");

	prevArrow.addEventListener("tap", slideshow.prevSlide);
	nextArrow.addEventListener("tap", slideshow.nextSlide);

})();
