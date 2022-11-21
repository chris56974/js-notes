/** 
 * for-of && forEach for ITERABLES (arrays & strings)
 * for-in && Object.keys for ENUMERABLES (objects) 
 */
const foo = [1, 2];
const bar = { a: 1, b: 2 }

for (item of foo) { console.log(item) } // 1, 2
for (item in bar) { console.log(item) } // a, b
for (let i = 0; i < foo.length; i++) { console.log(foo[i]); } // 1, 2

do { } // this will always run at least once even if the condition is false
while (condition);