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
    ],
    tags: ['2048', 'puzzle', 'grid', 'merge'],
    difficulty: 'intermediate',
    explanation: [
        'operate() 함수는 slide(밀기) -> combine(합치기) -> slide(다시 밀기)의 3단계로 한 행을 처리합니다. reduceRight()로 파이프라인처럼 연결하여 함수형 패턴으로 구현합니다.',
        '방향키에 따라 그리드를 변환합니다. 아래 방향이 기본이며, 위쪽은 flipGrid, 오른쪽은 transposeGrid, 왼쪽은 transpose+flip을 적용합니다. operate() 후 역변환하여 모든 방향을 단일 로직으로 처리합니다.',
        'config.js에 각 숫자별 색상(colorsSizes)을 정의합니다. grid.js에는 blankGrid, addNumber, flipGrid, transposeGrid 등 배열 조작 유틸리티가, game.js에는 isGameOver, isGameWon 판정 로직이 있습니다.',
        '새로 합쳐진 타일은 grid_new로 표시하여 보라색 테두리로 강조합니다. noLoop()과 keyPressed()의 redraw()로 이벤트 기반 렌더링을 사용합니다.',
    ],
})
