/** 
 * JS runs top to bottom, but you can control the flow of the program with if-else. 
 * Try to avoid else clauses with guard classes and separate if statements.
 */
if (condition) statement // guard statements
if (condition) { statement } else if (condition) { statement } else { statement }
condition ? expression : expression

// ERROR
// let a = if (condition) return "jeff" 

a = condition ? "jeff" : null

conditionA ? expression : conditionB ?
	expression :
	expression

{ // "block statement"
	"runs in its own scope"
}
