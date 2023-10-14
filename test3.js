/* let i = 0;

while (i < 5) {
    i += 1;
    console.log(i);
}

do {
    i += 1;
    console.log(i);
} while(i < 5);

let answer = "";

do {
    answer = prompt("Do you like chocolate?");

} while (answer !== "yes"); */

/* const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
const target = COLORS_ARRAY[targetIndex];
console.log(target); */

const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
console.log(COLORS_ARRAY[0])
console.log(COLORS_ARRAY.indexOf("blue"))
guess = "yellow";
const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
console.log(targetIndex)
const target = COLORS_ARRAY[targetIndex];
console.log(target);
if (COLORS_ARRAY.indexOf(guess) > COLORS_ARRAY.indexOf(target)) {
    console.log("Guess is higher than target");
}
console.log(guess);
if (COLORS_ARRAY.includes(guess) === true) {
    console.log("you picked from list");
} else if (COLORS_ARRAY.includes(guess) === false) {
    console.log("you idiot")
}