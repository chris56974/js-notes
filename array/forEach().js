// Mutates

// [array] lets you rename arr inside the forEach
arr.forEach(callback(currentValue, [index], [array]), [this]); 

arr = [1,2,3]
arr.forEach((item, index, array) => array[index] = 1)  // [1, 1, 1]

// this = window in both cases because it's a function inside a function
arr.forEach(function(item, index) {this[index] = 1}) 
arr.forEach((item, index ) => this[index] = 1) 

// this = arr because we bind it in the inner function 
arr.forEach(function(item, index) {this[index] = 1}, arr) 
arr.forEach((item, index) => this[index] = 1, arr) 