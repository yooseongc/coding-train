import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '051_astar_path_finding',
    number: 51,
    title: 'A* Path Finding',
    categoryId: 'math-algorithms',
    description: 'A* 탐색 알고리즘으로 그리드 맵에서 장애물을 피해 최단 경로를 찾습니다.',
    files: ['spot.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #51: A* Path Finding', url: 'https://thecodingtrain.com/challenges/51-a-star-path-finding' },
    ],
    tags: ['A*', 'pathfinding', 'heuristic', 'grid'],
    difficulty: 'intermediate',
    explanation: [
        'A* 알고리즘은 f(n)=g(n)+h(n)을 최소화하는 best-first 탐색입니다. g(n)은 시작점까지의 실제 비용, h(n)은 목표까지의 휴리스틱(유클리드 거리) 추정치입니다. openSet에서 f값이 가장 낮은 노드를 선택합니다.',
        'Spot 클래스는 그리드 셀로 i,j 좌표, f/g/h 값, 이웃 목록, 벽 여부(40% 확률)를 가집니다. addNeighbors()에서 상하좌우 및 대각선 8방향의 이웃을 연결합니다.',
        '현재 노드의 이웃을 검사할 때 closedSet에 없고 벽이 아닌 이웃만 처리합니다. tempG가 기존 g보다 작으면 더 나은 경로이므로 h를 재계산하고 prev를 갱신합니다.',
        'openSet은 녹색, closedSet은 빨간색으로 탐색 영역을 시각화합니다. 현재 노드에서 prev 포인터를 역추적하여 분홍색 경로를 beginShape()/vertex()로 그립니다.',
    ],
})
