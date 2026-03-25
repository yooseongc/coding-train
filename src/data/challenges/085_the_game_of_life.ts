import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '085_the_game_of_life',
    number: 85,
    title: 'The Game of Life',
    categoryId: 'math-algorithms',
    description: '콘웨이의 생명 게임(Game of Life)을 구현합니다. 세포 자동자(Cellular Automata)의 단순한 규칙으로 복잡한 패턴이 창발합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #85: The Game of Life', url: 'https://thecodingtrain.com/challenges/85-the-game-of-life' },
    ],
    tags: ['game-of-life', 'cellular', 'automata', 'grid'],
    difficulty: 'intermediate',
    explanation: [
        '콘웨이의 생명 게임은 세 가지 규칙으로 작동합니다: (1) 죽은 셀의 이웃 중 정확히 3개가 살아있으면 탄생, (2) 살아있는 셀의 이웃이 2~3개면 생존, (3) 그 외에는 사망(과밀 또는 고독).',
        'countNeighbors()는 8방향 이웃의 생존 셀 수를 세며, 토러스 구조로 경계를 연결합니다. (x + i + cols) % cols로 화면 가장자리가 반대편과 이어져 무한 평면처럼 동작합니다.',
        'resolution(10px) 크기의 격자에 랜덤으로 초기 상태를 배치합니다. 매 프레임(frameRate(10)) next 배열에 새 세대를 계산한 뒤 grid에 덮어씁니다. 동시 업데이트를 위해 현재/다음 세대를 별도 배열로 관리합니다.',
        '간단한 규칙이지만 정물(still life), 진동자(oscillator), 우주선(spaceship) 등 다양한 패턴이 나타나며, 범용 튜링 기계와 동등한 계산 능력을 가진 것으로 증명되었습니다.',
    ],
})
