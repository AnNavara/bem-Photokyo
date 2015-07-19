(function() {

	var portfolio_popup = document.getElementById("portfolio_popup");
	var portfolio_close = document.getElementById("portfolio_close");
	var pics 						= document.querySelector(".portfolio__wrapper");
	var popup_img 			= document.querySelector(".popup__img");
	var popup_link 			= document.querySelector(".popup__link");
	var btn_prev 				= document.querySelector(".popup__prev");
	var btn_next 				= document.querySelector(".popup__next");
	var btn_close_big		= document.querySelector(".popup__close--big");

	pics.addEventListener("tap", function(e) {
			e.preventDefault();
			e = e || window.event;
			var target = e.target || e.srcElement;
			if (target.tagName === "IMG" )

			portfolio_popup.classList.add("popup--active");

			var items_nodelist = document.querySelectorAll(".portfolio__item");
			items_arr = [];
			for (var i = 0; i < items_nodelist.length; i++){
				var self = items_nodelist[i];
				items_arr.push(self);
			}

			index = items_arr.indexOf(target.parentElement);

			change_atri(index);
	});

	btn_next.addEventListener("tap", function(e) {
		e.preventDefault();
		if (index < items_arr.length - 1) {index++;}
		else {index = 0;}
		change_atri(index);
	});

	btn_prev.addEventListener("tap", function(e) {
		e.preventDefault();
		if (index < items_arr.length && index >= 1) {index--;}
		else {index = items_arr.length - 1;}
		change_atri(index);
	});

	close(portfolio_close, portfolio_popup, "popup--active");
	close(btn_close_big, portfolio_popup, "popup--active");

	function close(btn, object, object_css_class) {
		btn.addEventListener("tap", function(e){
			e.preventDefault();
			object.classList.remove(object_css_class);
		});
	}

	function change_atri(elem_index){
		popup_img.setAttribute("src", items_arr[elem_index].getAttribute("data-img"));
		popup_link.setAttribute("href", items_arr[elem_index].getAttribute("href"));
	}
})();
