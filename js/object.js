//creating an object with a Method ES6 
const dragon2 = {
    color: "blue",
    maxHP: 1000,
    roar() {
        console.log("The Dragon roars");
    }
}

//this
dragon2.roar = function() {
    console.log(`The ${this.color} dragon roars`)
}

dragon2.roar();

//To add a property to an existing Object
dragon2.element = "fire";

//To update a property for an existing Object
dragon2.color = "crimson";

//To add a method to an existing Object
dragon2.attack = function() {
	console.log("Dragon Attacks");
}

//To add a Method w/Parameters
dragon2.swin = function(dir) {
    console.log(`The Dragon swims away to the ${dir}.`);
}

