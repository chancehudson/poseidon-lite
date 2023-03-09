import poseidon from '../poseidon'
import unstringifyBigInts from '../poseidon/unstringify'
import _c from '../constants_opt/16'

const c = unstringifyBigInts(_c)

export function poseidon16(inputs) { return poseidon (inputs, c) }
