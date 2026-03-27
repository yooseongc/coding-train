import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '143_quicksort',
    number: 143,
    title: 'Quicksort Visualization',
    categoryId: 'math-algorithms',
    description: '퀵소트 알고리즘의 파티션과 재귀 분할 과정을 막대 그래프로 시각화합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #143: Quicksort Visualization', url: 'https://thecodingtrain.com/challenges/143-quicksort' },
        { title: 'Wikipedia - Quicksort', url: 'https://en.wikipedia.org/wiki/Quicksort' },
        { title: 'Wikipedia - Sorting Algorithm', url: 'https://en.wikipedia.org/wiki/Sorting_algorithm' },
        { title: 'VisuAlgo - Sorting Visualization', url: 'https://visualgo.net/en/sorting' },
    ],
    tags: ['quicksort', 'sorting', 'partition', 'visualization'],
    difficulty: 'intermediate',
    explanation: [
        '퀵소트(Quicksort)는 1959년 영국의 컴퓨터 과학자 Tony Hoare가 모스크바 국립대학에서 기계 번역 프로젝트에 참여하던 중 개발한 분할 정복(divide-and-conquer) 정렬 알고리즘입니다. 피벗(pivot)을 선택하고 피벗보다 작은 값/큰 값으로 분할한 뒤 재귀적으로 정렬합니다. 평균 시간 복잡도는 O(nlogn)이며, 실제 성능이 뛰어나 대부분의 프로그래밍 언어 표준 라이브러리의 기본 정렬 알고리즘으로 채택되고 있습니다.',
        '이 챌린지에서는 Lomuto 파티션 방식을 사용합니다. 배열의 마지막 요소를 피벗으로 선택하고, 인덱스 i를 lo-1에서 시작하여 피벗보다 작은 요소를 만날 때마다 i를 증가시키고 swap합니다. Hoare 파티션에 비해 직관적이지만 이미 정렬된 배열에서 O(n^2)의 최악 성능을 보입니다.',
        'async/await로 비동기 퀵소트를 구현하여 정렬 과정을 시각화합니다. swap() 함수에서 sleep(50ms)을 호출하여 각 교환이 보이도록 지연시킵니다. states 배열로 각 막대의 상태를 관리하여 -1(미처리, 흰색), 0(현재 피벗, 빨강), 1(현재 파티션 범위, 연두색)으로 색상을 구분합니다.',
        '시각화를 통해 퀵소트의 분할 정복 전략을 직관적으로 이해할 수 있습니다. 피벗 기준으로 배열이 양분되고, 각 부분이 독립적으로 정렬되는 재귀 구조가 색상으로 명확히 드러납니다. 정렬 완료 후 자동으로 새 배열을 생성하여 무한 반복합니다.',
        '퀵소트는 C의 qsort(), Java의 Arrays.sort()(기본형), Python의 Timsort(퀵소트 변형은 아니지만 비교 대상) 등에서 사용됩니다. 최악의 경우를 방지하기 위해 중앙값 피벗(median-of-three), 랜덤 피벗, Introsort(일정 깊이 이상이면 힙소트로 전환) 등의 개선 기법이 존재합니다. 정렬 알고리즘의 시각화는 알고리즘 교육에서 가장 효과적인 학습 도구 중 하나입니다.',
    ],
})
