import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '076_10print',
    number: 76,
    title: '10PRINT',
    categoryId: 'creative-coding',
    description: 'Commodore 64의 한 줄 BASIC 프로그램 "10 PRINT CHR$(205.5+RND(1));:GOTO 10"을 p5.js로 재현하여 미로 패턴을 생성합니다.',
    files: ['sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #76: 10PRINT', url: 'https://thecodingtrain.com/challenges/76-10print' },
    ],
    tags: ['10print', 'maze', 'random', 'pattern'],
    difficulty: 'beginner',
    explanation: [
        '원본은 C64 BASIC의 CHR$(205)="/"와 CHR$(206)="\\"를 RND(1)로 랜덤 선택하여 PETSCII 문자로 미로를 그리는 한 줄 프로그램입니다. p5.js에서는 line()으로 대각선을 그려 재현합니다.',
        'draw()에서 random(1) < 0.5이면 "\\", 아니면 "/"를 spacing(20px) 크기로 그립니다. x좌표를 spacing씩 증가시키고 화면 끝에 도달하면 다음 줄로 넘어갑니다.',
        'y가 height 이상이 되면 noLoop()으로 그리기를 멈춥니다. 단순한 규칙이지만 50% 확률의 대각선 조합이 미로처럼 보이는 창발적 패턴을 만들어냅니다.',
    ],
})
