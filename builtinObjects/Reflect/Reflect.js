/** 
 * Reflect is a built-in object that provides methods for interceptable JavaScript operations. 
 * It basically provides a bunch of static methods for things you could do before.
 * Instead of Object you can use Reflect. Or instead of obj[foo] you can use Reflect.get(obj, foo)
 * 
 * It makes things easier to read and less verbose
 */
const obj = {
  a: 'foo',
  b: 'bar',
};

obj.a                 // foo
Reflect.get(obj, "a") // foo (same thing)


// Object.setPrototypeOf(obj, {properties})
Reflect.setPrototypeOf(obj, { properties })
Reflect.setPrototypeOf({ b: 1 }, { toString() { } })

// Object.defineProperty(obj, property, {attributes})
Reflect.defineProperty(obj, 'foo', {
  configurable: false, // can't delete this property or change its attributes (writable, enum, config)
  writable: true,      // its value can be overwritten
  enumerable: true,    // can be used in for..in
  value: obj.name,     // initial value
});