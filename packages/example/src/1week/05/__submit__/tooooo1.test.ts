import { deepCopy } from './tooooo1'

describe('deepCopy', () => {
  it('case: 1', () => {
    const obj = {}
    const obj2 = {
      1: undefined,
      a: [],
      undefined: {
        arrayObj: [1, 2, 3, 4, 5],
        mapObj: new Map(),
        setObj: new Set(),
        aaa: {
          bbb: {
            ccc: {
              ddd: {
                fp: 'very wonderful!',
              },
            },
          },
        },
      },
      children: {
        first: 0,
        second: '함수형 프로그래밍',
        forth: [
          {
            string: 'string',
            number: 123,
            bool: false,
            nul: null,
          },
          {
            undef: undefined,
            inf: Infinity,
            re: /.*/,
          },
        ],
      },
      2: null,
    }

    expect(deepCopy(obj)).toEqual({})
    expect(deepCopy(obj2)).toEqual({
      1: undefined,
      a: [],
      undefined: {
        arrayObj: [1, 2, 3, 4, 5],
        mapObj: new Map(),
        setObj: new Set(),
        aaa: {
          bbb: {
            ccc: {
              ddd: {
                fp: 'very wonderful!',
              },
            },
          },
        },
      },
      children: {
        first: 0,
        second: '함수형 프로그래밍',
        forth: [
          {
            string: 'string',
            number: 123,
            bool: false,
            nul: null,
          },
          {
            undef: undefined,
            inf: Infinity,
            re: /.*/,
          },
        ],
      },
      2: null,
    })
  })
})
