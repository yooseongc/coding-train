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
    ],
    tags: ['attraction', 'repulsion', 'force', 'particles'],
    difficulty: 'intermediate',
    explanation: [
        '중력 공식 F=G*m1*m2/d^2를 단순화하여 strength=G/d/d로 인력을 계산합니다. Particle의 attracted() 메서드에서 타겟 방향 벡터를 구하고, constrain(d, 1, 25)로 극단적인 힘을 방지합니다.',
        '거리 d가 20 미만이면 force.mult(-10)으로 힘의 방향을 반전시켜 척력을 적용합니다. 이로써 파티클이 어트랙터에 가까이 다가가면 밀려나는 동적 균형이 만들어집니다.',
        'mousePressed()로 클릭 위치에 어트랙터를 추가하고, 매 프레임 랜덤 위치에 새 파티클을 생성합니다. particles 배열이 100개를 초과하면 가장 오래된 것을 splice(0,1)로 제거합니다.',
        'Particle의 show()에서 이전 위치(prev)와 현재 위치를 line()으로 연결하여 궤적을 표현합니다. vel.limit(5)로 최대 속도를 제한하고 acc.mult(0)으로 매 프레임 가속도를 초기화합니다.',
    ],
})
