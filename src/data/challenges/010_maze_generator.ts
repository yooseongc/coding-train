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
    ],
    tags: ['maze', 'algorithm', 'backtracking', 'grid'],
    difficulty: 'intermediate',
    explanation: [
        '재귀적 백트래킹(Randomized DFS) 알고리즘으로 미로를 생성합니다. 스택에 현재 셀을 넣고, 방문하지 않은 이웃을 랜덤하게 선택하여 벽을 제거하며 경로를 확장합니다.',
        'Cell 클래스의 walls 배열[top, right, bottom, left]로 각 벽의 존재 여부를 관리합니다. removeWalls()에서 인접한 두 셀의 위치 차이를 계산하여 공유하는 벽을 양쪽 모두 제거합니다.',
        'index(i, j) 함수로 2D 격자 좌표를 1D 배열 인덱스로 변환합니다. 경계를 벗어나면 -1을 반환하여 유효하지 않은 이웃을 자연스럽게 필터링합니다.',
        'draw()에서 매 프레임 한 스텝씩 실행되어 미로가 점진적으로 생성되는 과정을 시각화합니다. 스택이 비면 모든 셀을 방문한 것이므로 noLoop()으로 중단합니다.',
    ],
})
