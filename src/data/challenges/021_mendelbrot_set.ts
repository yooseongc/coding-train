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
    ],
    tags: ['mandelbrot', 'fractal', 'complex', 'zoom'],
    difficulty: 'intermediate',
    explanation: [
        'Mandelbrot 집합은 z_{n+1} = z_n^2 + c에서 z가 발산하지 않는 복소수 c의 집합입니다. 복소수 연산을 실수부(a)와 허수부(b)로 분리하여 aa = a^2 - b^2, bb = 2ab로 계산합니다.',
        '각 픽셀을 복소 평면의 한 점(c)에 map()으로 대응시키고, 반복(최대 100회) 후 |z|^2 > 16이면 발산으로 판정합니다. 발산까지의 반복 횟수가 해당 점의 색상을 결정합니다.',
        'sqrt(bright)로 밝기에 제곱근을 적용하여 경계 부근의 색상 변화를 부드럽게 만듭니다. 집합 내부(n=maxIterations)는 검은색으로 표시합니다.',
        'loadPixels()/updatePixels()로 픽셀 배열에 직접 접근하여 렌더링합니다. 슬라이더로 복소 평면의 범위를 조절하여 프랙탈을 확대/축소할 수 있습니다.',
    ],
})
