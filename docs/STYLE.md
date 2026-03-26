# UI 스타일 가이드

## 기본 규칙

- study-ui-lib (`@study-ui/components`)의 컴포넌트와 스타일 시스템을 따름
- Tailwind CSS 4 사용, `@custom-variant dark` 다크 모드 지원
- 폰트: Pretendard Variable (sans), JetBrains Mono (mono)

## 색상 체계

- **Primary**: Pink (coding-train 테마 컬러)
  - 액센트: `text-pink-600 dark:text-pink-400`
  - 배경: `bg-pink-50 dark:bg-pink-950/50`
  - 보더: `border-pink-200 dark:border-pink-900`
- **Secondary**: Blue, Green, Orange (난이도/태그별)
- 다크 모드는 oklch 기반 scrollbar + study-ui-lib 기본 다크 테마

## 레이아웃

- 3열 구조: NestedSidebar | Content | TableOfContents
- 모바일: 1열, 사이드바 드로어
- Content 최대폭: `max-w-5xl`
- 패딩: `px-6 py-10`

## 파일 구조

```
src/pages/{PageName}/
  index.tsx        — 페이지 컴포넌트 (800줄 이하)
```

```
src/components/{ComponentName}/
  {ComponentName}.tsx  — 컴포넌트
```

## 컴포넌트 사용 패턴

### 카테고리 카드
- `CardGrid cols={2}` + Link 카드
- 아이콘 + 제목 + 난이도 뱃지 + 설명 + 태그

### P5Runner / CodeViewer (study-ui-lib 기반)
- 분할 뷰: 코드 | 프리뷰 (좌우/상하/코드만 레이아웃)
- iframe 격리 실행 (IframeRunner)
- Play/Pause/Restart + 전체화면 컨트롤
- 키보드 단축키: Ctrl+Enter (재시작), Space (일시정지)
- 코드 복사 버튼
- 다크 모드: vscDarkPlus, 라이트 모드: oneLight 구문 강조
- 모바일 1024px 미만: 자동 vertical 전환, FileTree 숨김
- 멀티 파일 탭, 멀티 버전 탭
- 접근성: aria-label, role=log, focus-visible 링

## 난이도 표시

| 난이도 | 한국어 | 색상 |
|---|---|---|
| beginner | 입문 | green |
| intermediate | 중급 | blue |
| advanced | 심화 | orange |
