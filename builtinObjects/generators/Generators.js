/** 
 * A generator is a function that can be entered & exited multiple times. 
 * Can even enter from where we last left off in the function.
 */
function* foo() {
  yield 'a'; // paused here
  yield 'b'; // now paused here
  yield 'c'; // etc
}

const bar = foo();
console.log(bar.next()); // {value: a, done: false}
console.log(bar.next()); // {value: b, done: false}
console.log(bar.next()); // {value: c, done: false}
console.log(bar.next()); // {value: undefined, done: true}