/** 
 * It's when you create an object and then specify what properties you want to make publically available outside that object. 
 * ES6 modules do exactly this, but in ES5 we can implement it with IIFEs.
 */
var module = (function () { // STANDARD MODULE PATTERN
  var a = 1 // private 
  return {
    b: 2, // public
    foo() {
      return `${a} & ${this.b}`
    }
  }
})()

module.a      // undefined
module.b      // 2
module.foo(); // 1 & 2

const module = (function () { // STUB METHOD
  const a = 1 // private

  const stub = {
    b: "b",
    foo() { return `${a} & ${this.b}` }
  };

  return stub;
})();

const module = (function () { // REVEALING MODULE PATTERN
  const a = 1
  const insideName = () => console.log(a);
  return { // everthing is a closure variable
    a,
    outsideName: insideName // can rename 
  };
})();