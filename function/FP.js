/** FP
 * FP "Functional Programming is a programming paradigm that builds software 
 * by composing pure functions that avoid shared state and data mutation.
 * 
 * A functional program cannot change the outside world, including the input 
 * data it receives. It can only produce new data.
 * 
 * Unlike OOP, the data (state) in a program is kept completely separate from 
 * the functions that manipulate that data. 
 * 
 * Languages that are purely functional don't have statements or procedures 
 * (a procedure is a function that doesn't return anything). Functions are 
 * usually FCCs "First Class Citizens" too, which means they go where they
 * please (args, vars, return statements).
 * 
 * FP works works great for distributed services or parallelism because it's 
 * easy for multiple machines/threads to work on the same data at the same time if that
 * data is never mutated. 
 */

/** Pure Functions
 * Pure functions are deterministic and don't have any side effects. 
 * Determinism is when the same input always produces the same output and 
 * a side effect is any change in the application's state that is observable
 * from outside the function (besides the return value). These are things like
 * writing to the console, screen, file, or network. Or when you modify an
 * external variable/property, or when you call an external process or function
 * that isn't pure.
 * 
 * Arity is the number of arguments in a function. 
 */

/** Closures
 * Closures can make functions stateful! So it's not like functions are stateless and
 * classes are stateful. Closures can also make a function no longer pure if a function
 * modifies any variables that it closed over.
 */

/** Functor
 * A functor is anything that can be mapped over using a function. 
 */