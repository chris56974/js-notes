/** 
 * NEVER create multi-dimensional arrays with array.fill(). 
 * This just creates a single row and references it three times.
 * https://stackoverflow.com/questions/9979560
 */

const dp = Array(2).fill(Array(3).fill(-1));
dp[0][0] = 2
dp // [[2, -1, -1], [-2, -1, -1]]

// 2 rows and 3 columns
const doThisInstead = Array(2).fill([]).map(() => Array(3).fill(0))