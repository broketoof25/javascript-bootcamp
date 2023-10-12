function runGame() {
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;
    let target =  Math.floor(Math.random() * 101 + 1);
    
    do {
        guessString = prompt("Guess a number form 1-100 ");
        if (guessString === null) {
            return;
        }
        guessNumber = parseInt(guessString);
        numTries++;
        correct = checkGuess(guessNumber, target);
        function checkGuess(guessNumber, target) {
            let correct = false;
            if (isNaN(guessNumber)) {
                alert("You did not enter a number");
            }
            else if (guessNumber < 1 || guessNumber > 100) {
                alert("Your number is out of range");
            }
            else if (guessNumber > target) {
                alert("Your guess is larger than target");
            }
            else if (guessNumber < target) {
                alert("Your guess is less than target");
            }
            else {
                correct = true;
            }
            return correct;
        }

    } while (!correct);
    alert("You have guessed correctly");
    alert(numTries);
}