let a = 1;
let arrb = [1,2,3,4];
for(i=0;i<=11;i++){
	if(i==5){
		console.log("continue");
		continue;
	}
	// if(i==11){
	// 	return;
	// }
	console.log(i);
}
// you can notice it does't print 5 for the continue statement
// you can notice by using rerturn keyword it ended the loop.
//if you will use return keyword in the main Function then it will terminate the programm and codes after that will not execute.

// for (key in object) {
//     // body of for...in
// }

while(a!=5){
	console.log(a);
	a++;
}

/*
do{
	//code block
}while(condition)
*/

for(j in arrb){
	console.log(arrb[j]);
}