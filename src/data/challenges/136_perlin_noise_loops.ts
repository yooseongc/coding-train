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
    ],
    tags: ['perlin', 'noise', 'loop', 'seamless'],
    difficulty: 'intermediate',
    versions: [
        { label: 'part1', files: [{ name: 'sketch.js', content: '' }] },
        { label: 'part2', files: [{ name: 'sketch.js', content: '' }], libraries: ['gif.js'] },
    ],
    explanation: [
        'Perlin noise에서 매끄러운 루프를 만들려면 noise 공간에서 원형 경로를 따라가야 합니다. cos(angle)과 sin(angle)을 xoff, yoff로 매핑하면 시작과 끝이 자연스럽게 연결됩니다.',
        'Part1은 NoiseLoop을 이용한 변형 원입니다. 각도 0~TWO_PI를 5도 간격으로 순회하며, noise(xoff, yoff, zoff)로 각 방향의 반지름을 100~height/2로 매핑합니다. noiseMax 슬라이더로 변형 정도를 조절합니다.',
        'Part2는 100개의 Particle로 구성된 애니메이션입니다. 각 Particle은 x, y, 크기, 색상에 대해 독립적인 NoiseLoop을 가지며, 각기 다른 중심(cx, cy)에서 원형 경로를 따라 부드럽게 변화합니다.',
        '240프레임(한 주기) 동안 percent가 0~1로 진행되고, angle = percent*TWO_PI로 변환합니다. gif.js로 녹화하면 처음과 끝이 완벽히 이어지는 루프 GIF가 생성됩니다.',
    ],
})
