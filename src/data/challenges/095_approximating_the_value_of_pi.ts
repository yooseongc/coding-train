import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '095_approximating_the_value_of_pi',
    number: 95,
    title: 'Approximating the Value of Pi',
    categoryId: 'math-algorithms',
    description: '몬테카를로 방법으로 원주율(PI)을 근사합니다. 정사각형 안에 랜덤 점을 찍어 원 안에 들어간 비율로 계산합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #95: Approximating the Value of Pi', url: 'https://thecodingtrain.com/challenges/95-approximating-the-value-of-pi' },
    ],
    tags: ['pi', 'monte-carlo', 'random', 'approximation'],
    difficulty: 'beginner',
    explanation: [
        '반지름 r인 원의 넓이는 PI*r*r, 한 변이 2r인 정사각형의 넓이는 4*r*r입니다. 정사각형에 랜덤 점을 찍으면 원 안에 들어갈 확률은 PI/4이므로, PI = 4 * (원 안의 점 / 전체 점)으로 근사합니다.',
        'draw()에서 매 프레임 10,000개의 점을 생성합니다. random(-r, r)로 좌표를 정하고, dist(0, 0, x, y) < r이면 원 안(파란색), 아니면 바깥(빨간색)으로 카운트합니다.',
        '점이 많아질수록 추정값이 PI(3.14159...)에 수렴합니다. createP()로 현재 추정값을 실시간 표시합니다. 이것이 몬테카를로 시뮬레이션의 기본 원리입니다.',
    ],
})
