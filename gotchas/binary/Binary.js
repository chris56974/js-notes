/** 
 * 0.2 & 0.4 are imprecise in binary, kind of like how 1/3 is imprecise in decimal. 
 * So JS is good at storing some numbers and not others.
 */
0.2.toFixed(20) // 0.200000000011 (what it's like without smart rounding)
 