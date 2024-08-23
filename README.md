# poseidon-lite [![CircleCI](https://dl.circleci.com/status-badge/img/gh/chancehudson/poseidon-lite/tree/main.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/chancehudson/poseidon-lite/tree/main)

A 0 dependence poseidon implementation over alt_bn128 (aka BN254).

## Warning

This implementation uses the native javascript `BigInt` which is vulnerable to timing attacks.

This implementation has **not** been audited.

## Use

`npm i poseidon-lite`

```js
import { poseidon2 } from 'poseidon-lite'
// pass an array to the function
// array length must be equal to the function name
// returns a BigInt
const hash = poseidon2(['0x01', '0x02'])
```

### Individual import

```js
import { poseidon2 } from 'poseidon-lite/poseidon2'
const hash = poseidon2(['0x01', '0x02'])
```

### Get state elements

More state elements can be retrieved by passing an optional second argument. Useful for e.g. sponge based encryption. The maximum number of elements that can be retrieved is `input.length + 1`.

```js
import { poseidon2 } from 'poseidon-lite'

// retrieve 3 state elements instead of the default 1
const elements = poseidon2(['0x01', '0x02'], 3)
// elements is now a BigInt[3]
```

## Build

```sh
npm i
npm run build
npm test
```

## License

Versions `>=0.2.0` are MIT

Versions `<0.2.0` are GPL-3.0
