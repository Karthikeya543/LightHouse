const categories = [...new Set(product.map((item)=>{return item}))];

document.getElementById('searchBar').addEventListener('keyup',(e)=>{
	const searchData = e.target.value.toLowerCase();
	const filterData = categories.filter((item)=>{
		return(
			item.title.toLowerCase().includes(searchData)
		)
	})
	displayItem(filterData)
	
})


const displayItem = (items) => {
	document.getElementById('content').innerHTML = items.map((item)=>{
		var{id, image,uRl, title, price} = item;
		let newProduct = document.createElement('div');
		newProduct.classList.add('box');
		newProduct.dataset.id = id;
		console.log(newProduct.dataset.id);
		return(
		
		`	<div class = "box">
				<div class = "img-box">
					<a href = ${uRl}><img class = "images" src=${image}></img></a>
				</div>
				<div class = "bottom" id = "${id}">
					<p>${title}</p>
					<h2>$ ${price}.00</h2>
					<button class = 'addCart'>Add to cart</button>
				</div>
			</div>
		`
		
		
		)
		
	}).join('')
};

displayItem(categories);