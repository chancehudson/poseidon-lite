import { buildPoseidon } from 'circomlibjs'
import poseidon from './build/index.js'
const circomPoseidon = await buildPoseidon()
for (let x = 0; x < 1000; x++) {
  console.log(bytesToBigint(circomPoseidon(['0x01'])))
  console.log(poseidon(['0x01']))
  if (BigInt(circomPoseidon([x])) !== poseidon([x]))
    throw new Error('Hash output mismatch')
}

function bytesToBigint(input) {
  let v = BigInt(0)
  // little endian
  for (let x = input.length - 1; x >= 0; x--) {
    v = v * BigInt(256) + BigInt(input[x])
  }
  return v
}
