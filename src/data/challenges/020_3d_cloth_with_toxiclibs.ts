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
        { title: 'Wikipedia - Verlet Integration', url: 'https://en.wikipedia.org/wiki/Verlet_integration' },
        { title: 'toxiclibs.js - Verlet Physics', url: 'http://haptic-data.com/toxiclibsjs' },
        { title: 'Wikipedia - Cloth Simulation', url: 'https://en.wikipedia.org/wiki/Cloth_simulation' },
    ],
    tags: ['cloth', 'physics', 'spring', 'toxiclibs', '3D'],
    difficulty: 'advanced',
    explanation: [
        '천(Cloth) 시뮬레이션은 컴퓨터 그래픽스에서 가장 오래되고 중요한 물리 시뮬레이션 분야 중 하나입니다. 1980년대 후반부터 영화와 게임에서 사실적인 옷감 표현을 위해 연구되었으며, 질점-스프링 모델(Mass-Spring Model)이 가장 널리 사용됩니다. 이 시뮬레이션에서는 toxiclibs.js 라이브러리의 Verlet 물리 엔진을 활용합니다.',
        'toxiclibs는 원래 자바(Java)용으로 Karsten Schmidt가 개발한 오픈 소스 라이브러리로, 물리 시뮬레이션, 지오메트리, 색상 처리 등의 기능을 제공합니다. toxiclibs.js는 이를 자바스크립트로 포팅한 버전입니다. VerletPhysics2D가 입자의 위치를 매 프레임 업데이트하고, GravityBehavior로 중력을 적용합니다.',
        'Particle(VerletParticle2D)은 물리 시뮬레이션의 질점이고, Spring(VerletSpring2D)은 두 입자를 연결하는 탄성 제약 조건입니다. 20x20 격자의 인접한 입자들을 가로/세로 스프링으로 연결하여 구조적(Structural) 스프링 네트워크를 형성합니다.',
        '상단 양 끝 입자를 lock()으로 고정하면, 나머지 입자들이 중력과 스프링 힘에 의해 자연스럽게 늘어지는 천의 형태를 만듭니다. 실제 천 시뮬레이션에서는 구조적 스프링 외에도 전단(Shear) 스프링과 굽힘(Bending) 스프링을 추가하여 더 사실적인 동작을 구현합니다.',
        'Verlet 적분은 1791년 프랑스 수학자 루이 베를레(Louis Verlet)가 제안한 수치 적분법입니다. 속도를 명시적으로 저장하지 않고, 이전/현재 위치 차이로 속도를 암묵적으로 계산합니다. 이는 오일러 방법보다 에너지 보존성이 우수하고, 스프링 시스템에서 안정적이고 효율적인 시뮬레이션을 가능하게 합니다.',
        '천 시뮬레이션은 영화 VFX(의상, 깃발, 커튼), 게임(캐릭터 의상 물리), 패션 산업(가상 피팅), 건축(텐트나 막 구조물 해석) 등에서 실용적으로 사용됩니다. Pixar, DreamWorks 같은 애니메이션 스튜디오에서도 핵심 기술로 활용하고 있습니다.',
    ],
})
