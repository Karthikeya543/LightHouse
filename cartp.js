let iconCart = document.querySelector('.cart-shopping');
let aboutUs = document.querySelector('.fa-user');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('body');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpane = document.querySelector('.icon-Cart')

iconCart.addEventListener('click', ()=>{
	body.classList.toggle('showCart')
})

aboutUs.addEventListener('click', ()=>{
	window.open("AboutUs.html");
})


closeCart.addEventListener('click', ()=>{
	body.classList.toggle('showCart')
})


listProductHTML.addEventListener('click', (event)=>{
	let positionClick = event.target;
	if(positionClick.classList.contains('addCart')){
		let product_id = positionClick.parentElement.id;
		console.log(product_id);
		addToCart(product_id);
	}
})

