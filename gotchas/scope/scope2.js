// Scope is lexical not dynamic
var a = 1

var foo = function() {
	console.log(a)	// 1
}

var bar = function() {
	var a = 2
	foo()
}

bar()