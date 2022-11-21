let x = 7;
x == 7 || x === 3 && x > 10; // true

// && has higher precedence than || and runs first
// both sides are false so it returns x > 10
// x == 7 evaluates to true so it returns true