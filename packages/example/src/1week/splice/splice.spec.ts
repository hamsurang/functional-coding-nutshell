import { splice } from './splice'

describe('splice', () => {
  it('should return array element with start number', () => {
    expect(splice([1, 2], 1)).toStrictEqual([2])
    expect(splice([1, 2, 3], 1)).toStrictEqual([2, 3])
  })

  it('should return empty array, when start number is over array length', () => {
    expect(splice([1, 2], 10)).toStrictEqual([])
  })

  it('should return array with start number and length is deleteCount', () => {
    expect(splice([1, 2, 3, 4, 5], 1, 2)).toStrictEqual([2, 3])
    expect(splice([1, 2, 3, 4, 5], 2, 2)).toStrictEqual([3, 4])
  })

  it('should return array with start number and end with last element, when deleteCount is over length', () => {
    expect(splice([1, 2, 3, 4, 5], 1, 200)).toStrictEqual([2, 3, 4, 5])
  })
})
