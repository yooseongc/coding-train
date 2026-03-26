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
    ],
    tags: ['chaos', 'game', 'fractal', 'sierpinski'],
    difficulty: 'beginner',
    versions: [
        { label: 'part1', files: [{ name: 'sketch.js', content: '' }] },
        { label: 'part2', files: [{ name: 'sketch.js', content: '' }] },
    ],
    explanation: [
        '카오스 게임은 다각형의 꼭짓점 중 하나를 무작위로 선택하고, 현재 위치에서 그 꼭짓점 방향으로 일정 비율(factor=0.5)만큼 이동하는 과정을 반복하여 프랙탈을 생성하는 방법입니다.',
        'Part1은 삼각형 기반의 시에르핀스키 삼각형입니다. 3개의 꼭짓점 중 랜덤으로 선택하고 lerp()로 중간점을 계산합니다. 각 꼭짓점 방향에 따라 다른 색상(마젠타, 시안, 노랑)을 부여합니다.',
        'Part2는 정오각형(n=5)으로 확장합니다. fromAngle()으로 균등 배치된 5개 꼭짓점을 생성하고, "직전에 선택한 꼭짓점은 다시 선택하지 않는다"는 제약 조건을 추가하여 다른 패턴의 프랙탈을 만듭니다.',
    ],
})
