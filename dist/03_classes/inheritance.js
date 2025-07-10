"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}
const dog = new Dog("Buddy");
dog.move();
dog.bark();
