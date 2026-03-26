---
name: coding-train-ui-review
description: coding-train 프로젝트의 UI 수정 시 체크해야 할 사항들. 새 컴포넌트나 페이지 추가 후 반드시 이 스킬을 참조.
---

# Coding Train UI Review Checklist

coding-train 프로젝트에서 UI 컴포넌트를 추가/수정할 때 반드시 확인해야 할 사항들입니다.

## 다크/라이트 모드

- **모든 UI 요소**는 `dark:` variant를 포함해야 합니다
- 코드 블록 배경: `bg-gray-100 dark:bg-[#0d1117]`
- 컨트롤 바/버튼: `bg-gray-200 dark:bg-gray-800` + `text-gray-700 dark:text-gray-300`
- 콘솔 패널: `bg-white dark:bg-gray-900`
- P5Runner iframe: `useIsDark()` 훅으로 테마 감지, srcdoc CSS에 동적 bg/fg 색상 적용
- 카드 컴포넌트: `bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800`

## P5Runner 관련

- iframe은 `sandbox="allow-scripts allow-same-origin"` 필수 (postMessage 콘솔 통신)
- iframe CSS에서 `overflow: hidden` 사용 금지 — p5.js DOM 요소(createSlider, createP 등) 표시 필요
- iframe 높이: `height + 60` (캔버스 + DOM 여유 공간)
- Restart 시 `scrollIntoView` 사용 금지 → 콘솔 패널 내부 `parentElement.scrollTo()` 사용
- 콘솔 브릿지: `parent.postMessage({ type: '__p5_console__', ... })` 패턴

## P5CodeView 레이아웃

- 코드 패널과 프리뷰 패널 높이를 통일: `panelHeight = height + 268`
- FileTree는 토글 가능해야 함 (◧/☰ 아이콘)
- FileTree 내부 폴더는 접기/펼치기 토글 지원
- 챌린지 페이지에서는 우측 TOC 패널 제거 (`isChallengePage` 분기)
- 챌린지 페이지 여백: `px-3 lg:px-4 py-6` (일반 페이지보다 좁게)

## 카드 스타일 일관성

- 설명 섹션: `rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6`
- 참고자료 섹션: 동일한 카드 스타일, 태그는 카드 내부 하단에 `rounded-full` 필 스타일
- 아이콘 사용: 💡 코드 설명, 📎 참고 자료

## 챌린지 메타데이터

- `explanation` 필드: 3-5개 한국어 단락 배열, 각 단락은 알고리즘/기법/p5 함수/수학 개념 설명
- `files` 배열: 헬퍼 클래스를 sketch.js보다 앞에 배치 (의존성 순서)
- `libraries` 배열: p5.min.js 외 추가 라이브러리만 명시

## NestedSidebar

- 카테고리별 포팅 진행률 표시: `{registered}/{total}`
- 미포팅 챌린지: "TBD" 표시 + 흐린 텍스트
- 활성 라우트 자동 펼침 + localStorage 상태 유지
- 테마 색상: pink (blue 대신) — `text-pink-600 dark:text-pink-400`, `bg-pink-50 dark:bg-pink-900/30`
- "CODING CHALLENGES" / "GUIDES" 섹션 헤더로 구분

## P5CodeView 레이아웃

- 3가지 모드: horizontal(좌우), vertical(상하), code-only — 토글 버튼 그룹으로 선택
- 탭 바 구조: [파일트리 토글 | 파일 탭(스크롤) | 레이아웃 토글] — 양쪽 고정, 가운데만 스크롤
- SyntaxHighlighter 직접 사용 (CodeBlock 대신) — 스크롤 완전 제어
- 코드 스크롤 인디케이터: 하단 그라디언트 + "↓ scroll" 바운스 텍스트
- hooks는 반드시 early return 이전에 선언 (Rules of Hooks)

## 코딩 챌린지 목록 페이지

- 카테고리 뱃지: 아이콘 + 이름 (아이콘만으로는 구분 어려움)
- 통계 카드: 전체/입문/중급/심화 카운트
- 검색 + 카테고리 필터 + 난이도 필터
