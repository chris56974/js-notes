/** 
 * An ES6 module is a file that executes in strict mode only.
 * Node supports ES6 modules but you need the .mjs extension
 * Browsers support it but you need <script type="module">
 * 
 * The file protocol file:// can't serve modules natively 
 * so you need to use a dev server to serve a module
 * 
 * Modules use strict mode by default and their code executes
 * only once when it's first imported. Import/export is always hoisted.
 * 
 * You have to add .js to all your import statements! 
 * Or configure your server to ignore the extension!
 * Webpack will do it for you but the browser won't 
 * because it's not allowed to rewrite urls arbitrarily.
 */

const a = 1 // this var is no longer added to the global scope (can still globalThis.a = 0 though)
const b = 2 
export const c = 3      // name module export
export { a, b }         // ibid
export default { a, b } // default module exports (only allowed 1 per file)

import { a, b, c as foo } from './file'; // named module imports (with alias)
import * as stuff from './file';         // ibid
import stuff from "./file"               // default module import (use whatever name you want)
