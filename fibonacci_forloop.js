/* let a = 0;
let b = 1;


for (let count = 0; count < 10; count++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
} */

/* function printFibonacci(n) {
    let a = 0;
    let b = 1;


    for (let count = 0; count < n; count++) {
        //console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
} */
//printFibonacci(20);

/* function printEvenFibonacci(n) {
    let a = 0;
    let b = 1;


    for (let count = 0; count < n; count++) {
        let temp = a + b;
        a = b;
        b = temp;
        if (a % 2 === 0) {
            console.log(a);
        }
    }
}
printEvenFibonacci(20); */

/* function printSumFibonacci(n) {
    let a = 0;
    let b = 1;
    let integers = [];

    for (let count = 0; count < n; count++) {
        let temp = a + b;
        a = b;
        b = temp;
        integers.push(a);
    }
    //return integers;
    let sum = integers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;

}
listSum = printSumFibonacci(5);
console.log(listSum); */

function checkIfInFibonacciNumbers(n, valueToCheck) {
    let a = 0;
    let b = 1;
    let integers = [];

    for (let count = 0; count < n; count++) {
        let temp = a + b;
        a = b;
        b = temp;
        integers.push(a);
    }
    if (integers.includes(valueToCheck)) {
        console.log(`${valueToCheck} is in the list`);
    } else {
        console.log(`${valueToCheck} is not in the list`);
    }
}

checkIfInFibonacciNumbers(20, 100);