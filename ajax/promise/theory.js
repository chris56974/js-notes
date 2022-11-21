/** 
 * A promise is an object that holds the future value of an asynchronous operation. 
 * They save us from callback hell, because they let us chain .then() handlers together 
 * instead of passing in callbacks into other callbacks. Promises are NOT a part of the Web API, 
 * they're a part of the official ES6 spec. 
 * 
 * This means they're not asynchronous! Promises accept a callback that 
 * runs synchronously and immediately on the main thread, 
 * which means they could block the main thread if you run CPU intensive 
 * code in there (that's not what they're for). 
 * You're supposed to launch asynchronous tasks inside the callback. 
 * After launching those async tasks, 
 * code execution then moves past the callback (like it does for regular callbacks), 
 * and only comes back once the task is finished so that it can call resolve(). 
 * All the asynchronous operations in JS (setTimeout, fetch, xhr, io) come from 
 * the webAPIs or the Node APIs (which are both implemented in C/C++). 
 * Promises don't use the callback queue, they use the job queue (or microtask queue) 
 * which has higher priority and is built into the V8 engine itself. 
 * Promises start off as "pending", which means they're waiting for a value. 
 * Pending is the placeholder value that you'll get whenever you try 
 * to use a promise too soon, before the asynchronous request has settled and the value is known. 
 * Once the request has settled, the promise is either "fulfilled" or "rejected". 
 * A promise is "resolved" if trying to resolve or reject it has no effect. 
 * Either it has been "locked-in" to follow another promise, or it has settled. 
 * A promise is "unresolved" if trying to resolve or reject still has an impact on the promise.
 */
