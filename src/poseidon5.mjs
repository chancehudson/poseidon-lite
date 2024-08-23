import poseidon from './poseidon'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants/5'

const c = unstringifyBigInts(_c)

export function poseidon5(inputs, nOuts) {
  return poseidon(inputs, c, nOuts)
}
