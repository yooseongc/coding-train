import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '152_rdp_line_simplification_algorithm',
    number: 152,
    title: 'RDP Line Simplification Algorithm',
    categoryId: 'math-algorithms',
    description: 'Ramer-Douglas-Peucker 알고리즘으로 곡선의 점 개수를 줄여 단순화합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #152: RDP Line Simplification Algorithm', url: 'https://thecodingtrain.com/challenges/152-rdp-algorithm' },
    ],
    tags: ['RDP', 'simplification', 'line', 'Douglas-Peucker'],
    difficulty: 'intermediate',
    explanation: [
        'RDP(Ramer-Douglas-Peucker) 알고리즘은 곡선을 구성하는 점의 수를 줄이면서 원래 형태를 최대한 보존하는 라인 단순화 알고리즘입니다. 지도 제작의 일반화에 널리 사용됩니다.',
        'findFurthest()가 시작점-끝점 선분에서 가장 먼 점을 찾습니다. scalarProjection()으로 점을 선분에 투영하고, 투영점과의 거리가 epsilon보다 크면 그 점을 유지하고 양쪽을 재귀적으로 분할합니다.',
        'exp(-x)*cos(TWO_PI*x) 감쇠 코사인 곡선을 600개 점으로 생성합니다. epsilon이 매 프레임 0.01씩 증가하며 단순화 정도가 강해집니다. 100을 넘으면 0으로 리셋됩니다.',
        '마젠타색(원본)과 흰색(단순화)으로 두 곡선을 겹쳐 그립니다. 좌상단에 현재 epsilon값과 남은 점 개수(n)를 표시하여, 허용 오차와 단순화 효과의 관계를 실시간으로 관찰합니다.',
    ],
})
