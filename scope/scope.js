/** 
 * Scope refers to the part of your program where a variable is accessible. 
 * The scope of a variable depends on its "lexical environment", which means
 * it depends on where the variable is situated in the actual code itself. 
 * 
 * Each function creates an execution context and each execution context
 * creates its own scope (lexical environment). A lexical environment is 
 * comprised of all the local memory in that execution context, plus the 
 * lexical environment of its parent. The root execution context is always 
 * the global execution context, and that context only goes away when the 
 * program ends.
 */