import poseidon from '../poseidon'
import unstringifyBigInts from '../poseidon/unstringify'
import _c from '../constants_opt/10'

const c = unstringifyBigInts(_c)

export function poseidon10(inputs) { return poseidon (inputs, c) }
