/** 
 * The rest parameter lets you define a function that accepts an indefinite number of arguments. 
 * It's the same thing as variadic parameters from other languages.
 * 
 * The arguments will then be accessible inside the function in an array. 
 * It's a replacement for the arguments keyword.
 */
const f = (...nums) => nums; // [1, 2, 'a']
f(1, 2, 'a')