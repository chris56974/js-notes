/** 
 * Object.create() creates a new object by using an existing object
 * as its prototype. That means foo = Object.create(bar) will create
 * a foo object with bar set to its [[Prototype]]
 * 
 * The only problem with it, is its second argument (propertiesObject) 
 * can be a performance black hole. It's because each object-descriptor 
 * property has its own separate descriptor object. When dealing with
 * hundreds of thousands of object descriptors in the form of objects, 
 * that lag time might become a serious issue.
 */
Object.create(proto)
Object.create(proto, propertiesObject) // for adding property descriptors

const prototypeObject = { 
	a: 1,
	b() { return this.a + 1 }
}

const foo = Object.create(prototypeObject) 

prototypeObject.isPrototypeOf(foo) // true
foo.__proto__                      // prototypeObject
foo.__proto__.constructor          // Object {}