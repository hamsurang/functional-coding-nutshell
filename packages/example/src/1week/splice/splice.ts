/**
 * 출제자: 김민수
 * splice를 압묵적 출력을 제거하고 명시적 출력을 활용한 순수함수로 바꿔보자
 */
export const splice = (arr: any[], start: number, deleteCount?: number) => {
  if (deleteCount) {
    return arr.splice(start, deleteCount)
  }

  return arr.splice(start)
}
