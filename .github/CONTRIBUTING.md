# 기여하기

함수랑 산악회의 `쏙쏙쑥쑥` 스터디에 관심을 갖고 찾아주셔서 감사합니다! 🙇‍♂️

## Issues

다음과 같은 내용들은 Issue를 활용해서 자유롭게 제안해주세요!

- [docs](https://functional-coding-nutshell-docs.vercel.app/) 개선
- 문제 개선 및 버그 제보
- 스터디 진행 방식 개선 및 건의사항

## Pull requests

### PR 만들기

### 프로젝트 세팅하기

다음 단계는 `쏙쏙쑥쑥`에 기여하기 위해 프로젝트를 세팅하는 단계입니다.

1. Fork를 합니다.

2. Fork된 repo를 로컬로 clone 받습니다.

```bash
git clone https://github.com/<your_github_username>/functional-coding-nutshell.git # 만약 이름을 바꿨다면, 변경한 이름으로 클론 받으셔야 합니다.

cd functional-coding-nutshell
```

이 프로젝트는 yarn 3 버전을 활용해서 구성한 monorepo 구성입니다.  
typescript 버전 세팅을 workspace의 버전을 사용할 수 있도록 세팅해주세요.

만약, yarn이 없으신 경우 설치해주시길 바랍니다.  
[yarn 설치하는 방법](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

3. nvm

프로젝트에서 사용하는 Node 버전은 `16.17.1` 입니다.

```bash
# in root project path (if you don't have 16.17.1)
nvm install

nvm use
```

꼭 `nvm`을 사용해야 할 이유는 없습니다. node 버전을 `16.17.1`로 맞춰서 프로젝트 환경 세팅을 마무리해주시면 됩니다.

### docs 페이지 실행하기 (개발환경)

```bash
# in root project path
yarn docs dev
```

모노레포 환경 구성이기 때문에 프로젝트의 루트 경로에서 해당 명령어를 실행해주시면 됩니다.

### 실습 문제 테스트 실행하기 (예제)

```bash
# in root project path
yarn example test
```

만약, Jest Runner를 사용하시는 분이라면 .vscode/settings.json 파일이 올라가있기 때문에, 바로 실행시켜보실 수 있습니다.

### 예제 및 실습 제출하기

제출하는 방법은 다음과 같습니다.

`<문제번호>/__submit__`

의 경로에 다음과 같이 구성해주시면 됩니다.

```
- <문제번호>/__submit__
  ᄂ <your_github_username>.ts
  ᄂ <your_github_username>.(spec|test).ts
```
