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
        { title: 'Wikipedia - Monte Carlo method', url: 'https://en.wikipedia.org/wiki/Monte_Carlo_method' },
        { title: 'Wikipedia - Pi', url: 'https://en.wikipedia.org/wiki/Pi' },
        { title: 'Wikipedia - Approximations of pi', url: 'https://en.wikipedia.org/wiki/Approximations_of_%CF%80' },
    ],
    tags: ['pi', 'monte-carlo', 'random', 'approximation'],
    difficulty: 'beginner',
    explanation: [
        '몬테카를로 방법(Monte Carlo Method)은 1940년대 맨해튼 프로젝트에서 스타니스와프 울람(Stanislaw Ulam)과 존 폰 노이만(John von Neumann)이 개발한 확률적 수치 계산 기법입니다. 모나코의 유명 카지노 이름에서 따온 이 방법은 난수를 이용한 반복 시뮬레이션으로 수학적 결과를 근사합니다.',
        '원주율(Pi)은 원의 둘레와 지름의 비율로, 약 3.14159265...의 무리수이자 초월수입니다. 고대 이집트와 바빌로니아에서부터 근사값을 구했으며, 아르키메데스는 정96각형으로 3.1408~3.1429 사이임을 증명했습니다. 현재는 컴퓨터로 수십조 자리까지 계산되었습니다.',
        '반지름 r인 원의 넓이는 PI*r*r, 한 변이 2r인 정사각형의 넓이는 4*r*r입니다. 정사각형에 랜덤 점을 찍으면 원 안에 들어갈 확률은 PI/4이므로, PI = 4 * (원 안의 점 / 전체 점)으로 근사합니다. 이는 기하학적 확률(Geometric Probability)의 직관적인 응용입니다.',
        'draw()에서 매 프레임 10,000개의 점을 생성합니다. random(-r, r)로 좌표를 정하고, dist(0, 0, x, y) < r이면 원 안(파란색), 아니면 바깥(빨간색)으로 카운트합니다. 점이 많아질수록 대수의 법칙(Law of Large Numbers)에 의해 추정값이 실제 PI에 수렴합니다.',
        '몬테카를로 방법의 수렴 속도는 O(1/sqrt(N))으로, 유효 자릿수를 하나 늘리려면 100배의 샘플이 필요합니다. 이런 느린 수렴에도 불구하고, 고차원 적분, 금융 리스크 분석, 물리 시뮬레이션, 기계 학습의 MCMC(Markov Chain Monte Carlo) 등에서 핵심적으로 활용됩니다.',
        'PI를 구하는 다른 방법으로는 라이프니츠 급수(PI/4 = 1 - 1/3 + 1/5 - ...), 뷔퐁의 바늘 문제(Buffon needle problem), 베일리-보르바인-플라우프 공식(BBP formula) 등이 있습니다. 각 방법은 수렴 속도와 구현 난이도가 다르며, 몬테카를로 방법은 가장 직관적인 접근입니다.',
    ],
})
