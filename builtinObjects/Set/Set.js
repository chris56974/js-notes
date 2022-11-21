/** 
 * Stores list of unique values of any type, 
 * removes duplicates but does NOT preserve insertion order.
 */

const set = new Set();

set.add(100);
set.add(100); // does nothing - no duplicates allowed
set.add(true);
set.add('string');
set.add({name: 'John'});
set.has(100); // true
set.has({name: 'John'}); // false, different place in memory
set.delete(100); 

set.size;
set.entries // gives you each entry twice in an array
set.entries // [100, 100], [true, true]...
