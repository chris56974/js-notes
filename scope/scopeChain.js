/** 
 * A scope chain is created whenever you nest scopes in other scopes. 
 * Each inner scope has access to all variables in its outer scope. 
 * This is particularly useful for closures and data hiding because 
 * this form of variable lookup only works one way! A parent scope 
 * can't look inside its child scope and grab what it needs. 
 * [[Scopes]] is a property available to us in the devTools, 
 * that represents the scope chain.
 * 
 * Shadowing is when you declare the same variable in both scopes and
 * the local one prevails. Lexical/Static Scope/Analysis is all about
 * where you wrote something (scope chain uses lexical analysis) whereas
 * dynamic scope/analysis refers to where you called something 
 * (this keyword uses dynamic analysis).
 */