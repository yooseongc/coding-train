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
        { title: 'Wikipedia - Breadth-First Search', url: 'https://en.wikipedia.org/wiki/Breadth-first_search' },
        { title: 'Wikipedia - Six Degrees of Kevin Bacon', url: 'https://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon' },
        { title: 'NOC Intelligence Learning - BFS OOP', url: 'https://github.com/nature-of-code/NOC-S17-2-Intelligence-Learning/tree/master/week1-graphs/02_bfs_oop_fdg' },
    ],
    tags: ['BFS', 'graph', 'search', 'kevin-bacon'],
    difficulty: 'intermediate',
    explanation: [
        '너비 우선 탐색(Breadth-First Search, BFS)은 그래프의 루트 노드에서 시작하여 같은 깊이의 모든 이웃 노드를 먼저 탐색한 후 다음 깊이로 넘어가는 알고리즘입니다. 1945년 Konrad Zuse가 처음 제안했으며, 1959년 Edward Moore가 미로에서 최단 경로를 찾는 알고리즘으로 재발견했습니다.',
        '이 구현은 "케빈 베이컨의 6단계 법칙(Six Degrees of Kevin Bacon)"을 시각화합니다. kevinbacon.json에서 영화-배우 관계를 Graph로 구성하고, BFS로 임의의 배우에서 Kevin Bacon까지의 최단 경로를 탐색합니다. 이는 소셜 네트워크의 "좁은 세상 현상(Small World Phenomenon)"을 보여주는 유명한 예시입니다.',
        'BFS는 큐(queue) 자료구조를 사용하여 시작 노드에서 가까운 노드부터 탐색합니다. searched 플래그로 방문 여부를 체크하고 parent 포인터로 경로를 역추적합니다. BFS는 가중치 없는 그래프에서 최단 경로를 보장하며, 시간 복잡도는 O(V+E)입니다.',
        '목표 노드를 찾으면 parent 체인을 따라 역추적하여 "배우 --> 영화 --> 배우 --> ..." 형태의 경로를 출력합니다. Graph의 simulate()과 show()로 Force-Directed 레이아웃을 시각화하며, mouseDragged와 mouseWheel로 그래프를 탐색할 수 있습니다.',
        'BFS는 소셜 네트워크 분석, 웹 크롤러, GPS 내비게이션의 최단 경로 탐색, 네트워크 브로드캐스트 등에 활용됩니다. 깊이 우선 탐색(DFS)과 비교하면 더 많은 메모리를 사용하지만, 최단 경로를 보장하는 장점이 있습니다.',
    ],
})
