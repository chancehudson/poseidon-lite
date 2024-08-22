import poseidon from './poseidon'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants/2'

const c = unstringifyBigInts(_c)

export function poseidon2(inputs, nOuts) {
  return poseidon(inputs, c, nOuts)
}
