import { lineFunction } from './minsoo-web'

describe('lineFunction', () => {
  it('case: positive number', () => {
    expect(lineFunction(2)).toBe(7)
  })
  it('case: negative number', () => {
    expect(lineFunction(-2)).toBe(-1)
  })
  it('case: zero', () => {
    expect(lineFunction(0)).toBe(3)
  })
})
