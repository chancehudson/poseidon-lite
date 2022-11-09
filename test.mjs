import { buildPoseidon } from 'circomlibjs'
import poseidon from './build/index.js'
const circomPoseidon = await buildPoseidon()
for (let x = 0; x < 1000; x++) {
  const circomOutput = BigInt(
    circomPoseidon.F.toString(circomPoseidon([x]))
  )
  if (circomOutput !== poseidon([x]))
    throw new Error('Hash output mismatch')
}

console.log('passed')
