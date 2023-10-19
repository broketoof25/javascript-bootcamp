//nucamp variable is not initialized
try {
    console.log("start of try runs"); // "start of try runs" 
    nucamp; // error, there's no such variable!
    console.log("end of try (never reached)"); // skipped due to error
  } catch(err) {
    console.log("Error has occurred", err.stack); // "Error has occurred ReferenceError: nucamp is not defined"
  } finally {
    console.log("this is the finally block"); // always runs
  }


  try {
    let userData = '{ "age": 30 }'; // data received from server
    let user = JSON.parse(userData); // parsing JSON
    
    if (!user.name) {
      throw new SyntaxError("Incomplete data: no name"); 
    }
  
    console.log(user.name); 
  
  } catch(e) {
    console.log("jsonErr " + e.message);
    console.log(e.name); 
    console.log(e); 
  }
  