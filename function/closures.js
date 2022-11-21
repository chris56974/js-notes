/** 
 * A closure is a function that holds onto its surrounding scope 
 * (its "lexical environment") even after code execution has moved
 * outside the block. Watch out for memory leaks.
 */
const impure = () => {
  let _hidden = 1;
  return () => ++_hidden; // side effect on _hidden
}

impure._hidden;  // undefined
impure()._hidden // ibid
impure()() // 2

const pure = () => {
  let _hidden = 1;
  return () => {
    let purity = _hidden; // removes side effect
    return ++purity
  }
}

const big = (index) => {
  const bigArray = new Array(7000).fill('T')
  return bigArray[index]
}
big(1111) // Creates 7000 array finds it and then destroys it
big(1112) // Creates 7000 array AGAIN finds it and then destroys it

const bigClosure = () => {
  const bigArray = new Array(7000).fill("T");
  return index => bigArray[index];
};

const bigg = bigClosure(); // Creates the entire array ONCE
bigg(688);                // searches array - saves on memory !