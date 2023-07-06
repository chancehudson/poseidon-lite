import poseidon from './build/index.js'
import crypto from 'crypto'

// test random inputs against the circomlibjs implementation
const count = 100

const NS_PER_SEC = 1e9
const NS_PER_MSEC = 1e6

const times = []
const inputLengths = [2, 3, 4, 8, 12, 16]

for (let x = 0; x < count; x++) {
  if (x % 1000 === 0 && x > 0) console.log(x)
  const inputCount = inputLengths[x % inputLengths.length]
  const inputs = []
  for (let y = 0; y < inputCount; y++) {
    inputs.push(+`${x}${y}`)
    // inputs.push(
    //   '0x' +
    //     crypto.randomBytes(Math.floor(1 + 10 * Math.random())).toString('hex')
    // )
  }
  const time = process.hrtime()
  const out = await poseidon(inputs)
  const diff = process.hrtime(time)
  times.push((diff[0] * NS_PER_SEC + diff[1]) / NS_PER_MSEC)
  console.log(out)
}

{
  const sum = times.reduce((acc, v) => acc + v, 0)
  const avg = sum / times.length
  console.log(`Average ${avg} ms per hash`)
}

// console.log('\npassed')
