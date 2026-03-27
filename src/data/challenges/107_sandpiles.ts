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
        { title: 'Wikipedia - Abelian sandpile model', url: 'https://en.wikipedia.org/wiki/Abelian_sandpile_model' },
        { title: 'Wikipedia - Self-organized criticality', url: 'https://en.wikipedia.org/wiki/Self-organized_criticality' },
        { title: 'Numberphile - Sandpiles (YouTube)', url: 'https://youtu.be/1MtEUErz7Gg' },
    ],
    tags: ['sandpile', 'cellular', 'automata', 'abelian'],
    difficulty: 'intermediate',
    explanation: [
        '아벨 모래더미 모델(Abelian Sandpile Model)은 1987년 바크, 탕, 비젠펠트(Bak, Tang, Wiesenfeld)가 자기 조직 임계(Self-Organized Criticality, SOC) 이론의 예시로 제안한 수학적 모델입니다. SOC는 외부 조율 없이 시스템이 스스로 임계 상태에 도달하는 현상으로, 지진, 산불, 금융 시장 붕괴 등의 멱법칙(Power Law) 분포를 설명합니다.',
        '규칙은 극도로 단순합니다. 중앙에 10억 개의 모래알을 놓고, 한 칸에 4개 이상이면 상하좌우로 1개씩 분배하는 topple()을 반복합니다. 이 모델이 아벨(Abelian)이라 불리는 이유는 모래알을 추가하는 순서에 관계없이 최종 결과가 동일하기 때문입니다. 이는 교환법칙이 성립하는 아벨 군(Abelian Group)의 성질과 일치합니다.',
        'topple()에서 이중 버퍼(sandpiles, nextpiles)로 동시 업데이트합니다. 4 이상인 셀에서 4를 빼고 상하좌우에 1씩 추가합니다. 경계 밖으로 나가는 모래는 소실됩니다. 매 프레임 100회 반복하여 빠르게 진행하며, 중앙에서 바깥으로 점차 확산되는 과정을 관찰할 수 있습니다.',
        '각 셀의 모래 수(0~3)에 따라 4가지 색상(노랑, 초록, 파랑, 보라)으로 표시하면 놀라운 프랙탈(Fractal) 패턴이 드러납니다. 이 패턴은 4방향 대칭성을 가지며, 확대하면 자기 유사(Self-Similar) 구조가 반복됩니다. 이는 단순한 국소 규칙에서 전역적 질서가 창발하는 대표적인 예입니다.',
        '자기 조직 임계 이론은 물리학, 생물학, 사회과학 등 다양한 분야에 영향을 미쳤습니다. 지진의 구텐베르크-리히터 법칙(Gutenberg-Richter Law), 도시 규모 분포의 지프 법칙(Zipf Law), 신경망의 임계 상태 등이 SOC로 설명됩니다.',
        '모래더미 모델은 조합론, 대수 기하학, 그래프 이론과도 깊은 연관이 있습니다. 그래프 위의 모래더미(Chip-firing game)는 열대 기하학(Tropical Geometry)과 연결되며, 수학적으로 매우 풍부한 구조를 가진 연구 대상입니다.',
    ],
})
