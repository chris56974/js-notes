/** 
 * The null coalescing operator is the same as ||
 * except 0 and "" are now truthy.
 */
var a = 0 || 'a', // a 
  a = '' || 'a',  // a
  a = 0 ?? 'a',   // 0
  a = '' ?? 'a'   // '' 