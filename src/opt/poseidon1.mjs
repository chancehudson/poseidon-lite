import poseidon from '../poseidon'
import unstringifyBigInts from '../poseidon/unstringify'
import _c from '../constants_opt/1'

const c = unstringifyBigInts(_c)

export function poseidon1(inputs) { return poseidon (inputs, c) }
