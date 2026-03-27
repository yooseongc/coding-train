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
        { title: 'Snakes and ladders - Wikipedia', url: 'https://en.wikipedia.org/wiki/Snakes_and_ladders' },
        { title: 'Absorbing Markov chain - Wikipedia', url: 'https://en.wikipedia.org/wiki/Absorbing_Markov_chain' },
        { title: '뱀과 사다리 - Wikipedia (한국어)', url: 'https://ko.wikipedia.org/wiki/%EB%B1%80%EA%B3%BC_%EC%82%AC%EB%8B%A4%EB%A6%AC' },
    ],
    tags: ['board-game', 'snakes', 'ladders', 'random'],
    difficulty: 'beginner',
    explanation: [
        '뱀과 사다리(Snakes and Ladders)는 고대 인도에서 유래한 보드게임으로, 원래 이름은 Moksha Patam이었습니다. 선행(사다리)과 악행(뱀)의 도덕적 교훈을 담고 있었으며, 빅토리아 시대에 영국으로 전파되면서 현재의 형태로 발전했습니다. 순수하게 주사위 운에 의존하는 게임으로, 전략적 선택이 없는 점이 특징입니다.',
        'Tile 클래스는 보드의 각 칸을 나타내며, snadder 속성이 양수이면 사다리(위로 이동), 음수이면 뱀(아래로 이동)입니다. 지그재그(boustrophedon) 패턴으로 타일을 배치하여 실제 보드게임처럼 배열합니다. 이 지그재그 패턴은 1차원 인덱스를 2차원 좌표로 변환할 때 방향 전환 로직이 필요합니다.',
        'Player 클래스는 주사위를 굴려(rollDie) 이동하고, 현재 칸에 뱀이나 사다리가 있으면(isSnadder) moveSnadder()로 추가 이동합니다. 상태 머신(State Machine) 패턴으로 ROLL, MOVE, SNADDER 세 상태를 순환하며 턴 진행을 제어합니다. 유한 상태 머신(FSM)은 게임 로직 관리의 핵심 디자인 패턴입니다.',
        '플레이어가 마지막 타일에 도달하면 게임을 리셋하고 다시 시작합니다. rolls 배열에 각 게임의 주사위 횟수를 기록하고, 평균 횟수를 계산하여 표시합니다. 수학적으로 이 게임은 흡수 마르코프 체인(Absorbing Markov Chain)으로 모델링할 수 있으며, 마지막 칸이 흡수 상태(absorbing state)에 해당합니다.',
        '표준 10x10 보드에서 게임을 완료하는 데 필요한 평균 주사위 횟수는 약 36회로 알려져 있습니다. 이는 흡수 마르코프 체인의 기본 행렬(fundamental matrix)을 이용해 정확히 계산할 수 있습니다. 시뮬레이션을 반복 실행하여 이 이론적 값에 수렴하는 과정을 관찰할 수 있습니다.',
        '이 프로젝트는 몬테카를로 시뮬레이션(Monte Carlo Simulation)의 좋은 입문 예시입니다. 확률적 과정을 대량으로 반복 실행하여 통계적 특성(평균, 분산)을 추정하는 방법론은 금융 공학, 물리학, 기계 학습 등 다양한 분야에서 핵심적으로 활용됩니다.',
    ],
})
