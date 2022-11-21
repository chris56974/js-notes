// Tags allow you to parse template literals with a function.
const foo = (stringArray, arg1) => { 
	console.log(stringArray.raw[0]) // 'bar baz '
	console.log(stringArray) // ['bar baz ', '']
	console.log(arg1)        // 'qux'
}

foo`bar baz ${"qux"}`

const bar = (strings, ...args) => {
	return ((...values) => { //  passed in automatically
    console.log(strings)   // ['', '', '']
    console.log(args)      // [0, 1]
		console.log(values)    // [8, 9]
	})
}

let closure = bar`${0}${1}`
closure(8, 9)