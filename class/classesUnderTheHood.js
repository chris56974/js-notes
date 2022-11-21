/** 
 * Bar is called a "constructor function" because it constructs new objects
 * It's not a prototype object in of itself, but Bar has a prototype object 
 * that every new Bar() objects can look to. It's convention to name it with
 * an uppercase letter, every function has a prototype property.
 */
function Bar() {
  this.instanceField = 3
  this.instanceMethodBad = () => "ibid"
}

function a() { }
Bar.prototype.instanceMethod = function () { console.log("every instance will point to the same prototype and find this method") }
Bar.staticMembers = "would go here"

// const a = new Foo()
// console.log(a) // Foo { instanceField: 3, instanceMethodBad: () => "ibid" }
// const b = Bar()
// console.log(b) // Bar { instanceField: 3, instanceMethodBad: () => "ibid" }
