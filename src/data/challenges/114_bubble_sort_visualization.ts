import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '114_bubble_sort_visualization',
    number: 114,
    title: 'Bubble Sort Visualization',
    categoryId: 'math-algorithms',
    description: '거품 정렬(Bubble Sort) 알고리즘의 동작 과정을 시각적으로 보여줍니다. 매 프레임 한 패스씩 진행하며 정렬 과정을 관찰합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #114: Bubble Sort Visualization', url: 'https://thecodingtrain.com/challenges/114-bubble-sort-visualization' },
    ],
    tags: ['bubble-sort', 'sorting', 'visualization', 'algorithm'],
    difficulty: 'beginner',
    explanation: [
        '거품 정렬은 인접한 두 원소를 비교하여 교환하는 O(n^2) 정렬 알고리즘입니다. 원소가 수면 위로 올라오는 거품처럼 이동하여 이 이름이 붙었습니다.',
        'values 배열에 random(height) 값을 width개 생성하여 각 x 위치에 세로 막대로 표시합니다. draw()에서 매 프레임 한 패스(j = 0 to length-1-i)를 수행하며, 인접 값이 역순이면 swap합니다.',
        'i가 values.length 이상이면 정렬 완료로 noLoop()합니다. 구조 분해 할당([arr[i0], arr[i1]] = [arr[i1], arr[i0]])으로 간결하게 교환합니다. forEach()로 모든 값을 높이에 대응하는 세로선으로 그립니다.',
    ],
})
