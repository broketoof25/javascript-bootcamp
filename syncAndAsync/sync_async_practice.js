function syncFunction() {
    console.log("Start of sync function");
    for (let i=1; i<=5; i++) {
        console.log("sync", i);
    }
    console.log("End of sync function")
}

function asyncFunction() {
    console.log("Start of async function");
    for (let i=1; i<=5; i++) {
        setTimeout(()=> {console.log("async", i), 0})
    }
    console.log("End of async function");
}
asyncFunction();
syncFunction();

