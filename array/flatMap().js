// same as flat() but returns the array

const array = [1, 2, [3, 4, [5]]];

array.flatMap(num => num++) // returns [2, 3, 4, 5, 6]