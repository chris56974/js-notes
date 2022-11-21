/** 
 * A shallow copy is when you copy an object, but instead of copying all the inner objects 
 * inside that object you instead copy a reference to all of those inner objects. 
 * If you don't want any of these "deep references", you're going to have to do a deep copy 
 * and recreate all the inner objects and put them in a separate place in memory.
 */
let foo = { 
	a: 1, 
	b: { x: 1 }
}

let bar = {...foo}               // shallow clone/copy
let baz = Object.assign({}, foo) // ibid
let qux = foo                    // qux is a direct reference

bar.a = 2    // foo is unaffected
bar.b.x = 6  // foo is mutated!!!