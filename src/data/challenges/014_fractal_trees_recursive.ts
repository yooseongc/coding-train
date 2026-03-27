import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '014_fractal_trees_recursive',
    number: 14,
    title: 'Fractal Trees Recursive',
    categoryId: 'fractals',
    description: '재귀 함수로 프랙탈 트리를 그립니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #14: Fractal Trees Recursive', url: 'https://thecodingtrain.com/challenges/14-fractal-trees-recursive' },
        { title: 'Wikipedia: Fractal tree (자기 유사 트리)', url: 'https://en.wikipedia.org/wiki/Fractal_canopy' },
        { title: 'Wikipedia: Turtle graphics', url: 'https://en.wikipedia.org/wiki/Turtle_graphics' },
    ],
    tags: ['fractal', 'tree', 'recursion', 'branch'],
    difficulty: 'beginner',
    explanation: [
        'branch() 함수가 자기 자신을 두 번 호출하는 재귀(recursion)로 이진 프랙탈 트리를 생성합니다. 각 호출에서 길이를 0.67배로 줄이고, len이 4 이하이면 재귀를 멈추는 기저 조건(base case)을 가집니다. 이 구조는 자기 유사성(self-similarity)이라는 프랙탈의 핵심 성질을 보여줍니다.',
        'translate(0, -len)으로 가지 끝으로 이동한 후 rotate(angle)로 회전하면, 이후의 모든 그리기가 가지 끝 기준으로 됩니다. push()/pop()으로 변환 행렬 상태를 저장/복원하여 좌우 가지를 독립적으로 그리는데, 이는 터틀 그래픽스(turtle graphics)의 핵심 패턴입니다.',
        'createSlider()로 분기 각도를 0~TWO_PI 범위에서 실시간 조절합니다. 각도에 따라 나무의 형태가 극적으로 변하며, 특정 각도에서는 대칭적인 패턴이, 다른 각도에서는 비대칭적인 자연스러운 형태가 나타납니다.',
        '프랙탈 트리는 자연의 분기 구조(나뭇가지, 번개, 혈관, 강의 지류)를 수학적으로 모델링한 것입니다. 실제 식물에서는 피보나치 수열과 황금각(약 137.5도)에 따른 분기가 빛 흡수를 최적화하는 것으로 알려져 있습니다.',
    ],
})
