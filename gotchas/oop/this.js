/** 
 * Destructuring a function OUTSIDE of an object means
 * you're no longer calling it on that object. The this
 * keyword will point to the window. 
 */
const foo = {
  bar() { console.log(this); }
};
foo.bar() // { bar() {} }
const { bar } = foo;
bar();        // WINDOW
bar.call(foo) // { bar() {}}

// DOM gotcha
const printColor = function () {
  console.log(this);
  console.log(this.style.backgroundColor);
}

button.addEventListener('click', printColor) // button
button.addEventListener('click', () => { console.log(this) }) // window