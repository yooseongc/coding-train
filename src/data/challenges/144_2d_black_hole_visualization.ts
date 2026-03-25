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
    ],
    tags: ['black-hole', 'gravity', 'photon', 'relativity'],
    difficulty: 'advanced',
    explanation: [
        '블랙홀의 사건의 지평선(event horizon) 반지름은 슈바르츠실트 반지름 rs = 2*G*M/c^2입니다. 이 시뮬레이션에서는 c=30, G=2로 설정하고 M=10000의 블랙홀 M87을 중앙에 배치합니다.',
        'Photon은 화면 오른쪽에서 수평으로 발사되어 블랙홀의 중력에 의해 경로가 휘어집니다. Blackhole.pull()에서 뉴턴 중력 F = G*M/r^2을 계산하고, dt=0.1로 오일러 적분하여 속도를 업데이트합니다.',
        '빛 그림자 반지름(~2.6*rs) 안에서 출발한 광자는 블랙홀에 흡수되고, 바깥의 광자는 휘어진 경로로 통과합니다. 이 경계가 블랙홀의 "그림자"를 형성합니다.',
        'start(height/2)와 end(height/2 - rs*2.6)에 수평선을 그려 빛 그림자 영역을 표시합니다. y간격 5로 촘촘하게 배치된 광자들이 중력 렌즈 효과로 휘어지는 모습을 관찰합니다.',
    ],
})
