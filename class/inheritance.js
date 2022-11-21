/** 
 * Class inheritance has the tightest coupling in all of OO progrramming 
 * It should only be used if you want your child to always be a subtype of its parent 
 * There are way easier ways to give a child object the same features as its parent 
 * that should be used instead
 */

class Parent {
  constructor(a) { 
	  this.a = a; 
  }
  foo() {} 
}

class Child extends Parent {
  constructor(a, b) {
    super(a); // calls the parent constructor (gives us foo(), and a)
    this.b = b;
  }
	bar() {}
}

const baz = Child(1,2)
Child.prototype.isPrototypeOf(baz) // true