import poseidon from '../poseidon'
import unstringifyBigInts from '../poseidon/unstringify'
import _c from '../constants_opt/15'

const c = unstringifyBigInts(_c)

export function poseidon15(inputs) { return poseidon (inputs, c) }
