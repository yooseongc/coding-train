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
        { title: 'Wikipedia - Recursion (computer science)', url: 'https://en.wikipedia.org/wiki/Recursion_(computer_science)' },
        { title: 'Wikipedia - Fractal', url: 'https://en.wikipedia.org/wiki/Fractal' },
        { title: 'Wikipedia - Apollonian gasket', url: 'https://en.wikipedia.org/wiki/Apollonian_gasket' },
    ],
    tags: ['recursion', 'circles', 'fractal', 'divide'],
    difficulty: 'beginner',
    explanation: [
        '재귀(Recursion)는 함수가 자기 자신을 호출하는 프로그래밍 기법으로, 수학적 귀납법과 밀접한 관련이 있습니다. 분할 정복(Divide and Conquer) 전략의 핵심이며, 트리 순회, 정렬 알고리즘(퀵소트, 머지소트), 프랙탈 생성 등 다양한 분야에서 활용됩니다. 재귀적 사고는 복잡한 문제를 더 작은 동일 구조의 하위 문제로 분해하는 데 핵심적인 역할을 합니다.',
        'drawCircle(x, y, d) 함수는 현재 위치에 지름 d의 원을 그린 뒤, d > 2인 경우 좌우로 d/2만큼 이동한 위치에 절반 크기의 원을 재귀적으로 그립니다. 이 과정에서 생성되는 패턴은 아폴로니우스 개스킷(Apollonian Gasket)과 유사한 자기 유사(self-similar) 프랙탈 구조를 보여줍니다.',
        '종료 조건(Base Case)은 d <= 2로, 모든 재귀 함수에 필수적입니다. 종료 조건이 없으면 무한 호출로 스택 오버플로(Stack Overflow)가 발생합니다. 각 호출은 콜 스택(Call Stack)에 쌓이며, 이 예제에서는 이진 트리 형태로 분기하여 약 2^n개의 호출이 발생합니다.',
        '프랙탈(Fractal)은 부분이 전체와 비슷한 형태를 가지는 자기 유사성(Self-Similarity)이 특징인 기하학적 구조입니다. 브누아 만델브로(Benoit Mandelbrot)가 1975년 이 개념을 정립하였으며, 해안선, 나뭇가지, 혈관 구조 등 자연에서 흔히 발견됩니다.',
        'noLoop()으로 한 번만 그리며, 중앙(300, 300)에서 시작하여 지름 600의 원부터 시작합니다. noFill()과 stroke(255)로 검은 배경 위에 흰색 윤곽선만 표시하여 프랙탈 구조를 명확히 보여줍니다.',
        '이 패턴을 확장하면 상하좌우 4방향으로 재귀하거나, 분기 수와 크기 비율을 변경하여 다양한 프랙탈 트리, 시에르핀스키 삼각형(Sierpinski Triangle), 코흐 곡선(Koch Curve) 등을 생성할 수 있습니다.',
    ],
})
