const whoAmI = function(name, age) {

	try {
		if (age === undefined || name === undefined) throw new Error("arguments not valid");
		if (typeof age !== 'number' || typeof name !== 'string') throw new Error("Arguments invalid");
		const yob = yearOfBirth(age);
   		console.log(`My name is ${name} and I am ${age} years old`);
  		console.log(`I was born in ${yob}`);
			
	} catch(e) {
		console.error(e.message);
	}
}
const yearOfBirth = function(age){
	if (age < 0) throw new Error("Age can not be negative");
	return 2018 - age;
}

whoAmI("olyskoop", -20);
