/** 
 * The callstack keeps track of where you are in terms of code execution. 
 * It stores all the local variables and pointers in a heap. 
 * It has LIFO processing and you can overflow it by calling too many functions. 
 * The heap stores all your reference type objects (arrays, functions, objects) in RAM. 
 * GC "Garbage Collection" in JS uses a 'mark and sweap' algorithm. 
 * It marks what you still need and sweeps everything else. 
 * The garbage collector scans the STACK not the heap (looks at the pointers), 
 * but sweeps the heap and not the stack. 
 * The callstack reclaims its own memory whenever stuff gets popped off the stack. 
 */

const foo = (x) => x
const bar = () => foo(9)

// Callstack looks like this anonymous -> bar() -> foo() 
// First foo pops off, then bar, then anonymous (global execution context)

var obj =  {a: 1}
obj = 1 // {a: 1} is swept