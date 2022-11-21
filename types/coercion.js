/** 
 * Type coercion is when types change implicitely to fit 
 * the purpose of an operation. It happens a lot in JS.
 * 
 * Type conversion is when we convert types explicitely 
 * through the use of conversion methods. 
 * 
 * It goes from left to right using BEDMAS
 */
const c = 1 + 4 * 2 + 7 - '6' + '4' * 5 + '3' - '12' // 291
16 - 6 + 4 * 5 + '3' - '12'
10 + 20 + '3' - '12'
30 + "3" - "12"
"303" - "12"
291