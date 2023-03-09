import poseidon from '../poseidon'
import unstringifyBigInts from '../poseidon/unstringify'
import _c from '../constants_opt/12'

const c = unstringifyBigInts(_c)

export function poseidon12(inputs) { return poseidon (inputs, c) }
