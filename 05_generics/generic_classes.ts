class Box<T> {
  constructor(public value: T) {}
  getValue(): T {
    return this.value;
  }
}
const numberBox = new Box<number>(100);