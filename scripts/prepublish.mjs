import fs from 'fs'

const p = JSON.parse((await fs.promises.readFile('./package.json')).toString())

const data = {
  ...p,
  devDependencies: {},
}

await fs.promises.writeFile('./build/package.json', JSON.stringify(data))
await fs.promises.copyFile('./index.d.ts', './build/index.d.ts')
await fs.promises.copyFile('./README.md', './build/README.md')

for (let x = 0; x < 16; x++) {
  const t = `declare module 'poseidon-lite/poseidon${x + 1}' {
  export function poseidon${x + 1}(input: (bigint|number|string)[], nOuts?: number): bigint
}\n`
  await fs.promises.writeFile(`./build/poseidon${x + 1}.d.ts`, t)
}
