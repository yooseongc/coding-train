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
        { title: "Conway's Game of Life - Wikipedia", url: 'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life' },
        { title: 'Cellular automaton - Wikipedia', url: 'https://en.wikipedia.org/wiki/Cellular_automaton' },
        { title: "Martin Gardner's original 1970 article", url: 'http://www.ibiblio.org/lifepatterns/october1970.html' },
    ],
    tags: ['game-of-life', 'cellular', 'automata', 'grid'],
    difficulty: 'intermediate',
    explanation: [
        '콘웨이의 생명 게임(Conway\'s Game of Life)은 영국 수학자 존 호턴 콘웨이(John Horton Conway)가 1970년에 고안한 세포 자동자(Cellular Automaton)입니다. 마틴 가드너(Martin Gardner)가 Scientific American의 Mathematical Games 칼럼을 통해 소개하면서 대중에게 널리 알려졌으며, 단순한 규칙에서 복잡한 패턴이 창발하는 현상으로 큰 주목을 받았습니다.',
        '콘웨이의 생명 게임은 세 가지 규칙으로 작동합니다: (1) 죽은 셀의 이웃 중 정확히 3개가 살아있으면 탄생, (2) 살아있는 셀의 이웃이 2~3개면 생존, (3) 그 외에는 사망(과밀 또는 고독). 콘웨이는 폭발적 성장이 없고, 예측 불가능한 혼돈적 패턴이 나타나며, 규칙이 최대한 단순할 것이라는 조건으로 이 규칙을 설계했습니다.',
        'countNeighbors()는 8방향 이웃(Moore neighborhood)의 생존 셀 수를 세며, 토러스(Torus) 구조로 경계를 연결합니다. (x + i + cols) % cols로 화면 가장자리가 반대편과 이어져 무한 평면처럼 동작합니다. 이 주기적 경계 조건(Periodic Boundary Condition)은 물리 시뮬레이션에서도 유한한 계산 영역에서 무한 시스템을 근사하는 데 사용됩니다.',
        'resolution(10px) 크기의 격자에 랜덤으로 초기 상태를 배치합니다. 매 프레임(frameRate(10)) next 배열에 새 세대를 계산한 뒤 grid에 덮어씁니다. 동시 업데이트(synchronous update)를 위해 현재/다음 세대를 별도 배열로 관리하는 더블 버퍼링(Double Buffering) 기법을 사용합니다.',
        '간단한 규칙이지만 정물(still life, 예: block, beehive), 진동자(oscillator, 예: blinker, pulsar), 우주선(spaceship, 예: glider) 등 다양한 패턴이 나타납니다. 특히 글라이더 건(Glider Gun)의 발견은 생명 게임이 범용 튜링 기계와 동등한 계산 능력을 갖추었음을 증명하는 핵심이었습니다.',
        '생명 게임은 복잡계 과학(Complexity Science), 인공 생명(Artificial Life), 자기 조직화(Self-Organization) 연구의 기초입니다. 현실에서도 도시 확산 모델링, 산불 전파 시뮬레이션, 결정 성장 패턴 등에 세포 자동자 기반 모델이 활용됩니다. 폰 노이만(von Neumann)의 자기 복제 오토마타 이론에서 영감을 받아 탄생한 이 게임은 단순한 규칙이 어떻게 생명과 유사한 행동을 만들 수 있는지를 보여주는 대표적인 예시입니다.',
    ],
})
