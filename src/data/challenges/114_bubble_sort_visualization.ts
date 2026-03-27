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
        { title: 'Wikipedia - Bubble sort (Korean)', url: 'https://ko.wikipedia.org/wiki/%EA%B1%B0%ED%92%88_%EC%A0%95%EB%A0%AC' },
        { title: 'Visualizing Algorithms - Mike Bostock', url: 'https://bost.ocks.org/mike/algorithms/' },
        { title: 'Wikipedia - Sorting algorithm', url: 'https://en.wikipedia.org/wiki/Sorting_algorithm' },
    ],
    tags: ['bubble-sort', 'sorting', 'visualization', 'algorithm'],
    difficulty: 'beginner',
    explanation: [
        '거품 정렬(Bubble Sort)은 가장 단순한 정렬 알고리즘 중 하나로, 인접한 두 원소를 비교하여 교환하는 과정을 반복합니다. 큰 값이 수면 위로 올라오는 거품처럼 배열의 끝으로 이동하여 이 이름이 붙었습니다. 시간 복잡도가 O(n^2)로 느리지만 구현이 극히 단순하여 알고리즘 교육의 첫 번째 예제로 널리 사용됩니다.',
        '알고리즘 시각화(Algorithm Visualization)는 추상적인 알고리즘의 동작을 직관적으로 이해하는 강력한 학습 도구입니다. Mike Bostock(D3.js 창시자)의 "Visualizing Algorithms" 에세이에서 강조했듯이, 정렬 알고리즘의 시각화는 각 알고리즘의 특성과 성능 차이를 한눈에 파악하게 해줍니다.',
        'values 배열에 random(height) 값을 width개 생성하여 각 x 위치에 세로 막대로 표시합니다. draw()에서 매 프레임 한 패스(j = 0 to length-1-i)를 수행하며, 인접 값이 역순이면 swap합니다. 각 패스가 완료되면 가장 큰 미정렬 원소가 제 위치를 찾습니다.',
        '양방향으로 번갈아 수행하는 변형은 칵테일 정렬(Cocktail Sort)이라 합니다. 거품 정렬은 이미 정렬된 배열에서는 O(n)으로 동작하는 최적 시간 복잡도를 가지며, 한 패스에서 교환이 없으면 조기 종료하는 최적화가 가능합니다.',
        'i가 values.length 이상이면 정렬 완료로 noLoop()합니다. 구조 분해 할당([arr[i0], arr[i1]] = [arr[i1], arr[i0]])으로 간결하게 교환합니다. ES6의 구조 분해 할당은 임시 변수 없이 두 값을 교환하는 우아한 방법입니다.',
        '실무에서는 퀵소트(Quick Sort, 평균 O(n log n)), 머지소트(Merge Sort, 항상 O(n log n)), 팀소트(Timsort, Python/Java 기본 정렬) 등이 사용됩니다. 거품 정렬은 성능 면에서 비효율적이지만, 안정 정렬(Stable Sort)이며 추가 메모리가 필요 없는(In-place) 장점이 있습니다.',
    ],
})
