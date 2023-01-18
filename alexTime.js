let imgInp = document.querySelector('#product-url-inp');
let titleInp = document.querySelector('#product-title-inp');
let priceInp = document.querySelector('#product-price-inp');
let saveChangesBtn = document.querySelector('.save-changes-btn');

function initStorage() {
	if (!localStorage.getItem('products-data')) {
		localStorage.setItem('products-data', '[]');
	}
}
initStorage();

function setproductsToStorage(products) {
	localStorage.setItem('products-data', JSON.stringify(products));
}

function getProductsFromStorage() {
	let products = JSON.parse(localStorage.getItem('products-data'));
	return products;
}

//render
function render(data = getProductsFromStorage()) {
	let container = document.querySelector('.container');
	container.innerHTML = '';
	//let data = getProductsFromStorage();
	data.forEach(item => {
		container.innerHTML += `
        <div class="card w-25 m-2" style="width: 18rem;" id="${item.id}">
            <img src="${item.url}" class="card-img-top" alt="error:(" height="250">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text"><b>Price:</b> ${item.price}$</p>
                <a href="#" class="btn btn-danger delete-product-btn">Delete</a>
                <a href="#" class="btn btn-secondary update-product-btn" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">Update</a>
            </div>
        </div>
        `;
	});

	if (data.length === 0) return;
	addDeleteEvent();
	addUpdateEvent();
}

render();

// create
function createProduct() {
	let productObj = {
		id: Date.now(),
		url: imgInp.value,
		title: titleInp.value,
		price: priceInp.value,
	};

	let products = getProductsFromStorage();
	products.push(productObj);
	setproductsToStorage(products);

	imgInp.value = '';
	titleInp.value = '';
	priceInp.value = '';

	let btnClose = document.querySelector('.btn-close');
	btnClose.click();

	render();
}

let addProductBtn = document.querySelector('.add-product-btn');
addProductBtn.addEventListener('click', createProduct);

//delete
function deleteProduct(e) {
	let productId = e.target.parentNode.parentNode.id;
	let products = getProductsFromStorage();
	products = products.filter(item => item.id != productId);
	setproductsToStorage(products);
	render();
}

function addDeleteEvent() {
	let delBtns = document.querySelectorAll('.delete-product-btn');
	// console.log(delBtns);
	delBtns.forEach(item => item.addEventListener('click', deleteProduct));
}

// update
function updateProduct(e) {
	let productId = e.target.parentNode.parentNode.id;
	let products = getProductsFromStorage();
	let productObj = products.find(item => item.id == productId);
	imgInp.value = productObj.url;
	titleInp.value = productObj.title;
	priceInp.value = productObj.price;

	saveChangesBtn.setAttribute('id', productId);
}

function addUpdateEvent() {
	let updateBtns = document.querySelectorAll('.update-product-btn');
	updateBtns.forEach(item => item.addEventListener('click', updateProduct));
}
function saveChanges(e) {
	if (!saveChangesBtn.id) return;
	let products = getProductsFromStorage();
	let productObj = products.find(item => item.id == saveChangesBtn.id);
	productObj.url = imgInp.value;
	productObj.title = titleInp.value;
	productObj.price = priceInp.value;
	setproductsToStorage(products);
	saveChangesBtn.removeAttribute('id');
	imgInp.value = '';
	titleInp.value = '';
	priceInp.value = '';

	let btnClose = document.querySelector('.btn-close');
	btnClose.click();

	render();
}

saveChangesBtn.addEventListener('click', saveChanges);

//search
let searchInp = document.querySelector('#search-inp');
searchInp.addEventListener('input', e => {
	let products = getProductsFromStorage();
	products = products.filter(item => {
		return item.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
	});
	render(products);
});

// let data = 'hello world';
// console.log(data.indexOf('h'));
// console.log(data.indexOf('l'));

// let data = 'hello world';
// console.log(data.indexOf('el'));
// console.log(data.includes('e'));
