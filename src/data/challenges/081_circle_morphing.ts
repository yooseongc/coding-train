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
        { title: 'Golan Levin - Circle Morphing (GitHub)', url: 'https://github.com/golanlevin/circle-morphing' },
        { title: 'p5.js Reference - p5.Vector.lerp()', url: 'https://p5js.org/reference/p5.Vector/lerp/' },
        { title: 'Wikipedia - Morphing', url: 'https://en.wikipedia.org/wiki/Morphing' },
    ],
    versions: [
        { label: 'part1', files: [{ name: 'sketch.js', content: '' }] },
        { label: 'part2', files: [{ name: 'sketch.js', content: '' }] },
    ],
    tags: ['morphing', 'circle', 'polar', 'animation'],
    difficulty: 'intermediate',
    explanation: [
        '모핑(Morphing)은 하나의 형태가 다른 형태로 부드럽게 변형되는 시각 효과입니다. 1990년대 영화 특수효과(터미네이터 2, 마이클 잭슨의 Black or White)에서 유명해진 이 기법은 컴퓨터 그래픽스의 핵심 기술 중 하나입니다. Golan Levin 교수(카네기 멜론 대학)는 원에서 다각형으로의 변환에 대한 다양한 수학적 접근 방법을 정리한 바 있습니다.',
        'setup()에서 원과 삼각형의 꼭짓점 경로를 미리 계산합니다. circlePath는 polarToCartesian()으로 10도 간격(36개 점)의 원 위 점들을, trianglePath는 p5.Vector.lerp()로 세 변 위의 대응점들을 생성합니다. 극좌표(polar coordinates)에서 직교좌표(cartesian coordinates)로의 변환은 r*cos(angle), r*sin(angle) 공식을 사용합니다.',
        '삼각형 경로는 120도마다 꼭짓점을 설정하고, 각 변을 따라 원의 대응 각도 비율로 보간합니다. 이렇게 원과 삼각형의 점 개수가 동일하게 매칭되는 것이 모핑의 핵심입니다. 대응점(correspondence)이 잘못 설정되면 뒤틀림이나 부자연스러운 변형이 발생합니다.',
        'draw()에서 sin(theta)로 0~1 사이의 amt값을 만들고, p5.Vector.lerp(cp, tp, amt)로 원과 삼각형 사이를 부드럽게 보간합니다. amt가 0이면 원, 1이면 삼각형이 되어 왕복 모핑 효과가 나타납니다. sin() 함수의 주기성을 활용한 이징(easing) 효과로 양 끝에서 자연스럽게 감속합니다.',
        '원에서 다각형으로의 변환에는 다양한 수학적 방법이 존재합니다. 베지어 곡선(Bezier curve) 제어점 조절, 슈퍼엘립스(superellipse) 공식, 라운디드 폴리곤(rounded polygon), 호와 직선의 교대 배치 등 14가지 이상의 접근법이 있으며, 각각 고유한 시각적 특성을 가집니다.',
        '모핑 기법은 UI 애니메이션(아이콘 변형, 화면 전환), 데이터 시각화(차트 간 전환), 생성적 예술(generative art), 게임 이펙트 등에 폭넓게 활용됩니다. CSS의 clip-path 애니메이션이나 SVG morphing 라이브러리(flubber, GreenSock MorphSVG)도 같은 원리를 기반으로 합니다.',
    ],
})
