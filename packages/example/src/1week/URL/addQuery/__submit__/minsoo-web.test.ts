import { addQuery, getHashPart, replaceKeyValue } from './minsoo-web'

describe('getHashPart', () => {
  it('case 1', () => {
    expect(getHashPart('minsoo#foo')).toEqual({
      nonHash: 'minsoo',
      hash: '#foo',
    })
  })

  it('case 2', () => {
    expect(getHashPart('http://www.minsoo#foo')).toEqual({
      nonHash: 'http://www.minsoo',
      hash: '#foo',
    })
  })

  it('case 3', () => {
    expect(getHashPart('http://www.minsoo')).toEqual({
      nonHash: 'http://www.minsoo',
      hash: '',
    })
  })

  it('case 4: 일반적이진 않지만, 의도치 않게 해시가 여러개 들어가있는 경우', () => {
    expect(getHashPart('http://www.minsoo#foo#minsoo')).toEqual({
      nonHash: 'http://www.minsoo',
      hash: '#foo#minsoo',
    })
  })
})

describe('replaceKeyValue', () => {
  it('case 1', () => {
    expect(replaceKeyValue('minsoo?key=foo', 'key', 'bar')).toBe(
      'minsoo?key=bar',
    )
  })

  it('case 2', () => {
    expect(replaceKeyValue('minsoo?foo=foo', 'key', 'bar')).toBe(
      'minsoo?foo=foo',
    )
  })

  it('case 3', () => {
    expect(replaceKeyValue('minsoo?key=foo&key=baz', 'key', 'bar')).toBe(
      'minsoo?key=bar&key=bar',
    )
  })
})

describe('addQuery', () => {
  test('case 0: URL 형식이 굳이 아니여도 동작', () => {
    expect(addQuery('www.linkedin.com/?name=elon#top', 'name', 'musk')).toBe(
      'www.linkedin.com/?name=musk#top',
    )
  })

  test('case 1', () => {
    expect(addQuery('https://www.linkedin.com/', 'key', 'value')).toBe(
      'https://www.linkedin.com/?key=value',
    )
  })

  test('case 2: 기존 URL에 이미 쿼리가 있는 경우', () => {
    expect(
      addQuery('https://www.linkedin.com/?name=elon', 'key', 'value'),
    ).toBe('https://www.linkedin.com/?name=elon&key=value')
  })

  test('case 3: 기존 URL에 hash가 있는 경우', () => {
    expect(
      addQuery('https://www.linkedin.com/?name=elon#top', 'key', 'value'),
    ).toBe('https://www.linkedin.com/?name=elon&key=value#top')
  })

  test('case 4: 기존 쿼리와 추가하려는 쿼리의 key가 동일한 경우', () => {
    const URL = 'https://www.linkedin.com/?name=elon#top'

    expect(addQuery(URL, 'name', 'musk')).toBe(
      'https://www.linkedin.com/?name=musk#top',
    )

    expect(addQuery(URL, 'name', 'musk')).toBe(
      'https://www.linkedin.com/?name=musk#top',
    )
  })

  test('case 5: 기존 쿼리와 추가하려는 쿼리의 key가 동일한 경우', () => {
    const URL = 'https://www.linkedin.com/?name=elon&name=minsoo#top'

    expect(addQuery(URL, 'name', 'musk')).toBe(
      'https://www.linkedin.com/?name=musk&name=musk#top',
    )

    expect(addQuery(URL, 'name', 'musk')).toBe(
      'https://www.linkedin.com/?name=musk&name=musk#top',
    )
  })
})
