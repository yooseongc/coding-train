import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '112_3d_rendering',
    number: 112,
    title: '3D Rendering',
    categoryId: '3d-geometry',
    description: '행렬 곱으로 3D 큐브를 2D에 투영하는 와이어프레임 렌더러를 직접 구현합니다. 회전 행렬과 투영 행렬을 적용합니다.',
    files: ['matrix.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #112: 3D Rendering', url: 'https://thecodingtrain.com/challenges/112-3d-rendering' },
    ],
    tags: ['3D', 'rendering', 'projection', 'wireframe'],
    difficulty: 'advanced',
    explanation: [
        '큐브의 8개 꼭짓점을 createVector(-0.5~0.5)로 정의합니다. 2x3 투영 행렬 [[1,0,0],[0,1,0]]을 곱하면 z값을 버리고 (x,y)만 남겨 3D->2D 정사 투영(orthographic projection)을 수행합니다.',
        'rotationX, rotationY, rotationZ 3개의 3x3 회전 행렬을 만들어 순서대로 곱합니다. matmul()은 행렬과 벡터의 곱을 계산하는 커스텀 함수입니다. angle을 매 프레임 증가시켜 연속 회전합니다.',
        '회전 후 투영된 2D 점에 200을 곱하여 스케일링합니다. connect() 함수로 큐브의 12개 모서리를 line()으로 그립니다: 앞면 4개, 뒷면 4개, 앞뒤 연결 4개.',
    ],
})
