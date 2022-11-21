/** 
 * JS is dynamic (does type checking at runtime), 
 * is weakly typed (types are assumed and coerced), 
 * and is hosted (it must run in an environment like v8) 
 * 
 * There are many implementations of its spec (ECMA) 
 * depending on which browser you use (V8, SpiderMonkey) 
 * Most implementations run JS via JIT compilation. 
 * 
 * We use JS on the web to make webpages more dynamic. 
 * HTML and CSS can only use links to make stuff interactive
 * 
 * JS is single threaded and uses a job queue for promises.
 * They made it single threaded so that it was easier to reason with.
 * There's no deadlocks or anything
 */

var a = globalThis // depends on the globalThis (window or global)
