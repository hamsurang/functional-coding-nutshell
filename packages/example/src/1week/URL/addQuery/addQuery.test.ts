import { addQuery } from './addQuery'

describe('addQuery', () => {
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
    expect(
      addQuery('https://www.linkedin.com/?name=elon#top', 'name', 'musk'),
    ).toBe('https://www.linkedin.com/?name=musk#top')
  })
})
