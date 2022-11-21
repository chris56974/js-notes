const flying = object => {
  let isFlying = false;
  return {
    ...object,
    fly() {
      isFlying = true
      return this
    },
    land() {
      isFlying = false
      return this;
    }
  }
}

const bird = flying({});
bird.isFlying       // false
bird.fly().isFlying // true

// Composing function mixins
const quacking = quack => o => ({ o, ...{ quack: () => quack } })
const quacker = quacking('Quack!')({});
quacker.quack() // Quack!

let createDuck = quack => quacking(quack)(flying({}));
let duck = createDuck('Quack!');
duck.fly().quack()

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
createDuck = quack => pipe(flying, quacking(quack))({});
duck = createDuck('Quack!');
console.log(duck.fly().quack());