const foo = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve("bar") // bar gets returned from the promise
  }, 3000);
}) // can chain from here or below

// At this point foo is already "settled" 
foo.then(data => console.log(data)) // or foo.then(console.log)
  .catch(error => console.log(error))
  .finally(() => { }) // cleanup work

const p = Promise.resolve(1)          // resolve instantly
p.then(val => ++val).then(val => val) // this is a chain (MUST RETURN SOMETHING FOR EACH THEN)
p.then(val => val)                    // this is a fork, both get called at the same time