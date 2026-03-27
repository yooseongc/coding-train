import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '140_leibniz_pi_approximation',
    number: 140,
    title: 'Leibniz Pi Approximation',
    categoryId: 'math-algorithms',
    description: '라이프니츠 급수(교대 급수)를 이용하여 Pi 값을 근사하고 수렴 과정을 그래프로 시각화합니다.',
    files: ['sketch.js'],
    libraries: [],
    bodyHtml: '<div id="canvasDiv"></div>',
    references: [
        { title: 'Coding Challenge #140: Leibniz Pi Approximation', url: 'https://thecodingtrain.com/challenges/140-leibniz-formula-for-pi' },
        { title: 'Wikipedia - Leibniz Formula for Pi', url: 'https://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80' },
        { title: 'Wikipedia - Pi (Mathematics)', url: 'https://en.wikipedia.org/wiki/Pi' },
        { title: 'Wikipedia - Alternating Series', url: 'https://en.wikipedia.org/wiki/Alternating_series' },
    ],
    tags: ['pi', 'Leibniz', 'series', 'approximation'],
    difficulty: 'beginner',
    explanation: [
        '라이프니츠 공식(Leibniz Formula)은 Pi/4 = 1 - 1/3 + 1/5 - 1/7 + ... 으로, 수학사에서 가장 아름다운 급수 중 하나입니다. Gottfried Wilhelm Leibniz가 1674년에 발견했으나, 실제로는 14세기 인도의 수학자 Madhava가 먼저 발견한 것으로 알려져 있어 Madhava-Leibniz 급수라고도 합니다.',
        '이 급수는 arctan(1) = Pi/4라는 사실에서 유도됩니다. arctan(x)의 테일러 급수(Taylor series)는 x - x^3/3 + x^5/5 - x^7/7 + ... 이며, x=1을 대입하면 라이프니츠 공식이 됩니다. 교대 급수(alternating series)이므로 부분합이 실제 값 위아래로 진동하며 수렴합니다.',
        'leibniz(n) 함수가 n번째 항 1/(2n-1)*(-1)^(n-1)을 계산하고, 매 프레임 4를 곱한 값을 acc에 누적합니다. y축은 2~4 범위를 height에 매핑하고, Pi의 실제값 위치에 수평선을 그려 수렴 과정을 시각화합니다.',
        '수렴 속도가 매우 느린 것이 이 급수의 단점입니다. 소수점 2자리 정확도(3.14)를 얻으려면 약 300항이 필요합니다. 더 빠른 수렴을 위해 Machin 공식(Pi/4 = 4*arctan(1/5) - arctan(1/239))이나 Ramanujan 급수, Chudnovsky 알고리즘 등이 개발되었습니다.',
        'Pi의 계산은 수학과 컴퓨터 과학의 역사와 함께해 왔습니다. 고대 바빌로니아(약 3.125), 아르키메데스(다각형 근사법), 중국의 조충지(355/113), 현대 컴퓨터(2024년 기준 100조 자리 이상)에 이르기까지, Pi 계산의 발전은 수학적 도구와 계산 능력의 발전을 그대로 반영합니다.',
    ],
})
