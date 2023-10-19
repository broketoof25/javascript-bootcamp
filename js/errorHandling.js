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