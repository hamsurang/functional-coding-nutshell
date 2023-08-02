const hasIncludes = (url: string, value: string): 'YES' | 'NO' =>
  url.includes(value) ? 'YES' : 'NO'

export const splitHashPart = (
  text: string,
): { nonHash: string; hash: string } => {
  const indexOfHash = text.indexOf('#')

  if (indexOfHash >= 0) {
    return {
      nonHash: text.slice(0, indexOfHash),
      hash: text.slice(indexOfHash),
    }
  }

  return {
    nonHash: text,
    hash: '',
  }
}

export const replaceKeyValue = (
  url: string,
  key: string,
  newValue: string | number,
) => {
  const regExp = new RegExp(`${key}=([^&]*)`, 'g')
  if (url.match(regExp)) {
    return url.replace(regExp, `${key}=${newValue}`)
  }

  return url
}

/**
 * 출제자: 예진님 (yejineee)
 * URL의 쿼리스트링 관련 유틸 함수를 계산 을 최대한 이용하여 만들기
 *
 * - 해쉬가 있다면, 유지해야 함
 * - 기존 쿼리가 있다면, 유지해야 함
 * - 기존 쿼리와 추가하려는 쿼리의 key가 동일하다면, 기존 쿼리가 대체됨
 */

export const addQuery = (
  originURL: string,
  key: string,
  value: string | number,
) => {
  const { nonHash, hash } = splitHashPart(originURL)

  let returnUrl = nonHash
  let connector = '?'

  if (hasIncludes(originURL, '?') === 'YES') {
    connector = '&'
  }

  returnUrl += `${connector}${key}=${value}`

  if (hasIncludes(originURL, `?${key}`) === 'YES') {
    returnUrl = replaceKeyValue(nonHash, key, value)
  }

  return returnUrl + hash
}
