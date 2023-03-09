import poseidon from '../poseidon'
import unstringifyBigInts from '../poseidon/unstringify'
import _c from '../constants_opt/2'

const c = unstringifyBigInts(_c)

export function poseidon2(inputs) { return poseidon (inputs, c) }
