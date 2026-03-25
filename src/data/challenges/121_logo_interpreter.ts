import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '121_logo_interpreter',
    number: 121,
    title: 'Logo Interpreter',
    categoryId: 'creative-coding',
    description: 'Logo 프로그래밍 언어의 인터프리터를 구현하여 터틀 그래픽스로 도형을 그립니다.',
    files: ['turtle.js', 'command.js', 'parser.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #121: Logo Interpreter', url: 'https://thecodingtrain.com/challenges/121-logo-interpreter' },
    ],
    tags: ['logo', 'turtle', 'interpreter', 'parser'],
    difficulty: 'advanced',
    notice: '이 챌린지는 HTML 입력 폼(textarea, select)이 필요합니다. p5 러너에서는 일부 UI가 동작하지 않을 수 있습니다.',
    explanation: [
        'Logo는 1967년에 만들어진 교육용 프로그래밍 언어로, 터틀(거북이)을 이동시켜 그림을 그리는 것이 특징입니다. 이 챌린지에서는 Logo의 핵심 명령어(fd, bd, rt, lt, pu, pd, repeat)를 해석하는 인터프리터를 구현합니다.',
        'Parser 클래스가 텍스트를 토큰으로 분리하고 Command 객체 배열로 변환합니다. 이동(fd/bd), 회전(rt/lt), 펜 제어(pu/pd), 반복(repeat) 명령을 정규식으로 분류하며, repeat는 대괄호 내부를 재귀적으로 파싱합니다.',
        'Turtle 클래스는 translate()과 rotate()로 좌표계를 변환하며 이동합니다. pen 상태에 따라 line()으로 경로를 그리고, forward()에서 translate()로 위치를 업데이트합니다.',
        '에디터에 코드를 입력하면 goTurtle()이 호출되어 파싱 후 execute()로 명령을 실행합니다. 프리셋 선택으로 다양한 패턴(별, 나선 등)을 즉시 확인할 수 있습니다.',
    ],
})
