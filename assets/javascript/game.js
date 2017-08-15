// Make a list pf letters the computer chooses
var alphabet = ['a','b','c','d'];

//Make a Wins function for when the guess is correct you add 1

var wins = 0;

//Make a Losses counter that adds 1 when user runs out of turns 
var losses = 0;

// Make a counter that starts at 9

var counter = 9;

//Make a var that stores the guesses made so far
var guesses= [];


//rewrite stats


//Wait for the user's choice
document.onkeyup = function(event) {
	// Make a user choice variable
	
	var userChoice = event.key;

	//Make a random generator for computer
	var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log("Computer Choice = " + computerChoice + " and userChoice = " + userChoice);
	
	// For 9 times, you should be allowed to guess the correct letter
		//If userChoice is not the same as computerChoice a) count down var counter 
		  // & b) store them in a var that displays all choices so far
	if(userChoice !== computerChoice) {
		counter--;
		console.log('wrong');	  	
	}	  
	
		//If userChoice is the same a commputerChoice increase wins by 1
	// };	
	else if(userChoice === computerChoice) {
		wins++;
		console.log('right')
		};
	
	var html =
		"<h1>The Psychic Game</h1>" +
		"<p>Guess what letter I'm thinking of</p>" +
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + counter + "</p>" + 
		"<p>Your Guesses so far: " + userChoice + "</p>";
				
        // Set the inner HTML contents of the #ame div to our html string
        document.getElementById("game").innerHTML = html;
    };	
 








