/** 
 * Number overrides the toString() method from Object
 * 
 * foo.toString(radix) 
 * 
 * 2 binary 
 * 8 octal 
 * 10 decimal 
 * 16 hexadecimal
 */
'1'.toString(2) // 1
'5'.toString(2) // 5

const a = 1/5
a.toString(2) // 1/101 (1/5 is 1/101 in binary)