let iconCart = document.querySelector('.fa-cart-shopping');
let aboutUs = document.querySelector('.fa-user');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('body');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpane = document.querySelector('.icon-Cart')
let carts = [];

iconCart.addEventListener('click', ()=>{
	body.classList.toggle('showCart')
})

aboutUs.addEventListener('click', ()=>{
	window.open("AboutUs.html");
})


closeCart.addEventListener('click', ()=>{
	body.classList.toggle('showCart')
})

const listProducts = [...new Set(product.map((item)=>{return item}))];
console.log(listProducts);
//const productIds = listProducts.map(product => product.id);


listProductHTML.addEventListener('click', (event)=>{
	let positionClick = event.target;
	if(positionClick.classList.contains('addCart')){
		let product_id = positionClick.parentElement.id;
		console.log(product_id);
		addToCart(product_id);
	}
})

const addToCart = (product_id) =>{
	let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
	if(carts.length <=0){
		carts = [{
			product_id: product_id,
			quantity: 1
		}]
	}else if(positionThisProductInCart < 0){
		carts.push({
			product_id: product_id,
			quantity: 1
		})
	}
	else{
		carts[positionThisProductInCart].quantity +=1;
	}
	console.log(carts);
	addCartToHTML();
}

const addCartToHTML = () =>{
	listCartHTML.innerHTML = '';
	if(carts.length>0){
		carts.forEach(cart => {
			let newCart = document.createElement('div');
			newCart.classList.add('item');
			let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);
			let info = listProducts[positionProduct];
			newCart.innerHTML = `
			
					<div class="image">
						<img src="${info.image}" alt="image1"/>
					</div>
					<div class="names">
						${info.title}
					</div>
					<div class="totalPrice">
						${info.price*cart.quantity}$
					</div>
					<div class="quantity" id = "${cart.product_id}">
						<span class="minus"><</span>
						<span>${cart.quantity}</span>
						<span class="plus">></span>
					</div>
				
			`;
			listCartHTML.appendChild(newCart);
		})
	}
}

listCartHTML.addEventListener('click', (event) =>{
	let positionClick = event.target;
	if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
		let product_id = positionClick.parentElement.id;
		let type = 'minus';
		if(positionClick.classList.contains('plus')){
			type = 'plus';
		}
		changeQuantity(product_id, type);
	}
})

const changeQuantity = (product_id, type) =>{
	let positionItemInCart = carts.findIndex((value) => value.product_id = product_id);
	if(positionItemInCart >= 0){
		switch(type){
			case 'plus':
				carts[positionItemInCart].quantity = carts[positionItemInCart].quantity +1;
				break;
			default:
				let valueChange = carts[positionItemInCart].quantity -1;
				if(valueChange > 0){
					carts[positionItemInCart].quantity = valueChange;
				}
				else{
					carts.splice(positionItemInCart, 1);
				}
				break;
			
		}
	}
	addCartToHTML();
}

