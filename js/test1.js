function parseStudentData(jsonString) {
    try {
        // Attempt to parse the JSON string.
        const student = JSON.parse(jsonString);

        // If successful, return the parsed object or do further processing here
        return student;
    } catch (error) {
        // If an error occurs (e.g., due to malformed JSON), return a custom error message.
        return "An error occurred while parsing JSON data: " + error.message;
    }
}

//you do not need to modify this data
const jsonString = '{ "name": "John", "age": 15, "grades": [90, 85, 78] }';
const invalidJsonString = '{ name: John, "age": 15, "grades": [90, 85, 78] }'; // Missing quotes around "John" and property name "name"

// Now, we can test the function with both valid and invalid JSON.
console.log(parseStudentData(jsonString)); // Should successfully parse and log the object.
console.log(parseStudentData(invalidJsonString)); // Should log the custom error message.
