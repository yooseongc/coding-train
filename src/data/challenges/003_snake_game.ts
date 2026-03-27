import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '003_snake_game',
    number: 3,
    title: 'Snake Game',
    categoryId: 'games',
    description: '클래식 스네이크 게임을 p5.js로 구현합니다.',
    files: ['snake.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #3: Snake Game', url: 'https://thecodingtrain.com/challenges/3-snake-game' },
        { title: 'Snake (video game genre) - Wikipedia', url: 'https://en.wikipedia.org/wiki/Snake_(video_game_genre)' },
        { title: 'p5.js Reference - keyPressed()', url: 'https://p5js.org/reference/p5/keyPressed/' },
        { title: 'p5.js Reference - createVector()', url: 'https://p5js.org/reference/p5/createVector/' },
    ],
    tags: ['game', 'snake', 'grid', 'input'],
    difficulty: 'beginner',
    explanation: [
        'Snake 게임은 1976년 아케이드 게임 Blockade에서 유래한 고전 장르로, 1990년대 후반 Nokia 휴대폰에 탑재되면서 전 세계적으로 유명해졌습니다. 플레이어가 뱀을 조종하여 먹이를 먹으면 몸이 길어지고, 벽이나 자신의 몸에 부딪히면 게임이 끝나는 단순하면서도 중독성 있는 구조입니다.',
        'Snake 클래스는 body 배열로 뱀의 몸을 관리합니다. update()에서 매 프레임마다 배열 앞의 요소를 shift()로 제거하고 뒤에 새 머리를 push()하여 이동 효과를 만듭니다. 이 큐(Queue) 자료구조 기반의 접근은 뱀의 이동을 O(1) 시간 복잡도로 처리할 수 있게 합니다.',
        'scale(rez)로 캔버스 전체를 격자 단위로 확대합니다. 이렇게 하면 rect(x, y, 1, 1)로 한 칸을 그릴 수 있어, 픽셀 좌표 대신 격자 좌표로 간단하게 작업할 수 있습니다. 이 기법은 타일 기반(tile-based) 게임 개발에서 널리 사용되는 좌표 변환 패턴입니다.',
        'endGame()은 머리가 경계를 벗어나거나 자신의 몸과 겹치면 true를 반환합니다. eat()은 머리와 음식의 격자 좌표가 같으면 grow()를 호출해 몸 길이를 늘립니다. 충돌 감지에 격자 좌표의 정수 비교를 사용하므로 부동소수점 오차 없이 정확한 판정이 가능합니다.',
        'keyPressed()에서 방향키 입력을 받아 setDir()로 이동 방향(xdir, ydir)을 설정합니다. frameRate(5)로 게임 속도를 조절하여 턴 기반처럼 동작합니다. 이산적(discrete) 시간 단위의 게임 루프는 연속적 물리 시뮬레이션과 달리 상태 관리가 단순하고 재현성이 높습니다.',
        'Snake 게임은 해밀턴 경로(Hamiltonian Path) 문제와 밀접한 관련이 있습니다. 뱀이 모든 칸을 방문하며 자기 자신과 충돌하지 않는 경로를 찾는 것은 NP-완전 문제로, AI 스네이크 솔버 연구의 기초가 됩니다.',
    ],
})
