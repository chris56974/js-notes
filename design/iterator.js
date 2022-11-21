/** 
 * Lets you loop over some collection of objects. Kind of looks like a generator.
 */
const arr = [1,2,3]

function Iterator(items) {
	this.items = items
	this.index = 0
}

// Can also define your own rules instead
Iterator.prototype.hasNext = function() { return this.index < this.items.length }
Iterator.prototype.next = function() { return this.items[this.index++]}

const iter = new Iterator(arr)
iter.next()
iter.hasNext()
while(iter.hasNext()) { iter.hasNext() }