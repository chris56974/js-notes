/** 
 * Fetch returns a promise that resolves to a "Response" 
 * object which implements the "Body" mixin. The body 
 * mixin is a class that's meant to act like an interface. 
 * 
 * It has stuff like the response headers and the response body of your request. 
 * Fetch is async, which means your code will not wait for it unless you tell it to.
 */

const fetch = require("node-fetch"); // node

const goGet = async url => {
  const res = await fetch(url);

  console.log(res.bodyUsed)
  console.log(res.body) // ReadableStream i.e. Promise
  console.log(Object.getOwnPropertyNames(res.body))

  let json = await res.json();
  json = await res.text();

  return json
};

goGet(url);

const foo = (name) => {
  fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err))
};