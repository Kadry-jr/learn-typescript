"use strict";
class nPerson {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}
const p = new nPerson("Ali");
p.greet();
