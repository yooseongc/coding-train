import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '022_julia_set',
    number: 22,
    title: 'Julia Set',
    categoryId: 'fractals',
    description: '줄리아 집합을 시각화합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #22: Julia Set', url: 'https://thecodingtrain.com/challenges/22-julia-set' },
    ],
    tags: ['julia', 'fractal', 'complex', 'animation'],
    difficulty: 'intermediate',
    explanation: [
        'Julia 집합은 Mandelbrot와 같은 점화식 z_{n+1} = z_n^2 + c를 사용하지만, c를 고정하고 초기값 z_0를 변화시킵니다. 각 픽셀이 z_0에 해당하며, c는 전체 집합의 형태를 결정합니다.',
        'ca = cos(angle*3.213), cb = sin(angle)로 c값을 시간에 따라 변화시켜 Julia 집합이 실시간으로 변형되는 애니메이션을 만듭니다. 다양한 c값이 전혀 다른 프랙탈 패턴을 생성합니다.',
        'HSB 색상 모드에서 반복 횟수의 제곱근에 비례하는 색조(hue)를 미리 계산하여 colorsRed/Green/Blue 배열에 저장합니다. 이 룩업 테이블 방식이 매 프레임 색상 계산을 최적화합니다.',
        'dx, dy로 픽셀당 복소 평면 이동량을 계산하여, width/height에 맞게 복소 평면을 매핑합니다.',
    ],
})
