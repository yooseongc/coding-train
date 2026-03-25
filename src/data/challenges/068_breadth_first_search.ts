import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '068_breadth_first_search',
    number: 68,
    title: 'Breadth First Search',
    categoryId: 'math-algorithms',
    description: 'BFS 알고리즘으로 영화-배우 그래프에서 Kevin Bacon까지의 최단 경로를 탐색합니다.',
    files: ['graph.js', 'node.js', 'sketch.js', 'kevinbacon.json'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #68: Breadth First Search', url: 'https://thecodingtrain.com/challenges/68-breadth-first-search' },
    ],
    tags: ['BFS', 'graph', 'search', 'kevin-bacon'],
    difficulty: 'intermediate',
    explanation: [
        'kevinbacon.json에서 영화-배우 관계를 Graph로 구성합니다. 각 영화와 배우를 Node로 만들고, addEdge()로 영화-배우 간 양방향 연결을 생성합니다. 드롭다운에서 시작 배우를 선택합니다.',
        'BFS는 큐(queue)를 사용하여 시작 노드에서 가까운 노드부터 탐색합니다. searched 플래그로 방문 여부를 체크하고, parent 포인터로 경로를 역추적할 수 있도록 합니다.',
        '목표 노드(Kevin Bacon)를 찾으면 parent 체인을 따라 시작점까지 역추적하여 경로를 구성합니다. "배우 --> 영화 --> 배우 --> ..." 형태의 경로 문자열을 createP()로 출력합니다.',
        'Graph의 simulate()과 show()로 Force-Directed 레이아웃을 시각화합니다. mouseDragged로 패닝, mouseWheel로 줌을 지원하여 그래프를 탐색할 수 있습니다.',
    ],
})
