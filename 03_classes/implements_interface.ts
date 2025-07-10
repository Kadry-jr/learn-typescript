interface Printable {
  print(): void;
}

class Invoice implements Printable {
  print(): void {
    console.log("Invoice printed");
  }
}