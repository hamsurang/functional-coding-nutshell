type Sumber = string | number

/**
 * 출제자: 예진님 (yejineee)
 * URL의 쿼리스트링 관련 유틸 함수를 `계산`을 최대한 이용하여 만들기
 *
 * stringify 함수: 객체를 URL 쿼리스트링으로 변환해주는 함수
 * 1. 빈 객체가 주어지면, 빈 스트링 반환
 * 2. key-value 쌍이 있으면, 앞에 `?` 추가
 * 3. value가 falsy한 것도 포함
 */
export const stringify = (obj: Record<string, Sumber | Sumber[]>): string => {
  return ''
}
