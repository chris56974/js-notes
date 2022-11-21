/** 
 * Short circuit evaluation is when JS stops evaluating an expression halfway 
 * once it realizes that it no longer has to. 
 * 
 * If left in && is falsey, 1st is returned. 
 * If left in && is truthy, 2nd is returned. 
 * 
 * If 1st in || is truthy, 1st is returned
 * If 1st in || is falsey, 2nd is returned
 * 
 * || and && don't return booleans, they return arguments
 */
const name = 'max' && 'ed'           // ed
const other = '' && true;            // ''
const person = name || 'placeholder' // 'placeholder'