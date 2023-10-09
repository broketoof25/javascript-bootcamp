let i = 0;

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

} while (answer !== "yes");