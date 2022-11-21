/** 
 * Arrow functions don't have a prototype property.
 * They can't be used as constructor functions
 */

const a = () => {}

a.prototype