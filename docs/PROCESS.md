# 진행 현황

## Phase 1: Project Scaffold (기반 구축)

### 2026-03-25
- [x] React 19 + TypeScript + Vite + Tailwind CSS 4 + pnpm 프로젝트 초기화
- [x] 핵심 설정 파일 (vite.config.ts, tsconfig, eslint.config.js)
- [x] 앱 엔트리 (main.tsx, App.tsx, index.css)
- [x] 데이터 레이어 (types, categories, challengeRegistry, siteConfig)
- [x] 홈 페이지 (카테고리 카드 그리드)
- [x] 카테고리 페이지, 챌린지 페이지 (placeholder), 용어사전 페이지
- [x] GitHub Actions 배포 워크플로우
- [x] SPA 라우트 생성 스크립트
- [x] docs/ 문서화 (PAGES.md, PROCESS.md, STYLE.md)
- [x] study-ui-lib 서브모듈 추가
- [x] pnpm install 및 빌드 검증 (tsc + vite build + SPA route gen 통과)
- [x] .circleci 삭제
- [x] dev 서버 기동 및 렌더링 검증 완료

## Phase 2: P5Runner Component (핵심 컴포넌트)

### 2026-03-25
- [x] P5Runner 컴포넌트 — iframe + srcdoc 기반 p5.js 스케치 격리 실행기
- [x] P5CodeView 컴포넌트 — 코드(파일 탭) + 프리뷰 분할 뷰 (editor.p5js.org 스타일)
- [x] P5MultiVersion 컴포넌트 — 멀티파트 챌린지 버전 탭 전환
- [x] ChallengeCard 컴포넌트 — 카테고리 페이지용 챌린지 카드
- [x] p5.js 라이브러리 배치 (public/lib/)
- [x] 샘플 챌린지 포팅: 001_starfield (fetch 기반 스케치 파일 로드)
- [x] ChallengePage에 P5CodeView 통합 (breadcrumb, 참고자료, 태그 포함)
- [x] TypeScript 검증 통과 + dev 서버 렌더링 확인

## Phase 3: 하이브리드 네비게이션

### 2026-03-25
- [x] NestedSidebar 컴포넌트 — 접이식 카테고리 그룹 + 하위 챌린지 링크
  - 아이콘 + 제목 + 포팅 진행률 (1/9 등) 표시
  - 접기/펼치기 버튼, localStorage로 상태 유지
  - 현재 라우트에 해당하는 카테고리 자동 펼침
  - 미포팅 챌린지 "TBD" 표시, 활성 챌린지 하이라이트
- [x] CustomAppLayout 컴포넌트 — NestedSidebar + Content + TOC 3열 레이아웃
  - study-ui-lib의 SearchModal, TableOfContents, BackToTop 재활용
  - Cmd+K 검색, 사이드바/TOC 패널 토글
- [x] App.tsx에서 AppLayout → CustomAppLayout 전환
- [x] FileTree 컴포넌트 — P5CodeView에 파일 트리 사이드 패널 추가
  - 📁 sketch 폴더 + 📁 core/libraries 폴더 구조
  - 파일 선택으로 코드 탭 전환
  - 토글 버튼으로 표시/숨김 가능
- [x] TypeScript 검증 통과 + dev 서버 렌더링 확인

## Phase 4: 챌린지 마이그레이션 Batch 1 (001-030)

### 2026-03-25
- [x] 30개 챌린지 JS 파일을 public/sketches/ 에 복사
- [x] 30개 챌린지 메타데이터 등록 (src/data/challenges/)
- [x] 추가 라이브러리 복사: p5.easycam.min.js, toxiclibs.min.js
- [x] CategoryPage에 ChallengeCard 통합 (포팅 완료/예정 구분 표시)
- [x] 전체 TypeScript 검증 통과 + 프리뷰 확인
- [x] 카테고리별 포팅 현황: creative-coding 4/9, fractals 8/8, games 4/8, physics 5/9, 3d-geometry 9/9, math-algorithms 1/9, data-visualization 4/8, text-nlp 0/8, neural-networks 0/0, drawing 0/5

## UI 개선 (Phase 4 이후)

