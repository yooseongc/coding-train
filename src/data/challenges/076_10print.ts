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
        { title: '10 PRINT Book', url: 'https://10print.org/' },
        { title: 'Wikipedia: PETSCII', url: 'https://www.c64-wiki.com/wiki/PETSCII' },
        { title: 'Wikipedia: Commodore 64', url: 'https://en.wikipedia.org/wiki/Commodore_64' },
    ],
    tags: ['10print', 'maze', 'random', 'pattern'],
    difficulty: 'beginner',
    explanation: [
        '10 PRINT는 컴퓨터 예술사에서 가장 유명한 한 줄 프로그램 중 하나입니다. "10 PRINT CHR$(205.5+RND(1)); : GOTO 10"이라는 Commodore 64 BASIC 코드는 2012년에 같은 이름의 학술서적으로 출판될 만큼 문화적 중요성을 인정받았습니다. 이 프로그램은 소프트웨어 예술, 코드 미학, 창발(emergence)의 상징으로 여겨집니다.',
        'Commodore 64는 1982년 출시된 가정용 컴퓨터로, PETSCII라는 고유 문자 집합을 사용했습니다. CHR$(205)는 대각선 "/"을, CHR$(206)는 대각선 "\\"을 나타냅니다. RND(1)이 0.5 이상이면 205.5+RND(1)이 206으로 절삭되어 "\\", 미만이면 205로 절삭되어 "/"가 선택됩니다.',
        'p5.js 구현에서는 random(1) < 0.5 조건으로 두 방향의 대각선 중 하나를 line()으로 그립니다. x좌표를 spacing(20px)씩 증가시키고 화면 끝에 도달하면 다음 줄로 넘어갑니다. y가 height 이상이 되면 noLoop()으로 그리기를 멈춥니다.',
        '단순한 50% 확률의 이진 선택이지만, 대각선들이 연결되면서 미로처럼 보이는 복잡한 패턴이 자연스럽게 형성됩니다. 이것이 창발(emergence)의 대표적 예시입니다. 간단한 규칙의 반복이 예상치 못한 복잡한 구조를 만들어내는 현상으로, 콘웨이의 Game of Life, 개미 군집 행동 등과 같은 원리입니다.',
        '확률을 0.5가 아닌 다른 값으로 변경하면 패턴의 특성이 크게 달라집니다. 편향된 확률은 한 방향이 우세한 줄무늬 패턴을 만들고, 정확히 0.5일 때 가장 미로다운 패턴이 생깁니다. 이 원리는 퍼콜레이션 이론(percolation theory)과 관련이 있으며, 물리학의 상전이 연구에서도 중요한 개념입니다.',
    ],
})
