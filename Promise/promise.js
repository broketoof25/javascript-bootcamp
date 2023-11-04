const myPromise = new Promise((resolve, reject)=> {
    let condition = true;
    if (condition) {
        const message = "Operation Successful";
        console.log(message); //log success message
        resolve(message); //resolve the promise with a value
    }
    else {
        const message = "Operation Failed";
        console.log(message); //log failure message
        reject(message); //Reject the Promise with a reason
    }
});