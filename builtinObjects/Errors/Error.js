/*
  You should only throw errors on code that can fail like network calls.
*/

const myError = new Error('my message');
myError.message // 'my message'
myError.stack   // trace error, '<anonymous>:someLine' -> global context
myError.name    // Error 

try {
  if (badCondition) {
    throw myError; // stops execution of the program
    // throw 1;       
    // throw new Error('Goofy');
    // throw new SyntaxError();
    // throw new ReferenceError();
  }
} catch (error) {
  console.log(error);
  console.log(error.message);
  console.log(error.stack);
} finally {
  // cleanup
}