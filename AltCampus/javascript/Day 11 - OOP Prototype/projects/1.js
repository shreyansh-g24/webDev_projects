// The Car and the Truck have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

var Vehicle0 = function(driver) {
  this.driver = driver;
  this.speed = 0;
  this.drive = function(mph) {
    this.speed = mph;
    return this.driver + ' driving at ' + mph + ' miles per hour';
  };
};

var Car0 = function(driver) {
  this.driver = driver;
  this.speed = 0;
  this.drive = function(mph) {
    this.speed = mph;
    return this.driver + ' driving at ' + mph + ' miles per hour';
  };
};

var Truck0 = function(driver) {
  this.driver = driver;
  this.speed = 0;
  this.cargo = [];
  this.drive = function(mph) {
    this.speed = mph;
    return this.driver + ' driving at ' + mph + ' miles per hour';
  };

  this.loadCargo = function(cargo) {
    this.cargo.push(cargo);
    return this;
  };

  this.unloadCargo = function() {
    return this.cargo.pop();
  };
};

// Rewriting the functions //
// defining Vehicle
class Vehicle {
  constructor(driver){
    this.driver = driver;
    this.speed = 0;
  }
 drive(mph) {
    this.speed = mph;
    return this.driver + ' driving at ' + mph + ' miles per hour';
  }
}

class Car extends Vehicle {
  constructor(driver){
    super(driver);
  }
}

class Truck extends Vehicle {
  constructor(driver){
    super(driver);
    this.cargo = [];
  }
  loadCargo(cargo) {
    this.cargo.push(cargo);
    return this;
  }
  unloadCargo() {
    return this.cargo.pop();
  }
}

// Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out.

class Person{
  constructor(){}
}

class Teacher extends Person{
  constructor(){
    super();
  }
  teach(subject){
    return subject;
  }
}
