import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '107_sandpiles',
    number: 107,
    title: 'Sandpiles',
    categoryId: 'math-algorithms',
    description: '아벨 모래더미 모델(Abelian Sandpile Model)을 시뮬레이션합니다. 중앙에 쌓인 모래가 4개 이상이면 주변으로 붕괴되며 프랙탈 패턴을 만듭니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #107: Sandpiles', url: 'https://thecodingtrain.com/challenges/107-sandpiles' },
    ],
    tags: ['sandpile', 'cellular', 'automata', 'abelian'],
    difficulty: 'intermediate',
    explanation: [
        '아벨 모래더미 모델은 자기 조직 임계(self-organized criticality)의 대표적 예시입니다. 중앙에 10억 개의 모래알을 놓고, 한 칸에 4개 이상이면 상하좌우로 1개씩 분배하는 topple()을 반복합니다.',
        'topple()에서 이중 버퍼(sandpiles, nextpiles)로 동시 업데이트합니다. 4 이상인 셀에서 4를 빼고 상하좌우에 1씩 추가합니다. 경계 밖으로 나가는 모래는 소실됩니다. 매 프레임 100회 반복하여 빠르게 진행합니다.',
        'loadPixels()로 각 셀의 모래 수(0~3)에 따라 4가지 색상(노랑, 초록, 파랑, 보라)으로, 4 이상이면 빨강으로 표시합니다. 최종적으로 완벽한 대칭 프랙탈 패턴이 나타납니다.',
    ],
})
