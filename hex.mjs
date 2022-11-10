// Take a file with nested arrays containing hex data
// and convert it to base64
import fs from 'fs'
import constants from './src/poseidon_constants_opt.js'

const convertString = (a) => {
  const b64 = Buffer.from(a.replace('0x', '').padStart(64, '0'), 'hex').toString('base64')
  if (BigInt(a) !== BigInt('0x'+Buffer.from(b64, 'base64').toString('hex'))) throw new Error('bad serialization')
  return b64
}
const convertArray = (a) => {
  return a.map(v => {
    if (Array.isArray(v)) return convertArray(v)
    return convertString(v)
  })
}

const n = {}
for (const key of Object.keys(constants)) {
  const val = constants[key]
  if (!Array.isArray(val)) throw new Error('Unexpected key')
  n[key] = convertArray(val)
}

const encoded = JSON.stringify(n)
await fs.promises.writeFile('./data.json', encoded)
