import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '020_3d_cloth_with_toxiclibs',
    number: 20,
    title: '3D Cloth with Toxiclibs',
    categoryId: 'physics-simulation',
    description: 'toxiclibs.js를 이용한 3D 천 시뮬레이션입니다.',
    files: ['toxi_index.js', 'particle.js', 'spring.js', 'sketch.js'],
    libraries: ['toxiclibs.min.js'],
    references: [
        { title: 'Coding Challenge #20: 3D Cloth with Toxiclibs', url: 'https://thecodingtrain.com/challenges/20-3d-cloth-with-toxiclibs' },
    ],
    tags: ['cloth', 'physics', 'spring', 'toxiclibs', '3D'],
    difficulty: 'advanced',
    explanation: [
        'toxiclibs.js의 Verlet 물리 엔진을 사용하여 천(cloth) 시뮬레이션을 구현합니다. VerletPhysics2D가 입자의 위치를 매 프레임 업데이트하고, GravityBehavior로 중력을 적용합니다.',
        'Particle(VerletParticle2D)은 물리 시뮬레이션의 질점이고, Spring(VerletSpring2D)은 두 입자를 연결하는 탄성 제약 조건입니다. 20x20 격자의 인접한 입자들을 가로/세로 스프링으로 연결합니다.',
        '상단 양 끝 입자를 lock()으로 고정하면, 나머지 입자들이 중력과 스프링 힘에 의해 자연스럽게 늘어지는 천의 형태를 만듭니다.',
        'Verlet 적분은 속도를 명시적으로 저장하지 않고, 이전/현재 위치 차이로 속도를 암묵적으로 계산합니다. 이는 스프링 시스템에서 안정적이고 효율적인 시뮬레이션을 가능하게 합니다.',
    ],
})
