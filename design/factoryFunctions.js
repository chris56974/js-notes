/** 
 * If you're memory conscious you might want to use prototypal inheritance instead. 
 */
const Factory1 = () => {
	const a = 1 // private var
	const b = 2
	return {
		b,
		foo() { return a }
	}
}

const Factory2 = (a, b) => ({
	a,
	b,
	foo(a) {
		this.a = a
		return this
	}
})

const obj = Factory2()
a.foo() // 1
$('button').click(a.foo) // works