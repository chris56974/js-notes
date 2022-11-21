/** 
 * IIFEs "Immediately Invoked Function Expression" are function expressions 
 * (anonymous functions), that you immediately invoke. 
 * Were one method of not polluting the global namespace. 
 * They are only invoked one time and only pollute the global namespace once. 
 * They need to load in the right order if you have more than one. 
 * We used IIFEs in the first place to load multiple scripts.
 */
(function () { })();

var eg = (function () {
  let a = 5
  return {
    a: a  // eg.a = 5
  }
})()
