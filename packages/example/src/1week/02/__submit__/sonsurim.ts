export function accumulate(arr: number[]): number {
  let accumulator = 0

  for (let i = 0; i < arr.length; i += 1) {
    accumulator += arr[i]
  }

  return accumulator
}
