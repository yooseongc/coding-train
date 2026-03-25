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
    ],
    tags: ['pi', 'mandelbrot', 'complex', 'calculation'],
    difficulty: 'advanced',
    explanation: [
        '만델브로 집합 경계의 정확한 점(c = 0.25 + epsilon)에서 z^2 + c 반복이 발산하기까지의 횟수가 Pi와 관련됩니다. epsilon = 1/100^(digits-1)으로 경계에 매우 가까운 점을 선택합니다.',
        'z = 0에서 시작하여 z = z*z + c를 반복하고 z >= 2가 될 때까지의 iteration을 셉니다. 한 프레임에 25691회씩 반복하여 빠르게 계산하며, 발산 시 noLoop()합니다.',
        'iteration 값을 digits 자릿수로 포맷팅하고, 첫 자리 뒤에 소수점을 삽입하면 Pi의 근사값이 됩니다. digits=8이면 8자리 Pi를 얻을 수 있습니다.',
        'mandelbrot.jpg 이미지를 배경으로 표시하고, 계산된 Pi 값을 textSize(48)으로 중앙에 오버레이합니다. 1440x1080 고해상도 캔버스에서 만델브로 집합의 아름다움과 Pi의 관계를 보여줍니다.',
    ],
})
