/** 
 * An EC "Execution Context", SF "Stack Frame" or plate, 
 * is an environment for running JS (can't run JS without it). 
 * Whenever you call a function, you are creating an EC 
 * in a creation phase and executing it in an execution phase. 
 * 
 * During the creation phase, a couple things happen. 
 * Variables are hoisted and a VO/VE "Variable Object/Env" 
 * is created which is an object that holds all the variables
 * that function needs to run (arguments, variable declarations, pointers). 
 * 
 * It then assigns a scope chain and the value for this. 
 * Then each line of code is executed lexicallay from top to bottom in an execution phase. 
 * 
 * VO -> function args (a,b), var declaration (c), and a foo() pointer
 * SC -> contains current VO, and VO of its parent scope
 */
function add(a, b) {
  var c;
  function foo() { }
  return a + b
}