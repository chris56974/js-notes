// %s string, %f float, %o object, %j json, %d digit, %i int

console.log("hey %s", "man"); // hey man

let str = "a b"

// str.replace(regex|substr, newSubstr|function)
str.replace("b", "c")   // 'a c'
str.replace(/A/i, "2")  // '2 b'
str.replaceAll("b", "c") // replace all instances

let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%