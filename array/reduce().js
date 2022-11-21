/** 
 * It executes a "reducer" callback function on each element of the array. 
 * The reducer function is fed the result from the previous calculation for
 * each iteration (the accumulator). If you don't provide an initialValue, 
 * it will start with the first el in the array
 */

reduce((accumulator, currentValue, index, array) => { }, initialValue)
reduce((accumulator, currentValue, index, array) => { })

const x = [1, 2, 3]
y = x.reduce((acc, item) => acc + item, 0); // acc is 0, item is 1
y = x.reduce((acc, item) => acc + item);    // acc is 1, item is 2