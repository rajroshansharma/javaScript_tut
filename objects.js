//objects implementations
emp = {
	emp_id : 1002,
	emp_name : "Mr Nobody",
	emp_add : "Home"
}

//nested objects
emp = {
	emp_id : 1002,
	emp_name : "Mr Nobody",
	emp_add :{
		street_no : 02,
		house_no : 100258,
		state : "LosAngles"
	}
}
console.log(emp.emp_name);
console.log(emp.emp_add.state);