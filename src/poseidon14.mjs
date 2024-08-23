import poseidon from './poseidon'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants/14'

const c = unstringifyBigInts(_c)

export function poseidon14(inputs, nOuts) {
  return poseidon(inputs, c, nOuts)
}
