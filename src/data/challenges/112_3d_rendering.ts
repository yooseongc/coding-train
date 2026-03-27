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
        { title: 'Wikipedia - 3D projection', url: 'https://en.wikipedia.org/wiki/3D_projection' },
        { title: 'Wikipedia - Rotation matrix', url: 'https://en.wikipedia.org/wiki/Rotation_matrix' },
        { title: 'Wikipedia - Orthographic projection', url: 'https://en.wikipedia.org/wiki/Orthographic_projection' },
    ],
    tags: ['3D', 'rendering', 'projection', 'wireframe'],
    difficulty: 'advanced',
    explanation: [
        '이 챌린지는 WEBGL이나 3D 라이브러리 없이, 행렬 연산만으로 3D 큐브를 2D 캔버스에 렌더링하는 와이어프레임(Wireframe) 렌더러를 직접 구현합니다. 3D 렌더링 파이프라인의 핵심인 모델 변환(Model Transform), 뷰 변환(View Transform), 투영(Projection)의 원리를 처음부터 이해할 수 있는 교육적 예제입니다.',
        '큐브의 8개 꼭짓점을 createVector(-0.5~0.5)로 정의합니다. 2x3 투영 행렬 [[1,0,0],[0,1,0]]을 곱하면 z값을 버리고 (x,y)만 남겨 3D에서 2D로의 정사 투영(Orthographic Projection)을 수행합니다. 정사 투영은 깊이에 따른 크기 변화가 없는 평행 투영으로, CAD 도면이나 건축 설계도에서 사용됩니다.',
        '3x3 회전 행렬(Rotation Matrix)을 X, Y, Z 축에 대해 각각 정의합니다. 각 행렬은 삼각함수 cos()과 sin()으로 구성되며, 이 세 행렬을 순서대로 곱하여 3D 회전을 수행합니다. matmul() 함수는 행렬-행렬, 행렬-벡터 곱을 모두 처리하는 범용 함수입니다. 행렬 곱의 순서에 따라 회전 결과가 달라지는데, 이를 짐벌 락(Gimbal Lock) 문제라 하며 쿼터니언(Quaternion)으로 해결할 수 있습니다.',
        '회전 후 투영된 2D 점에 200을 곱하여 화면 크기에 맞게 스케일링합니다. connect() 함수로 큐브의 12개 모서리를 line()으로 그립니다: 앞면 4개, 뒷면 4개, 앞뒤 연결 4개. 이 와이어프레임 렌더링은 초기 3D 컴퓨터 그래픽스의 기본 방식이었으며, 1972년 아타리의 아스테로이드(Asteroids)를 비롯한 초기 게임에서 사용되었습니다.',
        '이 렌더러는 GPU 없이 CPU만으로 3D 렌더링의 원리를 보여줍니다. OpenGL이나 WebGL 같은 그래픽 API가 내부적으로 수행하는 행렬 변환을 직접 구현함으로써, 3D 그래픽스 파이프라인의 수학적 기초를 체험할 수 있습니다. 이 기법은 다음 챌린지인 4D Hypercube로 확장됩니다.',
    ],
})
