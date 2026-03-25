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
    ],
    tags: ['quicksort', 'sorting', 'partition', 'visualization'],
    difficulty: 'intermediate',
    explanation: [
        '퀵소트는 분할 정복 알고리즘으로, 피벗을 선택하고 작은 값/큰 값으로 분할한 뒤 재귀적으로 정렬합니다. Lomuto 파티션 방식을 사용하며, 평균 O(nlogn)의 시간 복잡도를 가집니다.',
        'async/await로 비동기 퀵소트를 구현하여 정렬 과정을 시각화합니다. swap() 함수에서 sleep(50ms)을 호출하여 각 교환이 보이도록 지연시키고, Promise.all로 두 부분 배열을 병렬 처리합니다.',
        'states 배열로 각 막대의 상태를 관리합니다: -1(미처리, 흰색), 0(현재 피벗, 빨강), 1(현재 파티션 범위, 연두색)으로 색상을 구분하여 알고리즘의 진행 상황을 직관적으로 보여줍니다.',
        'width/w개의 랜덤 높이 막대를 생성하고, 정렬 완료 후 자동으로 새 배열을 생성하여 무한 반복합니다. 전체 화면 캔버스에서 피벗 선택과 분할 과정이 실시간으로 진행됩니다.',
    ],
})
