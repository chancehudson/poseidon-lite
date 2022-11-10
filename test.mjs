import { buildPoseidon } from 'circomlibjs'
import poseidon from './build/index.js'
import crypto from 'crypto'

// test random inputs against the current circom implementation
const circomPoseidon = await buildPoseidon()
for (let x = 0; x < 100000; x++) {
  if (x % 10000 === 0 && x > 0) console.log(x)
  const inputCount = 1 + x % 16
  const inputs = []
  for (let y = 0; y < inputCount; y++) {
    inputs.push('0x' + crypto.randomBytes(Math.floor(1 + 10 * Math.random())).toString('hex'))
  }
  const circomOutput = BigInt(
    circomPoseidon.F.toString(circomPoseidon(inputs))
  )
  if (circomOutput !== poseidon(inputs))
    throw new Error('Hash output mismatch')
}

console.log('passed')
