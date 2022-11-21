function base(spec) {
  var foo = {};
  foo.name = spec.name;
  return foo;
}

function child(spec) {
  var bar = base(spec);
  var private = "because closure"
  bar.sayHello = function () {
    return "Hello, I'm " + bar.name + private;
  };
  return bar;
}

var result = child({ name: 'a functional object' });
result.sayHello() // "Hello, I'm a functional object because closure"