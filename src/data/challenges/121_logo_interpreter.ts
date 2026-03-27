import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '121_logo_interpreter',
    number: 121,
    title: 'Logo Interpreter',
    categoryId: 'creative-coding',
    description: 'Logo 프로그래밍 언어의 인터프리터를 구현하여 터틀 그래픽스로 도형을 그립니다.',
    files: ['turtle.js', 'command.js', 'parser.js', 'sketch.js'],
    libraries: [],
    bodyHtml: `<h3>Logo Interpreter</h3>
<p>Put your Logo command.</p>
<textarea id="code" cols="40" rows="5">repeat 36 [lt 10 pu fd 1 pd repeat 120 [fd 2 rt 3]]</textarea>
<select id="preset">
    <option value="fd 60 rt 120 fd 60 rt 120 fd 60 rt 120">triangle</option>
    <option selected value="repeat 36 [lt 10 pu fd 1 pd repeat 120 [fd 2 rt 3]]">phyllotaxis</option>
    <option value="repeat 4 [fd 60 rt 90] ">square</option>
    <option value="repeat 2 [fd 60 rt 90 fd 120 rt 90]">floor</option>
    <option value="repeat 2 [fd 60 rt 90 fd 120 rt 90] fd 60 repeat 2 [fd 60 rt 90 fd 120 rt 90] pu fd 20 rt 90 fd 20 lt 90 pd repeat 4 [fd 20 rt 90] pu rt 90 fd 60 lt 90 pd repeat 4 [fd 20 rt 90]">house</option>
</select>
<div id="canvasDiv"></div>`,
    references: [
        { title: 'Coding Challenge #121: Logo Interpreter', url: 'https://thecodingtrain.com/challenges/121-logo-interpreter' },
        { title: 'Wikipedia - Logo (programming language)', url: 'https://en.wikipedia.org/wiki/Logo_(programming_language)' },
        { title: 'Logo Tutorial - Brown University', url: 'http://cs.brown.edu/courses/bridge/1997/Resources/LogoTutorial.html' },
        { title: 'Wikipedia - Turtle graphics', url: 'https://en.wikipedia.org/wiki/Turtle_graphics' },
    ],
    tags: ['logo', 'turtle', 'interpreter', 'parser'],
    difficulty: 'advanced',
    explanation: [
        'Logo는 1967년 시모어 페이퍼트(Seymour Papert), 월리 퍼지그(Wally Feurzeig), 신시아 솔로몬(Cynthia Solomon)이 개발한 교육용 프로그래밍 언어입니다. MIT AI Lab에서 탄생한 Logo는 구성주의(Constructionism) 교육 철학에 기반하며, 어린이들이 프로그래밍을 통해 수학적 사고를 발전시키도록 설계되었습니다.',
        '터틀 그래픽스(Turtle Graphics)는 Logo의 가장 유명한 기능으로, 화면 위의 가상 거북이에게 이동(fd/bd)과 회전(rt/lt) 명령을 내려 그림을 그립니다. 이 개념은 Python의 turtle 모듈, Scratch, 그리고 다양한 프로그래밍 교육 도구에 계승되었습니다. 펜 올리기(pu)/내리기(pd)로 그리기를 제어합니다.',
        'Parser 클래스가 텍스트를 토큰(Token)으로 분리하고 Command 객체 배열로 변환합니다. 이것은 프로그래밍 언어 구현의 기본 과정인 어휘 분석(Lexical Analysis)과 구문 분석(Parsing)을 간략화한 것입니다. repeat 명령의 대괄호 내부를 재귀적으로 파싱하여 중첩된 반복을 지원합니다.',
        'Turtle 클래스는 translate()과 rotate()로 좌표계를 변환하는 상대 좌표 시스템을 사용합니다. 절대 좌표 대신 거북이의 현재 위치와 방향을 기준으로 이동하므로, 복잡한 도형도 간단한 반복 명령으로 그릴 수 있습니다. 이는 로봇 공학의 경로 계획과도 유사한 개념입니다.',
        '에디터에 코드를 입력하면 goTurtle()이 호출되어 파싱 후 execute()로 명령을 실행합니다. 프리셋에는 삼각형, 사각형, 집, 필로탁시스(Phyllotaxis) 패턴 등이 포함되어 있으며, repeat 36 [lt 10 pu fd 1 pd repeat 120 [fd 2 rt 3]] 같은 중첩 반복으로 복잡한 나선 패턴을 생성합니다.',
        'Logo는 LISP에서 영감을 받은 함수형 프로그래밍 요소도 가지고 있었으며, 인공지능 연구와 교육 혁신에 큰 영향을 미쳤습니다. 시모어 페이퍼트의 저서 "Mindstorms: Children, Computers, and Powerful Ideas"(1980)는 컴퓨터 교육의 고전으로, Logo를 통한 구성주의적 학습의 비전을 제시했습니다.',
    ],
})
