const jediName = function(firstName, lastName){
	let firstPart = lastName.slice(0, 3);
	let lastPart = firstName.slice(0, 2);
	return firstPart + lastPart;
}

console.log(jediName("first", "last"));