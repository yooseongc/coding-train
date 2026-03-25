import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '024_perlin_noise_flow_field',
    number: 24,
    title: 'Perlin Noise Flow Field',
    categoryId: 'data-visualization',
    description: 'Perlin noise 기반 플로우 필드를 시각화합니다.',
    files: ['particle.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #24: Perlin Noise Flow Field', url: 'https://thecodingtrain.com/challenges/24-perlin-noise-flow-field' },
    ],
    tags: ['perlin', 'noise', 'flow-field', 'particles'],
    difficulty: 'intermediate',
    explanation: [
        'Flow field는 격자의 각 셀에 방향 벡터를 저장하는 구조입니다. noise(xoff, yoff, zoff)로 부드럽게 변하는 각도를 생성하고, p5.Vector.fromAngle()로 벡터로 변환합니다.',
        'Particle의 follow() 메서드가 현재 위치의 격자 셀에서 벡터를 읽어 힘으로 적용합니다. 1000개 파티클이 각자의 위치에서 flow field를 따라 흘러갑니다.',
        'zoff를 매 프레임 0.0003씩 증가시켜 noise의 3번째 차원을 변화시킵니다. 이로써 flow field가 시간에 따라 서서히 변하는 동적 패턴을 만듭니다.',
        'background()를 한 번만 호출하고 이후 line()으로 이전 위치와 현재 위치를 연결합니다. stroke(0, 5)의 낮은 알파값으로 경로가 겹치면서 밀도 있는 유기적 패턴이 형성됩니다.',
    ],
})
