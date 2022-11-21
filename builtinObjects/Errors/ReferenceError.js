/*
  This throws a reference error immediately, it won't even print the result of foo. 
  This is because bar is not hoisted.
*/

foo(1, 1)
bar(1, 1)

function foo(x, y) { return x - y }
const bar = function (x, y) { return x - y }
