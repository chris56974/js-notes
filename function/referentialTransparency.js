/** 
 * RT "Referential Transparency" is when you can replace an expression 
 * with its corresponding value and have nothing change in the program. 
 * The capital of alberta is a "referent" for Edmonton. An expression 
 * that is not RT is RO "Referentially Opaque". This requires that the 
 * expression be pure, that is to say the expression value must be the 
 * same for the same inputs and its evaluation must have no side effects. 
 * 
 * An expression that is not referentially transparent is called referentially opaque.
 */
function add (x, y) {
	return x + y
}

add(1, 1) 
2        // replacing this with 2 is the same thing
