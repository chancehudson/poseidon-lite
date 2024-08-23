import poseidon from './poseidon'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants/11'

const c = unstringifyBigInts(_c)

export function poseidon11(inputs, nOuts) {
  return poseidon(inputs, c, nOuts)
}
