export const weeksPlan = [
  {
    content: '온라인으로 자기소개를 하면서\n스터디 OT하는 시간을 가져요!',
    date: '7월 13일',
    link: 'https://minsooweb.notion.site/0-2c8cdd4d43f842909b23d0ebca7fb1ab?pvs=4',
    range: '-',
    type: 'OT',
    episode: '0 회차',
  },
  {
    content:
      '- 쏙쏙 들어오는 함수형 코딩에 오신 것을 환영합니다\n- 현실에서의 함수형 사고\n- 액션과 계산, 데이터의 차이를 알기\n- 액션에서 계산 빼내기',
    date: '7월 13일 ~\n7월 20일',
    link: 'https://minsooweb.notion.site/1-bd4ec20c7f4f4e5a969020dc6ff0c7fe?pvs=4',
    range: 'Ch 1 ~ 4',
    type: 'PART 1. 액션과 계산, 데이터',
    episode: '1 회차',
  },
  {
    content:
      '- 더 좋은 액션 만들기\n- 변경 가능한 데이터 구조를 가진 언어에서 불변성 유지하기\n- 신뢰할 수 없는 코드를 쓰면서 불변성 지키기',
    date: '7월 20일 ~\n7월 27일',
    link: 'https://minsooweb.notion.site/2-6575e6aa968445c7b8221a4e19d12893?pvs=4',
    range: 'Ch 5 ~ 7',
    type: 'PART 1. 액션과 계산, 데이터',
    episode: '2 회차',
  },
  {
    content: '- 계층형 설계 I\n- 계층형 설계 II',
    date: '7월 27일 ~\n8월 3일',
    link: 'https://minsooweb.notion.site/3-4b87f8a87108426181a639aacb649925?pvs=4',
    range: 'Ch 8 ~ 9',
    type: 'PART 1. 액션과 계산, 데이터',
    episode: '3 회차',
  },
  {
    content:
      '- 스터디를 100%로 활용하는 방법에 대해서 이야기해봐요\n- Happy Hour',
    date: '8월 3일 ~\n8월 10일',
    link: 'https://minsooweb.notion.site/4-a77f131f536b4326a06684118878ce35?pvs=4',
    range: '-',
    type: '특별세션',
    episode: '4 회차',
  },
  {
    content: '- 일급 함수 I\n- 일급 함수 II\n- 함수형 반복',
    date: '8월 10일 ~\n8월 17일',
    link: 'https://minsooweb.notion.site/5-3e7c15a40d944e8a9d522fe39fb063f8?pvs=4',
    range: 'Ch 10 ~ 12',
    type: 'PART 2. 일급 추상',
    episode: '5 회차',
  },
  {
    content: '- 함수형 도구 체이닝\n- 중첩된 데이터에 함수형 도구 사용하기',
    date: '8월 17일 ~\n8월 24일',
    link: 'https://minsooweb.notion.site/6-1439784bd1f044049d1ef420ef7fca83?pvs=4',
    range: 'Ch 13 ~ 14',
    type: 'PART 2. 일급 추상',
    episode: '6 회차',
  },
  {
    content:
      '- 타임라인 격리하기\n- 타임라인 사이에 자원 공유하기\n- 타임라인 조율하기',
    date: '8월 24일 ~\n8월 31일',
    link: 'https://minsooweb.notion.site/8-991d6a237d76469494e09a25a7a2979c?pvs=4',
    range: 'Ch 15 ~ 17',
    type: 'PART 2. 일급 추상',
    episode: '7 회차',
  },
  {
    content:
      '- 반응형 아키텍처와 어니언 아키텍처\n- 함수형 프로그래밍 여행에 앞서',
    date: '8월 31일 ~\n9월 7일',
    link: 'https://minsooweb.notion.site/9-7d0c20c516634f46946c82683f61cbbd?pvs=4',
    range: 'Ch 18 ~ 19',
    type: 'PART 2. 일급 추상',
    episode: '8 회차',
  },
] satisfies Array<
  Record<'date' | 'episode' | 'range' | 'type' | 'content', string> & {
    link: string | undefined
  }
>
