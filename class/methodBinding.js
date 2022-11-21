/** 
 * Class methods aren't bound by default in JS. foo.method is not the same as foo.method().
 * The method in foo.method isn't bound to anything and it will bind to whatever calls it. 
 * The method in foo.method() is bound to foo, because foo called that method.
 */
class MethodBinding {
  first = 1

  constructor() {
    this.foo = this.foo.bind(this);
  }

  foo() {
    return this.first
  }

  bar() {
    return this.first
  }
}

const a = new MethodBinding();
const aFoo = a.foo
const aBar = a.bar

aFoo() // 1
aBar() // Error: Cannot read properties of undefined when reading 'first'