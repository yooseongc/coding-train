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
    ],
    tags: ['dinosaur', 'game', 'neural-network', 'neuroevolution'],
    difficulty: 'advanced',
    explanation: [
        'Chrome 오프라인 공룡 게임을 유니콘 테마로 재구현합니다. Unicorn이 왼쪽에서 점프하며 오른쪽에서 다가오는 Train 장애물을 피하는 무한 러너 게임입니다.',
        'ml5.soundClassifier("SpeechCommands18w")로 음성 명령을 인식합니다. probabilityThreshold=0.95로 설정하여 "up" 명령이 감지되면 unicorn.jump()을 호출합니다. 스페이스바로도 점프할 수 있습니다.',
        'Train 장애물은 frameCount % 75 == 0일 때 75% 확률로 생성됩니다. unicorn.hits(train)으로 충돌을 감지하면 "GAME OVER" 메시지를 표시하고 noLoop()합니다. 스페이스바로 재시작합니다.',
        'scrollAmount가 매 프레임 0.005씩 증가하여 게임 속도가 점진적으로 빨라집니다. background.jpg를 scrollBackground로 스크롤하여 무한 배경 효과를 만들고, 이미지 너비를 넘으면 리셋합니다.',
    ],
})
