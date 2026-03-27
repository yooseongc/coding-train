import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '148_gift_wrapping_algorithm',
    number: 148,
    title: 'Gift Wrapping Algorithm (Convex Hull)',
    categoryId: 'math-algorithms',
    description: 'Jarvis March(선물 포장) 알고리즘으로 점 집합의 볼록 껍질(Convex Hull)을 계산합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #148: Gift Wrapping Algorithm', url: 'https://thecodingtrain.com/challenges/148-gift-wrapping' },
        { title: 'Wikipedia - Gift wrapping algorithm', url: 'https://en.wikipedia.org/wiki/Gift_wrapping_algorithm' },
        { title: 'Wikipedia - 선물 포장 알고리즘 (한국어)', url: 'https://ko.wikipedia.org/wiki/%EC%84%A0%EB%AC%BC_%ED%8F%AC%EC%9E%A5_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98' },
        { title: 'Wikipedia - Convex hull algorithms', url: 'https://en.wikipedia.org/wiki/Convex_hull_algorithms' },
    ],
    tags: ['convex-hull', 'gift-wrapping', 'Jarvis', 'geometry'],
    difficulty: 'intermediate',
    explanation: [
        '볼록 껍질(convex hull)은 주어진 점 집합을 모두 포함하는 가장 작은 볼록 다각형으로, 계산 기하학(computational geometry)의 기본 문제 중 하나입니다. 선물 포장 알고리즘(Gift Wrapping Algorithm)은 Jarvis March라고도 불리며, 1973년 R. A. Jarvis가 발표한 직관적인 볼록 껍질 계산 알고리즘입니다.',
        '알고리즘은 가장 왼쪽 점에서 시작하여 마치 점들을 포장지로 감싸듯이 진행합니다. 현재 점에서 나머지 모든 점에 대해 극각(polar angle)을 비교하여, 가장 반시계 방향에 있는 점을 다음 꼭짓점으로 선택합니다. 시간 복잡도는 O(nh)이며, n은 전체 점의 수, h는 볼록 껍질 위의 점의 수입니다.',
        '50개의 랜덤 점 중 x좌표가 가장 작은 점(leftMost)에서 시작합니다. 매 프레임 하나의 점(checking)을 확인하며, 벡터 외적(cross product)의 z성분을 사용하여 방향을 판정합니다. a = nextVertex - currentVertex, b = checking - currentVertex의 외적에서 cross.z < 0이면 checking이 더 왼쪽(반시계 방향)에 있으므로 nextVertex를 교체합니다.',
        '모든 점을 검사한 후 nextVertex가 출발점(leftMost)이면 완료됩니다. hull을 beginShape()/endShape(CLOSE)로 반투명 파란색으로 채우고, 현재 검사 중인 선분을 실시간으로 표시합니다. 볼록 껍질은 충돌 감지, 패턴 인식, GIS(지리 정보 시스템), 로봇 경로 계획 등 다양한 분야에서 활용됩니다.',
        '볼록 껍질을 계산하는 다른 알고리즘으로는 Graham Scan(O(n log n)), Chan 알고리즘(O(n log h)), Quickhull 등이 있습니다. Jarvis March는 h가 작을 때 효율적이며, 알고리즘의 동작 원리가 직관적이어서 교육용으로 자주 사용됩니다.',
    ],
})
