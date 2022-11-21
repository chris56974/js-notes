/** 
 * If you return a non-primitive from a constructor function. 
 * Your new keyword is always going to return that non-primitive instead
 */
function Foo(a) {
  this.a = a
  return { b: "this return value totally ruins all instances" }
}

const foo = new Foo(2) // doesn't matter what you pass in here anymore
foo // ?