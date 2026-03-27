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
        { title: 'Modeling Trees with a Space Colonization Algorithm (Runions et al.)', url: 'http://algorithmicbotany.org/papers/colonization.egwnp2007.html' },
        { title: 'p5.js Reference: orbitControl()', url: 'https://p5js.org/reference/p5/orbitControl/' },
    ],
    tags: ['fractal', 'tree', 'space-colonization', '3D'],
    difficulty: 'advanced',
    explanation: [
        '2D Space Colonization 알고리즘을 WEBGL 3D로 확장한 버전입니다. Leaf 위치를 p5.Vector.random3D()로 구(sphere) 형태로 분포시켜 3차원 수관(canopy) 형태를 만듭니다.',
        'orbitControl()로 마우스 드래그를 통해 3D 장면을 자유롭게 회전할 수 있어, 나무의 입체적 구조를 모든 각도에서 관찰할 수 있습니다. p5.Vector가 2D/3D를 투명하게 처리하므로 dist()와 normalize() 등이 3D에서도 그대로 작동합니다.',
        'min_dist를 20으로 늘리고 잎 개수를 300개로 줄여 3D 공간에서의 성능과 시각적 균형을 맞춥니다. 3D에서는 같은 거리에 더 많은 공간이 있으므로 파라미터 조정이 필요합니다.',
        '3D 나무 생성은 영화 VFX(SpeedTree 등), 게임 엔진(Unreal Engine, Unity의 Tree Creator), 건축 시각화에서 핵심 기술입니다. 실제 산업에서는 L-System과 Space Colonization을 결합하고 바람, 계절 변화, 성장 조건 등을 추가하여 더 사실적인 나무를 생성합니다.',
    ],
})
