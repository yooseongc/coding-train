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
        { title: 'p5.js Reference - WEBGL mode', url: 'https://p5js.org/reference/p5/WEBGL/' },
        { title: 'Wikipedia - Cross product', url: 'https://en.wikipedia.org/wiki/Cross_product' },
        { title: 'p5.EasyCam Library', url: 'https://github.com/freshfork/p5.EasyCam' },
    ],
    tags: ['solar', 'planet', 'orbit', '3D', 'WEBGL'],
    difficulty: 'intermediate',
    explanation: [
        '이 챌린지는 2D 태양계의 확장으로, p5.js의 WEBGL 모드를 사용하여 3차원 공간에서 태양계를 렌더링합니다. WEBGL(Web Graphics Library)은 브라우저에서 하드웨어 가속 3D 그래픽을 지원하는 API로, p5.js에서 createCanvas()의 세 번째 인자로 WEBGL을 전달하면 3D 렌더링 모드가 활성화됩니다.',
        'sphere() 함수로 3D 구를 그리며, p5.Vector.random3D()로 랜덤한 3D 방향 벡터를 생성하여 각 행성의 공전 축을 다양하게 설정합니다. 2D에서는 단일 평면에서만 회전했지만, 3D에서는 벡터 외적(Cross Product)을 이용해 임의의 축을 중심으로 회전해야 합니다. cross() 함수로 회전축을 계산하고 rotate(angle, axis)로 해당 축 주위의 공전을 구현합니다.',
        'p5.EasyCam 라이브러리를 사용하여 마우스 드래그로 카메라를 자유롭게 회전하고 스크롤로 줌 인/아웃이 가능합니다. oncontextmenu를 비활성화하여 우클릭도 카메라 조작에 활용합니다. EasyCam은 궤도 카메라(Orbit Camera) 패턴을 구현한 것으로, 3D 뷰어에서 가장 많이 사용되는 카메라 조작 방식입니다.',
        'lights()로 기본 조명을 설정하여 구에 자연스러운 음영이 생기도록 합니다. 조명이 없으면 3D 구가 평면 원처럼 보이지만, 조명을 추가하면 빛과 그림자로 입체감이 생깁니다. 재귀적 Planet 구조는 2D 버전과 동일하지만, 3D 좌표 변환이 추가되어 더 사실적인 태양계 시뮬레이션이 가능합니다.',
        '실제 태양계에서 행성들의 공전 궤도면은 완전히 동일하지 않고, 각 행성마다 약간의 궤도 경사각(Orbital Inclination)을 가집니다. 이 시뮬레이션에서 random3D()로 공전 축을 랜덤하게 설정하는 것은 이러한 현상을 단순화하여 표현한 것입니다.',
    ],
})
