# onebite-react

한입 코딩(이정환님)의 *한 입 크기로 잘라먹는 리액트* 강의 학습용 저장소입니다.

> **수강 진행 중**입니다. 강의 진도에 따라 섹션이 점차 추가됩니다. 현재는 React 본 학습 전 단계인 **JavaScript 기본기** 섹션까지 정리되어 있습니다.

## 환경

- **JavaScript** (브라우저)
- **VS Code + Live Server 익스텐션** — `index.html`을 Live Server로 열어 `<script>`로 불러온 챕터 파일이 실행되고, 결과는 브라우저 콘솔(`⌥⌘I`)에서 확인합니다.
- 별도 빌드 도구/의존성 없음

## 실행 방법

1. VS Code에서 `section01/index.html`을 엽니다.
2. 우클릭 → **Open with Live Server** (또는 `⇧⌘P` → "Live Server: Open with Live Server").
3. 학습할 챕터에 맞춰 `index.html`의 `<script src="./chapterXX.js">` 부분을 수정한 뒤 저장.
4. 브라우저 콘솔에서 출력 결과 확인.

## 디렉토리 구조

```
.
└── section01/                    # JavaScript 기본기
    ├── index.html                # Live Server 진입점
    ├── chapter03.js ~ chapter17.js
```

## section01 — JavaScript 기본기

리액트로 들어가기 전 필요한 JS 문법을 챕터별로 학습합니다.

| 챕터 | 주제 |
|---|---|
| `chapter03` | 개발 환경 (Live Server, 콘솔) |
| `chapter04` | 변수 (`let`, `const`, `var`) |
| `chapter05` | 자료형 (Number, String, Boolean, null, undefined 등) |
| `chapter06` | 형 변환 (묵시적/명시적) |
| `chapter07` | 연산자 (대입, 비교, 논리 등) |
| `chapter08` | null 병합 연산자, 옵셔널 체이닝 |
| `chapter09` | 조건문 (`if`, `switch`) |
| `chapter10` | 반복문 (`for`, `while`, `continue`, `break`) |
| `chapter11` | 함수 기초 |
| `chapter12` | 함수 표현식, 화살표 함수 |
| `chapter13` | 콜백 함수 |
| `chapter14` | 스코프 (전역/지역, 호이스팅) |
| `chapter15` | 객체 생성과 접근 |
| `chapter16` | 객체 메서드, 상수 객체 |
| `chapter17` | 배열 |

## 향후 추가 예정

강의 진도에 따라 다음 섹션들이 추가될 예정입니다.

- React 기초 (컴포넌트, JSX, Props, State)
- 이벤트 처리와 폼
- 리스트 렌더링
- Hook (`useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`, `useReducer`)
- Context API
- 실전 프로젝트

## 관련 레포

- **Next.js Page Router**: [onebite-next-page-router](https://github.com/ohjw26/onebite-next-page-router)
- **Next.js App Router**: [onebite-next-app-router](https://github.com/ohjw26/onebite-next-app-router)
