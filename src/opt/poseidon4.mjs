import poseidon from '../poseidon'
import unstringifyBigInts from '../poseidon/unstringify'
import _c from '../constants_opt/4'

const c = unstringifyBigInts(_c)

export function poseidon4(inputs) { return poseidon (inputs, c) }
