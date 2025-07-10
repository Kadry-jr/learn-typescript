class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(): void {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const p = new Person("Ali");
p.greet();