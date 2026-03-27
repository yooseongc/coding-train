import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '021_mendelbrot_set',
    number: 21,
    title: 'Mendelbrot Set',
    categoryId: 'fractals',
    description: '만델브로트 집합을 시각화합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #21: Mendelbrot Set', url: 'https://thecodingtrain.com/challenges/21-mendelbrot-set' },
        { title: '위키백과: 만델브로 집합', url: 'https://ko.wikipedia.org/wiki/%EB%A7%8C%EB%8D%B8%EB%B8%8C%EB%A1%9C_%EC%A7%91%ED%95%A9' },
        { title: 'Wikipedia: Mandelbrot set', url: 'https://en.wikipedia.org/wiki/Mandelbrot_set' },
        { title: 'Wikipedia: Complex number', url: 'https://en.wikipedia.org/wiki/Complex_number' },
    ],
    tags: ['mandelbrot', 'fractal', 'complex', 'zoom'],
    difficulty: 'intermediate',
    explanation: [
        'Mandelbrot 집합(만델브로 집합)은 프랑스계 미국 수학자 브누아 만델브로(Benoît Mandelbrot, 1924-2010)가 1980년에 시각화한 프랙탈입니다. 점화식 z_{n+1} = z_n^2 + c에서 z_0 = 0으로 시작하여 z가 발산하지 않는 복소수 c의 집합입니다. 복소수 연산은 실수부 x\' = x^2 - y^2 + a, 허수부 y\' = 2xy + b로 분리하여 계산합니다.',
        '각 픽셀을 복소 평면의 한 점(c)에 map()으로 대응시키고, 최대 100회 반복 후 |z|^2 > 16이면 발산으로 판정합니다. |z| > 2이면 반드시 발산한다는 수학적 증명에 기반하며(16 = 2^2 × 4는 빠른 판정용), 발산까지의 반복 횟수가 해당 점의 색상을 결정합니다.',
        'sqrt(bright)로 밝기에 제곱근을 적용하여 경계 부근의 색상 변화를 부드럽게 만듭니다. 집합 내부(n=maxIterations)는 검은색으로 표시하며, loadPixels()/updatePixels()로 픽셀 배열에 직접 접근하여 렌더링합니다.',
        'Mandelbrot 집합은 무한히 확대해도 자기 유사적인 패턴이 반복되며, 경계의 프랙탈 차원은 2입니다. 집합의 각 점은 대응하는 Julia 집합의 "지도" 역할을 합니다. 집합 내부의 점은 연결된(connected) Julia 집합에, 외부의 점은 분리된(disconnected) Julia 집합에 대응합니다.',
    ],
})
