import poseidon from '../poseidon'
import unstringifyBigInts from '../poseidon/unstringify'
import _c from '../constants_opt/7'

const c = unstringifyBigInts(_c)

export function poseidon7(inputs) { return poseidon (inputs, c) }
