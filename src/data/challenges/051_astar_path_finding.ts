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
        { title: 'Wikipedia - A* Search Algorithm', url: 'https://en.wikipedia.org/wiki/A*_search_algorithm' },
        { title: 'Red Blob Games - A* Introduction', url: 'https://www.redblobgames.com/pathfinding/a-star/introduction.html' },
        { title: 'Wikipedia - Admissible Heuristic', url: 'https://en.wikipedia.org/wiki/Admissible_heuristic' },
    ],
    tags: ['A*', 'pathfinding', 'heuristic', 'grid'],
    difficulty: 'intermediate',
    explanation: [
        'A* 알고리즘은 1968년 Peter Hart, Nils Nilsson, Bertram Raphael이 개발한 최적 경로 탐색 알고리즘입니다. 비용 함수 f(n)=g(n)+h(n)을 최소화하는 best-first 탐색으로, g(n)은 시작점에서 현재 노드까지의 실제 비용, h(n)은 현재 노드에서 목표까지의 휴리스틱 추정치입니다. 다익스트라(Dijkstra) 알고리즘에 휴리스틱을 추가하여 탐색 효율을 크게 향상시킨 것이 핵심입니다.',
        'Spot 클래스는 그리드 셀로 i,j 좌표, f/g/h 값, 이웃 목록, 벽 여부(40% 확률)를 가집니다. addNeighbors()에서 상하좌우 및 대각선 8방향의 이웃을 연결합니다. 이 구현에서는 유클리드 거리를 휴리스틱으로 사용하며, 이는 허용 가능한 휴리스틱(admissible heuristic)이므로 최적 해를 보장합니다.',
        '현재 노드의 이웃을 검사할 때 closedSet에 없고 벽이 아닌 이웃만 처리합니다. tempG가 기존 g보다 작으면 더 나은 경로이므로 h를 재계산하고 prev를 갱신합니다. openSet이 비어 있으면 경로가 존재하지 않는 것이며, 목표에 도달하면 prev 체인을 역추적하여 최적 경로를 복원합니다.',
        'openSet은 녹색, closedSet은 빨간색으로 탐색 영역을 시각화합니다. 현재 노드에서 prev 포인터를 역추적하여 분홍색 경로를 그립니다. 이 시각화를 통해 A*가 목표 방향으로 집중적으로 탐색하는 특성을 직관적으로 확인할 수 있습니다.',
        'A* 알고리즘은 게임 AI의 경로 탐색, 내비게이션 시스템의 최단 경로 계산, 로봇 공학의 경로 계획 등에 광범위하게 사용됩니다. 휴리스틱 함수의 선택에 따라 성능이 크게 달라지며, 맨해튼 거리, 유클리드 거리, 체비셰프 거리 등 다양한 휴리스틱이 상황에 따라 활용됩니다.',
    ],
})
