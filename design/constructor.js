/** 
 * The constructor pattern is when you define stuff in the constructor instead of the prototype
 * You would do this is if you wanted to use private variables in the constructor
 */
function Foo(a) {
  const privateConstructorOnlyVariable = 1
  this.instanceField = a
  this.instanceFieldBadMemory = 2
  this.instanceMethodBadMemory = function () { return privateConstructorOnlyVariable }
  this._notReallyPrivate = 3
}
Foo.staticClassField = 4

var Parent = {
  myOwnConstructorFunction(a) {
    this.a = a
    return this
  },
  foo: function () {
    return this.a
  }
}

// var first = Object.create(Parent)
// first.myOwnConstructorFunction(1)
// first.foo()

// var second = Object.create(Parent, { a: { value: 1 } })
// second.foo() // if you don't want to use a constructor function

// function ParentFactory(a) {
//   var object = Object.create(Parent)
//   object.a = a
//   return object
// }

// var third = ParentFactory(1)
// third.foo()