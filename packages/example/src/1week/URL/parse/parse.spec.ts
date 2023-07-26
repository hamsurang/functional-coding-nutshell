import { parse } from './parse'
describe('parse', () => {
  it('should return with object, when key is using more then one', () => {
    expect(parse('?foo=bar&abc=xyz&abc=123')).toStrictEqual({
      foo: 'bar',
      abc: ['xyz', '123'],
    })
  })

  it('should return with object', () => {
    expect(parse('?foo=bar&bar=baz')).toStrictEqual({
      foo: 'bar',
      bar: 'baz',
    })
  })
})
