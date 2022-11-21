/** 
 * When you declare variables on the global window object 
 * you're "polluting the global namespace".  This makes it
 * harder to understand your code because you're using the 
 * same environment for everything instead of separating 
 * concerns with modules and functions. 
 * 
 * It could create name clashes because your variables could
 * conflict with the ones declared on the global window object.
 * If you have multiple programmers working on the same project, 
 * you might conflict with their variables too. It also has poor
 * garbage collection because variables can only be collected 
 * once they leave their scope, and the user never leaves the
 * global scope until they leave your application. So your 
 * variables would live throughout the life of the application. 
 */