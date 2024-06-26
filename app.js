function hello() {
	if (age > 18) {
		console.log("Adult");
		let isTrue = false;
	} else {
		console.log("Minor");
	}
	let i = 0;
	while (isTrue == true) {
		console.log("Condition is true");
		i++;
		if (i == 3) {
			let error = "Error";
			return error;
			break;
		}
	}
}
let isTrue = true;
let age = 3;
let store = hello(age, isTrue);
console.log(store);
const person = {name: "Senhas", age: 14, city: "IDK"};
for (let x in person) {
	console.log(x + ": " + person[x]);
}
const array = [1, 2, 3, 4, 5];
for (let index of array) {
	console.log(index);
}
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.question("Please enter the username: ", (userName) => {
	console.log(userName);
	rl.close();
});
