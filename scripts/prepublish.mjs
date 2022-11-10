import fs from 'fs'

const p = JSON.parse((await fs.promises.readFile('./package.json')).toString())

const data = {
  ...p,
  devDependencies: {},
}

await fs.promises.writeFile('./build/package.json', JSON.stringify(data))
await fs.promises.copyFile('./index.d.ts', './build/index.d.ts')
await fs.promises.copyFile('./README.md', './build/README.md')
