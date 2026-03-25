import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '091_snakes_and_ladders',
    number: 91,
    title: 'Snakes and Ladders',
    categoryId: 'games',
    description: '뱀과 사다리 보드게임을 시뮬레이션합니다. 주사위를 굴려 이동하며, 뱀을 만나면 내려가고 사다리를 만나면 올라갑니다.',
    files: ['player.js', 'tile.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #91: Snakes and Ladders', url: 'https://thecodingtrain.com/challenges/91-snakes-and-ladders' },
    ],
    tags: ['board-game', 'snakes', 'ladders', 'random'],
    difficulty: 'beginner',
    explanation: [
        'Tile 클래스는 보드의 각 칸을 나타내며, snadder 속성이 양수이면 사다리(위로 이동), 음수이면 뱀(아래로 이동)입니다. 지그재그 패턴으로 타일을 배치하여 실제 보드게임처럼 배열합니다.',
        'Player 클래스는 주사위를 굴려(rollDie) 이동하고, 현재 칸에 뱀이나 사다리가 있으면(isSnadder) moveSnadder()로 추가 이동합니다. 상태 머신(ROLL, MOVE, SNADDER)으로 턴 진행을 제어합니다.',
        '플레이어가 마지막 타일에 도달하면 게임을 리셋하고 다시 시작합니다. rolls 배열에 각 게임의 주사위 횟수를 기록하고, 평균 횟수를 계산하여 표시합니다. 이는 흡수 마르코프 체인으로 분석할 수 있습니다.',
        'setup()에서 랜덤으로 뱀 3개와 사다리 3개를 배치합니다. frameRate(5)로 느리게 진행하여 시뮬레이션 과정을 관찰할 수 있습니다.',
    ],
})
