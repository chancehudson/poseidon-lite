import poseidon from '../poseidon'
import unstringifyBigInts from '../poseidon/unstringify'
import _c from '../constants_opt/3'

const c = unstringifyBigInts(_c)

export function poseidon3(inputs) { return poseidon (inputs, c) }
