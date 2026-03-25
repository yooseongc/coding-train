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
    ],
    tags: ['solar', 'planet', 'orbit', '2D'],
    difficulty: 'beginner',
    explanation: [
        'Planet 클래스는 재귀적 구조로, 각 행성이 자신의 planets 배열에 위성들을 가집니다. spawnMoons()에서 레벨 제한(level < 3)으로 태양→행성→위성→소위성 계층을 만듭니다.',
        'push()/pop()과 rotate()/translate()의 조합이 핵심입니다. 부모의 변환 행렬 위에서 자식이 추가 회전과 이동을 하므로, 위성은 자동으로 행성을 따라 공전합니다.',
        'rotate(this.angle)로 궤도 각도를 회전한 뒤 translate(this.distance, 0)으로 이동하면, 원점 기준으로 원 궤도를 그리게 됩니다. angle을 매 프레임 증가시켜 공전 애니메이션을 만듭니다.',
        'translate(width/2, height/2)로 캔버스 중심을 원점으로 설정하여 태양을 중앙에 배치합니다.',
    ],
})
