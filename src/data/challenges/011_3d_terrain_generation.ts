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
        { title: 'Wikipedia - Perlin noise', url: 'https://en.wikipedia.org/wiki/Perlin_noise' },
        { title: 'p5.js Reference - noise()', url: 'https://p5js.org/reference/p5/noise/' },
        { title: 'Wikipedia - Triangle strip', url: 'https://en.wikipedia.org/wiki/Triangle_strip' },
    ],
    tags: ['terrain', '3D', 'perlin', 'noise', 'WEBGL'],
    difficulty: 'intermediate',
    explanation: [
        'Perlin Noise는 1983년 Ken Perlin이 영화 "트론(Tron)"의 시각 효과를 위해 개발한 절차적 노이즈 함수입니다. 완전한 무작위(Random)와 달리 인접한 값들이 부드럽게 연결되어, 자연스러운 산, 구름, 물결 등의 패턴을 생성할 수 있습니다. 이 공로로 Ken Perlin은 2002년 아카데미 과학기술상을 수상했습니다.',
        'noise(xoff, yoff)는 2D 좌표에 대해 부드럽게 연결되는 0~1 사이 값을 반환하며, map()으로 -100~100 범위로 변환하여 지형의 높낮이를 결정합니다. xoff와 yoff의 증가 폭(0.1)은 노이즈의 스케일을 결정하는데, 값이 작을수록 완만한 언덕이, 클수록 급격한 산악 지형이 생성됩니다.',
        'flying 변수를 매 프레임 0.05씩 감소시켜 yoff의 시작점을 이동함으로써, 지형이 카메라 쪽으로 다가오는 비행 효과를 만듭니다. 이 기법은 무한히 펼쳐지는 지형을 시뮬레이션하며, 비행 시뮬레이터나 러너 게임에서도 유사한 방식으로 지형을 생성합니다.',
        'TRIANGLE_STRIP은 인접한 두 행의 정점을 교대로 연결하여 삼각형 메시(Triangle Mesh)를 효율적으로 구성하는 OpenGL 프리미티브입니다. N개의 정점으로 N-2개의 삼각형을 만들 수 있어, 개별 삼각형을 그리는 것보다 메모리와 연산 효율이 높습니다. vertex(x, y, z)에서 z가 noise 값으로 결정되는 높이입니다.',
        'WEBGL 모드에서 rotateX(PI/3)로 지형을 약 60도 기울여 조감도(Bird\'s Eye View) 시점을 만들고, translate(-w/2, -h/2)로 지형의 중심을 화면 중앙에 맞춥니다. 이 절차적 지형 생성 기법은 마인크래프트(Minecraft)를 비롯한 수많은 게임에서 세계를 자동 생성하는 데 핵심적으로 사용됩니다.',
    ],
})
