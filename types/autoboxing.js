/** 
 * Everything is not an object in JS because there are primitive types! 
 * JS will convert primitives into objects automatically everytime you want to use a method. 
 * everything is an object with a constructor function except null and undefined
 */
var a = new Number(5) // OBJECT -> because of constructor function
var b = 5             // NUMBER

var c = new String('Jeff'); // object
c === 'Jeff' // FALSE (jeff is a string and c is an object)