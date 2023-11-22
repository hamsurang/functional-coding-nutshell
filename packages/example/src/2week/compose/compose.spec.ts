import { compose } from './compose'

describe('pop', () => {
  it('더하기 함수와 곱하기합수를 합성했습니다.', () => {
    function add(a: number, b: number) {
      return a + b
    }
    function multiply(a: number, b: number) {
      return a * b
    }
    const result = compose(4, add(7), multiply(5))
    assert(result).toBe(55)
  })
})
