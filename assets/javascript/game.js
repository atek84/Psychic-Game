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
	// console.log(event); //Might not need this if I put this in a larger onkey
		//onkeyup fuinction
	var userChoice = event.key;
	  // return userChoice; //Might not need this if I put this in a larger onkey
		//onkeyup fuinction Make a random generator for computer

	var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
	// var computerChoice = function() {
	//   var randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
	//   // return randomAlphabet;
	// };

	// Line 3 instructions
	for(i = 0; i < 10; i++) {
		if(userChoice === computerChoice) {
		alert('right');
		document.getElementById('wins').wins++;
		break;
		}
		if(userChoice !== computerChoice) {
			alert('wrong');
			counter--;
			break;
		}
        // Need a place to save the previously chosen letter
	}	
        
	
}	

//if user choice equals ComputerAlphabet, win counter goes up 1






//If userChoice !== ComputerChoice, counter goes down by 1
//If counter gets to 0, display message that they lost and add 1 to the losses counter

//If user guesses correctly, add 1 to the win line

//Use counter to count down guesses when wrong choice is made

//Add 1 to the losses if user doesn't guess in less than 10 tries




//Display wrong user choice--Might need to set a DocumentGetById to #win
	//

//

