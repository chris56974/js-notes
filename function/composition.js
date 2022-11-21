/** 
 * Function composition is when you create a new function from two or more other ones. 
 * You run one function first and then return its result so that it can be used by the next function. 
 * It's usually evaluated right-to-left f(g(x))
 */
let compose = (f, g) => data => f(g(data))
compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3MakePositive = compose(multiplyBy3, makePositive)

multiplyBy3AndMakePositive(-1) // 3

/** 
 * Pipe is similar to compose, except it's evaluated left to right g(f(x))
 */
let pipe = (f, g) => data => g(f(data))
pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

/** 
 * Currying is when you break down a function with multiple args 
 * into a sequence of functions, each with their own argument. 
 * Because of closures, b has access to a.
 */
const notCurried = (a, b) => a * b;
const curried = a => b => a * b;

/** 
 * Partial application is when you curry a function and use some, but not all of the resulting functions.
 */
const multiply = (a, b, c) => a * b * c;
const partialMultBy5 = multiply.bind(null, 5); // null for this
partialMultBy5(4, 10); // 5 x 4 x 10