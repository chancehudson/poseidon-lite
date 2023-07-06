declare module 'poseidon-lite' {
  export async function poseidon(input: (bigint | number | string)[]): bigint
}
