# Known Issues — 챌린지 비정상 목록

## ~~멀티 러너 전환 필요 (p5 인스턴스 모드)~~ — 해결됨 (2026-03-26)

> 모든 인스턴스 모드 챌린지를 글로벌 모드로 변환하고 P5MultiVersion 탭으로 분리 완료

| # | 챌린지 | 해결 |
|---|---|---|
| 123 | Chaos Game | 2파트 분리 (part1: Sierpinski, part2: Pentagonal) |
| 134 | Heart Curve | 2파트 분리 (part1: 기본, part2: 비팅+GIF) |
| 136 | Perlin Noise Loops | 2파트 분리 (part1: Polar, part2: Particles+GIF) |
| 162 | Self-Avoiding Walk | 6파트 분리 (basic, backtracking, 3D, bezier, recursive, random) |
| 163 | Bezier Curves | 4파트 분리 (basic, bezier-vertex, quadratic, cubic) |

## codeOnly 처리 (브라우저 실행 불가)

| # | 챌린지 | 이유 |
|---|---|---|
| 045 | Saving p5 Drawings to Firebase | Firebase + 특수 DOM (#saveButton, #clearButton) |
| 082 | Image Chrome Extension | Chrome Extension (Node.js 환경) |
| 083 | Doodle Chrome Extension | Chrome Extension |
| 084 | Word Definition Chrome Extension | Chrome Extension |
| 039 | Mad Libs Generator | Tabletop.js (Google Sheets, 서비스 중단) |
| ~~079~~ | ~~Number Guessing Chatbot~~ | ~~해결: files에서 brainrive.txt 제거 + rivescript.min.js 추가~~ |
| ~~080~~ | ~~Voice Chatbot~~ | ~~해결: files에서 brainrive.txt 제거 + rivescript.min.js, p5.speech.js 추가~~ |
| 118 | Fractal Tree Bot | Node.js 서버사이드 봇 |
| 150 | AI Rainbows with RunwayML | RunwayML 서비스 필요 |
| 157 | Video Annotations with ML | 카메라 필수 (sandbox 제한) |

## notice 배너 (일부 기능 제한)

| # | 챌린지 | 이유 |
|---|---|---|
| 032 | Agar.io | Part 2는 Express 서버 필요 (Part 1만 표시) |
| 041 | Clappy Bird | 마이크 접근 필요 |
| ~~057~~ | ~~Mapping Earthquake Data~~ | ~~정상 동작 확인~~ |
| ~~058~~ | ~~3D Earthquake Data Visualization~~ | ~~정상 동작 확인~~ |
| ~~066~~ | ~~JavaScript Countdown Timer~~ | ~~해결: bodyHtml로 주입~~ |
| ~~075~~ | ~~Wikipedia API~~ | ~~정상 동작 확인~~ |
| ~~113~~ | ~~4D Hypercube (Tesseract)~~ | ~~정상 동작 확인~~ |
| ~~121~~ | ~~Logo Interpreter~~ | ~~해결: bodyHtml에 입력 폼 추가~~ |
| ~~128~~ | ~~SketchRNN Snowflakes~~ | ~~정상 동작 확인~~ |
| ~~134~~ | ~~Heart Curve~~ | ~~해결: P5MultiVersion으로 분리~~ |
| ~~136~~ | ~~Perlin Noise Loops~~ | ~~해결: P5MultiVersion으로 분리~~ |
| ~~151~~ | ~~Ukulele Tuner~~ | ~~정상 동작 확인~~ |
| ~~153~~ | ~~Interactive SketchRNN~~ | ~~정상 동작 확인~~ |
| 157 | Video Annotations with ML | WebGL 셰이더 + 카메라 (iframe 한계) |
| ~~079~~ | ~~Number Guessing Chatbot~~ | ~~해결: codeOnly 해제~~ |
| ~~080~~ | ~~Voice Chatbot~~ | ~~해결: codeOnly 해제~~ |

## bodyHtml 주입으로 해결

| # | 챌린지 | 주입한 HTML |
|---|---|---|
| 037 | Diastic Machine | `<input id="seed">`, `<button id="submit">` |
| 042 | Markov Chains | `<button id="mk1btn">`, `<div id="mk1res">` 등 |
| 044 | AFINN Sentiment Analysis | `<textarea id="txt">`, `<p id="scoreP">` 등 |
| 066 | JavaScript Countdown Timer | `<p id="timer">` |
| 073 | Acrostic | `<input id="wordinput">`, `<button id="submitbutton">` |
| 075 | Wikipedia API | `<input id="userinput">` |
| 079 | Number Guessing Chatbot | `<input id="user_input">`, `<button id="submit">` |
| 080 | Voice Chatbot | `<span id="input">`, `<span id="output">` |
| 094 | 2048 | `<p id="score">` |
| 100 | Neuroevolution Flappy Bird | `<div id="canvasContainer">`, `<input id="speedSlider">`, `<button id="best">` 등 |
| 122 | Quick Draw | `<div id="canvasDiv">` |
| 140 | Leibniz Pi Approximation | `<div id="canvasDiv">` |
| 141 | Calculating Pi with Mandelbrot | `<div id="canvasDiv">` |
| 151 | Ukulele Tuner | `<div id="canvasDiv">` |
| 121 | Logo Interpreter | `<textarea id="code">`, `<select id="preset">`, `<div id="canvasDiv">` |
| 158 | Shape Classifier | `<div id="controlDiv">`, `<div id="canvasDiv">` |

## 파일 순서 수정

| # | 챌린지 | 변경 내용 |
|---|---|---|
| 020 | 3D Cloth with Toxiclibs | toxi_index.js를 맨 앞으로 |
| 063 | Texturing Cloth Simulation | toxi_index.js를 맨 앞으로 |
| 072 | Frogger | rectangle.js를 맨 앞으로 |
| 121 | Logo Interpreter | turtle.js → command.js → parser.js 순서로 변경 |
| 137 | 4D OpenSimplex Noise Loop | 파일명 opensimplex.js → OpenSimplexNoise.js |

## 라이브러리 추가

| # | 챌린지 | 추가 라이브러리 |
|---|---|---|
| 041 | Clappy Bird | p5.sound.min.js |
| 058 | 3D Earthquake Data | p5.easycam.min.js |
| 062 | Plinko with Matter.js | p5.sound.min.js 추가 |
| 066 | JavaScript Countdown Timer | p5.sound.min.js |
| 067 | Pong | p5.sound.min.js |
| 097 | The Book of Pi | p5.pdf.js |
| 102 | Water Ripple | gif.js |
| 109 | Visualizing 500K Subscribers | p5.sound.min.js, mappa.min.js |
| 110 | Recaman Sequence | p5.sound.min.js |
| 130 | Drawing with Fourier Transform | codingtrain.js를 files에 추가 |
| 134 | Heart Curve | gif.js (gif.worker.js 제거) |
| 135 | GIF Loop | gif.js (gif.worker.js 제거) |
| 136 | Perlin Noise Loops | gif.js (gif.worker.js 제거) |
| 139 | Calculating Digits of Pi with Collision | p5.sound.min.js, block.js 추가 |
| 147 | Chrome Dinosaur Game | p5.sound.min.js, p5.collide2d.min.js, ml5.min.js |
| 159 | Simple Pendulum Simulation | dat.gui.min.js (다운로드) |
| 163 | Bezier Curves | p5.sound.min.js |

## 에셋 복사 필요했던 챌린지

| # | 챌린지 | 에셋 |
|---|---|---|
| 009 | Solar System 3D Texture | data/sun.jpg, mars.jpg, earth.jpg, mercury.jpg |
| 037 | Diastic Machine | rainbow.txt |
| 039 | Mad Libs Generator | madlibs.txt |
| 042 | Markov Chains | names.txt, unicorn.txt |
| 044 | AFINN Sentiment Analysis | afinn111.json |
| 047 | Pixel Sorting | sunflower.jpg |
| 048 | White House Social Media | flotus.json, potus.json |
| 049 | Photo Mosaic | obama.jpg |
| 050 | Animated Circle Packing | image/2017.png |
| 059 | Steering Behaviors | AvenirNextLTPro-Demi.otf |
| 063 | Texturing Cloth Simulation | unikitty.jpg |
| 068 | Breadth First Search | kevinbacon.json |
| 070 | Nearest Neighbors | movies.json |
| 088 | Snowfall | flakes32.png |
| 090 | Floyd-Steinberg Dithering | images/kitten.jpg |
| 100 | Neuroevolution Flappy Bird | images/*.png |
| 101 | May the 4th Scrolling Text | AvenirNextLTPro-Demi.otf, space.txt |
| 109 | Visualizing 500K Subscribers | countries.json, subscribers_geo.csv |
| 111 | Animated Sprites | horse.json, horse.png |
| 131 | Bouncing DVD Logo | dvd_logo.png |
| 138 | Angry Birds with Matter.js | images/dot.png, equals.png, skyBackground.png |
| 139 | Calculating Digits of Pi | block.png, clack.wav |
| 141 | Calculating Pi with Mandelbrot | mandelbrot.jpg |
| 147 | Chrome Dinosaur Game | unicorn.png, train.png, background.jpg |
| 156 | Peeking Inside Pi | pi-million.txt |
