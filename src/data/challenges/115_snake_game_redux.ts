import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '115_snake_game_redux',
    number: 115,
    title: 'Snake Game Redux',
    categoryId: 'games',
    description: '그리드 기반 스네이크 게임을 p5.js로 재구현합니다. 방향키로 뱀을 조종하여 먹이를 먹고 몸을 늘립니다.',
    files: ['snake.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #115: Snake Game Redux', url: 'https://thecodingtrain.com/challenges/115-snake-game-redux' },
    ],
    tags: ['snake', 'game', 'Hamiltonian', 'AI'],
    difficulty: 'intermediate',
    explanation: [
        'Snake 클래스는 머리 위치와 꼬리 배열로 몸체를 관리합니다. setDir(x, y)로 이동 방향을 설정하고, update()에서 머리를 이동시키며 꼬리의 마지막 요소를 제거합니다. grow()로 꼬리 제거를 건너뛰어 길이가 늘어납니다.',
        'rez(20px) 크기의 그리드에서 동작합니다. scale(rez)로 전체를 스케일링하여 1x1 크기의 rect()가 20x20 픽셀로 그려집니다. 먹이(food)는 그리드 내 랜덤 위치에 빨간 사각형으로 표시됩니다.',
        'eat()에서 머리와 먹이가 같은 위치이면 grow()를 호출하고 true를 반환합니다. endGame()에서 벽 충돌이나 자기 몸 충돌을 검사합니다. frameRate(5)로 고전 게임처럼 이산적으로 움직입니다.',
    ],
})
