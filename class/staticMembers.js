/** 
 * Static members are declared on the class itself. 
 * They're memory efficient because they're only declared once.
 * They can't use any instance members (instanceFields, instanceMethods, the constructor).
 * 
 * Instance members can't use any static members.
 * But they can create instance members with the exact name as other static members.
*/
class Foo {
  static classField = 3
  static classMethod() { return this.classField }
}

console.log(Foo.classField)    // 3
console.log(Foo.classMethod()) // 3