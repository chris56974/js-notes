/** 
 * The new keywords does five things 
 * 
 * 1. It creates an object without even looking at the constructor function to the right of it.
 * 2. It sets the new object's internal, inaccessible [[prototype]] property to equal the 
 *    constructor function's prototype object (which is at Foo.prototype)
 * 3. Then it makes the "this" inside the constructor function point to the newly created object.
 * 4. Then it runs the constructor function using the new object whenever this pops up.
 * 5. Then it returns the new object back to us so we can save it to a variable.
 */
function Foo(x) {
  this.x = x
}

var a = new Foo(1)


function newUnderTheHood(constructor, arguments) {
  var instance = Object.create(constructor.prototype);
  constructor.apply(instance, arguments);
  return instance;
}

newUnderTheHood(Foo, [1])