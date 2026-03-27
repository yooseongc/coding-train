---
name: enrich-challenges
description: 카테고리 ID를 받아 해당 카테고리의 모든 챌린지 explanation과 references를 보강합니다. 스케치 소스 파일의 주석/URL을 추출하고, AI 지식으로 교육 콘텐츠를 강화합니다.
user_invocable: true
argument: category-id (예: fractals, text-nlp, games 등)
---

# Enrich Challenges

카테고리 ID를 인수로 받아 해당 카테고리의 모든 챌린지 `explanation`과 `references`를 보강합니다.

## 사용법

```
/enrich-challenges <category-id>
```

유효한 category-id: `creative-coding`, `fractals`, `games`, `physics-simulation`, `3d-geometry`, `math-algorithms`, `data-visualization`, `text-nlp`, `neural-networks-ml`, `drawing-animation`

## 실행 워크플로우

### STEP 1: 카테고리 검증 및 대상 파악

1. `src/data/categories.ts`에서 인수로 받은 카테고리 ID의 `challengeIds` 배열을 읽는다
2. 유효하지 않은 카테고리 ID면 에러 메시지와 함께 유효한 ID 목록을 출력하고 종료
3. 대상 챌린지 목록과 총 개수를 출력

### STEP 2: 각 챌린지 순차 처리

챌린지를 number 순으로 하나씩 처리한다. 각 챌린지에 대해:

#### 2a. 소스 파일 분석

1. `src/data/challenges/{id}.ts` 읽기 — 현재 `explanation`과 `references` 확인
2. `public/sketches/{id}/` 하위의 모든 JS 파일 읽기 — 주석 블록과 URL 추출
   - `// https://...` 또는 `// http://...` 형태의 URL 주석
   - `/* ... */` 형태의 멀티라인 문서 블록 (알고리즘 설명, 수학 공식, pseudocode)
   - 인라인 주석 중 개념 설명이 담긴 것
3. 이미 references가 2개 이상이면 "이미 보강됨" 메시지와 함께 스킵 (중복 처리 방지)

#### 2b. references 보강

기존 references 배열을 확장한다:

1. **Coding Train 공식 링크**는 항상 첫 번째로 유지
2. **소스 주석에서 추출한 URL** 추가:
   - Wikipedia URL → `Wikipedia: [주제]` 또는 `위키백과: [주제]`
   - 라이브러리/API 문서 → `[라이브러리] 공식 문서`
   - 블로그/튜토리얼 → 원제목 사용 또는 한국어 제목 부여
   - 이미 있는 URL은 중복 추가하지 않음
3. **AI 지식 기반 2-4개 추가**:
   - 해당 알고리즘/개념의 Wikipedia 페이지 (한국어 있으면 한국어 우선)
   - p5.js 핵심 함수 레퍼런스 (https://p5js.org/reference/p5/함수명/)
   - 학술적/교육적 자료 (시각화 사이트, 인터랙티브 데모 등)
   - URL은 안정적이고 장기 유지되는 것만 사용

#### 2c. explanation 보강

기존 explanation을 기반으로 4-6개 단락으로 확장한다:

1. **핵심 원리** — 이 챌린지가 구현하는 알고리즘/기법의 핵심 (기존 유지/개선)
2. **수학적/과학적 배경** — 사용된 공식, 물리 법칙, 이론적 기반 (소스 주석 반영 + AI 보강)
3. **구현 세부사항** — p5.js 함수, 자료구조, 핵심 코드 패턴 (기존 유지/개선)
4. **역사적 맥락과 실제 응용** — 누가 발명했는지, 어디에 쓰이는지 (신규)
5. **인터랙션/시각화 설명** — 캔버스에서 볼 수 있는 것, 조작법 (기존 유지/개선)
6. (선택) **확장 아이디어** — 더 발전시킬 방향

규칙:
- **반드시 한국어**로 작성
- 각 단락은 **2-4문장의 plain text** (마크다운 문법 사용 금지)
- 전문 용어는 **영어 병기**: `"라플라시안(Laplacian)"`, `"만델브로 집합(Mandelbrot set)"`
- 소스 주석의 pseudocode, 수학 공식, 알고리즘 설명을 자연스럽게 반영
- 기존 내용 중 정확한 기술적 설명은 보존하되, 더 깊이 있게 확장

#### 2d. 파일 편집

`src/data/challenges/{id}.ts`에서 `explanation`과 `references` 필드**만** 수정한다.

**절대 변경하지 않는 필드:**
id, number, title, categoryId, description, files, libraries, tags, difficulty, versions, canvasWidth, canvasHeight, codeOnly, notice, bodyHtml

편집 후 간단한 진행 상황 출력:
```
[3/11] 016_L_system_fractal_trees — refs: 1→5, explanation: 4→6 paragraphs
```

### STEP 3: 검증

모든 챌린지 처리 완료 후:

1. `npx tsc --noEmit`으로 TypeScript 컴파일 확인
2. `git diff --stat`으로 변경 범위 확인
3. 변경된 파일이 `src/data/challenges/` 내부만인지 확인

### STEP 4: docs/PROCESS.md 업데이트

`docs/PROCESS.md`에 다음 형식으로 기록 추가:

```
### YYYY-MM-DD — 챌린지 문서 보강: {카테고리명}
- [x] {카테고리명} 카테고리 {N}개 챌린지 explanation 보강 (4-6 단락, 수학/역사/응용 추가)
- [x] {카테고리명} 카테고리 {N}개 챌린지 references 보강 (소스 주석 URL + AI 지식 기반 교육 자료)
- [x] TypeScript 검증 통과
```

## 권장 처리 순서

1. text-nlp (10개) — 가장 작음, 패턴 확립용
2. fractals (11개) — 수학 배경 풍부
3. drawing-animation (12개)
4. 3d-geometry (13개)
5. data-visualization (13개)
6. neural-networks-ml (13개)
7. games (16개)
8. physics-simulation (19개)
9. creative-coding (25개)
10. math-algorithms (34개) — 가장 큼

## 주의사항

- 한 카테고리를 완전히 처리한 후 다음 카테고리로 넘어갈 것
- 중복 챌린지(여러 카테고리에 속한 것)는 첫 처리 시 보강, 이후 스킵
- URL은 반드시 유효한 형식, 가능하면 안정적(장기 유지) URL 사용
- p5.js 레퍼런스: `https://p5js.org/reference/p5/함수명/`
- Coding Train: `https://thecodingtrain.com/challenges/번호-제목슬러그`
