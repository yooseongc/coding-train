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
        { title: "Wikipedia - Rubik's Cube", url: 'https://en.wikipedia.org/wiki/Rubik%27s_Cube' },
        { title: 'p5.js WEBGL Mode Reference', url: 'https://p5js.org/learn/getting-started-in-webgl.html' },
        { title: 'p5.EasyCam Library', url: 'https://github.com/freshfork/p5.EasyCam' },
    ],
    tags: ['rubiks', 'cube', '3D', 'rotation'],
    difficulty: 'advanced',
    explanation: [
        '루빅스 큐브(Rubik\'s Cube)는 1974년 헝가리의 건축학 교수 Erno Rubik이 발명한 3D 조합 퍼즐입니다. 3x3x3 큐브는 약 4.3 * 10^19(43경)가지의 가능한 상태를 가지며, 임의의 상태에서 최대 20수(God\'s Number) 이내에 해결할 수 있음이 2010년에 컴퓨터로 증명되었습니다. 수학적으로는 루빅스 큐브 군(Rubik\'s Cube group)이라는 치환군(permutation group)으로 분석됩니다.',
        '이 챌린지에서는 27개의 Cubie(작은 큐브)로 3D 루빅스 큐브를 구성합니다. createCube()에서 3중 반복문으로 i,j,k 좌표에 len 간격으로 배치하고, offset으로 원점을 중심에 맞춥니다. p5.js의 WEBGL 모드를 사용하여 3D 렌더링을 수행합니다.',
        'Cubie 클래스는 6개 면을 beginShape()/vertex()로 수동 렌더링합니다. 각 면에 UPP(흰), DWN(노), RGT(주황), LFT(빨), FRT(초), BCK(파)의 국제 표준 색상 배치(Western Color Scheme)를 적용합니다. z-fixed(전후면), y-fixed(상하면), x-fixed(좌우면) 순서로 사각형을 그립니다.',
        'p5.easycam 라이브러리로 마우스 드래그 회전을 지원합니다. 쿼터니언(quaternion) 기반 회전으로 짐벌 락(gimbal lock) 없이 자유로운 3D 탐색이 가능합니다. Part2에서는 Face와 Move 클래스를 추가하여 실제 면 회전 기능을 구현합니다.',
        '루빅스 큐브는 군론(group theory)의 교육적 도구로 널리 사용되며, 스피드큐빙(speedcubing) 대회에서는 CFOP, Roux, ZZ 등의 알고리즘으로 세계 기록 3초대의 해결 속도를 달성합니다. 컴퓨터 과학에서는 최적 해법 탐색(Kociemba 알고리즘), 강화학습을 통한 큐브 풀이, 로봇 큐브 솔버 등의 연구가 활발히 진행되고 있습니다.',
    ],
})
