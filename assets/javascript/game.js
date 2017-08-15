// Make a list pf letters the computer chooses
var alphabet = ['a','b','c','d'];

//Make a Wins function for when the guess is correct you add 1
// function addWins() {
var wins = 0;
// 	this.wins = this.wins + 1;
// }

//Make a Losses counter that adds 1 when user runs out of turns 
var losses = 0;

// Make a counter that starts at 9
// function addCounter() {
var counter = 9;
// 	this.counter = this.counter - 1;
// };

//Make a var that stores the guesses made so far
var guesses= [];


//rewrite stats


//Wait for the user's choice
document.onkeyup = function(event) {
	// Make a user choice variable
	var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

	//Make a random generator for computer
	var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
	

	// For 9 times, you should be allowed to guess the correct letter
	for(var i = 0; i < 10; i++) {
		//If userChoice is not the same as computerChoice a) count down var counter 
		  // & b) store them in a var that displays all choices so far
		  
		if(userChoice !== computerChoice) {
		  	alert('wrong');
		  	counter--;
		  	html();
		  	break;		  	
		  };
		//If userChoice is the same a commputerChoice increase wins by 1
	};	
		if(userChoice === computerChoice) {
			alert('right');
			wins++;
			html();
		    // break;
		};
		function html() {
			document.write(
				"<h1>The Psychic Game</h1>",
				"<p>Guess what letter I'm thinking of</p>",
				"<p>Wins: " + wins + "</p>",
				"<p>Losses: " + losses + "</p>",
				"<p>Guesses Left: " + counter + "</p>",
				"<p>Your Guesses so far: " + userChoice + "</p>"
				);
		};
		// var html =
		// "<h1>The Psychic Game</h1>"
		// "<p>Guess what letter I'm thinking of</p>"
		// "<pWins: " + wins + "</p>"
		// "<p>Losses: " + 0 + "</p>"
		// "<p>Guesses Left: " + counter + "</p>"
		// "<p>Your Guesses so far: " + userChoice + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game");
    };	
// }; 








