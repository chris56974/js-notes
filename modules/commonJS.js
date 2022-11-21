/** 
 * Originally only meant for Node or Webpack. 
 * Unlike ES6 modules, you can't declare a 
 * variable and export it at the same time.
 */

const { namedImport } = require('file')
const { namedImport: renamedToThis } = require('file')
const defaultImport = require('file')

module.exports.namedExport = function () { }
exports.namedExport = 1 // apparently this also works
module.exports = {}     // default export