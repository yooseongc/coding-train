import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '062_plinko_with_matterjs',
    number: 62,
    title: 'Plinko with Matter.js',
    categoryId: 'physics-simulation',
    description: 'Matter.js 물리 엔진으로 공이 못에 부딪히며 떨어지는 Plinko 보드를 시뮬레이션합니다.',
    files: ['boundary.js', 'particle.js', 'plinko.js', 'sketch.js'],
    libraries: ['p5.sound.min.js', 'matter.min.js'],
    references: [
        { title: 'Coding Challenge #62: Plinko with Matter.js', url: 'https://thecodingtrain.com/challenges/62-plinko-with-matterjs' },
    ],
    tags: ['plinko', 'physics', 'matter.js', 'collision'],
    difficulty: 'intermediate',
    explanation: [
        'Matter.js의 Engine, World, Bodies를 사용하여 물리 시뮬레이션을 구성합니다. Plinko 클래스는 정적(isStatic) 원형 못으로, 11열 10행의 엇갈린 격자 배치로 생성됩니다.',
        'Particle은 동적 원형 물체로 상단 중앙에서 20프레임마다 생성됩니다. Boundary는 하단 바닥과 수직 구분벽을 정적 사각형으로 만들어 공이 슬롯에 모이게 합니다.',
        'Events.on(engine, "collisionStart")로 충돌 이벤트를 감지합니다. bodyA와 bodyB의 label로 particle-plinko 충돌을 식별하여 효과음을 재생할 수 있습니다.',
        'Engine.update(engine, 1000/30)으로 30fps 기준 물리를 업데이트합니다. isOffScreen()으로 화면 밖 파티클을 World.remove()와 splice()로 제거하여 성능을 유지합니다.',
    ],
})
