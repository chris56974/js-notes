/** 
 * Private fields are available as of ES2020
*/
class Foo {
  #privateField = 2  // ES2020
  _privateField = 2  // convention only, unenforced

  constructor(a) {
    this.#privateField = a
    this.instanceProperty = a;  // public (allows assignment)
    this.instanceProperty = 4;  // public (identical to a field)
  }

  #privateMethod() {
    console.log(this.#privateField)
  }
}