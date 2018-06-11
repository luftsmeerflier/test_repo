const decode = function(encoded){
	let array = encoded.split(' ');
	let answer = [];
	array.forEach(function(word){
		let letter = word[0];
		switch(letter){
			case 'a':
				answer.push(word[1]);
				break;
			case 'b': 
				answer.push(word[2]);
				break;
			case 'c': 
				answer.push(word[3]);
				break;
			case 'd': 
				answer.push(word[4]);
				break;
			default: 
				answer.push(' ');
		}
	}); 
	let string = answer.join('');
	return string;
}

console.log(decode('craft block argon meter bells brown croon droop'));