### 2026-03-25
- [x] FileTree 폴더 접기/펼치기 토글 (▶/▼ + 📁/📂 아이콘)
- [x] P5Runner 개발자 콘솔 패널 (iframe postMessage 기반)
- [x] p5.js DOM 요소(슬라이더, 텍스트 등) iframe 내 표시
- [x] 코드/프리뷰 패널 높이 통일
- [x] 챌린지 페이지 여백 축소 + 우측 TOC 패널 제거
- [x] 다크/라이트 모드 전체 대응 (iframe, 컨트롤 바, 콘솔, 코드블록 여백)
- [x] 참고자료 카드 형태로 변경 (설명 섹션과 일관성)
- [x] Restart 스크롤 버그 수정
- [x] 파일트리 토글 아이콘 가시성 개선 (◧/☰)
- [x] 30개 챌린지 코드 설명(explanation) 추가
- [x] UI 리뷰 스킬 생성 (.claude/skills/coding-train-ui-review.md)

## Phase 5: 챌린지 마이그레이션 Batch 2 (031-070)

### 2026-03-25
- [x] 40개 챌린지 JS 파일 복사 (멀티파트는 part1)
- [x] 40개 챌린지 메타데이터 + 코드 설명 등록
- [x] matter.min.js 다운로드 (CDN → public/lib/)
- [x] TypeScript 검증 + 프리뷰 확인 (Asteroids, Text & NLP 등)
- [x] 누적 포팅: 70/168 (42%)

## Phase 6: 챌린지 마이그레이션 Batch 3 (071-120)

### 2026-03-25
- [x] 46개 챌린지 JS 파일 복사 (Chrome Extension 082-084 제외)
- [x] 46개 챌린지 메타데이터 + 코드 설명 등록
- [x] 카테고리 매핑 업데이트 (모든 카테고리에 새 챌린지 추가)
- [x] TypeScript 검증 통과
- [x] 누적 포팅: 116/168 (69%)

## Phase 7: 챌린지 마이그레이션 Batch 4 (121-163)

### 2026-03-25
- [x] 43개 챌린지 JS 파일 복사 (멀티파트는 part1)
- [x] 43개 챌린지 메타데이터 + 코드 설명 등록
- [x] 카테고리 매핑 전체 업데이트 (10개 카테고리에 새 챌린지 배분)
- [x] TypeScript 검증 + Vite 빌드 통과
- [x] 누적 포팅: ~159/168 (Chrome Extension 082-084 제외, 95%)

## Phase 8: 튜토리얼 섹션 포팅

### 2026-03-26
- [x] GuideNatureOfCode — Chapter 10 신경망 (4개 P5Runner 임베드)
- [x] GuideToyNeuralNetwork — 행렬 수학, 피드포워드, 역전파 설명
- [x] GuideTensorflow — TensorFlow.js 종합 가이드
- [x] GuidePerlinNoise — Perlin noise 알고리즘 + 인터랙티브 데모
- [x] GuideChromeExtension — Chrome Extension 가이드 (코드 없음)
- [x] App.tsx 라우트 추가 + SPA 라우트 스크립트 업데이트
- [x] TypeScript 검증 통과

## Phase 9: 폴리시 & 최적화

### 2026-03-26
- [x] 용어사전 → 코딩 챌린지 목록 페이지 개편 (검색, 카테고리/난이도 필터, 카테고리 뱃지)
- [x] 사이드바 "CODING CHALLENGES" / "GUIDES" 섹션 헤더 구분
- [x] 홈 페이지에 Guides 섹션 추가 (5개 가이드 카드)
- [x] P5CodeView 레이아웃 토글: 좌우/상하/코드만 3모드 (토글 버튼 그룹)
- [x] 탭 바: 파일트리 토글 + 레이아웃 토글 양쪽 고정, 파일 탭만 스크롤
- [x] 코드 스크롤 인디케이터 (↓ scroll 바운스 + 그라디언트)
- [x] SyntaxHighlighter 직접 사용으로 코드 스크롤 완전 제어
- [x] 가이드 페이지 여백 축소 + TOC 제거
- [x] 미세 스크롤 제거 (러너 패널 overflow-hidden)
- [x] Hook 순서 에러 수정 (early return 이전으로 hooks 이동)
- [x] 전체 빌드 통과 (tsc + vite build + 17개 SPA 라우트)
- [x] UI 리뷰 스킬 업데이트
- [x] PROCESS.md / PAGES.md 최종 업데이트
