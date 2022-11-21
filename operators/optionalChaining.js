/**
 * It's used to fetch something that might be undefined.
 */

// Traditional method that used short circuits
myObject.property && myObject.property.value

// New method via optional chaining
myObject?.property?.value