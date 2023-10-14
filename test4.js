const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];


function checkGuess(guess, target) {
    do {
    let correct = false;
    if (COLORS_ARRAY.includes(guess) === false) {
        console.log("You did not choose a color in the list");
    }
    else if (COLORS_ARRAY.indexOf(guess) > COLORS_ARRAY.indexOf(target)) {
        console.log("Guess is higher than target");
        correct = false;
        return correct;
       
    }
    else if (COLORS_ARRAY.indexOf(guess) < COLORS_ARRAY.indexOf(target)) {
        console.log("Guess is less than target");
        correct = false;
       
    }
    else {
        correct = true;
    } } while(correct === false);
    return correct;
}
let guess = "yellow"
let target = "blue"
checkGuess(guess, target);