import { buildPoseidon } from 'circomlibjs'
import poseidon from './build/index.js'
import crypto from 'crypto'

// test random inputs against the circomlibjs implementation
const circomPoseidon = await buildPoseidon()
const count = 1000

const start = +new Date()
// test unoptimized version
for (let x = 0; x < count; x++) {
  if (x % 100 === 0 && x > 0) console.log(x)
  const inputCount = 1 + x % 16
  const inputs = []
  for (let y = 0; y < inputCount; y++) {
    inputs.push('0x' + crypto.randomBytes(Math.floor(1 + 10 * Math.random())).toString('hex'))
  }
  const circomOutput = BigInt(
    circomPoseidon.F.toString(circomPoseidon(inputs))
  )
  const out = poseidon[`poseidon${inputs.length}`](inputs)
  if (circomOutput !== out)
    throw new Error('Hash output mismatch')
}

{
  const time = Math.floor((+new Date() - start))
  console.log(`Normal: ${count} hashes in ${time} ms (${Math.floor(time/count)} ms per hash)`)
}

console.log('\n')
console.log('passed')
