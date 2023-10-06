console.log("hello world")

function myFunction(name)
    {
        console.log("hello to " + name)
    }
myFunction("bob")

function Add(a, b)
    {
        return a + b
    }
let sum = Add(4, 3)
console.log(sum)

/* function greeting()
    {
        const userInput = prompt("What is your name?");
        console.log("Hello " + userInput + "!");
    }
greeting(); */

function tripleNum(num) {
    console.log(num * 3);
}

tripleNum(6);

if ("password" === "password") {
    console.log("Your password is weak!");
} else {
    console.log("Your password is not weak!")
}

if (color === "red") {
    hexColorCode = "#FF000";
} else if (color === "black") {
    hexColorCode = "#000000";
} else {
    hexColorCode = null;
}

switch(expression) {
    case value:
        "code to execute if expression matches value"
        break;
    case value:
        "code to execute if expression matches value"
        break;
    case value:
        "code to execute if expression matches value"
        break;
    default:
        "code to execute if nothing matches"   
}

function testSwitch(size) {
    switch(size) {
        case "small":
            alert("Chair is small");
            break;
        case "medium":
            alert("Chair is medium");
            break;
        case "large":
            alert("Chair is large");
            break;
        default:
            alert("Chair is unknown size");  
    }
}

testSwitch("small")