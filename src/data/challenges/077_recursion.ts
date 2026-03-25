import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '077_recursion',
    number: 77,
    title: 'Recursion',
    categoryId: 'math-algorithms',
    description: '재귀 함수로 원 안에 원을 그리는 프랙탈 패턴을 생성합니다. drawCircle()이 자기 자신을 호출하며 점점 작은 원을 배치합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #77: Recursion', url: 'https://thecodingtrain.com/challenges/77-recursion' },
    ],
    tags: ['recursion', 'circles', 'fractal', 'divide'],
    difficulty: 'beginner',
    explanation: [
        'drawCircle(x, y, d) 함수는 현재 위치에 지름 d의 원을 그린 뒤, d > 2인 경우 좌우로 d/2만큼 이동한 위치에 절반 크기의 원을 재귀적으로 그립니다.',
        '종료 조건은 d <= 2입니다. 지름이 2 이하가 되면 더 이상 재귀하지 않습니다. 이는 모든 재귀 함수에 필수적인 base case로, 무한 루프를 방지합니다.',
        'noLoop()으로 한 번만 그리며, 중앙(300, 300)에서 시작하여 지름 600의 원부터 시작합니다. noFill()과 stroke(255)로 검은 배경 위에 흰색 윤곽선만 표시하여 프랙탈 구조를 명확히 보여줍니다.',
    ],
})
