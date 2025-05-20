
function getX(){
	x = document.getElementById(`searchBar`).value;
	
}



function transfer(){
	getX();
	console.log(x);
	window.location.href = "productBrowse.html";

}



function shift(){
	if(x!=null){
		document.getElementById(`searchBar`).value = x;
	}
}