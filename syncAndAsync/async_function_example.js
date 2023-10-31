function firstFunction() {
    setTimeout(()=> {
        console.log(1)}, 500);
}

function secondFunction() {
    console.log(2);
}

firstFunction();
secondFunction();