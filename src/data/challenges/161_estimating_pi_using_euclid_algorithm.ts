import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '161_estimating_pi_using_euclid_algorithm',
    number: 161,
    title: 'Estimating Pi using Euclid Algorithm',
    categoryId: 'math-algorithms',
    description: '유클리드 호제법으로 두 정수의 서로소 확률을 구하고, 이를 통해 Pi를 추정합니다.',
    files: ['sketch.js'],
    libraries: [],
    versions: [
        { label: 'part1_from_random_numbers', files: [{ name: 'sketch.js', content: '' }] },
        { label: 'part2_from_digits_of_pi', files: [{ name: 'sketch.js', content: '' }] },
    ],
    references: [
        { title: 'Coding Challenge #161: Estimating Pi using Euclid Algorithm', url: 'https://thecodingtrain.com/challenges/161-pi-from-random-numbers' },
        { title: 'Wikipedia - Euclidean algorithm', url: 'https://en.wikipedia.org/wiki/Euclidean_algorithm' },
        { title: 'Wikipedia - Coprime integers', url: 'https://en.wikipedia.org/wiki/Coprime_integers' },
        { title: 'Wikipedia - Basel problem (6/Pi^2 derivation)', url: 'https://en.wikipedia.org/wiki/Basel_problem' },
    ],
    tags: ['pi', 'Euclid', 'GCD', 'coprime'],
    difficulty: 'intermediate',
    explanation: [
        '두 랜덤 정수가 서로소(coprime, GCD=1)일 확률이 6/Pi^2이라는 사실은 1735년 레온하르트 오일러(Leonhard Euler)가 바젤 문제(Basel problem)를 해결하면서 증명한 결과입니다. 오일러는 1 + 1/4 + 1/9 + 1/16 + ... = Pi^2/6임을 보였고, 이로부터 서로소 확률과 Pi의 놀라운 관계가 도출됩니다.',
        '유클리드 호제법(Euclidean algorithm)은 기원전 300년경 유클리드의 원론에 기록된 가장 오래된 알고리즘 중 하나로, 두 정수의 최대공약수(GCD)를 효율적으로 계산합니다. gcd(a, b)에서 b가 0이면 a를 반환하고, 아니면 gcd(b, a%b)를 재귀 호출합니다. 시간 복잡도는 O(log(min(a,b)))입니다.',
        '매 프레임 랜덤 정수 쌍을 생성하고 GCD를 계산합니다. GCD가 1인 서로소 쌍의 개수를 누적하여 전체 시행 대비 비율을 구합니다. Part2에서는 랜덤 수 대신 Pi 자체의 자릿수에서 추출한 숫자 쌍을 사용하여 Pi로 Pi를 추정하는 재귀적 아이디어를 탐구합니다.',
        '시행 횟수가 증가할수록 sqrt(6/비율)이 Pi(3.14159...)에 수렴하는 과정을 실시간으로 관찰합니다. 이는 대수의 법칙(law of large numbers)의 직관적인 시연이며, 몬테카를로 방법(Monte Carlo method)의 일종입니다.',
        '이 방법은 확률론과 정수론이 만나는 아름다운 Pi 계산법입니다. Pi를 계산하는 다른 방법으로는 라이프니츠 급수, 몬테카를로 다트 던지기, 뷔퐁의 바늘 문제, 가우스-르장드르 알고리즘 등이 있으며, 현대의 기록은 수조 자릿수를 넘어섰습니다.',
    ],
})
