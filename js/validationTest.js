// Task 1: Validate Username
function validateUsername(username) {
    // Write code to check if the username is at least 5 characters long.
    // If the username is not valid, throw an error with a message.
    try {
        if (username.length < 5) {
            throw "username is less that 5 characters long"
        }
    }
    catch(e) {
        console.log(e)
    }
  }

  // Task 2: Validate Password
function validatePassword(password) {
    // Write code to check if the password is at least 8 characters long and contains at least one number.
    // If the password is not valid, throw an error with a message.
    try {
        if (password.length < 8) {
            throw "password needs to be at least 8 characters"
        }
        if (/\d/.test(password) != true) {
            throw "password needs to contain at least one number"
        }
    }
    catch(e) {
        console.log(e)
    }
}

// Task 3: Validate Email
function validateEmail(email) {
    // Write code to check if the email contains an '@' symbol.
    // If the email is not valid, throw an error with a message.
    try {
        if (email.includes('@') != true) {
            throw "invalid email"
        }
    }
    catch(e) {
        console.log(e);
    }
  }

  // Task 4: Validate User
function validateUser(user) {
    // Use the above validation functions to validate the user's username, password, and email.
    // If any validation fails, log the error and return false. Otherwise, return true.
    try {
        validateUsername(user.username);
        validatePassword(user.password);
        validateEmail(user.email);
        return true;
    }

    catch(e) {
        console.log(e)
        return false;
    }
  }

const user = {username: "johnny", password: "Password1", email: "john@example.com"};
validateUser(user)