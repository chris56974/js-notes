/** 
 * encodeURI() will encode a complete URI that might have some characters that need encoding. 
 * It will not encode reserved characters that have special meaning. 
 * Use this when you want to navigate to a link, but it has some characters that could be mistaken for reserved keywords.
 * 
 * The difference between `encodeURI` and `encodeURIComponent` is the former will ignore the scheme `http://` 
 * and the latter will encode everything.
 * You need to encode URIs because word processing programs may treate URL characters incorrectly and morph them. 
 * We replace all the suspect characters with their UTF-8 encoding (spaces encode to %20). 
 * 
 * Sometimes it needs up to 4 escape sequences. 
 * URI/URL/URN "Uniform Resource Identifier/Locator/Name" either identifies 
 * a resource, locates a resource, or names a resource
 * The difference between the three is subtle. A URI identifies a resource, a URL locates a resource and a URN names a resource. 
 * 
 * A URL has a scheme (HTTP, FTP, NEWS, MAILTO, FILE, TELNET), a server name `www, mail`, a path and an optional port number.
 * URI http://www.google.com/index.html#one
 * URL http://www.google.com/index.html
 * URN www.google.com/index.html#one
*/

// The following characters are not encoded and have special meaning in URLs
// ,/?:@&=+$#   

const uri = 'https://mozilla.org/?x=шеллы';
const encoded = encodeURI(uri);
console.log(encoded) // "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded)); // "https://mozilla.org/?x=шеллы"
} catch {
  console.error(e); // catches a malformed URI
}