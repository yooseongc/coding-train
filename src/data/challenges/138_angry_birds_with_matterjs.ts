import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '138_angry_birds_with_matterjs',
    number: 138,
    title: 'Angry Birds with Matter.js',
    categoryId: 'games',
    description: 'Matter.js 물리 엔진으로 새총으로 새를 발사하여 박스를 무너뜨리는 Angry Birds를 만듭니다.',
    files: ['bird.js', 'box.js', 'ground.js', 'slingshot.js', 'sketch.js'],
    libraries: ['matter.min.js'],
    references: [
        { title: 'Coding Challenge #138: Angry Birds with Matter.js', url: 'https://thecodingtrain.com/challenges/138-angry-birds-with-matterjs' },
        { title: 'Matter.js - 2D Physics Engine', url: 'https://brm.io/matter-js/' },
        { title: 'Matter.js Documentation', url: 'https://brm.io/matter-js/docs/' },
        { title: 'Wikipedia - Angry Birds', url: 'https://en.wikipedia.org/wiki/Angry_Birds_(video_game)' },
    ],
    tags: ['angry-birds', 'matter.js', 'physics', 'slingshot'],
    difficulty: 'intermediate',
    explanation: [
        'Angry Birds는 2009년 Rovio Entertainment가 출시한 모바일 게임으로, 새총(slingshot)으로 새를 발사하여 구조물을 무너뜨리는 물리 기반 퍼즐입니다. 이 챌린지에서는 Matter.js라는 JavaScript 2D 물리 엔진을 사용하여 핵심 메커니즘을 재현합니다. Matter.js는 강체 역학(rigid body dynamics), 충돌 감지, 제약 조건(constraints)을 처리합니다.',
        'SlingShot 클래스는 Matter.js의 Constraint로 구현됩니다. pointA를 고정점, bodyB를 새(Bird)로 연결하고 stiffness=0.02, length=40으로 탄성 새총을 만듭니다. 물리적으로 이는 후크의 법칙(Hooke\'s Law, F=-kx)을 따르는 스프링으로, stiffness가 스프링 상수 k에 해당합니다.',
        'MouseConstraint로 마우스 드래그를 활성화합니다. 새를 잡아당기면 Constraint가 늘어나 탄성 에너지가 저장되고, mouseReleased() 시 100ms 후 slingshot.fly()로 bodyB를 null로 설정하여 발사합니다. 이때 저장된 탄성 에너지가 운동 에너지로 변환됩니다.',
        'Bird는 Bodies.circle로 생성하고 질량을 4배(density 조절)로 설정하여 충분한 충격량을 확보합니다. Box는 사각 강체, Ground는 isStatic:true인 정적 바닥입니다. Engine.update()로 매 프레임 물리 시뮬레이션을 진행하고, 각 객체의 position과 angle을 읽어 p5.js로 렌더링합니다.',
        '물리 엔진은 현대 게임 개발의 핵심 기술입니다. 2D에서는 Matter.js, Box2D, Planck.js가, 3D에서는 Bullet, PhysX, Havok이 널리 사용됩니다. 이들은 충돌 감지(broad phase/narrow phase), 충돌 응답, 제약 조건 해결(constraint solver) 등의 복잡한 물리 계산을 추상화하여 개발자가 게임 로직에 집중할 수 있게 해줍니다.',
    ],
})
