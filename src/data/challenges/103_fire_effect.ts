import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '103_fire_effect',
    number: 103,
    title: 'Fire Effect',
    categoryId: 'creative-coding',
    description: 'DOOM 스타일의 화염 효과를 픽셀 조작으로 구현합니다. 열원, 확산, 냉각, 대류의 4단계로 사실적인 불꽃을 만듭니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #103: Fire Effect', url: 'https://thecodingtrain.com/challenges/103-fire-effect' },
    ],
    tags: ['fire', 'effect', 'pixel', 'DOOM'],
    difficulty: 'intermediate',
    explanation: [
        '4단계로 불꽃을 시뮬레이션합니다: (1) 열원(fire) - 하단에 최대 밝기 픽셀 생성, (2) 확산(spread) - 4방향 평균으로 열 전파, (3) 냉각(cooling) - Perlin noise 기반 냉각맵 적용, (4) 대류(convection) - 결과를 한 픽셀 위로 이동.',
        'createGraphics()로 buffer1(이전 프레임), buffer2(현재 프레임), cooling(냉각맵) 3개의 그래픽 버퍼를 관리합니다. 매 프레임 버퍼를 스왑하여 이중 버퍼링합니다.',
        'cool()에서 Perlin noise로 불규칙한 냉각맵을 생성합니다. pow(n, 3)으로 대부분을 낮은 냉각값으로 만들어 간헐적으로 강한 냉각이 일어나게 합니다. ystart를 증가시켜 냉각 패턴이 시간에 따라 변합니다.',
        '화면 왼쪽에 불꽃 효과를, 오른쪽에 냉각맵을 나란히 표시합니다. 마우스 클릭으로 임의 위치에 열원을 추가할 수 있어 인터랙티브한 불꽃 조작이 가능합니다.',
    ],
})
