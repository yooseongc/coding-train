import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '056_attraction_and_repulsion_forces',
    number: 56,
    title: 'Attraction and Repulsion Forces',
    categoryId: 'physics-simulation',
    description: '중력 법칙 기반의 인력과 척력을 시뮬레이션하여 파티클이 어트랙터에 반응하는 패턴을 만듭니다.',
    files: ['particle.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #56: Attraction and Repulsion Forces', url: 'https://thecodingtrain.com/challenges/56-attraction-and-repulsion-forces' },
        { title: 'Wikipedia - Newton\'s Law of Universal Gravitation', url: 'https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation' },
        { title: 'Nature of Code - Chapter 2: Forces', url: 'https://natureofcode.com/forces/' },
        { title: 'Wikipedia - Inverse-Square Law', url: 'https://en.wikipedia.org/wiki/Inverse-square_law' },
    ],
    tags: ['attraction', 'repulsion', 'force', 'particles'],
    difficulty: 'intermediate',
    explanation: [
        '뉴턴의 만유인력 법칙(Newton\'s Law of Universal Gravitation)은 F = G * m1 * m2 / r^2으로, 두 물체 사이의 중력이 질량의 곱에 비례하고 거리의 제곱에 반비례함을 나타냅니다. 1687년 뉴턴이 프린키피아에서 발표한 이 법칙은 행성 궤도에서 사과의 낙하까지 설명하는 통합 이론입니다. 이 시뮬레이션에서는 이를 단순화하여 인력과 척력의 동적 균형을 구현합니다.',
        '중력 공식을 단순화하여 strength = G / d^2로 인력을 계산합니다. Particle의 attracted() 메서드에서 타겟 방향 벡터를 구하고, constrain(d, 1, 25)로 극단적인 힘을 방지합니다. 역제곱 법칙(Inverse-Square Law)은 중력뿐 아니라 전기력, 빛의 세기 등 자연계의 많은 현상에 적용됩니다.',
        '거리 d가 20 미만이면 force.mult(-10)으로 힘의 방향을 반전시켜 척력(Repulsion)을 적용합니다. 이로써 파티클이 어트랙터에 가까이 다가가면 밀려나는 동적 균형이 만들어집니다. 이는 원자 사이의 레너드-존스 퍼텐셜(Lennard-Jones Potential)과 유사한 패턴으로, 먼 거리에서는 인력, 가까운 거리에서는 척력이 작용합니다.',
        'mousePressed()로 클릭 위치에 어트랙터를 추가하고, 매 프레임 랜덤 위치에 새 파티클을 생성합니다. particles 배열이 100개를 초과하면 가장 오래된 것을 splice(0,1)로 제거하여 객체 풀링(Object Pooling)과 유사한 메모리 관리를 수행합니다.',
        'Particle의 show()에서 이전 위치(prev)와 현재 위치를 line()으로 연결하여 궤적을 표현합니다. vel.limit(5)로 최대 속도를 제한하고 acc.mult(0)으로 매 프레임 가속도를 초기화하는 것은 뉴턴 역학의 힘 누적(Force Accumulation) 패턴입니다.',
        '인력과 척력의 조합은 분자 동역학(Molecular Dynamics) 시뮬레이션, 입자 기반 유체 시뮬레이션(SPH), 전자기장 시각화, 그리고 제너러티브 아트에서 광범위하게 활용됩니다. 여러 어트랙터를 배치하면 복잡한 궤도 패턴이 자기 조직화(Self-Organization)되는 창발적 행동을 관찰할 수 있습니다.',
    ],
})
