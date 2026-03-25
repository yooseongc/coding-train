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
    ],
    tags: ['convex-hull', 'gift-wrapping', 'Jarvis', 'geometry'],
    difficulty: 'intermediate',
    explanation: [
        '선물 포장 알고리즘(Jarvis March)은 가장 왼쪽 점에서 시작하여, 나머지 모든 점이 현재 선분의 오른쪽에 있도록 다음 점을 선택하며 볼록 껍질을 구성합니다. 시간 복잡도는 O(nh)입니다.',
        '50개의 랜덤 점을 x좌표로 정렬하여 가장 왼쪽 점(leftMost)에서 시작합니다. 매 프레임 하나의 점(checking)을 확인하며, cross product의 z성분이 음수이면 더 큰 좌회전이므로 nextVertex를 갱신합니다.',
        'a = nextVertex - currentVertex, b = checking - currentVertex의 외적(cross)을 계산합니다. cross.z < 0이면 checking이 더 왼쪽에 있으므로 nextVertex를 교체합니다.',
        '모든 점을 검사한 후 nextVertex가 출발점(leftMost)이면 완료됩니다. hull을 beginShape()/endShape(CLOSE)로 반투명 파란색으로 채우고, 현재 검사 중인 선분을 실시간으로 표시합니다.',
    ],
})
