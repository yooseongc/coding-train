import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '094_2048',
    number: 94,
    title: '2048',
    categoryId: 'games',
    description: '인기 퍼즐 게임 2048을 p5.js로 구현합니다. 4x4 그리드에서 같은 숫자 타일을 합치며 2048을 만드는 것이 목표입니다.',
    files: ['config.js', 'game.js', 'grid.js', 'sketch.js'],
    libraries: [],
    bodyHtml: '<p style="font-size:32pt" id="score"></p>',
    references: [
        { title: 'Coding Challenge #94: 2048', url: 'https://thecodingtrain.com/challenges/94-2048' },
        { title: '2048 (video game) - Wikipedia', url: 'https://en.wikipedia.org/wiki/2048_(video_game)' },
        { title: 'Play 2048 online', url: 'https://play2048.co/' },
        { title: 'p5.js Reference - noLoop() / redraw()', url: 'https://p5js.org/reference/p5/noLoop/' },
    ],
    tags: ['2048', 'puzzle', 'grid', 'merge'],
    difficulty: 'intermediate',
    explanation: [
        '2048은 2014년 이탈리아 개발자 Gabriele Cirulli가 주말 프로젝트로 만든 슬라이딩 타일 퍼즐 게임입니다. Veewo Studios의 1024와 Threes!에서 영감을 받았으며, 오픈소스로 공개되어 순식간에 전 세계적 인기를 얻었습니다. 4x4 그리드에서 같은 숫자 타일을 합쳐 2048 타일을 만드는 것이 목표입니다.',
        'operate() 함수는 slide(밀기) -> combine(합치기) -> slide(다시 밀기)의 3단계로 한 행을 처리합니다. 이 함수 합성(Function Composition) 패턴은 각 단계를 독립적인 순수 함수(Pure Function)로 구현하여 테스트와 디버깅을 용이하게 합니다.',
        '방향키에 따라 그리드를 변환합니다. 아래 방향이 기본이며, 위쪽은 flipGrid, 오른쪽은 transposeGrid, 왼쪽은 transpose+flip을 적용합니다. 이 기법은 행렬 변환(Matrix Transformation)을 활용하여 네 방향의 로직을 단일 함수로 통합하는 우아한 설계입니다. 전치(transpose)와 뒤집기(flip)의 조합으로 모든 회전을 표현할 수 있습니다.',
        'config.js에 각 숫자별 색상(colorsSizes)을 정의합니다. grid.js에는 blankGrid, addNumber, flipGrid, transposeGrid 등 배열 조작 유틸리티가, game.js에는 isGameOver, isGameWon 판정 로직이 있습니다. 이러한 관심사 분리(Separation of Concerns)는 유지보수성을 높입니다.',
        '새로 합쳐진 타일은 grid_new로 표시하여 보라색 테두리로 강조합니다. noLoop()과 keyPressed()의 redraw()로 이벤트 기반 렌더링을 사용하여 불필요한 프레임 갱신을 방지합니다. 이는 게임 상태가 사용자 입력에 의해서만 변경되는 턴 기반 게임에 적합한 패턴입니다.',
        '2048의 최적 전략 연구는 AI 분야에서 활발히 이루어지고 있습니다. Expectimax 알고리즘이나 시간차 학습(Temporal Difference Learning)을 적용한 AI는 99% 이상의 확률로 2048 타일에 도달하며, 65536 타일까지도 달성합니다. 게임의 상태 공간은 약 2^48로 추정되어 완전 탐색은 불가능하지만, 휴리스틱 평가 함수를 통한 탐색이 효과적입니다.',
    ],
})
