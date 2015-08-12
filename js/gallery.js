(function() {

	var popup 					= document.getElementById("popup");
	var popup_close 		= document.getElementById("popup_close");
	var popup_img 			= document.querySelector(".popup__img");
	var popup_link 			= document.querySelector(".popup__link");
	var btn_prev 				= document.querySelector(".popup__prev");
	var btn_next 				= document.querySelector(".popup__next");
	var btn_close_big		= document.querySelector(".popup__close--big");
	var popup_counter		= document.querySelector(".popup__counter");

	var portfolio_pics	= document.querySelector(".portfolio__wrapper");
	var gallery_pics 		= document.querySelector(".gallery");

	img_gal(portfolio_pics, ".portfolio__item");

	function img_gal(clickable, node_list){
		clickable.addEventListener("tap", function(e) {
			event.preventDefault();
			e = e || window.event;
			var target = e.target || e.srcElement;
			if (target.tagName === "IMG")

			popup.classList.add("popup--active");
			var items_nodelist = document.querySelectorAll(node_list);
			var items_arr = [];
			for (var i = 0; i < items_nodelist.length; i++){
				var self = items_nodelist[i];
				items_arr.push(self);
			}

			var index = items_arr.indexOf(target.parentElement);
			change_atri(index, items_arr);
			popup_counter.innerHTML = (index + 1) + " фото из " + items_arr.length;

			btn_next.addEventListener("tap", function(e) {
				event.preventDefault();
				if (index < items_arr.length - 1) {index++;}
				else {index = 0;}
				change_atri(index, items_arr);
			});

			btn_prev.addEventListener("tap", function(e) {
				event.preventDefault();
				if (index < items_arr.length && index >= 1) {index--;}
				else {index = items_arr.length - 1;}
				change_atri(index, items_arr);
			});

			close(popup_close, popup, "popup--active");
			close(btn_close_big, popup, "popup--active");

			function change_atri(elem_index, arr){
				popup_img.setAttribute("src", arr[elem_index].getAttribute("data-img"));
				popup_link.setAttribute("href", arr[elem_index].getAttribute("href"));
				popup_counter.innerHTML = (elem_index + 1) + " фото из " + arr.length;
			}

			function close(btn, object, object_css_class) {
				btn.addEventListener("tap", function(e){
					e.preventDefault();
					object.classList.remove(object_css_class);
				});
			}
		});
	}
})();
