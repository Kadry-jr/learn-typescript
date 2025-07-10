"use strict";
function isString(val) {
    return typeof val === "string";
}
const val = "Test";
if (isString(val))
    console.log(val.toUpperCase());
