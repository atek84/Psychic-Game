// Make a list pf letters the computer chooses
var alphabet = ['a','b','c','d'];

//Make a Wins function for when the guess is correct you add 1
var wins = 0;

//Make a Losses counter that adds 1 when user runs out of turns 
var losses = 0;

// Make a counter that starts at 9
var counter = 9;

//Wait for the user's choice
document.onkeyup = function(event) {
	// Make a user choice variable
	var userChoice = event.key;
	   
	//Make a random generator for computer
	var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
	// var computerChoice = function() {
	//   var randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
	//   // return randomAlphabet;
	// };

	// For 9 times, you should be allowed to guess the correct letter
	for(i = 0; i < 10; i++) {
		//If userChoice is not the same as computerChoice a) count down counter var 
		  // & b) store them in a var that displays all choices so far
		if(userChoice !== computerChoice) {
			alert('wrong');
			counter--;
			break;
		}
		//If userChoice is the same a commputerChoice

		if(userChoice === computerChoice) {
		alert('right');
		wins++;
		break;
		}

        var html =
        "<h1>The Psychic Game</h1>"
		"<p>Guess what letter I'm thinking of</p>"
		"<pWins: " + wins + "</p>"
		"<p>Losses: " + 0 + "</p>"
		"<p>Guesses Left: " + counter + "</p>"
		"<p>Your Guesses so far: " + userChoice + "</p>";

        // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;// Need a place to save the previously chosen letter
	}	
        
	
};	

//if user choice equals ComputerAlphabet, win counter goes up 1






//If userChoice !== ComputerChoice, counter goes down by 1
//If counter gets to 0, display message that they lost and add 1 to the losses counter

//If user guesses correctly, add 1 to the win line

//Use counter to count down guesses when wrong choice is made

//Add 1 to the losses if user doesn't guess in less than 10 tries




//Display wrong user choice--Might need to set a DocumentGetById to #win
	//

//

