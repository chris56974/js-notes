/** 
 * New primitive type. 
 * They give properties to objects that are resistant to accidental reassignment. 
 */
const uid = Symbol('uid')
const user = { [uid]: 'value' }
user.uid = 'other'  // [uid] = value is still intact
user[uid] = 'other' // [uid] = value is no longer intact 
Object.getOwnPropertyNames(user)   // symbol is hidden!
Object.getOwnPropertySymbols(user) // symbol is revealed!

Symbol('a') === Symbol('a')         // False, every symbol is unique
Symbol.for('a') === Symbol.for('a') // True, Symbol.for no longer unique