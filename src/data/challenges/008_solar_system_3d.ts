import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '008_solar_system_3d',
    number: 8,
    title: 'Solar System 3D',
    categoryId: '3d-geometry',
    description: 'WEBGL을 이용한 3D 태양계 시뮬레이션입니다.',
    files: ['planet.js', 'sketch.js'],
    libraries: ['p5.easycam.min.js'],
    references: [
        { title: 'Coding Challenge #8: Solar System 3D', url: 'https://thecodingtrain.com/challenges/8-solar-system-3d' },
    ],
    tags: ['solar', 'planet', 'orbit', '3D', 'WEBGL'],
    difficulty: 'intermediate',
    explanation: [
        'WEBGL 모드에서 sphere() 함수로 3D 구를 그립니다. p5.Vector.random3D()로 랜덤한 3D 방향 벡터를 생성하여 행성의 공전 축을 다양하게 설정합니다.',
        'cross() 벡터 외적으로 회전축을 계산하고 rotate(angle, axis)로 해당 축 주위를 공전합니다. 2D와 달리 임의의 3D 축 회전이 필요하기 때문입니다.',
        'EasyCam 라이브러리를 사용하여 마우스로 카메라를 자유롭게 회전, 줌할 수 있습니다. oncontextmenu를 비활성화하여 우클릭을 카메라 조작에 사용합니다.',
        'lights()로 기본 조명을 설정하여 구에 음영이 생기도록 합니다. 재귀적 Planet 구조는 2D 버전과 동일하지만, 3D 공간에서의 변환이 추가됩니다.',
    ],
})
