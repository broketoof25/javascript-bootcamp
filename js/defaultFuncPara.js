function logSum(a = 0, b = 0) {
    console.log(a + b);
} 

//can be used with Class Constructors
class Cat {
    constructor(name, color = "gray") {
        this.name = name;
        this.color = color;
    }
    meow() {
        console.log(`The ${this.color} cat named ${this.name} meows`)
    }
}

const cat1 = new Cat("bob")
cat1.meow();
