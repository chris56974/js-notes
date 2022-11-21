/** 
 * Behavioural design pattern that allows a number of objects (Observers, Subscribers, Consumers) 
 * to see events from a single object (Subject, Observable, Producer). 
 * It's good to use when you have multiple objects dependent on a single object. 
 * That way they can do something whenever that object changes. 
 * It's also good to use when a single object needs to notify a bunch of objects without 
 * knowing what they are or how many of them exist. 
 */
function Subject() { this.observers = [] }
function Observer() { console.log("I got called") }

Subject.prototype = {
	subscribe: function (fn) { this.observers.push(fn) }, // Subscribe to Subject
	unsubscribe: function (fnToRemove) {
		this.observers = this.observers.filter(fn => {
			if (fn != fnToRemove) { return fn }
		})
	},
	fire: function () { this.observers.forEach(fn => fn()) } // call the function 
}


const subject = new Subject();

subject.subscribe(Observer)
subject.fire()