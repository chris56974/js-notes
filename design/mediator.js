/** 
 * Behavioural pattern where you create a mediator object that regulates how objects interact with eachother.  
 * It's good to use when you want to avoid coupling between objects, 
 * and if you want to change the interaction between objects independently from the objects themselves. 
 * It's popular for chat applications.
 */
function A(x) { // create a bunch of A objects
	this.x = x
	this.mediator = null
}

A.prototype.send = function(msg, toA) { this.mediator.send(msg, this, toA) }
A.prototype.receive = function(msg, fromA) { console.log(`${fromA.x} to ${this.x} ${msg}`) }

function Mediator() { this.objects = {} } 

Mediator.prototype.add = function(object) {
	this.objects[object.x] = object
	object.mediator = this
} 

Mediator.prototype.send = function(msg, fromA, toA) { toA.receive(msg, fromA) }

const m = new Mediator()
const a = new A('a')
const b = new A('b')

a.send("eg", b) // this calls mediator.send()