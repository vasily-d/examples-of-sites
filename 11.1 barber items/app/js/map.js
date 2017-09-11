var elementWay = document.querySelector(".btn-way");
var elementPopupMap = document.querySelector(".map");
var elementClosePopupMap = document.querySelector(".map .close");

// событие на клик по way
elementWay.addEventListener("click", function(event){
	event.preventDefault();
	elementPopupMap.classList.add("show");
});

// событие на закрытие popupMap
elementClosePopupMap.addEventListener("click", function(event){
	event.preventDefault();
	elementPopupMap.classList.remove("show");
});

window.addEventListener("keydown", function(event){
	if (event.keyCode == 27){
		if (elementPopupMap.classList.contains("show")){
			elementPopupMap.classList.remove("show");
		}
	}
});