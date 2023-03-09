import poseidon from './poseidon/slow'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants_slow/5'

const c = unstringifyBigInts(_c)

export function poseidon5(inputs) { return poseidon (inputs, c) }
