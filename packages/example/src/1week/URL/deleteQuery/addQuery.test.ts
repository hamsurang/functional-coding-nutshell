import { deleteQuery } from './deleteQuery'

describe('deleteQuery', () => {
  test('case 1', () => {
    expect(deleteQuery('https://www.linkedin.com/', 'key')).toBe(
      'https://example.com/?bar=2',
    )
  })

  test('case 2', () => {
    expect(deleteQuery('https://example.com?foo=1', 'foo')).toBe(
      'https://example.com/',
    )
  })

  test('case 3', () => {
    expect(deleteQuery('https://example.com?foo=1#top', 'foo')).toBe(
      'https://example.com/#top',
    )
  })
})
