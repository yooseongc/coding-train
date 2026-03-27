import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '141_calculating_digits_of_pi_with_mandelbrot_set',
    number: 141,
    title: 'Calculating Digits of Pi with Mandelbrot Set',
    categoryId: 'math-algorithms',
    description: '만델브로 집합 경계 근처의 반복 횟수를 이용하여 Pi의 자릿수를 계산합니다.',
    files: ['sketch.js'],
    libraries: [],
    bodyHtml: '<div id="canvasDiv"></div>',
    references: [
        { title: 'Coding Challenge #141: Calculating Digits of Pi with Mandelbrot Set', url: 'https://thecodingtrain.com/challenges/141-mandelbrot-set-pi' },
        { title: 'Wikipedia - Mandelbrot Set', url: 'https://en.wikipedia.org/wiki/Mandelbrot_set' },
        { title: 'Pi314.net - Mandelbrot Set and Pi', url: 'http://www.pi314.net/eng/mandelbrot.php' },
        { title: 'Wikipedia - Complex Quadratic Polynomial', url: 'https://en.wikipedia.org/wiki/Complex_quadratic_polynomial' },
    ],
    tags: ['pi', 'mandelbrot', 'complex', 'calculation'],
    difficulty: 'advanced',
    explanation: [
        '만델브로 집합(Mandelbrot Set)은 1980년 Benoit Mandelbrot가 IBM에서 컴퓨터로 시각화한 프랙탈 집합으로, 복소수 c에 대해 z_(n+1) = z_n^2 + c 반복이 발산하지 않는 c의 집합입니다. 놀랍게도 이 집합의 경계 근처에서 Pi가 나타납니다. c = 0.25 + epsilon(매우 작은 양수)에서 발산까지의 반복 횟수가 Pi/sqrt(epsilon)에 근사합니다.',
        '이 관계는 만델브로 집합의 경계에서의 분기(bifurcation) 현상과 관련됩니다. c = 0.25는 주 심장형(main cardioid) 경계의 가장 오른쪽 점(cusp)으로, 이 근처에서 반복의 수렴-발산 전이가 일어나며 이 전이 속도가 Pi와 연결됩니다.',
        'z = 0에서 시작하여 z = z*z + c를 반복하고 |z| >= 2가 될 때까지의 iteration을 셉니다. epsilon = 1/100^(digits-1)으로 경계에 매우 가까운 점을 선택하면, iteration 값의 유효 숫자가 Pi의 자릿수와 일치합니다. digits=8이면 8자리의 Pi를 계산할 수 있습니다.',
        'mandelbrot.jpg 이미지를 배경으로 표시하고, 계산된 Pi 값을 텍스트로 오버레이합니다. 만델브로 집합은 복소 해석학(complex analysis)의 아름다움을 보여주는 대표적 예시이며, 무한한 세부 구조와 자기 유사성(self-similarity)을 가집니다.',
        '만델브로 집합과 Pi의 관계는 수학의 서로 다른 분야들이 깊이 연결되어 있음을 보여줍니다. 프랙탈 기하학, 복소 동역학(complex dynamics), 수론(number theory)이 하나의 아름다운 구조에서 만나며, Julia 집합, Lyapunov 지수 등과도 밀접한 관계를 가집니다. 이 집합의 면적을 정확히 구하는 문제는 아직 미해결 상태입니다.',
    ],
})
