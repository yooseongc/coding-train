import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '145_2d_raycasting',
    number: 145,
    title: '2D Raycasting',
    categoryId: 'physics-simulation',
    description: '광선 투사(raycasting) 엔진으로 2D 환경에서 빛과 그림자를 시뮬레이션합니다.',
    files: ['boundary.js', 'particle.js', 'ray.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #145: 2D Raycasting', url: 'https://thecodingtrain.com/challenges/145-2d-raycasting' },
    ],
    tags: ['raycasting', '2D', 'light', 'shadow'],
    difficulty: 'intermediate',
    explanation: [
        '레이캐스팅은 광원에서 전 방향으로 광선을 쏘아 벽과의 교차점을 계산하는 기법입니다. Particle이 360개의 Ray를 1도 간격으로 생성하고, 5개의 랜덤 벽과 4개의 경계벽을 배치합니다.',
        'Ray.cast(wall)에서 선분-광선 교차 판정을 수행합니다. 두 직선의 매개변수 t, u를 계산하고, t가 0~1 사이(벽 위의 점)이고 u > 0(광선 전방)일 때 교차점을 반환합니다.',
        'Particle.look()에서 각 Ray에 대해 모든 벽과의 교차를 확인하고, 가장 가까운(record) 교차점까지 선을 그립니다. 이것이 가시 영역을 나타내며, 벽 뒤는 어두워집니다.',
        'Perlin noise(xoff, yoff)로 Particle이 부드럽게 이동하며, 광선이 벽에 부딪히는 패턴이 실시간으로 변화합니다. stroke(255, 100)으로 반투명 광선을 사용하여 빛줄기 효과를 만듭니다.',
    ],
})
