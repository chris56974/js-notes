/** 
 * Numbers are a primitive datatype in JS, 
 * they're ALL 64 bit floats ($2^{53} - 1$). 
 * 
 * Anything larger than that and JS starts to
 * become imprecise, in which case you need to
 * use BigInt() instead.
 */
export const a = 100 / 0  // Infinity
export const b = -100 / 0 // -Infinity

export const toNumber = +'1'  // shorthand
export const ibid = +new Date();

2 ** 2 // ES7