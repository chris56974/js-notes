/** 
 * Every function is actually a Function object. 
 * Functions are also FCCs "First Class Citizens", they go wherever they please. 
 * They can be assigned to variables/properties, passed in as arguments (callbacks), 
 * or returned from other functions.
 */
(function(){}).constructor === Function // true
const foo = new Function('return 1')    // foo = function() { return 4 }
foo.bar = 2
foo()   // 1
foo.bar // 2

function foo() {}       // function declaration
var foo = function() {} // anonymous function expression (foo is not the name for function() {})

foo()        // can be called in four ways
foo`${a}${b}`// tagged templates
foo.call()   // call method
object.foo() // as a method

// JS does not have required params (undefined) BUT you can do this
const isRequired = () => { throw new Error('param is required'); };
const hello = (name = isRequired()) => { console.log(`hello ${name}`) };

hello();          // ERROR: Param is required
hello(undefined); // Ibid
hello(null);      // OK
hello('hey');     // OK

const fun = (a,) => a // ES8 OK