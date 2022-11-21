/** 
 * You create objects from other objects. 
 * Keep in mind this creates shallow copies.
 */

const distortion = { distortion: 1 };
const volume = { volume: 1 };
const cabinet = { cabinet: 'maple' };
const lowCut = { lowCut: 1 };
const inputLevel = { inputLevel: 1 };

let GuitarAmp = options => ({ ...distortion, ...volume, ...cabinet, ...options })

GuitarAmp = options => Object.assign({}, distortion, volume, cabinet, options);

const BassAmp = (options) => {
  return Object.assign({}, lowCut, volume, cabinet, options);
};

const ChannelStrip = (options) => {
  return Object.assign({}, inputLevel, lowCut, volume, options);
};