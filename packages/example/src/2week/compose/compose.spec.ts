import { compose } from './compose'

describe('pop', () => {
  it('더하기 함수와 곱하기합수를 합성했습니다.', () => {
    // add함수!
    // multiply함수!
    const result = compose(4, add(7), multiply(5))
    assert(result).toBe(55)
  })
})
