import poseidon from './poseidon'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants/4'

const c = unstringifyBigInts(_c)

export function poseidon4(inputs, nOuts) {
  return poseidon(inputs, c, nOuts)
}
