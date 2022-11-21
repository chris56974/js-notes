const foo = {};

Object.defineProperties(foo, {
  bar: {
    value: 42,
    writable: true,
	  configurable: true
  },
  baz: {}
});

console.log(object1.property1); // 42