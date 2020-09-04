window.onload = () => {
	let button = document.getElementById('interested__button'),
		search = document.getElementById('search'),
		btn_old_minus = document.getElementById('btn_old_minus'),
		btn_old_plus = document.getElementById('btn_old_plus'),
		btn_young_minus = document.getElementById('btn_young_minus'),
		btn_young_plus = document.getElementById('btn_young_plus');

	button.addEventListener('click', () => {
		search.classList.toggle('search_active');
	});
	
	btn_old_minus.addEventListener('click', () => {
		if (btn_old_minus.parentNode.childNodes[5].value > 0) {
			btn_old_minus.parentNode.childNodes[5].value -= 1;
		}
	});

	btn_old_plus.addEventListener('click', () => {
		if (btn_old_plus.parentNode.childNodes[5].value < 9) {
			btn_old_plus.parentNode.childNodes[5].value = +btn_old_plus.parentNode.childNodes[5].value + 1;
		}
	});

	btn_young_minus.addEventListener('click', () => {
		if (btn_young_minus.parentNode.childNodes[5].value > 0) {
			btn_young_minus.parentNode.childNodes[5].value -= 1;
		}
	});
	
	btn_young_plus.addEventListener('click', () => {
		if (btn_young_plus.parentNode.childNodes[5].value < 9) {
			btn_young_plus.parentNode.childNodes[5].value = +btn_young_plus.parentNode.childNodes[5].value + 1;
		}
	});
};


// ======================
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});