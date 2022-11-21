/** 
 * An iterable is any object that implements the "iterable" protocol, 
 * meaning it has an `@iterator` method (not a typo, this is a Symbol.iterator). 
 * 
 * NodeList, Strings, Maps and Sets are all examples.
 * 
 * An Array-Like Object is not an iterable or an array. 
 * They're objects that have a length property and use indexes to access items. 
 * They don't have array manipulation methods.
 */

let nodeList = document.getElementsByTagName('li');

Array.from(nodeList)
