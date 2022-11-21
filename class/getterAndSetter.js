class Foo {
  _bar = 1

  get bar() {
    return this._bar
  }

  set bar(value) {
    return this._bar += value
  }
}

const foo = new Foo()
foo.bar // 1
foo.bar = 2
foo.bar // 2