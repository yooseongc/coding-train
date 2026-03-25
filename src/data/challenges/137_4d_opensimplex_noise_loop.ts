import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '137_4d_opensimplex_noise_loop',
    number: 137,
    title: '4D OpenSimplex Noise Loop',
    categoryId: 'creative-coding',
    description: '4D OpenSimplex noise의 3, 4번째 차원을 원형으로 순회하여 매끄러운 노이즈 루프를 만듭니다.',
    files: ['OpenSimplexNoise.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #137: 4D OpenSimplex Noise Loop', url: 'https://thecodingtrain.com/challenges/137-4d-opensimplex-noise-loop' },
    ],
    tags: ['4D', 'opensimplex', 'noise', 'loop'],
    difficulty: 'advanced',
    explanation: [
        'OpenSimplex noise는 Ken Perlin의 Simplex noise의 공개 대안으로, 4D 버전을 사용하면 화면의 x,y에 대한 2D 노이즈가 시간에 따라 매끄럽게 루프됩니다.',
        'noise4D(xoff, yoff, uoff, voff)에서 xoff/yoff는 캔버스 좌표에 increment(0.03)를 곱한 값이고, uoff/voff는 시간 각도의 cos+1, sin+1로 원형 경로를 따릅니다.',
        'frameCount를 totalFrames(360)로 나눈 비율에 TWO_PI를 곱해 angle을 계산합니다. cos(angle)과 sin(angle)이 uoff, voff의 3~4차원에서 원을 그려 처음과 끝이 자연스럽게 연결됩니다.',
        'HSB 컬러 모드를 사용하여 noise 값(-1~1)을 색조(0~255)로 매핑합니다. 모든 픽셀을 point()로 그리므로 계산이 무겁지만, 화려한 무지개 패턴이 끊김 없이 순환하는 루프를 만듭니다.',
    ],
})
