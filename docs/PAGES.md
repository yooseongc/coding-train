# 페이지 구조

## 라우트 목록

| 경로 | 컴포넌트 | 설명 |
|---|---|---|
| `/` | `Home` | 카테고리 카드 그리드 + 가이드 카드 |
| `/category/:categoryId` | `CategoryPage` | 카테고리별 챌린지 목록 (포팅 완료/예정 구분) |
| `/challenge/:challengeId` | `ChallengePage` | 개별 챌린지 (P5CodeView + 코드 설명 + 참고자료) |
| `/challenges` | `ChallengeIndex` | 코딩 챌린지 목록 (검색 + 필터) |
| `/guide/nature-of-code` | `GuideNatureOfCode` | Nature of Code Ch.10 신경망 (4개 P5 데모) |
| `/guide/neural-network` | `GuideToyNeuralNetwork` | Toy Neural Network 가이드 |
| `/guide/tensorflow` | `GuideTensorflow` | TensorFlow.js 종합 가이드 |
| `/guide/perlin-noise` | `GuidePerlinNoise` | Perlin Noise 알고리즘 + 데모 |
| `/guide/chrome-extension` | `GuideChromeExtension` | Chrome Extension 가이드 |

## 카테고리 (10개)

| # | ID | 이름 | 챌린지 수 |
|---|---|---|---|
| 1 | creative-coding | Creative Coding | 25 |
| 2 | fractals | Fractals & L-Systems | 11 |
| 3 | games | Games | 16 |
| 4 | physics-simulation | Physics & Simulation | 19 |
| 5 | 3d-geometry | 3D & Geometry | 13 |
| 6 | math-algorithms | Math & Algorithms | 33 |
| 7 | data-visualization | Data Visualization | 13 |
| 8 | text-nlp | Text & NLP | 10 |
| 9 | neural-networks-ml | Neural Networks & ML | 13 |
| 10 | drawing-animation | Drawing & Animation | 9 |

## 가이드 (5개)

| 아이콘 | 이름 | 내용 |
|---|---|---|
| 🧬 | Nature of Code | Ch.10 퍼셉트론~신경망 시각화 + 4개 P5 데모 |
| 🔮 | Toy Neural Network | 행렬 수학, 피드포워드, 역전파 |
| 📐 | TensorFlow.js | 텐서, 연산, Layers API, Core API |
| 🌊 | Perlin Noise | 알고리즘 구현 + 인터랙티브 데모 |
| 🧩 | Chrome Extension | manifest, content script, background script |

## 핵심 컴포넌트

| 컴포넌트 | 위치 | 역할 |
|---|---|---|
| P5Runner | `src/components/P5Runner/` | study-ui-lib `IframeRunner` 래핑 (p5.js 특화) |
| P5CodeView | `src/components/P5Runner/` | study-ui-lib `CodeViewer` 래핑 (p5.js 특화) |
| P5MultiVersion | `src/components/P5Runner/` | 멀티 버전 탭 뷰 |
| NestedSidebar | `src/components/layout/` | study-ui-lib `NestedSidebar` + 데이터 어댑터 |
| CustomAppLayout | `src/components/layout/` | 3열 레이아웃 (사이드바/콘텐츠/TOC) |
| ChallengeCard | `src/components/ChallengeCard/` | 챌린지 카드 (카테고리 페이지용) |

### study-ui-lib 공통 컴포넌트 (Sprint 1-2에서 추출)

| 컴포넌트 | 역할 |
|---|---|
| `IframeRunner` | 범용 iframe 실행기 (콘솔 브릿지, 전체화면, 키보드 단축키) |
| `CodeViewer` | 멀티파일 코드 뷰어 (구문 강조, 복사, 다크/라이트 테마, 반응형) |
| `FileExplorer` | 접이식 파일 트리 |
| `ConsolePanel` | 콘솔 출력 패널 (레벨별 색상, 접근성) |
| `NestedSidebar` | 계층형 네비게이션 (자동 확장, localStorage) |
| `useIframeConsole` | iframe 콘솔 메시지 수신 훅 |
