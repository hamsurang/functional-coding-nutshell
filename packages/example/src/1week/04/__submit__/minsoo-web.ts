const condition = (text: string, criteria = 5) => text.length > criteria

/**
 * 접근 방법:
 * 앞선 문제들과 비슷하게, 순수함수를 뽑고,
 * map을 활용해서 copy on write 방식을 적용해봤습니다.
 *
 * @param words 단어들의 배열입니다.
 * @returns 컨디션에 맞게 배열의 단어들을 소문자와 대문자의 조합으로 반환해줍니다.
 */
export function convertToConditionalUpperCase(words: string[]): string[] {
  return words.map((word) =>
    condition(word) ? word.toUpperCase() : word.toLocaleLowerCase(),
  )
}
