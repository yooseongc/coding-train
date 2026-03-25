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
    ],
    tags: ['cube', 'wave', '3D', 'WEBGL'],
    difficulty: 'intermediate',
    explanation: [
        'WEBGL 모드에서 ortho()로 직교 투영을 설정하고, rotateX(QUARTER_PI)와 rotateY(magicAngle)로 아이소메트릭 뷰를 만듭니다. magicAngle = atan(cos(QUARTER_PI))는 정확한 아이소메트릭 각도입니다.',
        '각 큐브의 높이는 sin(angle + offset)으로 결정됩니다. offset은 큐브와 중심 간의 거리에 비례하여, 중앙에서 바깥으로 퍼지는 파동 효과를 만듭니다. map()으로 sin값을 100~300 범위의 높이로 변환합니다.',
        '2D 모드도 지원합니다. mode2D=true이면 일반 캔버스에서 사각형의 높이만 변하는 1D 파동을, false이면 WEBGL의 box()로 3D 큐브 격자를 렌더링합니다. normalMaterial()로 면의 법선 방향에 따라 색상이 자동 지정됩니다.',
    ],
})
