# poseidon-lite [![CircleCI](https://dl.circleci.com/status-badge/img/gh/vimwitch/poseidon-lite/tree/main.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/vimwitch/poseidon-lite/tree/main)

A stripped down poseidon implementation pulled from [circomlibjs](https://github.com/iden3/circomlibjs) 0.0.8.

## Use

```js
// normal version
import { poseidon2 } from 'poseidon-lite'
// pass an array to the function
// array length must be equal to the function name
// returns a BigInt
const hash = poseidon2(['0x01', '0x02'])
```

```js
// optimized version (larger bundle size)
import { poseidon2 } from 'poseidon-lite/opt'
// pass an array to the function
// array length must be equal to the function name
// returns a BigInt
const hash = poseidon2(['0x01', '0x02'])
```

## Normal vs Opt

This package includes two implementations of poseidon. The normal function and an optimized version with more pre-computed values. The normal function is ~3x slower than the opt version, but is also ~40% smaller.

Comparison of two input poseidon (`poseidon2()`):

```
Constants size

Normal: 12K
Opt: 20K

Speed

Normal: 344 hashes/second
Opt: 1000 hashes/second
```

## Build

```sh
npm i
npm run build
npm test
```
