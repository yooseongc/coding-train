import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '081_circle_morphing',
    number: 81,
    title: 'Circle Morphing',
    categoryId: 'creative-coding',
    description: '원에서 삼각형으로 부드럽게 변형되는 모핑 애니메이션을 구현합니다. 극좌표와 p5.Vector.lerp()를 활용합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #81: Circle Morphing', url: 'https://thecodingtrain.com/challenges/81-circle-morphing' },
    ],
    versions: [
        { label: 'part1', files: [{ name: 'sketch.js', content: '' }] },
        { label: 'part2', files: [{ name: 'sketch.js', content: '' }] },
    ],
    tags: ['morphing', 'circle', 'polar', 'animation'],
    difficulty: 'intermediate',
    explanation: [
        'setup()에서 원과 삼각형의 꼭짓점 경로를 미리 계산합니다. circlePath는 polarToCartesian()으로 10도 간격의 원 위 점들을, trianglePath는 p5.Vector.lerp()로 세 변 위의 대응점들을 생성합니다.',
        '삼각형 경로는 120도마다 꼭짓점을 설정하고, 각 변을 따라 원의 대응 각도 비율로 보간합니다. 이렇게 원과 삼각형의 점 개수가 동일하게 매칭됩니다.',
        'draw()에서 sin(theta)로 0~1 사이의 amt값을 만들고, p5.Vector.lerp(cp, tp, amt)로 원과 삼각형 사이를 부드럽게 보간합니다. amt가 0이면 원, 1이면 삼각형이 되어 왕복 모핑 효과가 나타납니다.',
    ],
})
