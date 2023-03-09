import poseidon from './poseidon/slow'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants_slow/6'

const c = unstringifyBigInts(_c)

export function poseidon6(inputs) { return poseidon (inputs, c) }
