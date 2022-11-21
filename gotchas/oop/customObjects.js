/** 
 * You may get weird behaviour when you try to create an 
 * object using a custom object. This is especially true 
 * if you use the null custom object (it has no member functions like toString or a prototype). 
 */
oco = Object.create({});   // works a lot better
ocn = Object.create(null); // than this

"ocn is " + ocn // ERROR - cannot convert object to primitive value
alert(ocn)      // ibid

ocn.toString()       // ERROR - toString() is not a function
ocn.valueOf()        // ibid
ocn.hasOwnProperty() // ibid
ocn.constructor      // undefined