import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '016_L_system_fractal_trees',
    number: 16,
    title: 'L-System Fractal Trees',
    categoryId: 'fractals',
    description: 'L-System 규칙으로 프랙탈 트리를 생성합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #16: L-System Fractal Trees', url: 'https://thecodingtrain.com/challenges/16-l-system-fractal-trees' },
    ],
    tags: ['L-system', 'fractal', 'tree', 'grammar'],
    difficulty: 'intermediate',
    explanation: [
        'L-System(Lindenmayer System)은 문자열 치환 규칙으로 복잡한 패턴을 생성하는 형식 문법입니다. axiom "F"에서 시작하여 규칙(F → FF+[+F-F-F]-[-F+F+F])을 반복 적용합니다.',
        'turtle() 함수가 생성된 문자열을 해석합니다. F는 전진(line+translate), +/-는 좌우 회전(rotate), [/]는 상태 저장/복원(push/pop)으로 변환됩니다. 이것이 터틀 그래픽스(turtle graphics)입니다.',
        'generate() 버튼을 클릭할 때마다 문자열이 지수적으로 길어지며, len을 절반으로 줄여 전체 크기를 유지합니다. 각 세대마다 더 세밀한 가지 구조가 나타납니다.',
        'radians(25)의 분기 각도는 Barnsley fern 패턴에서 사용하는 값으로, 자연스러운 식물 형태를 만듭니다.',
    ],
})
