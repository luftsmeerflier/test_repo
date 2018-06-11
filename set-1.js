const whoAmI = function(name = 'John' , age = 20) {
    const yob = yearOfBirth(age);
    console.log(`My name is ${name} and I am ${age} years old`);
    console.log(`I was born in ${yob}`);
}


const yearOfBirth = function(age){
	return 2018 - age;
}

whoAmI();
