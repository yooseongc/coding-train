# coding-train 프로젝트

 - 예전에 p5.js를 이용해 다양한 알고리즘이나 visualization 등을 학습하기 위해 만든 사이트
 - https://yooseongc.github.io/coding-train 에 gh 로 배포하고 있음
 - daniel shiffman의 coding challenge 나 nature of code 등을 직접 해보는 식으로 구현한 프로젝트

## what to do

 - 이 프로젝트를 정리하고 구조화해서 좀 더 그럴듯한 사이트로 변환시키는 것을 목표로 함
 - circle ci 적용하는 부분은 제거
 - 현재 markdown 위주로 되어있지만, 새로 react.js + typescript + pnpm을 이용하여 학습 사이트를 재구축함
 - https://github.com/yooseongc/study-ui-lib 의 ui 라이브러리를 이용하여 사이트를 모듈화 함 (로컬 경로는 C:\Users\user\workspace\study-ui-lib 이니 참고하도록)
 - coding-challenge는 p5.js 실행 컨테이너를 별도의 공통 요소로 뽑을 필요가 있음.
   - 가능하다면 적용 코드와 실행기가 있는
   - 코드에 주석이나 페이지 내 글로 여러 참고자료를 기재해 놓았음. 이들에 대한 링크를 같이 학습용으로 제시.
   - 필요하다면 해당 파트에 대한 AI의 학습용 참고 내용 및 설명을 기재.
   - 여러 버전으로 구현된 것들이 있음. 이들을 탭 페이지 구성으로 모듈화가 가능하면 훨씬 좋을 것 같음.
   - https://editor.p5js.org/ 같은 형태가 되면 아주 좋음
 - coding-train을 제외한 나머지 디렉터리들은 markdown 위주의 설명이 많고, 아직 비어있는 파일들도 있음. 설명을 추가하거나 보강해도 좋음
   - C:\Users\user\workspace\network-study 나 C:\Users\user\workspace\cert-study 같은 학습 북 형태면 좋음
   - chrome-extension-tutorial이나 circle-ci-tutorial은 내용은 제거하고 가이드만 제공
   - p5.js로 실습 가능한 형태를 위한 모듈이나 디스플레이를 위한 모듈이 필요할 수 있음
 - 전체적으로 study-ui-lib 만으로는 nested structure 구성이 힘들 것임. 자체적으로 nested structure UI 구조를 만들고 시작

## rule

 - 필요하다면 CLAUDE는 skill을 만들고 이를 활용할 수 있습니다.
 - 웹에 보여줄 목차와 내용 개요를 docs/PAGES.md 에 정리하고, 변경 시 항상 업데이트 합니다.
 - 진행사항은 docs/PROCESS.md에 정리하고, 변경 시 항상 업데이트 합니다.
 - UI 스타일에 대한 사항은 docs/STYLE.md에 정리하고, UI 작업 시 항상 참조합니다. 변경 시 항상 업데이트 합니다.
 - **작업 완료 후 반드시 docs/PROCESS.md를 업데이트합니다.** 스프린트 또는 단위 작업이 끝날 때마다 완료 항목을 기록하고, 날짜를 최신화합니다.
 - 구현은 기본 틀을 설계한 후 각 디렉터리 별로 나눠서 디렉터리 하나씩 조금씩 참고해서 포팅하는 것을 추천함

## 배포

 - gh action을 이용한 구조로 전면 수정할 예정
 - react의 static site rendering 및 browser routing을 사용할 것임. network-study와 cert-study를 참고할 것

## 참고 사이트

 - https://thecodingtrain.com/
 - https://editor.p5js.org/
