/** 
 * Classes are ES6 syntactic sugar over prototypal inheritance. 
 * JS can't build objects using classes, it can only build objects using other objects.
 * Instance members are sometimes called "class members" because you write them in the class
 * but it's misleading because instance members only appear on the instances of the class. 
*/
export class Foo {
  /** 
   * Instance fields don't go in the prototype object
   * They're redeclared on every new instance you create
   * You can "initialize" an instance field to a default value (like 1)
   */
  instanceField = ""

  /** 
   * Everything in the constructor doesn't go in the prototype object
   * Everything in the constructor is recreated for every new Foo() object
   * Everything in the constructor will prevail when it comes to name conflicts
   * Redeclaring the same method for each new object is bad for memory, so it's advised to not put methods in here
   */
  constructor(a = "defaultValue") {
    const constructorOnlyVariable = 2;
    this.instanceField = a;  // overwridden by the user
    this.instanceField = 3;  // overwridden again, the final value of instanceField will always be 3
    this.instanceMethodBad = () => "redeclared for every object"
    this.instanceMethodBad = function () { return "ibid" }
  }

  // memory efficient (declared on the prototype object)
  instanceMethod() {
    console.log("every instance will point to the same prototype and find this method")
  }

  // memory inefficient (declared on every object)
  instanceMethodBad = () => {
    console.log("it's the same as has you declared it in the constructor")
  }
}

const foo = new Foo()
foo.instanceField     // 3
foo.instanceMethodBad // ibid