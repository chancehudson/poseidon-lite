import fs from 'fs'

let typings = `declare module 'poseidon-lite' {\n`

for (let x = 0 ; x < 16; x++) {
  typings += `  export function poseidon${x+1}(input: bigint[]): bigint\n`
}

typings += `}\n`

for (let x = 0 ; x < 16; x++) {
  typings += `declare module 'poseidon-lite/poseidon${x+1}' {
  export function poseidon${x+1}(input: bigint[]): bigint
}\n`
}

for (let x = 0 ; x < 16; x++) {
  typings += `declare module 'poseidon-lite/opt/poseidon${x+1}' {
  export function poseidon${x+1}(input: bigint[]): bigint
}\n`
}

await fs.promises.writeFile('./index.d.ts', typings)
