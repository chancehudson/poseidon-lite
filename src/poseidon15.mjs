import poseidon from './poseidon/slow'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants_slow/15'

const c = unstringifyBigInts(_c)

export function poseidon15(inputs) { return poseidon (inputs, c) }
