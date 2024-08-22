import poseidon from './poseidon'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants/15'

const c = unstringifyBigInts(_c)

export function poseidon15(inputs, nOuts) {
  return poseidon(inputs, c, nOuts)
}
