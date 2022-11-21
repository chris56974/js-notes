/** 
 * It's a creational design pattern for creating objects with a class. 
 * It usually has a conditional statement (switch, if-else), 
 * which violates the open-close principle but it's meant for 
 * situations where you want to focus on the superclass and not the caller. 
 */

function A(a) { // you can create an object of this type
	this.a = a
	this.type = "Type A"
}

function B(a) { // or this type 
	this.a = a
	this.type = "Type B"
}

function Factory() {
	this.create = (a, type) => {
		switch (type) {
			case "Type A":
				return new A(a)
				break
			case "Type B":
				return new B(a)
				break
		}
	}
	function foo() { console.log(this.a) } // bad on memory
}

A.prototype.foo = function () { console.log(this.a) }  // good on memory
function foo() { console.log(this.a) } // this works too
// although it doesn't matter we're only making one factory object

const factory = new Factory();
const arr = []

arr.push(Factory.create("object1", "Type A"))
arr.forEach(obj => obj.foo())     // call prototype/constructor method
arr.forEach(obj => foo.call(obj)) // call the global scope method