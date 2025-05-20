const usid = ["ABC", "XYZ", "DEF"];
const pass = ["123", "NASA", "password"];

function check(){
	
	let x = document.getElementById(`username`).value;
	let y = document.getElementById(`passkey`).value;
	
	let z = 1;
	
	for(let i = 0; i<3; i++){
		if(usid[i] === x && pass[i] === y){
			z = 0;
			window.location.href = "home.html";
		}
	}
	
	if(z==1){window.alert("Invalid password..")}
	
}