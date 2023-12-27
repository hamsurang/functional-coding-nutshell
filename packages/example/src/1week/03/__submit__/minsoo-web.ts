const sum = (a: number, b: number): number => a + b

/**
 * 접근 방법:
 * 커밋내역을 보시면 아시겠지만 ㅋㅋ큐ㅠㅠ 문제를 완전 잘못 이해하고 풀어버려서
 * 다시 풀었습니다.
 *
 * 다시 풀었을 때 첫 접근 방법은 2중 reduce문을 사용해서 변수명을 직관적으로 지으면서 가독성을 높혔었는데
 * 그럼 기존의 2중 for 문이랑 크게 다르지 않다고 생각해서 n^2 시간 복잡도를 개선해봤습니다.
 * flatMap을 활용해서, 대각선 이하의 숫자들만 잘라내고
 * 그 값들을 더했습니다.
 */
export const multiDimensionalAccumulate = (arr: number[][]): number => {
  return arr
    .flatMap((innerArray, rowIndex) => innerArray.slice(0, rowIndex))
    .reduce(sum, 0)
}
