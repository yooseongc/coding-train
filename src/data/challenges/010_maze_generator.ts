import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '010_maze_generator',
    number: 10,
    title: 'Maze Generator',
    categoryId: 'math-algorithms',
    description: '재귀적 백트래킹으로 미로를 생성합니다.',
    files: ['cell.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #10: Maze Generator', url: 'https://thecodingtrain.com/challenges/10-maze-generator' },
        { title: 'Wikipedia - Maze Generation Algorithm', url: 'https://en.wikipedia.org/wiki/Maze_generation_algorithm' },
        { title: 'Wikipedia - Depth-First Search', url: 'https://en.wikipedia.org/wiki/Depth-first_search' },
        { title: 'p5.js Reference', url: 'https://p5js.org/reference/' },
    ],
    tags: ['maze', 'algorithm', 'backtracking', 'grid'],
    difficulty: 'intermediate',
    explanation: [
        '미로 생성(Maze Generation)은 컴퓨터 과학에서 오랜 역사를 가진 주제로, 그래프 이론과 밀접한 관련이 있습니다. 이 구현에서는 재귀적 백트래킹(Randomized DFS) 알고리즘을 사용하며, 스택에 현재 셀을 넣고 방문하지 않은 이웃을 랜덤하게 선택하여 벽을 제거하면서 경로를 확장합니다. 이 방법은 1981년 논문에서 처음 소개되었으며, 가장 직관적인 미로 생성 알고리즘 중 하나입니다.',
        'Cell 클래스의 walls 배열[top, right, bottom, left]로 각 벽의 존재 여부를 관리합니다. removeWalls()에서 인접한 두 셀의 위치 차이를 계산하여 공유하는 벽을 양쪽 모두 제거합니다. 이는 그래프에서 두 노드 사이의 간선을 추가하는 것과 동일한 의미입니다.',
        'index(i, j) 함수로 2D 격자 좌표를 1D 배열 인덱스로 변환합니다. 경계를 벗어나면 -1을 반환하여 유효하지 않은 이웃을 자연스럽게 필터링합니다. 이 패턴은 2D 격자 기반 알고리즘에서 매우 흔하게 사용되는 기법입니다.',
        'draw()에서 매 프레임 한 스텝씩 실행되어 미로가 점진적으로 생성되는 과정을 시각화합니다. 스택이 비면 모든 셀을 방문한 것이므로 noLoop()으로 중단합니다. 생성된 미로는 스패닝 트리(Spanning Tree)의 일종으로, 모든 셀이 정확히 하나의 경로로 연결됩니다.',
        '미로 생성 알고리즘에는 이 외에도 크루스칼(Kruskal), 프림(Prim), 윌슨(Wilson) 등 다양한 방법이 있으며, 각각 다른 특성의 미로를 만듭니다. 재귀적 백트래킹은 긴 통로와 적은 분기가 특징인 미로를 생성하며, 게임 레벨 디자인이나 퍼즐 생성에 실제로 활용됩니다.',
    ],
})
