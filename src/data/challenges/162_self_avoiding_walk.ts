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
    ],
    tags: ['self-avoiding', 'walk', 'grid', 'backtracking'],
    difficulty: 'intermediate',
    explanation: [
        '자기 회피 보행(SAW)은 격자 위에서 이미 방문한 셀을 다시 방문하지 않는 경로입니다. Part1은 단순 랜덤 워크로, 유효한 이웃 중 랜덤 선택하다 막히면 멈춥니다.',
        'Part2는 백트래킹을 추가합니다. Spot 클래스로 격자를 관리하고, nextSpot()이 미방문 이웃을 반환합니다. 막히면 path.pop()으로 한 칸 돌아가고 visited를 해제하여 다른 경로를 시도합니다.',
        'Part3은 3D 자기 회피 보행입니다. WEBGL 모드에서 Spot3D 클래스로 6방향(x,y,z 양음) 이동합니다. rotateY()로 자동 회전하고, HSB 모드에서 인덱스에 따른 무지개 색상으로 경로를 그립니다.',
        'Part4는 bezierVertex()로 경로를 부드러운 곡선으로 연결합니다. Part5는 재귀 백트래킹으로 전체 격자를 채우는 해밀턴 경로를 탐색하고, Part6은 단순 랜덤 워크(자기 회피 없음)와 비교합니다.',
    ],
})
