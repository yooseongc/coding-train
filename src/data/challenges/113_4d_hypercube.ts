import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '113_4d_hypercube',
    number: 113,
    title: '4D Hypercube (Tesseract)',
    categoryId: '3d-geometry',
    description: '4차원 초입방체(정팔포체, Tesseract)를 WEBGL에서 시각화합니다. 4D 회전 행렬과 원근 투영으로 3D에 투영합니다.',
    files: ['matrix.js', 'P4Vector.js', 'sketch.js'],
    libraries: ['p5.easycam.min.js'],
    references: [
        { title: 'Coding Challenge #113: 4D Hypercube (Tesseract)', url: 'https://thecodingtrain.com/challenges/113-4d-hypercube' },
    ],
    tags: ['4D', 'hypercube', 'tesseract', 'projection'],
    difficulty: 'advanced',
    explanation: [
        '테서랙트는 큐브의 4차원 확장으로 16개의 꼭짓점을 가집니다. P4Vector(x,y,z,w)로 4D 좌표를 정의하고, 내부 큐브 8개(w=1)와 외부 큐브 8개(w=-1)로 구성합니다.',
        '4x4 rotationXY와 rotationZW 행렬로 4D 회전을 수행합니다. 4D->3D 투영은 w축 원근법으로, w = 1/(2-rotated.w)를 스케일 팩터로 사용하여 w가 작을수록 더 크게 보이게 합니다.',
        'WEBGL 모드에서 createEasyCam()으로 마우스 드래그 3D 카메라를 제공합니다. 투영된 3D 점에 point()로 꼭짓점을, connect()로 내부 큐브 12개, 외부 큐브 12개, 내외 연결 8개의 모서리를 그립니다.',
        'Charles Howard Hinton이 1888년 명명한 테서랙트는 8개의 정육면체 셀로 이루어진 4차원 정다포체입니다. 회전 각도를 0.02씩 증가시키며 4D 회전의 독특한 시각적 효과를 보여줍니다.',
    ],
})
