import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '098_quadtree',
    number: 98,
    title: 'Quadtree',
    categoryId: 'math-algorithms',
    description: '쿼드트리 공간 분할 자료구조를 구현합니다. 점의 삽입, 영역의 재귀적 분할, 범위 쿼리를 시각화합니다.',
    files: ['quadtree.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #98: Quadtree', url: 'https://thecodingtrain.com/challenges/98-quadtree' },
    ],
    tags: ['quadtree', 'spatial', 'partition', 'collision'],
    difficulty: 'intermediate',
    explanation: [
        'QuadTree는 2D 공간을 재귀적으로 4등분하는 자료구조입니다. 각 노드는 용량(capacity=4)만큼의 점을 저장하고, 초과하면 subdivide()로 NE/NW/SE/SW 4개의 자식으로 분할합니다.',
        'insert()는 점이 현재 영역에 속하면 저장하고, 용량 초과시 분할 후 자식에 재귀 삽입합니다. query()는 주어진 범위(Rectangle)와 겹치는 영역의 점만 반환하여 O(n)을 O(log n)에 가깝게 줄입니다.',
        'randomGaussian()으로 300개의 점을 중앙에 가우시안 분포로 생성합니다. 마우스 위치에 75x75 범위의 녹색 사각형을 표시하고, query()로 그 안의 점만 강조하여 쿼드트리의 범위 탐색을 실시간으로 보여줍니다.',
    ],
})
