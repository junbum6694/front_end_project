# youtube_clone_project

기초 웹 프론트엔드 기술을 기반으로 제작한 유튜브 클론 웹사이트입니다.  
실제 유튜브의 주요 UI 요소와 반응형 레이아웃을 HTML/CSS/JavaScript, JQuery, Bootstrap만으로 구현하였습니다.

## 👩‍💻 프로젝트 개요

- 목표

  - 웹 퍼블리싱 기초 역량 강화를 위한 프로젝트

  - 반응형 레이아웃 및 Flex/Grid 사용법 숙련을 위한 클론 코딩

  - 실제 서비스 UI 구조 분석 및 구현 능력 향상

  - HTML, CSS, JavaScript 기본 문법을 종합적으로 복습하기 위한 실습

  - DOM 조작 및 이벤트 핸들링 기초 익히기 위한 프로젝트

  - 유튜브 UI를 바탕으로 사용자 인터페이스 구현 연습

- 배포 주소
  - https://junbum6694.github.io/youtube_clone_project/

## 🛠️ 사용 기술

- HTML5: 시멘틱 태그(header, main, section 등)를 활용한 구조적 마크업

- CSS3, Bootstrap: Grid, Flexbox와 부트스트랩 유틸리티 클래스로 반응형 레이아웃과 스타일을 구현했습니다.

- JavaScript, JQuery: DOM 조작, 이벤트 처리, 템플릿 데이터 바인딩을 통한 동적 UI 구현

## 🔍 주요 기능

| 기능            | 설명                                                        |
| --------------- | ----------------------------------------------------------- |
| 홈 화면         | 썸네일, 제목, 채널명, 조회수 표시                           |
| 미리보기        | 썸네일 마우스 올렸을 때 미리보기 영상 재생 기능             |
| 검색 바         | 검색어를 포함하는 영상 필터링 기능                          |
| 프로필 Dropdown | 프로필 클릭 시 Dropdown                                     |
| Dropdown 테마   | Light 모드와 Dark 모드 테마 변경 가능                       |
| 영상 상세       | Id=(비디오ID) 쿼리로 이동, iframe 임베딩                    |
| 댓글            | 댓글 작성 및 삭제 (저장X 새로고침 시 사라짐)                |
| 우측 영상 목록  | 현재 영상 제외한 목록 표시, 반응형으로 ui 변경 및 위치 조정 |
| 구독 화면       | 구독한 Creator의 정보와 해당 Creator가 올린 영상 목록 표시  |

## 🧱 폴더 구조

📁 FRONT_END_PROJECT  
├── index.html  
├── 📁 css  
│ ├── common.css  
│ ├── detail.css  
│ ├── main.css  
│ └── subscribe.css  
├── 📁 html  
│ ├── common.html  
│ ├── detail.html  
│ ├── main.html  
│ └── subscribe.html  
├── 📁 images  
│ └── (총 17개 이미지 파일 포함)  
├── 📁 js  
│ ├── common.js  
│ ├── detail.js  
│ ├── main.js  
│ └── subscribe.js

## 🎯 문제 상황 및 해결 방법

- 상세페이지 반응형 진행시 댓글이 재생목록 아래로 가는 현상

  - **문제 상황**: 큰 화면 기준으로 ui를 작성했더니 작은 화면에서 실제 youtube와 순서가 다르게 출력.
  - **원인 분석**: 큰 화면 기준의 레이아웃만 고려한 결과, 작은 화면에서 요소의 순서가 변형되어 UI 구조가 어긋남.
  - **해결 방법**: 기존의 list를 큰 화면에서만 보이도록 수정하고 중간,작은 화면에서만 보이는 새로은 section을 만들어 해결.

- header와 aside 를 include 하는 방법으로 변경 후 기능이 작동하지 않음.

  - **문제 상황**: javaScript로 작성한 데이터를 넣는 기능이 동작하지 않음.
  - **원인 분석**: include가 비동기적으로 실행되기 때문에 데이터를 넣는 javaScript가 동작할 때 해당하는 DOM 요소가 없어서 작동하지 않음.
  - **해결 방법**: 기존에 작성한 javaScript를 include하는 과정에 포함시켜 include가 진행된 후 데이터를 넣도록 수정.

- 미리보기 기능을 구현 후 페이지 로드 속도가 너무 느려지는 현상 발생
  - **문제 상황**: 메인 페이지가 로드되는데 3~4초 정도 걸리는 현상 발생
  - **원인 분석**: 모든 card에 src가 빈 상태인 iframe을 넣어놓고 src를 채워넣어 미리보기를 실행시키는 방법을 사용하였는데 많은 수의 iframe 때문에 페이지 로드 속도 저하
  - **해결 방법**: src를 채워넣는 방법이 아닌 iframe을 모두 제거하고 필요 할 때에만 iframe을 생성하고 제거하도록 수정
