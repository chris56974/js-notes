/*
  Prototypes are objects that allow other objects to inherit from each other (they're unique to JS).

  Every function in JS is an object and every function also comes with its own prototype property.
  This prototype property points to a prototype object, which is what every new object created by 
  this function will point to for its [[Prototype]] property.

  If you call a method or a property on an object that doesn't exist locally on that object,
  that object will look at its [[Prototype]] property to see if it exists on their prototype object.
  If it does, they can use it. If it doesn't, then they can look at the [[Prototype]] property for 
  their prototype object and find another prototype object. This process is called looking up the
  prototype chain, and it keeps going until it finds the method/property it's looking for, or 
  until it reaches the prototype object for the global built-in Object. The [[Prototype]] property
  for this prototype object points to null. This is how all objects inherit methods in JS.

  When you call a method on a string, you're actually turning that string into an object (autoboxing it).
  You're then checking to see if that method exists on that string object locally and if it doesn't, 
  it checks its [[Prototype]] to see if it exists in its prototype object. The prototype object for all
  strings is String.prototype, which contains all the string methods included in JS.

  The __proto__ accessor (like get/set) is a non-standard legacy feature that's kept in browsers
  for backwards compatibility. You use it to grab an object's prototype. It's the same thing as 
  [[Prototype]], except we can't access [[Prototype]] directly because it's internal and private. 
  
  You should be using these methods instead though to access an object's prototype

  Object.getPrototypeOf(foo) 
  Object.setPrototypeOf(foo) 

  Keep in mind, foo.prototype is the property that points to the prototype object that will be used
  for all objects that foo creates. And foo.[[Prototype]] is the prototype object for foo itself,
  which is usually the global built-in Function.prototype.
*/

/*
  The lookup time for properties high up the prototype chain can negatively impact performance.
  Trying to access nonexistent properties will always traverse the full prototype chain.

  When iterating over the properties of an object, every enumerable property that is on 
  the prototype chain will also be enumerated. To check whether an object has a property
  defined on itself and not somewhere on its prototype chain, it is necessary to use the 
  hasOwnProperty or Object.hasOwn methods. All objects, except those with null as [[Prototype]], 
  inherit hasOwnProperty from the Object.prototype — unless it has been overridden further 
  down the prototype chain.
*/

/** 
 * Foo is a constructor function, and it serves the same purpose as the ES6 constructor() {} function
 * The capitalization of Foo is just a convention, it doesn't do anything specific.
 * The prototype object for Foo.prototype is generated for you automatically.
 * It starts off with only one property, the constructor propertya (which points to the constructor)
 * 
 * Putting things in the constructor function is suboptimal for memory because it's recreating all the 
 * instance members everytime you create a new object. But in reality, it's not a big deal at all.
 * You would have to be creating an absurd amount of objects for this to be an issue.
 */
function Foo(a) {
  const privateConstructorOnlyVariable = 1
  this.instanceField = a
  this.instanceFieldBadMem = 2
  this.instanceMethodBadMem = function () { return privateConstructorOnlyVariable }
}

Foo.staticClassField = 4
Foo.prototype.instanceFieldBetterMem = 5
Foo.prototype.instanceMethodBetterMem = function () { return this }
Foo.prototype.booboo = () => this // globalThis

const foo = new Foo(9)

// If you want to add getters and setters to your constructor function
Object.defineProperty(Foo.prototype, 'other', {
  get() { },
  set(newValue) { },
});

/**
 * This is the same thing as constructor functions except you're using Object.create()
 */
var BarPrototypeObject = {
  myConstructor(a) {
    const privateConstructorOnlyVariable = 999
    this.instanceField = a
    this.instanceFieldBadMem = 2
    this.instanceMethodBadMem = function () { return privateConstructorOnlyVariable }
  },
  instanceMethodBetterMem: function () {
    return 1
  },
  booboo: () => this // globalThis
}

var bar = Object.create(BarPrototypeObject)
bar.instanceMethodBetterMem() // 1
bar.myConstructor(1) 

/** 
 * __proto__ is only deprecated when you use it as an accessor
 * It's fine when you use it like this
 */
const o = {
  a: 1,
  b: 2,
  __proto__: {
    b: 3,
    c: 4,
    __proto__: {
      d: 5
    }
  },
}

const a = Object.getPrototypeOf(o)
const b = Object.getPrototypeOf(a)

