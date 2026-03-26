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
    ],
    tags: ['pi', 'Euclid', 'GCD', 'coprime'],
    difficulty: 'intermediate',
    explanation: [
        '두 랜덤 정수가 서로소(GCD=1)일 확률은 6/Pi^2입니다. 따라서 많은 쌍을 시도하여 서로소 비율을 구하면 Pi = sqrt(6/비율)로 추정할 수 있습니다.',
        '유클리드 호제법(Euclidean algorithm)으로 최대공약수(GCD)를 계산합니다. gcd(a, b)에서 b가 0이면 a를 반환하고, 아니면 gcd(b, a%b)를 재귀 호출합니다.',
        '매 프레임 랜덤 정수 쌍을 생성하고 GCD를 계산합니다. GCD가 1인 서로소 쌍의 개수를 누적하여 전체 시행 대비 비율을 구합니다.',
        '시행 횟수가 증가할수록 sqrt(6/비율)이 Pi에 수렴하는 과정을 실시간으로 관찰합니다. 확률론과 정수론이 만나는 흥미로운 Pi 계산법입니다.',
    ],
})
