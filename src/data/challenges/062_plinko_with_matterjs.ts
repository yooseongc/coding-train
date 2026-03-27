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
        { title: 'Matter.js - 2D Physics Engine', url: 'https://brm.io/matter-js/' },
        { title: 'Wikipedia - Bean Machine (Galton Board)', url: 'https://en.wikipedia.org/wiki/Galton_board' },
        { title: 'Plinko - The Price Is Right', url: 'https://priceisright.fandom.com/wiki/Plinko' },
    ],
    tags: ['plinko', 'physics', 'matter.js', 'collision'],
    difficulty: 'intermediate',
    explanation: [
        'Plinko는 미국 TV 쇼 "The Price Is Right"에서 유명해진 게임으로, 공이 못 사이를 무작위로 튀며 떨어지는 원리를 이용합니다. 이 구조는 수학적으로 골턴 보드(Galton Board)와 동일하며, 1889년 프랜시스 골턴이 이항 분포(Binomial Distribution)를 시각적으로 보여주기 위해 고안했습니다. 충분히 많은 공을 떨어뜨리면 하단 슬롯에 정규 분포에 가까운 패턴이 형성됩니다.',
        'Matter.js는 리엔 브룩스(Liam Brummitt)가 개발한 2D 물리 엔진으로, 강체 동역학(Rigid Body Dynamics), 충돌 감지, 제약 조건을 처리합니다. Engine, World, Bodies를 사용하여 물리 시뮬레이션을 구성하며, Plinko 클래스는 정적(isStatic) 원형 못으로, 11열 10행의 엇갈린 격자 배치로 생성됩니다.',
        'Particle은 동적 원형 물체로 상단 중앙에서 20프레임마다 생성됩니다. Boundary는 하단 바닥과 수직 구분벽을 정적 사각형으로 만들어 공이 슬롯에 모이게 합니다. 물리 엔진이 충돌 반응, 반발 계수(Restitution), 마찰 등을 자동으로 처리합니다.',
        'Events.on(engine, "collisionStart")로 충돌 이벤트를 감지합니다. bodyA와 bodyB의 label로 particle-plinko 충돌을 식별하여 효과음을 재생할 수 있습니다. 이벤트 기반 충돌 감지는 물리 엔진의 핵심 기능 중 하나입니다.',
        'Engine.update(engine, 1000/30)으로 30fps 기준 물리를 업데이트합니다. isOffScreen()으로 화면 밖 파티클을 World.remove()와 splice()로 제거하여 메모리 누수를 방지하고 성능을 유지합니다.',
        '물리 엔진 기반 시뮬레이션은 게임 개발, 교육용 물리 실험, 확률 분포 시각화, 그리고 핀볼/파칭코 같은 게임 메카닉 프로토타이핑에 활용됩니다. Matter.js 외에도 Box2D, Planck.js 등의 2D 물리 엔진이 있으며, 각각의 장단점이 있습니다.',
    ],
})
