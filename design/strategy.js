/** 
 * It's a a behavioural design pattern, where you enclose a family of closely
 * related algorithms inside a "strategy" or function. 
 * The advantage, is you can swap strategies in and out really easily.
 */
function StratA() {
	this.algorithm = () => 1
}

function StratB() {
	this.algorithm = () => 2
}

const a = new StratA()
const b = new StratB()

a.algorithm() // bad
b.algorithm() // bad

function Context() {
	this.strategy = ""
	this.setStrategy = (strategy) => { this.strategy = strategy }
	this.callAgorithm = () => this.strategy.algorithm()
}

const context = new Context()
context.setStrategy(a)
context.callAlgorithm() // good
context.setStrategy(b) 