/** 
 * You don't. JS wasn't meant to sleep threads because it's single threaded. 
 * setTimeout doesn't block threads, it just hands off the callback to the
 * task queue so that it can execute it later. 
 * The thread might look like it's been blocked by setTimeout but really
 * it just doesn't have anything left to do
 * and JS refuses to terminate until the task queue is empty. 
 */

// If you really want to sleep threads you have to do something hackey like this.
function sleep(miliseconds) {
   var currentTime = new Date().getTime();
   while (currentTime + miliseconds >= new Date().getTime()) { }
}

// synchronous code runs before this does
const foo = new Promise((res, rej) => {
	for (let i = 0; i < 100000; i++) {} // BLOCKS
	res(1)
})