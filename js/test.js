class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  }

class Car extends Vehicle {
    //add code here
     constructor(make, model, numberOfDoors) {
       super(make, model);
       this.numberOfDoors = numberOfDoors;
     }
     describeCar() {
       console.log(`This car is a ${this.numberOfDoors} ${this.make} ${this.model}`)
     }
    }

let car1 = new Car("honda", "civic", 4);
console.log(car1.describeCar())