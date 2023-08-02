const sum = (a: number, b: number): number => a + b

/**
 * 접근방법:
 * flat과 reduce를 조합해서 간단하게 바꿔봤습니다.
 * 만약, 개선된 2번 문제를 사용할 수 있었다면, reduce의 콜백함수로 활용해서, flat 없이 작업해볼 수 있겠다? 라는 생각도 해봤습니다.
 *
 * @param arr 2중 배열입니다.
 * @returns 배열의 모든 숫자들의 합이 계산됩니다.
 */
export const multiDimensionalAccumulate = (
  arr: number[][],
  initialValue = 0,
): number => {
  return arr.flat().reduce(sum, initialValue)
}
