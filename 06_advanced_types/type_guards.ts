function isString(val: unknown): val is string {
  return typeof val === "string";
}
const val: unknown = "Test";
if (isString(val)) console.log(val.toUpperCase());