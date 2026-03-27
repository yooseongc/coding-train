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
        { title: 'Wikipedia - OpenSimplex Noise', url: 'https://en.wikipedia.org/wiki/OpenSimplex_noise' },
        { title: 'Wikipedia - Simplex Noise', url: 'https://en.wikipedia.org/wiki/Simplex_noise' },
        { title: 'KdotJPG/OpenSimplex2 (GitHub)', url: 'https://github.com/KdotJPG/OpenSimplex2' },
    ],
    tags: ['4D', 'opensimplex', 'noise', 'loop'],
    difficulty: 'advanced',
    explanation: [
        'OpenSimplex noise는 2014년 KdotJPG가 개발한 노이즈 함수로, Ken Perlin의 Simplex noise의 특허 문제를 피하면서 유사한 품질을 제공하는 공개 대안입니다. Simplex noise는 기존 Perlin noise보다 계산이 효율적이고 방향성 아티팩트(directional artifact)가 적으며, 고차원으로 확장이 용이합니다.',
        '4D noise를 사용하면 2D 공간(x, y)의 노이즈가 시간에 따라 매끄럽게 변화하면서 루프되는 효과를 만들 수 있습니다. noise4D(xoff, yoff, uoff, voff)에서 처음 두 차원은 캔버스의 공간 좌표, 나머지 두 차원은 시간의 원형 경로를 담당합니다. 이렇게 하면 2D noise의 시공간 루프가 자연스럽게 구현됩니다.',
        'frameCount를 totalFrames(360)로 나눈 비율에 TWO_PI를 곱해 angle을 계산합니다. cos(angle)+1과 sin(angle)+1이 3~4차원에서 원을 그리므로, 360프레임 후 정확히 시작점으로 돌아옵니다. 이전 챌린지(#136)의 1D noise 루프를 2D 전체 화면으로 확장한 것입니다.',
        'HSB 컬러 모드를 사용하여 noise 값(-1~1)을 색조(hue, 0~255)로 매핑합니다. 모든 픽셀을 point()로 개별 렌더링하므로 400x400 = 160,000회의 noise 계산이 매 프레임 필요하여 계산이 무겁지만, 화려한 무지개 패턴이 끊김 없이 순환하는 루프를 만듭니다.',
        '노이즈 함수의 차원을 높이는 기법은 절차적 콘텐츠 생성(Procedural Content Generation)에서 핵심적입니다. 3D noise는 볼류메트릭 구름과 3D 텍스처에, 4D noise는 시간 변화하는 3D 볼륨에 사용됩니다. 게임 엔진(Unity, Unreal), 영화 VFX(Houdini), 생성 예술(generative art) 등에서 다양한 차원의 노이즈가 활용되고 있습니다.',
    ],
})
