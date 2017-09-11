var elementWay = document.querySelector('.btn-way');
var elementPopupMap = document.querySelector('.map');
var elementClosePopupMap = document.querySelector('.map .close');
var modalOverlay = document.querySelector('.modal-overlay');

// событие на клик по way
elementWay.addEventListener('click', function(event){
	event.preventDefault();
	elementPopupMap.classList.add('show');
	modalOverlay.style.display = 'block';
});

// событие на закрытие popupMap
elementClosePopupMap.addEventListener('click', function(event){
	event.preventDefault();
	elementPopupMap.classList.remove('show');
	modalOverlay.style.display = 'none';
});

window.addEventListener('keydown', function(event){
	if (event.keyCode == 27){
		if (elementPopupMap.classList.contains('show')){
			elementPopupMap.classList.remove('show');
		}
	}
});