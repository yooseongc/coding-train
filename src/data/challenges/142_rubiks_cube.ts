import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '142_rubiks_cube',
    number: 142,
    title: "Rubik's Cube",
    categoryId: '3d-geometry',
    description: 'p5.js WEBGL 모드로 3x3x3 루빅스 큐브를 3D로 렌더링합니다.',
    files: ['cubie.js', 'sketch.js'],
    libraries: ['p5.easycam.min.js'],
    versions: [
        { label: 'part1', libraries: ['p5.easycam.min.js'], files: [{ name: 'cubie.js', content: '' }, { name: 'sketch.js', content: '' }] },
        { label: 'part2', libraries: ['p5.easycam.min.js'], files: [{ name: 'cubie.js', content: '' }, { name: 'face.js', content: '' }, { name: 'move.js', content: '' }, { name: 'sketch.js', content: '' }] },
    ],
    references: [
        { title: "Coding Challenge #142: Rubik's Cube", url: 'https://thecodingtrain.com/challenges/142-rubiks-cube' },
    ],
    tags: ['rubiks', 'cube', '3D', 'rotation'],
    difficulty: 'advanced',
    explanation: [
        '3x3x3 루빅스 큐브를 27개의 Cubie(작은 큐브)로 구성합니다. createCube()에서 3중 반복문으로 i,j,k 좌표에 len 간격으로 배치하고, offset으로 원점을 중심에 맞춥니다.',
        'Cubie 클래스는 6개 면을 beginShape()/vertex()로 수동 렌더링합니다. 각 면에 UPP(흰), DWN(노), RGT(주), LFT(빨), FRT(초), BCK(파)의 표준 색상을 fill()합니다.',
        'z-fixed(전후면), y-fixed(상하면), x-fixed(좌우면) 순서로 4개 꼭짓점을 CLOSE로 닫아 사각형을 그립니다. push()/pop()으로 각 Cubie의 로컬 좌표계를 관리합니다.',
        'p5.easycam 라이브러리로 마우스 드래그 회전을 지원합니다. distance=400으로 카메라 거리를 설정하고, 우클릭 컨텍스트 메뉴를 비활성화하여 자유로운 3D 탐색이 가능합니다.',
    ],
})
