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
        { title: 'Wikipedia - Tesseract', url: 'https://en.wikipedia.org/wiki/Tesseract' },
        { title: 'Wikipedia - Rotation matrix (4D)', url: 'https://en.wikipedia.org/wiki/Rotation_matrix#In_four_dimensions' },
        { title: 'Wikipedia - 3D projection', url: 'https://en.wikipedia.org/wiki/3D_projection' },
        { title: '4차원 초입방체(정팔포체) - 한국어 위키백과', url: 'https://ko.wikipedia.org/wiki/%EC%A0%95%ED%8C%94%ED%8F%AC%EC%B2%B4' },
    ],
    tags: ['4D', 'hypercube', 'tesseract', 'projection'],
    difficulty: 'advanced',
    explanation: [
        '테서랙트(Tesseract)는 큐브의 4차원 확장으로, 정팔포체(正八胞體)라고도 불립니다. 점에서 선, 선에서 사각형, 사각형에서 큐브로 차원을 확장하는 것처럼, 큐브를 4번째 차원(w축)으로 확장한 것입니다. 16개의 꼭짓점, 32개의 모서리, 24개의 면, 8개의 정육면체 셀로 구성됩니다. 1888년 영국 수학자 Charles Howard Hinton이 그리스어 "네 개의 광선"에서 이름을 따왔습니다.',
        'P4Vector(x,y,z,w) 클래스로 4D 좌표를 정의합니다. 내부 큐브 8개(w=1)와 외부 큐브 8개(w=-1)의 총 16개 꼭짓점으로 구성됩니다. 4x4 rotationXY 행렬은 XY 평면에서의 회전을, rotationZW 행렬은 ZW 평면에서의 회전을 수행합니다. 4D 공간에서는 축이 아닌 평면을 기준으로 회전하며, 총 6개의 독립적인 회전 평면(XY, XZ, XW, YZ, YW, ZW)이 존재합니다.',
        '4D에서 3D로의 투영은 원근 투영(Perspective Projection) 원리를 적용합니다. w = 1/(2-rotated.w)를 스케일 팩터로 사용하여, w축에서 먼 꼭짓점(w가 작은)은 크게, 가까운 꼭짓점은 작게 표현합니다. 이는 3D에서 2D로 투영할 때 먼 물체가 작게 보이는 원근법과 동일한 원리를 한 차원 높여 적용한 것입니다.',
        'WEBGL 모드에서 createEasyCam()으로 투영된 3D 결과를 마우스로 자유롭게 회전하며 관찰할 수 있습니다. connect() 함수로 내부 큐브 12개, 외부 큐브 12개, 내외 연결 8개의 총 32개 모서리를 line()으로 그립니다. 4D 회전 시 내부 큐브와 외부 큐브가 서로 뒤집히는 독특한 시각적 효과가 나타납니다.',
        '테서랙트는 영화 "인터스텔라"에서 5차원 공간을 표현하는 장면에 영감을 주었으며, 마블의 "어벤져스"에서는 코스믹 큐브의 이름으로 등장합니다. 수학적으로 테서랙트는 초입방체(Hypercube)의 4차원 사례이며, 이를 더 높은 차원으로 확장한 5-cube, 6-cube 등도 같은 원리로 시각화할 수 있습니다.',
    ],
})
