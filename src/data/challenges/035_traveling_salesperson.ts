import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '035_traveling_salesperson',
    number: 35,
    title: 'Traveling Salesperson',
    categoryId: 'math-algorithms',
    description: '외판원 문제(TSP)를 랜덤 스왑 방식으로 풀며 최단 경로를 탐색합니다.',
    files: ['sketch.js'],
    libraries: [],
    versions: [
        { label: 'part1_traveling_salesperson', files: [{ name: 'sketch.js', content: '' }] },
        { label: 'part2_lexicographic_order', files: [{ name: 'sketch.js', content: '' }] },
        { label: 'part3_tsp_with_lexicographic_order', files: [{ name: 'sketch.js', content: '' }] },
        { label: 'part4_tsp_with_genetic_algorithm', files: [{ name: 'ga.js', content: '' }, { name: 'sketch.js', content: '' }] },
    ],
    references: [
        { title: 'Coding Challenge #35: Traveling Salesperson', url: 'https://thecodingtrain.com/challenges/35-traveling-salesperson' },
    ],
    tags: ['TSP', 'optimization', 'permutation', 'distance'],
    difficulty: 'intermediate',
    explanation: [
        '외판원 문제(TSP)는 모든 도시를 한 번씩 방문하는 최단 경로를 찾는 NP-hard 문제입니다. 5개의 도시를 랜덤 배치하고, calcDistance()로 경로의 총 거리를 계산합니다.',
        '매 프레임 두 도시의 인덱스를 랜덤으로 선택하여 swapElements()로 순서를 교환합니다. 교환 후 총 거리가 기록(recordDistance)보다 짧으면 bestEver를 갱신하는 단순 무작위 탐색입니다.',
        '흰색 선(stroke 255)으로 현재 경로를, 자홍색 굵은 선(stroke 255,0,255)으로 역대 최적 경로를 동시에 표시합니다. beginShape()/vertex()/endShape()로 경로를 연결합니다.',
        'frameRate(10)으로 낮춰 각 스왑 과정을 관찰할 수 있게 합니다. NP-hard 문제이므로 O(n!)의 가능성이 있어, 실제로는 유전 알고리즘이나 담금질 기법 같은 근사 해법이 필요합니다.',
    ],
})
