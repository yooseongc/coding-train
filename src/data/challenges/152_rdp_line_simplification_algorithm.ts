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
        { title: 'Wikipedia - Ramer-Douglas-Peucker algorithm', url: 'https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm' },
        { title: 'Wikipedia - Cartographic generalization', url: 'https://en.wikipedia.org/wiki/Cartographic_generalization' },
    ],
    tags: ['RDP', 'simplification', 'line', 'Douglas-Peucker'],
    difficulty: 'intermediate',
    explanation: [
        'Ramer-Douglas-Peucker(RDP) 알고리즘은 1972년 Urs Ramer, 1973년 David Douglas와 Thomas Peucker가 독립적으로 발표한 라인 단순화 알고리즘입니다. 곡선을 구성하는 점의 수를 줄이면서 원래 형태를 최대한 보존하며, 지도 제작의 일반화(cartographic generalization)에서 가장 널리 사용되는 알고리즘 중 하나입니다.',
        '알고리즘은 분할 정복(divide and conquer) 전략을 사용합니다. 시작점과 끝점을 잇는 선분에서 가장 먼 점을 찾고, 그 거리가 허용 오차(epsilon)보다 크면 해당 점을 유지하고 양쪽 구간에 대해 재귀적으로 같은 과정을 반복합니다. 허용 오차 이내의 점들은 제거되어 단순화된 곡선이 생성됩니다.',
        'findFurthest()가 시작점-끝점 선분에서 가장 먼 점을 찾으며, scalarProjection()으로 점을 선분에 투영하고 투영점까지의 수직 거리를 계산합니다. 이 거리 측정은 하우스도르프 거리(Hausdorff distance)를 기반으로 하여, 원본 곡선과 단순화된 곡선 사이의 최대 편차를 제어합니다.',
        'exp(-x)*cos(TWO_PI*x) 감쇠 코사인 곡선을 600개 점으로 생성합니다. epsilon이 매 프레임 0.01씩 증가하며 단순화 정도가 강해집니다. 마젠타색(원본)과 흰색(단순화)으로 두 곡선을 겹쳐 그려, 허용 오차와 단순화 효과의 관계를 실시간으로 관찰합니다.',
        'RDP 알고리즘은 지도학 외에도 GPS 경로 압축, 벡터 그래픽 최적화, 필기 인식의 전처리, 로봇공학의 경로 단순화 등 다양한 분야에서 활용됩니다. 시간 복잡도는 최선 O(n log n), 최악 O(n^2)이며, 실무에서는 대부분 효율적으로 동작합니다.',
    ],
})
