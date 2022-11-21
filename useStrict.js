/** 
 * Runs the program/function in a strict execution context. 
 * Makes debugging easier and things that would've failed 
 * silently will now throw an exception. 
 * 
 * 1. Yells whenever we use undeclared/misspelt variables
 * 2. Prevents us from using reserved keywords (for future versions of JS)
 * 3. Prevents us from deleting functions, variables or function arguments.
 * 4. Throws more errors with things like `this`
 * 5. Prevents a lot of silent errors by throwing them explicitely
 * 
 * "use strict" is a string because older browsers safely ignore strings 
 */