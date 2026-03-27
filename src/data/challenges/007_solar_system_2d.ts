import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '007_solar_system_2d',
    number: 7,
    title: 'Solar System 2D',
    categoryId: '3d-geometry',
    description: '2D 태양계 시뮬레이션을 구현합니다.',
    files: ['planet.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #7: Solar System 2D', url: 'https://thecodingtrain.com/challenges/7-solar-system-2d' },
        { title: 'Wikipedia - Solar System', url: 'https://en.wikipedia.org/wiki/Solar_System' },
        { title: 'p5.js Reference - rotate()', url: 'https://p5js.org/reference/p5/rotate/' },
        { title: 'Wikipedia - Orbital mechanics', url: 'https://en.wikipedia.org/wiki/Orbital_mechanics' },
    ],
    tags: ['solar', 'planet', 'orbit', '2D'],
    difficulty: 'beginner',
    explanation: [
        '태양계(Solar System)는 태양을 중심으로 행성, 위성, 소행성 등이 공전하는 천체 시스템입니다. 이 챌린지에서는 2D 캔버스 위에 재귀적 구조로 태양계를 시뮬레이션합니다. 실제 태양계의 궤도 역학(Orbital Mechanics)을 단순화하여, 각 천체가 원형 궤도를 따라 일정한 속도로 공전하는 모델을 사용합니다.',
        'Planet 클래스는 재귀적 구조(Recursive Structure)로 설계되어, 각 행성이 자신의 planets 배열에 위성들을 가집니다. spawnMoons()에서 레벨 제한(level < 3)을 두어 태양에서 행성, 위성, 소위성까지 최대 3단계의 계층을 만듭니다. 이는 실제 태양계에서 행성이 위성을 거느리고, 일부 위성이 다시 소위성을 가지는 구조를 모방한 것입니다.',
        'push()/pop()과 rotate()/translate()의 조합이 핵심 기법입니다. p5.js의 변환 행렬(Transformation Matrix) 스택을 이용하여, 부모의 좌표계 위에서 자식이 추가 회전과 이동을 수행합니다. 이로 인해 위성은 별도의 계산 없이도 자동으로 행성의 움직임을 따라가며 공전합니다. 이 패턴은 컴퓨터 그래픽스에서 장면 그래프(Scene Graph)의 기본 원리와 동일합니다.',
        'rotate(this.angle)로 궤도 각도를 회전한 뒤 translate(this.distance, 0)으로 이동하면, 원점 기준으로 원 궤도를 그리게 됩니다. angle을 매 프레임 증가시켜 공전 애니메이션을 만듭니다. translate(width/2, height/2)로 캔버스 중심을 원점으로 설정하여 태양을 화면 중앙에 배치합니다.',
        '이 시뮬레이션은 실제 케플러의 행성 운동 법칙(Kepler\'s Laws of Planetary Motion)을 완전히 반영하지는 않지만, 좌표 변환과 재귀적 렌더링의 개념을 학습하기에 좋은 예제입니다. 게임 개발이나 UI 애니메이션에서도 부모-자식 좌표계 변환은 널리 사용되는 패턴입니다.',
    ],
})
