let input: string = '';
function press(value: string): void {
  input += value;
  (document.getElementById('display') as HTMLInputElement).value = input;
}
function calculate(): void {
  try {
    input = eval(input).toString();
    (document.getElementById('display') as HTMLInputElement).value = input;
  } catch {
    (document.getElementById('display') as HTMLInputElement).value = "Error";
  }
}
function clearDisplay(): void {
  input = '';
  (document.getElementById('display') as HTMLInputElement).value = '';
}