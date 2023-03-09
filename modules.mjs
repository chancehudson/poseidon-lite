
import fs from 'fs'
// import constants from './src/poseidon_constants.json'  assert { type: 'json' }
// console.log(Object.keys(constants.P))

// C, M, P, S

// convert to base64
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

// for (let x = 0; x < 16; x++) {
//   const out = {
//     C: convertArray(constants.C[x]),
//     M: convertArray(constants.M[x]),
//     // P: constants.P[x],
//     // S: constants.S[x],
//   }
//   const file = `export default ${JSON.stringify(out)}`
//   await fs.promises.writeFile(`./src/constants_slow/${x+1}.mjs`, file)
// }

// process.exit(0)

for (let x = 0 ; x < 16; x++) {
  const out = `import poseidon from './poseidon/slow'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants_slow/${x+1}'

const c = unstringifyBigInts(_c)

export function poseidon${x+1}(inputs) { return poseidon (inputs, c) }
`
   await fs.promises.writeFile(`./src/poseidon${x+1}.mjs`, out)
}

//-----
// let out = ''
// for (let x = 0 ; x < 16; x++) {
//   out += `export { poseidon${x+1} } from './poseidon${x+1}.mjs'\n`
// }
// await fs.promises.writeFile(`./src/index.mjs`, out)
process.exit(0)



const n = {}
for (const key of Object.keys(constants)) {
  const val = constants[key]
  if (!Array.isArray(val)) throw new Error('Unexpected key')
  n[key] = convertArray(val)
}

const encoded = JSON.stringify(n)
await fs.promises.writeFile('./data.json', encoded)
