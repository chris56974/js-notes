/** 
 * You can pass in strings for the this object 
 */
function a(a) {
	return this + a
} // .bind('now') ERROR: too soon

let bar = function (a) {
	return this + a
}.bind("hello")

let baz = a.bind("hello")
baz("hello")