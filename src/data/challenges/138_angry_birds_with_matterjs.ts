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
    ],
    tags: ['angry-birds', 'matter.js', 'physics', 'slingshot'],
    difficulty: 'intermediate',
    explanation: [
        'Matter.js의 Engine, World, Bodies, Constraint를 활용하여 Angry Birds를 재현합니다. Bird는 Bodies.circle로 생성하고 질량을 4배로 설정하며, Box는 사각 물체, Ground는 정적 바닥입니다.',
        'SlingShot 클래스는 Constraint로 구현됩니다. pointA를 고정점, bodyB를 새로 연결하고 stiffness=0.02, length=40으로 탄성 새총을 만듭니다. fly()에서 bodyB를 null로 설정하면 새가 발사됩니다.',
        'MouseConstraint로 마우스 드래그를 활성화합니다. 새를 잡아당기면 Constraint가 늘어나고, mouseReleased() 시 100ms 후 slingshot.fly()로 발사합니다. 스페이스바로 새를 리셋합니다.',
        'preload()에서 dot.png(새), equals.png(박스), skyBackground.png(배경) 이미지를 로드합니다. Engine.update()로 물리 시뮬레이션을 매 프레임 진행하고, 각 객체의 position과 angle을 읽어 이미지를 렌더링합니다.',
    ],
})
