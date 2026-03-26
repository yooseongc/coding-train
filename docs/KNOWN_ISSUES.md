# Known Issues — 챌린지 비정상 목록

## codeOnly 처리 (브라우저 실행 불가)

| # | 챌린지 | 이유 |
|---|---|---|
| 039 | Mad Libs Generator | Tabletop.js (Google Sheets, 서비스 중단) |
| 045 | Saving p5 Drawings to Firebase | Firebase + 특수 DOM |
| 082 | Image Chrome Extension | Chrome Extension (Node.js 환경) |
| 083 | Doodle Chrome Extension | Chrome Extension |
| 084 | Word Definition Chrome Extension | Chrome Extension |
| 118 | Fractal Tree Bot | Node.js 서버사이드 봇 |
| 150 | AI Rainbows with RunwayML | RunwayML 서비스 필요 |
| 157 | Video Annotations with ML | TensorFlow.js WebGL + 카메라 (iframe 제한) |

## notice 배너 (일부 기능 제한)

| # | 챌린지 | 이유 |
|---|---|---|
| 032 | Agar.io | Part 2는 Express 서버 필요 (Part 1만 표시) |
| 122 | Quick, Draw! | ndjson API 외부 서비스 의존 |

## 해결 완료 이력

### 멀티 러너 전환 (2026-03-26)
- 123 Chaos Game, 134 Heart Curve, 136 Perlin Noise Loops, 162 Self-Avoiding Walk, 163 Bezier Curves → P5MultiVersion 탭 분리

### 경고 제거 (2026-03-27)
- 041, 057, 058, 066, 075, 097, 113, 128, 151, 153 → 정상 동작 확인

### codeOnly 해제 (2026-03-27)
- 079 Number Guessing Chatbot, 080 Voice Chatbot → RiveScript/p5.speech 정상 동작

### 버그 수정 (2026-03-27)
- 097 The Book of Pi — iframe allow-modals 추가
- 121 Logo Interpreter — bodyHtml 입력 폼 추가
- 134/136 GIF recording — gif.worker.js 경로 수정
- 162 Self-Avoiding Walk — RESET 버튼 증식 수정
- P5CodeView — 대용량 파일 표시 제한
- GitHub Pages 404.html SPA 리다이렉트
