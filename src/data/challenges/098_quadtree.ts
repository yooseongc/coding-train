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
        { title: 'Wikipedia - Quadtree', url: 'https://en.wikipedia.org/wiki/Quadtree' },
        { title: 'Wikipedia - Spatial index', url: 'https://en.wikipedia.org/wiki/Spatial_database#Spatial_index' },
        { title: 'Wikipedia - Collision detection', url: 'https://en.wikipedia.org/wiki/Collision_detection' },
    ],
    tags: ['quadtree', 'spatial', 'partition', 'collision'],
    difficulty: 'intermediate',
    explanation: [
        '쿼드트리(Quadtree)는 1974년 라파엘 핑켈(Raphael Finkel)과 존 벤틀리(Jon Bentley)가 제안한 트리 자료구조로, 2차원 공간을 재귀적으로 4개의 사분면으로 분할합니다. 3차원 공간으로 확장하면 옥트리(Octree)가 되며, GIS, 게임 엔진, 이미지 압축 등에 핵심적으로 사용됩니다.',
        'QuadTree의 각 노드는 용량(capacity=4)만큼의 점을 저장하고, 초과하면 subdivide()로 NE/NW/SE/SW 4개의 자식으로 분할합니다. 이 재귀적 분할 구조 덕분에 밀집 영역은 세밀하게, 희소 영역은 큰 단위로 관리하는 적응형(Adaptive) 공간 분할이 가능합니다.',
        'insert()는 점이 현재 영역에 속하면 저장하고, 용량 초과시 분할 후 자식에 재귀 삽입합니다. query()는 주어진 범위(Rectangle)와 겹치는 영역의 점만 반환합니다. 전체 탐색이 O(n)인 반면 쿼드트리는 평균적으로 O(log n)에 가까운 성능을 제공합니다.',
        '충돌 감지(Collision Detection)에서 쿼드트리는 핵심적인 역할을 합니다. n개 객체의 전수 비교는 O(n^2)이지만, 쿼드트리로 공간을 분할하면 인접한 객체끼리만 비교하여 크게 성능을 개선합니다. 게임 물리 엔진, 파티클 시스템 등에서 필수적인 최적화 기법입니다.',
        'randomGaussian()으로 300개의 점을 중앙에 가우시안 분포로 생성합니다. 마우스 위치에 75x75 범위의 녹색 사각형을 표시하고, query()로 그 안의 점만 강조하여 쿼드트리의 범위 탐색을 실시간으로 보여줍니다.',
        '실무에서는 R-tree, KD-tree 등 다른 공간 인덱싱 구조도 사용됩니다. R-tree는 데이터베이스의 공간 인덱스(PostGIS 등)에, KD-tree는 최근접 이웃 검색에 특화되어 있습니다. 쿼드트리는 구현이 비교적 단순하면서도 범용적이어서 학습용으로 적합합니다.',
    ],
})
