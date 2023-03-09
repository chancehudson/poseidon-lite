import poseidon from '../poseidon'
import unstringifyBigInts from '../poseidon/unstringify'
import _c from '../constants_opt/8'

const c = unstringifyBigInts(_c)

export function poseidon8(inputs) { return poseidon (inputs, c) }
