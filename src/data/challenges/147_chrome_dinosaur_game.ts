import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '147_chrome_dinosaur_game',
    number: 147,
    title: 'Chrome Dinosaur Game',
    categoryId: 'games',
    description: 'Chrome 공룡 달리기 게임을 만들고, ml5.js 음성 인식으로 점프를 제어합니다.',
    files: ['train.js', 'unicorn.js', 'sketch.js'],
    libraries: ['p5.sound.min.js', 'p5.collide2d.min.js', 'ml5.min.js'],
    references: [
        { title: 'Coding Challenge #147: Chrome Dinosaur Game', url: 'https://thecodingtrain.com/challenges/147-chrome-dinosaur-game' },
        { title: 'ml5.js - Sound Classifier', url: 'https://ml5js.org/reference/api-soundClassifier/' },
        { title: 'p5.collide2D - 충돌 감지 라이브러리', url: 'https://github.com/bmoren/p5.collide2D' },
        { title: 'Wikipedia - Dinosaur Game (Chrome)', url: 'https://en.wikipedia.org/wiki/Dinosaur_Game' },
    ],
    tags: ['dinosaur', 'game', 'neural-network', 'neuroevolution'],
    difficulty: 'advanced',
    explanation: [
        'Chrome 오프라인 공룡 게임(Dinosaur Game, T-Rex Runner)은 2014년 Chrome 브라우저에 탑재된 이스터 에그 게임으로, 인터넷 연결이 끊겼을 때 자동으로 나타납니다. 전 세계에서 가장 많이 플레이되는 게임 중 하나이며, 이 챌린지에서는 유니콘 테마로 재구현하고 머신러닝 음성 인식을 추가합니다.',
        'ml5.soundClassifier("SpeechCommands18w")는 Google의 사전훈련된 음성 명령 모델로, "zero"~"nine", "up", "down", "left", "right" 등 18개의 단어를 인식합니다. probabilityThreshold=0.95로 높은 신뢰도를 요구하여 오인식을 방지하고, "up" 명령이 감지되면 unicorn.jump()을 호출합니다.',
        'Train 장애물은 frameCount % 75 == 0일 때 75% 확률로 생성됩니다. p5.collide2D 라이브러리의 충돌 감지를 사용하여 unicorn.hits(train)으로 충돌을 판정하고, 충돌 시 "GAME OVER" 메시지를 표시하고 noLoop()합니다.',
        'scrollAmount가 매 프레임 0.005씩 증가하여 게임 속도가 점진적으로 빨라지는 난이도 곡선(difficulty curve)을 구현합니다. background.jpg를 scrollBackground로 스크롤하여 무한 러너(endless runner) 장르의 핵심인 시차 스크롤링(parallax scrolling) 효과를 만듭니다.',
        '이 프로젝트는 게임 개발의 기본 요소인 게임 루프, 충돌 감지, 난이도 조절과 함께, ml5.js를 활용한 음성 인터페이스(voice interface)를 결합하여 접근성(accessibility)이 향상된 게임 경험을 제공합니다.',
    ],
})
