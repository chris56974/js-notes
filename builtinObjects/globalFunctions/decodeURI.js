const uri = 'https://mozilla.org/?x=шеллы';
const encoded = encodeURI(uri);
console.log(encoded) // "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded)); // "https://mozilla.org/?x=шеллы"
} catch {
  console.error(e); // catches a malformed URI
}