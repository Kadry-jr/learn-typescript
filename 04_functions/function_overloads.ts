function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}
console.log(combine("Hello", "World"));
console.log(combine(1, 2));