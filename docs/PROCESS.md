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

## 버그 수정 및 배포

### 2026-03-26
- [x] 챌린지별 에셋 누락 수정 (이미지, 사운드, 폰트, JSON, CSV, TXT)
- [x] 파일 로딩 순서 수정 (toxi_index.js, rectangle.js, turtle.js 등)
- [x] 라이브러리 추가 (p5.sound, p5.easycam, matter.js, dat.gui, gif.js, tf.js, ml5.js, mappa.js, p5.pdf.js, p5.collide2d)
- [x] bodyHtml 주입으로 특수 DOM 요소 지원 (037, 042, 044, 066, 073, 075, 079, 080, 094, 100, 122, 140, 141, 151, 158)
- [x] codeOnly 처리 (039, 045, 079, 080, 082-084, 118, 150, 157)
- [x] P5Runner에 `<base>` 태그 추가로 상대 경로 에셋 로딩 지원
- [x] iframe sandbox에 allow-popups + allow="microphone; camera" 추가
- [x] KNOWN_ISSUES.md 작성 (멀티 러너 전환 필요, codeOnly, notice 목록)
- [x] master → main 브랜치 이름 변경
- [x] GitHub Actions 배포 완료 (https://yooseongc.github.io/coding-train)

## Phase 10: 멀티 러너 전환 + 미포팅 멀티파트 챌린지

### 2026-03-26
- [x] P5MultiVersion 컴포넌트에 `challengeId` prop 추가 (에셋 로딩을 위한 `<base>` 태그 지원)
- [x] ChallengePage에서 P5MultiVersion에 `challengeId` 전달
- [x] 인스턴스 모드 → 글로벌 모드 변환 + P5MultiVersion 탭 분리
  - 123 Chaos Game: 2파트 (Sierpinski Triangle / Pentagonal n-flake)
  - 134 Heart Curve: 2파트 (기본 하트 / 비팅 하트 + GIF)
  - 136 Perlin Noise Loops: 2파트 (Polar 노이즈 / Particles + GIF)
  - 162 Self-Avoiding Walk: 6파트 (basic / backtracking / 3D WEBGL / bezier / recursive / random walk)
  - 163 Bezier Curves: 4파트 (basic / bezier-vertex / quadratic / cubic)
- [x] 미포팅 멀티파트 챌린지 코드 복사 + 메타데이터 업데이트
  - 063 Texturing Cloth Simulation: 2파트 (toxi_index.js, particle.js, spring.js, unikitty.jpg 포함)
  - 081 Circle Morphing: 2파트
  - 130 Drawing with Fourier Transform: 3파트 (codingtrain.js, fourier.js, complex.js 포함)
  - 142 Rubik's Cube: 2파트 (p5.easycam.min.js 라이브러리 포함)
  - 161 Estimating Pi: 2파트 (milliondigits.txt, pi1000000.txt 데이터 파일 포함)
- [x] TypeScript + Vite 빌드 통과 (17개 SPA 라우트)
- [x] KNOWN_ISSUES.md 업데이트 (멀티 러너 항목 해결 표시)

## Phase 11: 최종 검증 및 이슈 해결

### 2026-03-27
- [x] 불필요한 notice/경고 제거 (041, 057, 058, 066, 075, 097, 113, 128, 151, 153)
- [x] 079 Number Guessing Chatbot — codeOnly 해제, RiveScript 정상 동작
- [x] 080 Voice Chatbot — codeOnly 해제, p5.speech + RiveScript 정상 동작
- [x] 097 The Book of Pi — iframe sandbox에 allow-modals 추가, PDF 생성 정상
- [x] 121 Logo Interpreter — bodyHtml에 입력 폼/프리셋 셀렉터 추가
- [x] 134 Heart Curve part2 — GIF recording gif.worker.js 경로 문제 해결
- [x] 136 Perlin Noise Loops part2 — GIF recording gif.worker.js 경로 문제 해결
- [x] 162 Self-Avoiding Walk — RESET 시 버튼 증식 문제 해결
- [x] 157 Video Annotations with ML — codeOnly 전환 (WebGL + 카메라 iframe 제한)
- [x] 158 Shape Classifier — 정상 동작 확인
- [x] P5CodeView 대용량 파일 표시 제한 추가 (130 codingtrain.js 등)
- [x] GitHub Pages 404.html SPA 리다이렉트 지원
- [x] KNOWN_ISSUES.md 최종 업데이트

---

## Phase 12: 컴포넌트 공통화 및 UX 개선

### 2026-03-27
- [x] SPA 새로고침 시 base path(`/coding-train`) 누락 버그 수정
- [x] Perlin Noise 가이드 데모 `canvas.parent('#canvasDiv')` 오류 수정
- [x] `.gitignore`에 `.claude/settings.local.json`, `.claude/worktrees/` 추가
- [x] README.md `master` → `main` 수정

#### Sprint 1: study-ui-lib 공통 컴포넌트 추출
- [x] `IframeRunner` — 범용 iframe 실행기 (콘솔 브릿지, Pause/Restart)
- [x] `useIframeConsole` — iframe 콘솔 메시지 수신 훅
- [x] `ConsolePanel` — 독립 콘솔 출력 패널 (레벨 아이콘/색상, 자동 스크롤)
- [x] `CodeViewer` — 멀티파일 코드 뷰어 (구문 강조, 레이아웃 모드, 파일 탭)
- [x] `FileExplorer` — 접이식 파일 트리 (폴더 그룹, 아이콘)
- [x] `NestedSidebar` — 계층형 네비게이션 (자동 확장, localStorage 상태)
- [x] coding-train 컴포넌트를 study-ui-lib 래핑으로 전환 (P5Runner, P5CodeView, NestedSidebar)
- [x] study-ui-lib docs-site 문서 업데이트

#### Sprint 2: 코드 뷰어/러너 UX 개선
- [x] IframeRunner: 전체화면 모드, 키보드 단축키 (Ctrl+Enter, Space), 반응형 컨트롤
- [x] CodeViewer: 코드 복사 버튼, 라이트 모드 구문 강조 테마(oneLight), 모바일 자동 vertical 전환
- [x] ConsolePanel: 라이트 모드 색상 대비 개선
- [x] 전체: aria-label, role=log/status, focus-visible 링 접근성 개선
- [x] study-ui-lib docs-site Sprint 2 반영
