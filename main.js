// mini-project
function initStorage() {
	if (!localStorage.getItem('product-data')) {
		localStorage.setItem('product-data', '[]');
	}
}
initStorage();

function setProductsToStorage(product) {
	localStorage.setItem('product-data', JSON.stringify(product));
}

function getProductsFromStorage() {
	let products = JSON.parse(localStorage.getItem('product-data'));
	return products;
}
//render
function render() {
	let container = document.querySelector('.container');
	container.innerHTML = '';
	let data = getProductsFromStorage();
	data.forEach(item => {
		container.innerHTML += `<div class="card w-25 m-2 " style="width: 18rem;" id="${item.id}">
		<img src="${item.url}" height="250" width="100%" class="card-img-top" alt="error">
		<div class="card-body">
			<h5 class="card-title">${item.title}</h5>
			<p class="card-text"><b>Price:</b> ${item.price}</p>
			<a href="#" class="btn btn-primary btn-danger delete-product-btn">Delete</a>
			<a href="#" class="btn btn-primary btn-secondary update-product-btn">Update</a>
		</div>
	</div>`;
	});
}
render();

// create
function createProduct() {
	let imgInp = document.querySelector('#product-url-inp');
	let titleInp = document.querySelector('#product-title-inp');
	let priceInp = document.querySelector('#product-price-inp');

	let productObj = {
		id: Date.now(),
		url: imgInp.value,
		title: titleInp.value,
		price: priceInp.value,
	};
	// console.log(productObj);
	let products = getProductsFromStorage();
	products.push(productObj);
	setProductsToStorage(products);

	imgInp.value = '';
	titleInp.value = '';
	priceInp.value = '';

	let btnClose = document.querySelector('.btn-close');
	btnClose.click();
	render();
}

let addProductBtn = document.querySelector('.add-product-btn');
addProductBtn.addEventListener('click', createProduct);
// let saveProductBtn = docement.querySelector('.add-product-btn');
