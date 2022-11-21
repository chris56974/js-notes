const arr = ["a", "b", "c"];

function nameIterator(names) {
  let nextIndex = 0;
  return {
    next: () => {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    }
  };
}

const names = nameIterator(arr);
console.log(names.next()); // a
console.log(names.next()); // b 
console.log(names.next()); // c
console.log(names.next()); // done