import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '144_2d_black_hole_visualization',
    number: 144,
    title: '2D Black Hole Visualization',
    categoryId: 'physics-simulation',
    description: '뉴턴 중력을 사용하여 블랙홀이 광자를 끌어당기는 2D 시각화를 구현합니다.',
    files: ['blackhole.js', 'photon.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #144: 2D Black Hole Visualization', url: 'https://thecodingtrain.com/challenges/144-2d-black-hole' },
        { title: 'Ohio State - Black Hole STEM Coding Simulation', url: 'https://www.asc.ohio-state.edu/orban.14/stemcoding/blackhole.html' },
        { title: 'Wikipedia - Schwarzschild radius', url: 'https://en.wikipedia.org/wiki/Schwarzschild_radius' },
        { title: 'Wikipedia - Black hole (Event horizon)', url: 'https://en.wikipedia.org/wiki/Black_hole#Event_horizon' },
    ],
    tags: ['black-hole', 'gravity', 'photon', 'relativity'],
    difficulty: 'advanced',
    explanation: [
        '블랙홀(black hole)은 아인슈타인의 일반상대성이론이 예측한 천체로, 중력이 너무 강해 빛조차 탈출할 수 없는 영역입니다. 2019년 Event Horizon Telescope 프로젝트가 M87 은하 중심의 블랙홀 그림자를 최초로 촬영하여 이론적 예측을 실증했습니다. 이 시뮬레이션은 뉴턴 중력(Newtonian gravity)을 사용하여 블랙홀 주변의 광자 궤적을 2D로 시각화합니다.',
        '블랙홀의 사건의 지평선(event horizon) 반지름은 슈바르츠실트 반지름(Schwarzschild radius) rs = 2*G*M/c^2으로 정의됩니다. 이 반지름 안으로 들어간 물체나 빛은 외부로 탈출이 불가능합니다. 시뮬레이션에서는 c=30, G=2, M=10000으로 설정하여 화면 중앙에 블랙홀 M87을 배치합니다.',
        'Photon은 화면 오른쪽에서 수평으로 발사되어 블랙홀의 중력에 의해 경로가 휘어집니다. Blackhole.pull()에서 뉴턴 중력 F = G*M/r^2을 계산하고, dt=0.1로 오일러 적분(Euler integration)하여 속도를 업데이트합니다. 이 중력 렌즈 효과(gravitational lensing)는 실제 블랙홀 주변에서 관측되는 현상의 단순화된 모델입니다.',
        '빛 그림자 반지름(photon sphere, ~2.6*rs) 안에서 출발한 광자는 블랙홀에 흡수되고, 바깥의 광자는 휘어진 경로로 통과합니다. 이 경계가 블랙홀의 그림자(shadow)를 형성하며, 실제 M87 블랙홀 이미지에서 관측된 어두운 중심부에 해당합니다.',
        'start(height/2)와 end(height/2 - rs*2.6)에 수평선을 그려 빛 그림자 영역을 표시합니다. y간격 5로 촘촘하게 배치된 광자들이 중력 렌즈 효과로 휘어지는 모습을 관찰할 수 있습니다. 이러한 시뮬레이션은 천체물리학 교육과 과학 커뮤니케이션에서 블랙홀의 성질을 직관적으로 전달하는 데 활용됩니다.',
    ],
})
