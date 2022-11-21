/** 
 * These functions all exist on the Function.prototype
 */
const a = {
  foo: 1,
  bar(x, y) { console.log(this.foo + x + y) }
}

const b = { foo: 2 }

a.bar(1, 1)            // 3
a.bar.call(b, 1, 1)    // 4 (call a's method on b)
a.bar.apply(b, [1, 1]) // 4 (ibid)
a.bar.bind(b)          // saves it for later
a.bar.bind(b, 1)       // ibid but populate the first var

const saveForLater = a.bar.bind(b)
saveForLater(1, 1) // 4

// call() can also use for object instantiation
function Parent(a, b) {
  this.a = a;
  this.b = b;
}

function Child(a, b, c) {
  Parent.call(this, a, b);
  this.c = c;
}

const foo = new Child(1, 2, 3);
foo.a // 1
foo.b // 2
foo.c // 3