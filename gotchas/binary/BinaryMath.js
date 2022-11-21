/** 
 * 0.1 in binary is similar to 1/3 in decimal - it's an infinitely repeating number. 
 * It's a computer problem not a JS problem.
 */
console.log(0.1 + 0.2) // 0.30000000000004
console.log(0.1 + 0.2 === 0.3) // false

if (x === .35) {} // bad idea - could be .3500000000004
if (x >= .35)  {} // use this if you want .350000000004