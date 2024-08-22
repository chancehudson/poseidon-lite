import poseidon from './poseidon'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants/16'

const c = unstringifyBigInts(_c)

export function poseidon16(inputs, nOuts) {
  return poseidon(inputs, c, nOuts)
}
