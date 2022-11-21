/** 
 * Arrow functions you use an arrow function in a class, 
 * it actually ends up in the constructor and NOT the prototype object. 
 * This means they don't have the same memory efficiency. 
 * The advantage is that the this keyword is always bound to the class. 
 * Sometimes your method will bind to an HTML element instead of the class you declared it in. 
 */
class ArrowFunction {
	a = 1
	bar = () => this.a
}