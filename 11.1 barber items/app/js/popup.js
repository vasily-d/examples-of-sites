var elementLogin = document.querySelector(".login");
var elementPopup = document.querySelector(".popup");
var elementClosePopup = document.querySelector(".popup .close");
var elementLoginInPopup = elementPopup.querySelector("[name=login]"); 
var elementPasswordInPopup = elementPopup.querySelector("[name=password]"); 
var form = elementPopup.querySelector("form");
var storage = localStorage.getItem("login"); //null ?

// событие на клик по логину в header
elementLogin.addEventListener("click", function(event){
	event.preventDefault();

	//elementClosePopup.style.display = "block";
	elementPopup.classList.add("show");

	// focus на login
	elementLoginInPopup.focus();

	if(storage){
		elementLoginInPopup.value = storage;
		elementPasswordInPopup.focus();	
	}
	else{
		// focus на login
		elementLoginInPopup.focus();
	}
});

// событие на закрытие popup
elementClosePopup.addEventListener("click", function(event){
	event.preventDefault();
	elementPopup.classList.remove("show");
	elementPopup.classList.remove("modal-error");
});

// событие на отправку формы
form.addEventListener("submit", function(event){
	var valueLogin = elementLoginInPopup.value;
	var valuePassword = elementPasswordInPopup.value;
	
	if(!valueLogin || !valuePassword){
		event.preventDefault();
		elementPopup.classList.add("modal-error");
		console.log("error in login or/and password");
	}
	else{
		localStorage.setItem("login", valueLogin);
		console.log("ok");
	}
});

window.addEventListener("keydown", function(event){
	if (event.keyCode == 27){
		if (elementPopup.classList.contains("show")){
			elementPopup.classList.remove("show");
			elementPopup.classList.remove("modal-error");

		}
	}
});