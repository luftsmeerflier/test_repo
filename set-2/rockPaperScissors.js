function rockPaperScissors(userInput){


	let moves = ["Rock", "Paper", "Scissors"];

	const randomNo = Math.floor(Math.random() * 3);

	let computerMove = moves[randomNo];

	let userMove = moves[userInput - 1];

	let winner = '';






	
	if(userInput <= 0 || userInput > 3) throw new Error("Input 1, 2, 3 to choose Rock, Paper, or Scissors, respectively.");
	} catch(e) {
		console.error(e.message);
	}

			if(userMove === 'Rock' && computerMove === 'Scissors'){
			winner = "user";
		} else if (userMove === 'Paper' && computerMove === 'Rock'){
			winner = "user";
		} else if (userMove === 'Scissors' && computerMove === 'Paper'){
			winner = "user";
		} else {
			winner = "computer"; 
		}




	return (`User chose ${userMove}. Computer chose ${computerMove}. The winner is: ${winner}!`);

}

console.log(rockPaperScissors(9));