var computerChoice= "";
var userStreak = "";
var highStreak = "20";
function lifeordeath() {
	userStreak++;
	computerChoice = Math.floor(Math.random()*6);
		if (computerChoice === 5){
			computerChoice = "chosen";
		}
		else if(computerChoice === 1) {
			computerChoice = "chosen";
				displayUserScore(userStreak);
		}
		else if(computerChoice === 2) {
			computerChoice = "chosen";
				displayUserScore(userStreak);
		}
		else if(computerChoice === 3) {
			computerChoice = "chosen";
				displayUserScore(userStreak);
		}
		else if(computerChoice === 4) {
			computerChoice = "chosen";
				displayUserScore(userStreak);
		}
		else {
			computerChoice = "lost";
				displayUserScore(userStreak);
				alert("Gooood Morning(Or afternoon. Or night.) You died a horrible, slow, painful death. Try not to visualize this. Oops, you might have already. Wanna hear a secret? Get to 100 streak and I'll tell you. Please try again. Your streak was " + userStreak + " wins.");
				/*
LES DO DIS
 _________
/_______  \_______
	    | |	     |
	    | |	     |
	    | |______|_
	    |_|        | |
	    |_|	       | |
	    | |	       | |
	    | |	       |_|
	    | |	       |  
	    | |		    | 
	    |_|__________|
YOU LOST HAHAHAHAHAHAH YOU LOSERLOSERLOSERLOSERLOSER
*/
			userStreak = 0;
		}
		if (userStreak > highStreak) {
			alert("Woah! You broke the highscore! The new highscore is " + userStreak);
				highStreak = userStreak;
		}
return;
}

var displayUserScore = function() {
	document.getElementById('score').innerHTML = "Your streak is " + userStreak + ".";
	return;
};
