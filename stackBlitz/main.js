//  Создайте  корзину с инпутами - продукт, категория, стоимость, доставка, значение которых будет автоматически сохраняться при каждом их изменении. Последнее введённое значение должно сохраняться если пользователь закроет и заново откроет страницу.
// Использовать бустрап
// Local Storage. Classwork
// Обязательное условие: Использовать бустрап

// Задание №1
// Создайте  корзину с инпутами - продукт, категория, стоимость, доставка, значение которых будет автоматически сохраняться при каждом их изменении. Последнее введённое значение должно сохраняться если пользователь закроет и заново откроет страницу.

// Задание №2
// Создайте форму обратной связи используя  селекторы, события и localStorage
// Например форма должна содержать поля - имя, имейл, сообщение, кнопки отправить и очистить

//1
let data = [];
let btnSend = document.querySelector('.btn-send');
function createProduct() {
	e.preventDefault();
	let inpTitle = document.querySelector('#title-inp');
	let inpCat = document.querySelector('#category-inp');
	let inpPrice = document.querySelector('#price-inp');
	let inpDelivery = document.querySelector('#delivery-inp');
	let inps = document.querySelector('input');

	inps.forEach(item => {
		if (item.value) {
			alert('All inputs');
		}
	});
	data.push({
		title: inpTitle.value,
		category: inpCat.value,
		price: inpPrice.value,
		delivery: inpDelivery.value,
	});
}

if (localStorage.getItem('product')) {
	productInput.value = localStorage.getItem('product');
	categoryInput.value = localStorage.getItem('category');
	priceInput.value = localStorage.getItem('price');
	deliveryInput.value = localStorage.getItem('delivery');
}

productInput.addEventListener('input', function () {
	localStorage.setItem('product', productInput.value);
});
categoryInput.addEventListener('input', function () {
	localStorage.setItem('category', categoryInput.value);
});
priceInput.addEventListener('input', function () {
	localStorage.setItem('price', priceInput.value);
});
deliveryInput.addEventListener('input', function () {
	localStorage.setItem('delivery', deliveryInput.value);
});
