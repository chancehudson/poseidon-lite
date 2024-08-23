import { buildPoseidon } from 'circomlibjs'
import poseidon from './build/index.js'
import crypto from 'crypto'

// test random inputs against the circomlibjs implementation
const circomPoseidon = await buildPoseidon()
const count = 10000

const NS_PER_SEC = 1e9
const NS_PER_MSEC = 1e6

const times = []

for (let x = 0; x < count; x++) {
  if (x % 1000 === 0 && x > 0) console.log(x)
  const inputCount = 1 + (x % 16)
  const inputs = []
  for (let y = 0; y < inputCount; y++) {
    inputs.push(
      '0x' +
        crypto.randomBytes(Math.floor(1 + 10 * Math.random())).toString('hex')
    )
  }
  // check the result of returning the final hash (nOuts = 1)
  const circomOutput = BigInt(circomPoseidon.F.toString(circomPoseidon(inputs)))
  const time = process.hrtime()
  const out = poseidon[`poseidon${inputs.length}`](inputs)
  const diff = process.hrtime(time)
  times.push((diff[0] * NS_PER_SEC + diff[1]) / NS_PER_MSEC)
  if (circomOutput !== out) throw new Error('Hash output mismatch')

  // check the result of returning multiple states (nOuts > 1)
  const circomOutput2 =
    inputs.length == 1
      ? BigInt(
          circomPoseidon.F.toString(circomPoseidon(inputs, 0, inputs.length))
        )
      : circomPoseidon(inputs, 0, inputs.length).map((v) =>
          BigInt(circomPoseidon.F.toString(v))
        )

  const out2 = poseidon[`poseidon${inputs.length}`](inputs, inputs.length)
  check(circomOutput2, out2)
}

function check(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      throw new Error('Hash output state length mismatch')
    }
    for (let i = 0; i < a.length; i++) {
      check(a[i], b[i])
    }
  } else if (typeof a === 'bigint' && typeof b === 'bigint') {
    if (a !== b) throw new Error('Hash output mismatch')
  } else {
    throw new Error(`Output types mismatch: ${typeof a} ${typeof b}`)
  }
}

{
  const sum = times.reduce((acc, v) => acc + v, 0)
  const avg = sum / times.length
  console.log(`Average ${avg} ms per hash`)
}

console.log('\npassed')
