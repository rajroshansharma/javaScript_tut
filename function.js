function add(a, b){
	let c = 0;
	c = mul(a, b);
	console.log("Add = "+(a+b+c));
}

function mul(a, b){
	return a*b;
}

add(5,6);