//Class and Constructors

/* class Dragon {
    constructor(color, maxHP) {
        this.color = color;
        this.maxHP = maxHP;
    }
}

const dragon1 = new Dragon("red", 1200);

const dragon2 = new Dragon("blue", 1000); */

//Class Methods
/* class Dragon {
    constructor(color, maxHP) {
        this.color = color;
        this.maxHP = maxHP;
    }
    roar() {
        console.log(`The ${this.color} dragon lets out a tremendous roar`);
    }
}

const dragon1 = new Dragon("red", 1200);
const dragon2 = new Dragon("blue", 1000);

dragon1.roar();
dragon2.roar(); */

//Inheritance
/* class Monster {
    roar() {
        console.log(`The monster lets out a tremendous roar`);
    }
}

class Dragon extends Monster {
    fly() {
        console.log("The Dragon flaps his wings");
    }
}

const dragon1 = new Dragon();

dragon1.roar();
dragon1.fly(); */

//Class Inheritance and SUPER method
class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`This ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
        }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings.`);        
    }
}

const dragon1 = new Dragon("dragon", "blue", "water" );