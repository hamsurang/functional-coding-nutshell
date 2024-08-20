const sum = (a: number, b: number): number => a + b

/**
 *
 * 접근 방법:
 * 지난 2주차 때 얘기 나눴던 내용과 비슷한 맥락으로 리펙토링 해봤습니다.
 * reduce 라는 내장 메소드가 이미 있음에도, sum 이라는 함수를 따로 선언함으로써 reduce를 직관적으로 사용할 수 있고
 * accumulate 함수를 사용하는 사람 입장에서, 구현체를 추상화함으로써 합계만을 기대할 수 있게 추상화했습니다.
 *
 * @param arr 합을 계산할 배열입니다.
 * @param initialValue 초기 값을 지정할 수 있습니다. 기본 값은 0입니다.
 * @returns 배열내의 모든 요소를 더한 값을 return 합니다.
 */
export function accumulate(arr: number[], initialValue = 0): number {
  return arr.reduce(sum, initialValue)
}
