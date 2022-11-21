const foo = {};

Object.defineProperty(foo, 'bar', {
  value: 42,
  writable: false
});

foo.bar = 77; // ERROR (if use strict;)
console.log(foo.bar); // 42