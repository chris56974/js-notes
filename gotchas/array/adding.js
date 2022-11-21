let arr = [1, 2, 3]
arr[100] = 4
console.log(arr.length) // 101
console.log(arr) // [1,2,3, empty x 99, 4]