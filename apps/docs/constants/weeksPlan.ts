export const weeksPlan = [
  {
    content: '온라인으로 자기소개를 하면서\n스터디 OT하는 시간을 가져요!',
    date: '7월 13일',
    link: 'https://www.notion.so/minsooweb/0-2c8cdd4d43f842909b23d0ebca7fb1ab',
    range: '-',
    type: '웰컴 드링크',
    episode: '0 회차',
  },
  {
    content:
      '- 쏙쏙 들어오는 함수형 코딩에 오신 것을 환영합니다\n- 현실에서의 함수형 사고\n- 액션과 계산, 데이터의 차이를 알기\n- 액션에서 계산 빼내기',
    date: '7월 13일 ~\n7월 20일',
    link: 'https://www.notion.so/minsooweb/1-bd4ec20c7f4f4e5a969020dc6ff0c7fe',
    range: 'Ch 1 ~ 4',
    type: 'PART 1. 액션과 계산, 데이터',
    episode: '1 회차',
  },
  {
    content:
      '- 더 좋은 액션 만들기\n- 변경 가능한 데이터 구조를 가진 언어에서 불변성 유지하기\n- 신뢰할 수 없는 코드를 쓰면서 불변성 지키기',
    date: '7월 20일 ~\n7월 27일',
    link: 'https://www.notion.so/minsooweb/2-6575e6aa968445c7b8221a4e19d12893',
    range: 'Ch 5 ~ 7',
    type: 'PART 1. 액션과 계산, 데이터',
    episode: '2 회차',
  },
  {
    content: '- 계층형 설계 I\n- 계층형 설계 II',
    date: '7월 27일 ~\n8월 3일',
    link: undefined,
    range: 'Ch 8 ~ 9',
    type: 'PART 1. 액션과 계산, 데이터',
    episode: '3 회차',
  },
] satisfies Array<
  Record<'date' | 'episode' | 'range' | 'type' | 'content', string> & {
    link: string | undefined
  }
>
