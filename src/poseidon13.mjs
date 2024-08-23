import poseidon from './poseidon'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants/13'

const c = unstringifyBigInts(_c)

export function poseidon13(inputs, nOuts) {
  return poseidon(inputs, c, nOuts)
}
