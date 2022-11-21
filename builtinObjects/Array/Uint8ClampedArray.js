/** 
 * Uint8ClampedArray is an array of 8-bit unsigned integers clamped to 0-255; 
 * if you specified a value that is out of the range of [0, 255], 0 or 255 will be set instead; 
 * if you specify a non-integer, the nearest integer will be set. 
 * 
 * The contents are initialized to 0. 
 */

const uintc8 = new Uint8ClampedArray(2); // [,]
uintc8[0] = 42;
uintc8[1] = 1337;         // 255 (clamped)
uintc8.BYTES_PER_ELEMENT; // 1