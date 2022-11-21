/** 
 * It's when declarations are made available at the top 
 * of the scope before any code is executed. Under the 
 * hood, it's putting declarations into memory (the 
 * variable object) during the creation phase
 */

// BEFORE 
console.log(a);
console.log(b());

var a = 1;
var b = () => 2
function c() {return 3} 
console.log(c()); 
function c() {return 4}

// AFTER 
var a;
var b;
function c() {return 3} // overwritten!
function c() {return 4} // overwrites!

console.log(a);   // undefined
console.log(b()); // undefined 
console.log(c()); // 4
a = 1
b = () => 2