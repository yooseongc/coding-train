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
    ],
    tags: ['game', 'snake', 'grid', 'input'],
    difficulty: 'beginner',
    explanation: [
        'Snake 클래스는 body 배열로 뱀의 몸을 관리합니다. update()에서 매 프레임마다 배열 앞의 요소를 shift()로 제거하고 뒤에 새 머리를 push()하여 이동 효과를 만듭니다.',
        'scale(rez)로 캔버스 전체를 격자 단위로 확대합니다. 이렇게 하면 rect(x, y, 1, 1)로 한 칸을 그릴 수 있어, 픽셀 좌표 대신 격자 좌표로 간단하게 작업할 수 있습니다.',
        'endGame()은 머리가 경계를 벗어나거나 자신의 몸과 겹치면 true를 반환합니다. eat()은 머리와 음식의 격자 좌표가 같으면 grow()를 호출해 몸 길이를 늘립니다.',
        'keyPressed()에서 방향키 입력을 받아 setDir()로 이동 방향(xdir, ydir)을 설정합니다. frameRate(5)로 게임 속도를 조절하여 턴 기반처럼 동작합니다.',
    ],
})
