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
        { title: 'Wikipedia - Perlin noise', url: 'https://en.wikipedia.org/wiki/Perlin_noise' },
        { title: 'p5.js Reference - noise()', url: 'https://p5js.org/reference/p5/noise/' },
        { title: 'Wikipedia - Vector field', url: 'https://en.wikipedia.org/wiki/Vector_field' },
    ],
    tags: ['perlin', 'noise', 'flow-field', 'particles'],
    difficulty: 'intermediate',
    explanation: [
        '펄린 노이즈(Perlin Noise)는 1983년 켄 펄린(Ken Perlin)이 영화 "트론(Tron)"의 시각 효과를 위해 개발한 절차적 노이즈 함수입니다. 완전한 무작위(random)와 달리 인접한 값들이 부드럽게 연결되는 연속적 노이즈로, 자연스러운 텍스처, 지형, 구름, 물결 등을 생성하는 데 널리 사용됩니다. 이 업적으로 2002년 아카데미 기술공로상을 수상했습니다.',
        'Flow field(벡터장)는 2D 격자의 각 셀에 방향 벡터를 저장하는 구조입니다. noise(xoff, yoff, zoff)의 반환값(0~1)을 TWO_PI * 4로 매핑하여 각도를 생성하고, p5.Vector.fromAngle()으로 단위 벡터로 변환합니다. 노이즈 입력의 증가량(inc=0.1)이 작을수록 인접 셀의 벡터가 부드럽게 변합니다.',
        '1000개의 Particle 객체가 flow field를 따라 이동합니다. follow() 메서드에서 파티클의 현재 위치를 격자 인덱스로 변환하고, 해당 셀의 벡터를 힘(force)으로 적용합니다. update()에서 속도에 힘을 더하고, 위치에 속도를 더하는 뉴턴 역학 시뮬레이션으로 자연스러운 움직임을 구현합니다.',
        'zoff를 매 프레임 0.0003씩 증가시켜 noise의 3번째 차원을 변화시킵니다. 이는 시간 축에 해당하며, flow field가 시간에 따라 서서히 변하는 동적 패턴을 만듭니다. 증가량이 작을수록 변화가 느리고 부드럽습니다.',
        'background(255)를 setup()에서 한 번만 호출하고, draw()에서는 배경을 지우지 않습니다. stroke(0, 5)의 매우 낮은 알파값으로 선을 그려, 파티클의 경로가 겹칠수록 점점 진해지는 밀도 맵이 형성됩니다. edges()로 화면 밖으로 나간 파티클을 반대쪽으로 이동시켜 연속적 흐름을 유지합니다.',
        'Flow field는 유체 역학 시뮬레이션, 기상 데이터 시각화(바람 지도), 게임의 AI 경로 탐색, 생성적 아트(Generative Art) 등 다양한 분야에서 활용됩니다. 특히 Tyler Hobbs의 "Fidenza" 같은 제너러티브 아트 작품은 flow field를 핵심 기법으로 사용하여 큰 주목을 받았습니다.',
    ],
})
