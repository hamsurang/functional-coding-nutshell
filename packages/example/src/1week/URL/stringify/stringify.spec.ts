import { stringify } from './stringify'

describe('stringify', () => {
  it('should return empty string, when arg is empty object', () => {
    expect(stringify({})).toEqual('')
  })

  it(`should start with '?'`, () => {
    const queryString = stringify({ foo: 1 })

    expect(queryString[0]).toEqual('?')
  })

  test('case: 1', () => {
    expect(stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })).toEqual(
      '?foo=bar&baz=qux&baz=quux&corge=',
    )
  })

  test('case: 2', () => {
    expect(stringify({ a: 1, b: 2, c: '가나다' })).toEqual(
      '?a=1&b=2&c=%EA%B0%80%EB%82%98%EB%8B%A4',
    )
  })
})
