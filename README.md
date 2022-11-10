# poseidon-lite [![CircleCI](https://dl.circleci.com/status-badge/img/gh/vimwitch/poseidon-lite/tree/main.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/vimwitch/poseidon-lite/tree/main)

A stripped down poseidon implementation pulled from [circomlibjs](https://github.com/iden3/circomlibjs) 0.0.8.

## Use

```js
import poseidon from 'poseidon-lite'
// pass an array to the function
// array length must be >= 1, and <= 16
// returns a BigInt
const hash = poseidon(['0x01', '0x02'])
```

## Build

```sh
npm i
npm run build
npm test
```
