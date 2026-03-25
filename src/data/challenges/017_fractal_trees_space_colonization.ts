import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '017_fractal_trees_space_colonization',
    number: 17,
    title: 'Fractal Trees Space Colonization',
    categoryId: 'fractals',
    description: '공간 식민화 알고리즘으로 자연스러운 트리를 생성합니다.',
    files: ['branch.js', 'leaf.js', 'tree.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #17: Fractal Trees Space Colonization', url: 'https://thecodingtrain.com/challenges/17-fractal-trees-space-colonization' },
    ],
    tags: ['fractal', 'tree', 'space-colonization', 'algorithm'],
    difficulty: 'advanced',
    explanation: [
        'Space Colonization Algorithm은 공간에 흩뿌린 attraction point(Leaf)를 향해 나무가 성장하는 알고리즘입니다. 각 잎이 가장 가까운 가지를 찾고, 그 방향으로 가지가 자랍니다.',
        '핵심 로직은 grow() 메서드입니다. 각 Leaf에서 가장 가까운 Branch로의 방향 벡터를 구하고, 해당 Branch에 영향 벡터를 누적합니다. 여러 잎의 영향을 평균내어 최종 성장 방향을 결정합니다.',
        'min_dist(포함 거리)와 max_dist(영향 거리) 두 임계값이 중요합니다. 가지가 잎에 충분히 가까워지면(min_dist) 잎을 제거하고, 너무 멀면(max_dist 초과) 영향을 주지 않습니다.',
        'Branch는 parent 참조로 연결 리스트 구조를 형성합니다. show()에서 자신과 부모를 line()으로 연결하여 나무의 가지를 그립니다.',
    ],
})
