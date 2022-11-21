/** 
 * It's when you build and extend objects using functions. 
 * Functional mixins are composable functions that mixin new properties/behaviors into an existing object. 
 * They're the same as my canBar() functions in in my concatenative inhertiance note. 
 * Start with pure functions (FP), then try factories if you need persistent state, 
 * and then try functional mixins if you need more complex objects.
 */
import Events from 'eventemitter3';

const rawMixin = function () {
  const attrs = {}; // private

  return Object.assign(this, {
    set(name, value) {
      attrs[name] = value;
      this.emit('change', {
        prop: name,
        value: value
      });
    },
    get(name) {
      return attrs[name];
    }
  }, Events.prototype);
};

const mixinModel = (target) => rawMixin.call(target);

const george = { name: 'george' };
const model = mixinModel(george);

model.on('change', data => console.log(data));
model.set('name', 'Sam'); // { prop: 'name', value: 'Sam'}
