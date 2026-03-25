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
    ],
    tags: ['pi', 'Leibniz', 'series', 'approximation'],
    difficulty: 'beginner',
    explanation: [
        '라이프니츠 공식은 Pi/4 = 1 - 1/3 + 1/5 - 1/7 + ...로, 1/(2n-1)*(-1)^(n-1)의 무한급수로 Pi를 계산합니다. 수렴이 느리지만 매우 간단한 공식입니다.',
        'leibniz(n) 함수가 n번째 항을 계산하고, 매 프레임 4를 곱한 값을 acc에 누적합니다. series 배열에 누적값을 저장하여 수렴 그래프를 그립니다.',
        'y축은 2~4 범위를 height에 매핑하고, Pi의 실제값 위치에 수평선을 그립니다. beginShape()/vertex()로 급수의 부분합이 Pi를 중심으로 위아래로 진동하며 수렴하는 모습을 시각화합니다.',
        '500회 반복 후 자동으로 리셋되어 다시 처음부터 수렴 과정을 보여줍니다. nf(acc, 1, 8)로 소수점 8자리까지 근사값을 실시간 표시합니다.',
    ],
})
