import poseidon from './poseidon'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants/9'

const c = unstringifyBigInts(_c)

export function poseidon9(inputs, nOuts) {
  return poseidon(inputs, c, nOuts)
}
