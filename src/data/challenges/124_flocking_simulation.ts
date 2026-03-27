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
        { title: 'Craig Reynolds - Boids (Original Paper)', url: 'https://www.red3d.com/cwr/boids/' },
        { title: 'Nature of Code - Chapter 6: Autonomous Agents', url: 'https://natureofcode.com/book/chapter-6-autonomous-agents/' },
        { title: 'Wikipedia - Boids', url: 'https://en.wikipedia.org/wiki/Boids' },
    ],
    tags: ['flocking', 'boids', 'alignment', 'cohesion'],
    difficulty: 'intermediate',
    explanation: [
        'Craig Reynolds가 1986년 SIGGRAPH 학회에서 발표한 Boids 모델은 인공생명(Artificial Life) 분야의 획기적인 연구입니다. 개별 에이전트에 단순한 세 가지 규칙(Separation, Alignment, Cohesion)만 부여하면 새 떼, 물고기 떼와 같은 복잡한 군집 행동(flocking behavior)이 창발(emergence)합니다. 이는 복잡계(complex system)에서 간단한 규칙이 복잡한 행동을 만드는 전형적인 예시입니다.',
        '자율 에이전트(Autonomous Agent)의 핵심 개념은 세 가지입니다. 환경을 제한적으로 인지하고, 인지한 정보를 처리하여 행동을 결정하며, 리더 없이 자율적으로 움직입니다. 조향력(steering force)은 desired velocity에서 current velocity를 뺀 값으로 계산되며, 이 차이가 에이전트의 방향 전환을 유도합니다.',
        'Boid 클래스의 align()은 인지 반경 25 내 이웃의 평균 속도를 desired velocity로 설정합니다. cohere()는 반경 50 내 이웃의 평균 위치를 향하고, separate()는 거리 24 미만인 이웃으로부터 멀어지되 거리의 제곱에 반비례하는 힘을 적용합니다. 각 조향력은 maxForce(0.2)로 제한됩니다.',
        '200마리의 Boid가 화면을 wrap-around하며 움직입니다. 슬라이더로 정렬(1.5), 응집(1.0), 분리(2.0) 가중치를 실시간 조절하여 군집 패턴의 변화를 관찰할 수 있습니다. 가중치를 극단적으로 변경하면 흩어지거나 한 점에 모이는 등 전혀 다른 행동이 나타납니다.',
        'Boids 알고리즘은 영화 산업에서 군중 시뮬레이션(반지의 제왕의 전투 장면 등), 게임에서의 NPC 군집 AI, 드론 편대 비행, 교통 흐름 시뮬레이션 등 광범위하게 응용됩니다. Reynolds는 이 연구로 1998년 아카데미 과학기술상을 수상했습니다.',
    ],
})
