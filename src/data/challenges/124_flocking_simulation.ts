import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '124_flocking_simulation',
    number: 124,
    title: 'Flocking Simulation',
    categoryId: 'physics-simulation',
    description: 'Craig Reynolds의 Boids 알고리즘으로 정렬, 응집, 분리 행동을 시뮬레이션합니다.',
    files: ['boid.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #124: Flocking Simulation', url: 'https://thecodingtrain.com/challenges/124-flocking-simulation' },
    ],
    tags: ['flocking', 'boids', 'alignment', 'cohesion'],
    difficulty: 'intermediate',
    explanation: [
        'Craig Reynolds가 1986년에 제안한 Boids 모델은 세 가지 조향 행동(Separation, Alignment, Cohesion)의 조합으로 새 떼, 물고기 떼 같은 군집 행동을 시뮬레이션합니다.',
        'Boid 클래스의 align()은 인지 반경 25 내 이웃의 평균 속도를 desired velocity로 설정합니다. cohere()는 반경 50 내 이웃의 평균 위치를 향하고, separate()는 거리 24 미만인 이웃으로부터 멀어지되 거리의 제곱에 반비례하는 힘을 적용합니다.',
        '각 조향력은 steering = desired - current 공식으로 계산되며, maxForce(0.2)로 제한됩니다. flock()에서 세 힘에 슬라이더 가중치(a, c, s)를 곱해 합산하고 acceleration에 누적합니다.',
        '200마리의 Boid가 화면을 wrap-around하며 움직입니다. 슬라이더로 정렬(1.5), 응집(1.0), 분리(2.0) 가중치를 실시간 조절하여 군집 패턴의 변화를 관찰할 수 있습니다.',
    ],
})
