/** 
 * Structured cloning is more expensive than creating a shallow clone, 
 * but it will recreate all the inner objects instead of referencing them. 
 * You can also use a library like lodash
 */
JSON.parse(JSON.stringify(obj))   // (breaks nested Maps, Sets, Dates, Regex)
v8.deserialize(v8.serialize(obj)) // node (potentially scuffed)
structuralClone(obj)              // experimental (firefox only)