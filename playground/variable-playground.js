var person = {
	name: 'Andrew',
	age: 21
};

function updatePerson (obj) {
	// obj = {
	// 	name: 'Andrew',
	// 	age: 24
	// };
	obj.age = 24;
	debugger;
}

updatePerson(person);
console.log(person);