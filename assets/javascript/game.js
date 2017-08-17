// Make a list pf letters the computer chooses
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


//Make a Wins function for when the guess is correct you add 1

var wins = 0;

//Make a Losses counter that adds 1 when user runs out of turns 
var losses = 0;

// Make a counter that starts at 9

var counter = 9;

//Make a var that stores the guesses made so far
var guesses= [];


	//Make a random generator for computer
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];



//Wait for the user's choice
document.onkeyup = function(event) {
	// Make a user choice variable
	
	var userChoice = event.key;

	console.log("Computer Choice = " + computerChoice + " and userChoice = " + userChoice);
	
	
	if(userChoice !== computerChoice) {
		counter--;
		if(counter === 0) {
				guesses = [];
				losses++;
				counter = 9;
				computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
			
			}
		console.log('wrong');
		guesses.push(userChoice);
	}	  
	
		//If userChoice is the same a commputerChoice increase wins by 1
	// };	
	else if(userChoice === computerChoice) {
		wins++;
		computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log('right');
		// clear the guesses/ empty the array/
		guesses = []; 
		
	
	
	}
	
	var html =
		"<h1>The Psychic Game</h1>" +
		"<p>Guess what letter I'm thinking of</p>" +
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + counter + "</p>" + 
		"<p>Your Guesses so far: " + guesses + "</p>";
				
        // Set the inner HTML contents of the #ame div to our html string
        document.getElementById("game").innerHTML = html;
		
     function reload() {
     	location.reload();
     }   

    if(wins === 5) {
		alert("You Won!");
		reload();
				
		}

	if(losses === 5) {
		alert("You lost! Whaaat?!?");
		reload();
	}

    
};	
 








