import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '123_chaos_game',
    number: 123,
    title: 'Chaos Game',
    categoryId: 'math-algorithms',
    description: '카오스 게임 알고리즘으로 시에르핀스키 삼각형과 다각형 프랙탈을 생성합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #123: Chaos Game', url: 'https://thecodingtrain.com/challenges/123-chaos-game' },
        { title: 'Wikipedia - Chaos Game', url: 'https://en.wikipedia.org/wiki/Chaos_game' },
        { title: 'Wikipedia - Iterated Function System', url: 'https://en.wikipedia.org/wiki/Iterated_function_system' },
        { title: 'Wikipedia - Sierpinski Triangle', url: 'https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle' },
        { title: 'Algorithm Archive - Iterated Function Systems', url: 'https://www.algorithm-archive.org/contents/IFS/IFS.html' },
    ],
    tags: ['chaos', 'game', 'fractal', 'sierpinski'],
    difficulty: 'beginner',
    versions: [
        { label: 'part1', files: [{ name: 'sketch.js', content: '' }] },
        { label: 'part2', files: [{ name: 'sketch.js', content: '' }] },
    ],
    explanation: [
        '카오스 게임(Chaos Game)은 1988년 Michael Barnsley가 그의 저서 "Fractals Everywhere"에서 소개한 프랙탈 생성 방법입니다. 다각형의 꼭짓점 중 하나를 무작위로 선택하고, 현재 위치에서 그 꼭짓점 방향으로 일정 비율(contraction factor)만큼 이동하는 과정을 반복합니다. 이 단순한 규칙이 복잡한 프랙탈 구조를 만들어내는 것이 카오스 이론의 핵심적 통찰입니다.',
        '수학적으로 카오스 게임은 반복 함수 시스템(Iterated Function System, IFS)의 한 형태입니다. IFS는 여러 축소 사상(contraction mapping)을 무작위로 적용하여 끌개(attractor)를 생성하는 방법으로, 카오스 게임에서의 끌개가 바로 프랙탈 패턴입니다. 축소 비율(factor)이 0.5이고 정삼각형을 사용하면 시에르핀스키 삼각형(Sierpinski Triangle)이 나타납니다.',
        'Part1은 삼각형 기반의 시에르핀스키 삼각형입니다. 3개의 꼭짓점 중 랜덤으로 선택하고 lerp()로 중간점을 계산합니다. 각 꼭짓점 방향에 따라 다른 색상(마젠타, 시안, 노랑)을 부여하여 프랙탈의 자기 유사성(self-similarity)을 시각적으로 확인할 수 있습니다.',
        'Part2는 정오각형(n=5)으로 확장합니다. fromAngle()으로 균등 배치된 5개 꼭짓점을 생성하고, "직전에 선택한 꼭짓점은 다시 선택하지 않는다"는 제약 조건을 추가하여 다른 패턴의 프랙탈을 만듭니다. 다각형의 변의 수와 축소 비율, 제약 조건을 변경하면 무한히 다양한 프랙탈이 생성됩니다.',
        '카오스 게임은 컴퓨터 그래픽스에서 프랙탈 지형 생성, 데이터 압축(프랙탈 이미지 압축), 생물학에서의 DNA 서열 시각화(Chaos Game Representation) 등 실제 응용 분야가 다양합니다. 특히 CGR은 유전체학에서 DNA 서열의 패턴을 시각적으로 분석하는 도구로 활용됩니다.',
    ],
})
