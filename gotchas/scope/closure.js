// This will still work, you don't have to return alert(a), you just have to return bar.

const foo = () => {
	const a = "a"
	const bar = () => {
		return a
	}
	return bar
}

foo()() // "a"