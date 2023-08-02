export function multiDimensionalAccumulate(
  multiDimensionalArr: number[][],
): number {
  let accumulator = 0

  for (let i = 0; i < multiDimensionalArr.length; i += 1) {
    for (let j = 0; j < multiDimensionalArr[i].length; j += 1) {
      if (j < i) {
        accumulator += multiDimensionalArr[i][j]
      }
    }
  }

  return accumulator
}
