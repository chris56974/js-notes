/** 
 * If you change the prototype object at any point,
 * it will complete change the behaviour for all objects that inherit from it
 */
function Foo(a) {
  this.a = a;
}
Foo.prototype.getA = function () { return this.a }

const foo = new Foo(1);
foo.getA() // 1

Foo.prototype.getA = function () { return this.a + 1 }
foo.getA(); // 2