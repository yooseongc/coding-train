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
        { title: 'Wikipedia - Travelling Salesman Problem', url: 'https://en.wikipedia.org/wiki/Travelling_salesman_problem' },
        { title: 'Wikipedia - 외판원 문제 (한국어)', url: 'https://ko.wikipedia.org/wiki/%EC%99%B8%ED%8C%90%EC%9B%90_%EB%AC%B8%EC%A0%9C' },
        { title: 'Wikipedia - Simulated Annealing', url: 'https://en.wikipedia.org/wiki/Simulated_annealing' },
    ],
    tags: ['TSP', 'optimization', 'permutation', 'distance'],
    difficulty: 'intermediate',
    explanation: [
        '외판원 문제(Travelling Salesman Problem, TSP)는 "주어진 도시 목록과 각 도시 쌍 사이의 거리가 있을 때, 모든 도시를 정확히 한 번씩 방문하고 출발점으로 돌아오는 최단 경로는 무엇인가?"라는 조합 최적화 문제입니다. NP-난해(NP-hard)에 속하며, 계산 복잡도 이론에서 풀기 어려운 문제의 대표적인 예입니다.',
        '이 구현은 4가지 버전으로 나뉩니다. Part1은 랜덤 스왑 방식으로, 매 프레임 두 도시의 인덱스를 무작위로 선택하여 교환한 뒤 총 거리가 기존 최단 기록보다 짧으면 갱신합니다. Part2는 사전식 순서(lexicographic order)로 모든 순열을 체계적으로 열거하는 방법을 보여줍니다.',
        'Part3은 사전식 순서를 TSP에 적용하여 모든 가능한 경로를 탐색합니다. Part4는 유전 알고리즘(Genetic Algorithm)을 적용하여 개체군의 진화 과정으로 근사 해를 구합니다. 이처럼 TSP는 다양한 알고리즘적 접근법을 비교할 수 있는 좋은 교육 소재입니다.',
        '실제 응용에서 TSP는 택배 배달 경로 최적화, 인쇄회로기판(PCB) 제조 시 드릴 이동 경로, DNA 시퀀싱, 천체 관측 망원경의 관측 순서 결정 등에 사용됩니다. 그래프 이론의 관점에서는 "가중 완전 그래프에서 최소 가중치 해밀턴 순환을 구하라"는 문제와 동치입니다.',
        'n개의 도시에 대해 가능한 경로의 수는 (n-1)!/2로, 도시가 20개만 되어도 약 10^16개의 경로를 탐색해야 합니다. 따라서 담금질 기법(Simulated Annealing), 유전 알고리즘, 개미 군집 최적화(Ant Colony Optimization) 등 메타휴리스틱 알고리즘이 실무에서 널리 사용됩니다.',
    ],
})
