/** 
 * Behavioural pattern that abstracts all the algorithms 
 * from an object and places them in a visitor object instead. 
 * It's meant to separate concerns while leaving the object structure intact. 
 * It's one way to follow the open/close principle and is not that popular in JS.
 */
function A(x) { this.x = x }

A.prototype.getX = function () { return this.x }
A.prototype.setX = function (newX) { this.x = newX }
A.prototype.run = function (newFunction) { newFunction(this) }

function doubleY(obj) { obj.setY(obj.getY() * 2) }

const a = A(1, 2)
a.getY // 2
a.run(doubleY) // this will run double Y
a.run(someOtherFunction) // etc