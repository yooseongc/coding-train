import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '017_fractal_trees_space_colonization',
    number: 17,
    title: 'Fractal Trees Space Colonization',
    categoryId: 'fractals',
    description: '공간 식민화 알고리즘으로 자연스러운 트리를 생성합니다.',
    files: ['branch.js', 'leaf.js', 'tree.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #17: Fractal Trees Space Colonization', url: 'https://thecodingtrain.com/challenges/17-fractal-trees-space-colonization' },
        { title: 'Modeling Trees with a Space Colonization Algorithm (Runions et al.)', url: 'http://algorithmicbotany.org/papers/colonization.egwnp2007.html' },
        { title: 'Algorithmic Botany - University of Calgary', url: 'http://algorithmicbotany.org/' },
    ],
    tags: ['fractal', 'tree', 'space-colonization', 'algorithm'],
    difficulty: 'advanced',
    explanation: [
        'Space Colonization Algorithm은 2007년 캘거리 대학의 Runions, Lane, Prusinkiewicz가 발표한 나무 모델링 알고리즘입니다. 공간에 흩뿌린 attraction point(Leaf)를 향해 나무가 유기적으로 성장하며, 기존의 재귀적 프랙탈보다 훨씬 자연스러운 나무 형태를 생성합니다.',
        '핵심 로직은 grow() 메서드입니다. 각 Leaf에서 가장 가까운 Branch로의 방향 벡터를 구하고, 해당 Branch에 영향 벡터를 누적합니다. 여러 잎의 영향을 정규화하여 평균내면 최종 성장 방향이 결정됩니다.',
        'min_dist(포함 거리, 10)와 max_dist(영향 거리, 100) 두 임계값이 알고리즘의 핵심 파라미터입니다. 가지가 잎에 충분히 가까워지면 잎을 제거(식민화 완료)하고, 너무 멀면 영향을 주지 않습니다. 이 두 값의 비율이 나무의 밀도와 형태를 결정합니다.',
        '이 알고리즘은 원래 7단계 파이프라인(attraction point 배치 → 골격 생성 → 노드 정리 → 원통 구성 → 기관 추가)의 일부입니다. 영화 VFX, 게임 환경 디자인, 건축 시뮬레이션 등에서 사실적인 나무를 절차적으로 생성하는 데 사용됩니다.',
    ],
})
