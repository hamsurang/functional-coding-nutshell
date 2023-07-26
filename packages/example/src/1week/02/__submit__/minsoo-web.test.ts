import { accumulate } from './minsoo-web'

describe('accumulate', () => {
  it('case: 1', () => {
    expect(accumulate([1, 2, 3, 4, 5])).toBe(15)
  })
})
