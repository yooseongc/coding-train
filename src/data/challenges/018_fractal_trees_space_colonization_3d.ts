import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '018_fractal_trees_space_colonization_3d',
    number: 18,
    title: 'Fractal Trees Space Colonization 3D',
    categoryId: 'fractals',
    description: '공간 식민화 알고리즘의 3D 버전입니다.',
    files: ['branch.js', 'leaf.js', 'tree.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #18: Fractal Trees Space Colonization 3D', url: 'https://thecodingtrain.com/challenges/18-fractal-trees-space-colonization-3d' },
    ],
    tags: ['fractal', 'tree', 'space-colonization', '3D'],
    difficulty: 'advanced',
    explanation: [
        '2D Space Colonization을 WEBGL 3D로 확장한 버전입니다. Leaf의 위치를 p5.Vector.random3D()로 구 형태로 분포시키고, line()에 z좌표를 추가합니다.',
        'orbitControl()로 마우스 드래그를 통해 3D 장면을 자유롭게 회전할 수 있습니다. 2D에서는 불가능했던 나무의 입체적 구조를 관찰할 수 있습니다.',
        '알고리즘의 핵심(잎 탐색, 방향 벡터 누적, 가지 성장)은 2D 버전과 동일합니다. p5.Vector가 2D/3D를 투명하게 처리하므로, dist()와 normalize() 등이 3D에서도 그대로 작동합니다.',
        'min_dist를 20으로 늘려 3D 공간에서의 가지 밀도를 조절합니다. 잎 개수도 300개로 줄여 성능과 시각적 균형을 맞춥니다.',
    ],
})
