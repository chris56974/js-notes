/** 
 * Idempotency means you can call the same function multiple times 
 * without fear of negative side-effects. There are no changes in
 * state between subsequent calls. It does not mean determinant! 
 * The first call can change state (create a new dir) but the 
 * second call can do nothing (a deterministic function would create another dir). 
 * It's not pure either because it could produce a side-effect 
 * A pure function is always idempotent though.
 */
