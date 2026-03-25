# Coding Train Study

Daniel Shiffman의 [Coding Challenge](https://thecodingtrain.com/)를 p5.js로 직접 구현하며 배우는 창의적 코딩 학습 사이트.

**https://yooseongc.github.io/coding-train**

## 주요 기능

- **160+ 코딩 챌린지** — p5.js 실행기 + 소스 코드 + 학습 설명
- **10개 카테고리** — Creative Coding, Fractals, Games, Physics, 3D, Math, Data Viz, Text, ML, Drawing
- **5개 가이드** — Nature of Code, Neural Network, TensorFlow.js, Perlin Noise, Chrome Extension
- **P5Runner** — iframe 격리 실행, 개발자 콘솔, 다크/라이트 모드
- **코드 뷰어** — 파일 트리, 좌우/상하/코드만 레이아웃, 구문 강조

## 기술 스택

- React 19 + TypeScript + Vite 8
- Tailwind CSS 4
- [study-ui-lib](https://github.com/yooseongc/study-ui-lib) (공유 UI 컴포넌트)
- pnpm + GitHub Actions + GitHub Pages

## 실행 방법

```bash
git clone --recurse-submodules https://github.com/yooseongc/coding-train.git
cd coding-train
pnpm install
pnpm dev
```

## 빌드 및 배포

```bash
pnpm build  # tsc + vite build + SPA route generation
```

`master` 브랜치에 push하면 GitHub Actions가 자동으로 GitHub Pages에 배포합니다.
