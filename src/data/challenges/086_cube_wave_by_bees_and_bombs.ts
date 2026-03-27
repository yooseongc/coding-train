import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '086_cube_wave_by_bees_and_bombs',
    number: 86,
    title: 'Cube Wave by Bees and Bombs',
    categoryId: 'creative-coding',
    description: 'Bees and Bombs의 큐브 웨이브를 p5.js WEBGL로 재현합니다. 거리 기반 오프셋으로 3D 큐브 격자에 파동 효과를 만듭니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #86: Cube Wave by Bees and Bombs', url: 'https://thecodingtrain.com/challenges/86-cube-wave' },
        { title: 'Bees and Bombs: Cube Wave', url: 'https://beesandbombs.tumblr.com/post/149654056864/cube-wave' },
        { title: 'p5.js Reference: WEBGL Mode', url: 'https://p5js.org/reference/p5/WEBGL/' },
        { title: 'Wikipedia: Isometric Projection', url: 'https://en.wikipedia.org/wiki/Isometric_projection' },
    ],
    tags: ['cube', 'wave', '3D', 'WEBGL'],
    difficulty: 'intermediate',
    explanation: [
        'Bees and Bombs는 Dave Whyte라는 아일랜드 출신 모션 디자이너의 프로젝트로, 수학적 규칙에 기반한 최면적인 루프 애니메이션으로 유명합니다. Cube Wave는 그의 대표작 중 하나로, 단순한 사인파가 3D 격자에 적용되었을 때 만들어지는 시각적 아름다움을 보여줍니다.',
        'WEBGL 모드에서 ortho()로 직교 투영(orthographic projection)을 설정합니다. 원근 투영과 달리 직교 투영에서는 거리에 따른 크기 변화가 없어 아이소메트릭 게임이나 기술 도면에 사용됩니다. rotateX(QUARTER_PI)와 rotateY(magicAngle)로 아이소메트릭 뷰를 만들며, magicAngle = atan(cos(QUARTER_PI))는 세 축이 동등하게 보이는 정확한 아이소메트릭 각도입니다.',
        '각 큐브의 높이는 sin(angle + offset)으로 결정됩니다. offset은 큐브와 중심 간의 유클리드 거리(Euclidean distance)에 비례하여, 중앙에서 바깥으로 퍼지는 동심원 형태의 파동 효과를 만듭니다. 이는 물에 돌을 던졌을 때 퍼지는 파문과 같은 원리입니다.',
        '2D 모드도 지원합니다. mode2D=true이면 일반 캔버스에서 사각형의 높이만 변하는 1D 파동을, false이면 WEBGL의 box()로 3D 큐브 격자를 렌더링합니다. normalMaterial()은 면의 법선(normal) 벡터 방향에 따라 RGB 색상을 자동 매핑하여, 조명 설정 없이도 면의 방향을 직관적으로 구별할 수 있게 합니다.',
        '이러한 파동 기반 애니메이션은 셰이더 프로그래밍(shader programming)에서 매우 흔한 패턴입니다. Shadertoy 같은 플랫폼에서 GPU로 수십만 개의 요소에 실시간으로 유사한 효과를 적용하며, 뮤직 비주얼라이저, 설치 미술, 인터랙티브 미디어 등에서 널리 활용됩니다.',
    ],
})
