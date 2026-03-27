import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '162_self_avoiding_walk',
    number: 162,
    title: 'Self-Avoiding Walk',
    categoryId: 'math-algorithms',
    description: '격자 위에서 방문한 셀을 다시 방문하지 않는 자기 회피 보행을 다양한 방법으로 구현합니다.',
    files: ['spot.js', 'sketch.js'],
    libraries: [],
    versions: [
        { label: 'part1', files: [{ name: 'sketch.js', content: '' }] },
        { label: 'part2', files: [{ name: 'spot.js', content: '' }, { name: 'sketch.js', content: '' }] },
        { label: 'part3', files: [{ name: 'spot.js', content: '' }, { name: 'sketch.js', content: '' }] },
        { label: 'part4', files: [{ name: 'spot.js', content: '' }, { name: 'sketch.js', content: '' }] },
        { label: 'part5', files: [{ name: 'sketch.js', content: '' }] },
        { label: 'part6', files: [{ name: 'sketch.js', content: '' }] },
    ],
    references: [
        { title: 'Coding Challenge #162: Self-Avoiding Walk', url: 'https://thecodingtrain.com/challenges/162-self-avoiding-walk' },
        { title: 'Wikipedia - Self-avoiding walk', url: 'https://en.wikipedia.org/wiki/Self-avoiding_walk' },
        { title: 'Wikipedia - Hamiltonian path problem', url: 'https://en.wikipedia.org/wiki/Hamiltonian_path_problem' },
        { title: 'Wikipedia - Random walk', url: 'https://en.wikipedia.org/wiki/Random_walk' },
    ],
    tags: ['self-avoiding', 'walk', 'grid', 'backtracking'],
    difficulty: 'intermediate',
    explanation: [
        '자기 회피 보행(Self-Avoiding Walk, SAW)은 격자 위에서 이미 방문한 셀을 다시 방문하지 않는 경로로, 통계 역학과 고분자 물리학(polymer physics)에서 중요한 수학적 모델입니다. 고분자 사슬(polymer chain)이 자기 자신과 교차할 수 없는 물리적 제약을 모델링하는 데 사용되며, SAW의 정확한 해 개수를 구하는 것은 조합론의 난제 중 하나입니다.',
        'Part1은 단순 랜덤 워크 방식으로, 미방문 이웃 중 랜덤으로 하나를 선택하다 더 이상 갈 곳이 없으면(stuck) 멈춥니다. Part2는 백트래킹(backtracking)을 추가하여, 막히면 path.pop()으로 한 칸 돌아가고 visited를 해제하여 다른 경로를 시도합니다.',
        'Part3은 WEBGL 모드에서 3D 자기 회피 보행을 구현합니다. 6방향(x, y, z 양음)으로 이동하며, rotateY()로 자동 회전하여 3차원 경로를 다각도에서 관찰합니다. HSB 컬러 모드로 인덱스에 따른 무지개 색상을 부여하여 경로의 진행 순서를 시각적으로 표현합니다.',
        'Part4는 bezierVertex()로 경로를 부드러운 곡선으로 연결하여 미적 효과를 더합니다. Part5는 재귀 백트래킹으로 전체 격자의 모든 셀을 방문하는 해밀턴 경로(Hamiltonian path)를 탐색합니다. 해밀턴 경로 문제는 NP-완전(NP-complete) 문제로, 격자 크기가 커지면 탐색 시간이 기하급수적으로 증가합니다.',
        'Part6은 자기 회피 없는 단순 랜덤 워크(random walk)와 비교하여, 자기 회피 조건이 경로의 형태와 확산 특성에 미치는 영향을 관찰합니다. 단순 랜덤 워크의 확산 거리는 sqrt(N)에 비례하지만, SAW는 약 N^0.588(2D) 비율로 더 크게 확산되는 것이 알려져 있습니다.',
    ],
})
