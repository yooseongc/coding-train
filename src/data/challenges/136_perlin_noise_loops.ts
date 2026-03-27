import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '136_perlin_noise_loops',
    number: 136,
    title: 'Perlin Noise Loops',
    categoryId: 'creative-coding',
    description: 'Perlin noise의 2D 원형 경로를 이용하여 매끄럽게 반복되는 노이즈 루프를 생성합니다.',
    files: ['sketch.js'],
    libraries: ['gif.js'],
    references: [
        { title: 'Coding Challenge #136: Perlin Noise Loops', url: 'https://thecodingtrain.com/challenges/136-perlin-noise-loop' },
        { title: 'Wikipedia - Perlin Noise', url: 'https://en.wikipedia.org/wiki/Perlin_noise' },
        { title: 'p5.js Reference - noise()', url: 'https://p5js.org/reference/p5/noise/' },
        { title: 'Etienne Jacob - Techniques for Looping Noise', url: 'https://necessarydisorder.wordpress.com/2017/11/15/drawing-from-noise-and-then-making-it-loop/' },
    ],
    tags: ['perlin', 'noise', 'loop', 'seamless'],
    difficulty: 'intermediate',
    versions: [
        { label: 'part1', files: [{ name: 'sketch.js', content: '' }] },
        { label: 'part2', files: [{ name: 'sketch.js', content: '' }], libraries: ['gif.js'] },
    ],
    explanation: [
        'Perlin noise는 1983년 Ken Perlin이 영화 "트론"의 시각 효과 작업 중 개발한 절차적 텍스처(procedural texture) 생성 알고리즘입니다. 일반 난수와 달리 연속적이고 부드러운 값을 생성하여 자연스러운 패턴을 만들 수 있습니다. 이 챌린지에서는 noise 공간에서 원형 경로를 따라가는 기법으로 매끄러운 루프를 만듭니다.',
        '핵심 아이디어는 2D noise 공간에서 원을 그리는 것입니다. cos(angle)과 sin(angle)을 xoff, yoff로 매핑하면, 원의 시작점과 끝점이 동일하므로 noise 값도 자연스럽게 연결됩니다. 이 기법은 Etienne Jacob(필명 necessary disorder)이 대중화한 방법으로, GIF 아트 커뮤니티에서 널리 사용됩니다.',
        'Part1은 NoiseLoop을 이용한 변형 원입니다. 각도 0~TWO_PI를 5도 간격으로 순회하며, noise(xoff, yoff, zoff)로 각 방향의 반지름을 100~height/2로 매핑합니다. noiseMax 슬라이더로 noise 공간에서의 원의 지름을 조절하여 변형 정도를 제어합니다.',
        'Part2는 100개의 Particle로 구성된 애니메이션입니다. 각 Particle은 x, y, 크기, 색상에 대해 독립적인 NoiseLoop을 가지며, 각기 다른 중심(cx, cy)에서 원형 경로를 따라 부드럽게 변화합니다. 240프레임 후 gif.js로 녹화하면 완벽한 루프 GIF가 생성됩니다.',
        'Perlin noise는 게임과 영화의 지형 생성(Minecraft의 세계, 영화의 구름/연기), 절차적 텍스처(대리석, 나무결), 파티클 시스템의 움직임 제어, 음악의 알고리즘 작곡 등에 광범위하게 사용됩니다. Ken Perlin은 이 알고리즘으로 1997년 아카데미 과학기술상을 수상했으며, 이후 개선된 Simplex noise와 OpenSimplex noise가 개발되었습니다.',
    ],
})
