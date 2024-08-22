import poseidon from './poseidon'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants/1'

const c = unstringifyBigInts(_c)

export function poseidon1(inputs, nOuts) {
  return poseidon(inputs, c, nOuts)
}
