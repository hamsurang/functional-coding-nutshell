import { accumulate } from './minsoo-web'

describe('accumulate', () => {
  it('case: 1', () => {
    const foo = [1, 2, 3, 4, 5]

    expect(accumulate(foo)).toBe(15)
    expect(accumulate(foo)).toBe(15)
  })

  it('case: 2', () => {
    const foo = [1, 2, 3, 4, 5]

    expect(accumulate(foo, 10)).toBe(25)
    expect(accumulate(foo, 10)).toBe(25)
  })

  it('case: 3', () => {
    const foo = [-1, 2, -3, 4, 5]

    expect(accumulate(foo)).toBe(7)
    expect(accumulate(foo)).toBe(7)
  })
})
