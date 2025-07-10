"use strict";
class Employee {
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    getInfo() {
        return `${this.name} works in ${this.department}`;
    }
}
