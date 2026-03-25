import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '011_3d_terrain_generation',
    number: 11,
    title: '3D Terrain Generation',
    categoryId: '3d-geometry',
    description: 'Perlin noise를 이용한 3D 지형을 생성합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #11: 3D Terrain Generation', url: 'https://thecodingtrain.com/challenges/11-3d-terrain-generation' },
    ],
    tags: ['terrain', '3D', 'perlin', 'noise', 'WEBGL'],
    difficulty: 'intermediate',
    explanation: [
        'Perlin noise로 자연스러운 지형 높이를 생성합니다. noise(xoff, yoff)는 2D 좌표에 대해 부드럽게 연결되는 0~1 사이 값을 반환하며, map()으로 -100~100 범위로 변환합니다.',
        'flying 변수를 매 프레임 감소시켜 yoff의 시작점을 이동함으로써, 지형이 카메라 쪽으로 다가오는 비행 효과를 만듭니다.',
        'TRIANGLE_STRIP으로 인접한 두 행의 정점을 교대로 연결하여 삼각형 메시를 효율적으로 구성합니다. vertex(x, y, z)에서 z가 noise 값으로 결정되는 높이입니다.',
        'WEBGL 모드에서 rotateX(PI/3)로 지형을 비스듬히 기울여 조감도 시점을 만들고, translate()로 중심을 조정합니다.',
    ],
})
