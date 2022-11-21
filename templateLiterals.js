/** 
 * They are literals delimited by backticks, which 
 * also allow for embedded expressions called substitutions. 
 * Untagged template literals result in strings, which is
 * useful for string interpolation or multiline strings. 
 * Tagged template literals call a function (the tag function) 
 * with an array of any text segment from the literal followed
 * by arguments with the values of any substitutions.
 */
const a = "Not the same as string ${interpolation}"

`
multi-line
string
`
